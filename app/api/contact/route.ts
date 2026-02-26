import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

const PHONE_REGEX = /^[6-9]\d{9}$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const VALID_SUBJECTS = ['Grievance', 'Meeting Request', 'Feedback', 'Media Enquiry', 'Other', '']

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, subject, message, constituency } = await req.json()

    // Required field validation
    const trimmedName = name?.trim()
    const trimmedPhone = phone?.trim()
    const trimmedEmail = email?.trim()

    if (!trimmedName || trimmedName.length < 2) {
      return NextResponse.json({ error: 'Please enter a valid name.' }, { status: 400 })
    }
    if (!trimmedPhone && !trimmedEmail) {
      return NextResponse.json({ error: 'Please provide at least a phone number or email address.' }, { status: 400 })
    }
    if (trimmedPhone && !PHONE_REGEX.test(trimmedPhone)) {
      return NextResponse.json({ error: 'Please enter a valid 10-digit Indian mobile number.' }, { status: 400 })
    }
    if (trimmedEmail && !EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    // Optional field validation
    if (subject && !VALID_SUBJECTS.includes(subject)) {
      return NextResponse.json({ error: 'Invalid subject selected.' }, { status: 400 })
    }

    const { GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID } = process.env
    if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: 'Sheet1!A:G',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          trimmedName,
          trimmedPhone,
          trimmedEmail,
          subject?.trim() || '',
          constituency?.trim() || '',
          message?.trim() || '',
          new Date().toISOString(),
        ]],
      },
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to submit. Please try again.' }, { status: 500 })
  }
}
