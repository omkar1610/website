'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const SUBJECT_VALUES = ['Grievance', 'Meeting Request', 'Feedback', 'Media Enquiry', 'Other']

export default function ContactForm() {
  const { t } = useLanguage()
  const c = t.contact

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [subjectIndex, setSubjectIndex] = useState<number | -1>(-1)
  const [message, setMessage] = useState('')
  const [constituency, setConstituency] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setFeedback('')

    const subject = subjectIndex >= 0 ? SUBJECT_VALUES[subjectIndex] : ''

    if (!phone.trim() && !email.trim()) {
      setStatus('error')
      setFeedback(c.phoneOrEmailRequired)
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, subject, message, constituency }),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setFeedback(c.successMsg)
        setName('')
        setPhone('')
        setEmail('')
        setSubjectIndex(-1)
        setMessage('')
        setConstituency('')
      } else {
        setStatus('error')
        setFeedback(data.error || c.errorMsg)
      }
    } catch {
      setStatus('error')
      setFeedback(c.errorMsg)
    }
  }

  return (
    <section id="contact-form" className="bg-white py-16">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl font-bold text-navy mb-2">{c.sectionTitle}</h2>
          <p className="text-gray-500 text-sm">{c.sectionSubtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
          {/* Name */}
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
              {c.nameLbl} <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder={c.namePlaceholder}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">
              {c.phoneLbl} <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={c.phonePlaceholder}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
              {c.emailLbl} <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={c.emailPlaceholder}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-1">
              {c.subjectLbl}
            </label>
            <select
              id="contact-subject"
              value={subjectIndex}
              onChange={(e) => setSubjectIndex(Number(e.target.value))}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition bg-white"
            >
              <option value={-1}>{c.subjectPlaceholder}</option>
              {c.subjects.map((label, i) => (
                <option key={SUBJECT_VALUES[i]} value={i}>{label}</option>
              ))}
            </select>
          </div>

          {/* Constituency */}
          <div>
            <label htmlFor="contact-constituency" className="block text-sm font-medium text-gray-700 mb-1">
              {c.constituencyLbl}
            </label>
            <input
              id="contact-constituency"
              type="text"
              value={constituency}
              onChange={(e) => setConstituency(e.target.value)}
              placeholder={c.constituencyPlaceholder}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
              {c.messageLbl}
            </label>
            <textarea
              id="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder={c.messagePlaceholder}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition resize-none"
            />
          </div>

          {feedback && (
            <p className={`text-sm text-center ${status === 'success' ? 'text-green-600' : 'text-red-500'}`}>
              {feedback}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-gold hover:bg-gold-dark disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
          >
            {status === 'loading' ? c.submittingBtn : c.submitBtn}
          </button>
        </form>
      </div>
    </section>
  )
}
