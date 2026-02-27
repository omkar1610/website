export type Lang = 'en' | 'or'

// All supported language codes at runtime (mirrors the Lang type)
const LANGS: Lang[] = ['en', 'or']

// ─── CO-LOCATED CONTENT ───────────────────────────────────────────────────────
// Every translatable string lives here as { en: '...', or: '...' }.
// Non-translatable values (URLs, numbers, source names) are plain strings/numbers.
// Adding a new language: add its code to Lang + LANGS, then fill in every leaf.

const content = {
  nav: {
    name:  { 
      en: 'Suryabanshi Suraj',
      or: 'ସୂର୍ଯ୍ୟବଂଶୀ ସୂରଜ୍' 
    },
    title: { 
      en: 'MLA, Dhamnagar · Minister, Govt. of Odisha',
      or: 'ବିଧାୟକ, ଧାମନଗର · ମନ୍ତ୍ରୀ, ଓଡ଼ିଶା ସରକାର' 
    },
    links: {
      about:       { en: 'About', or: 'ବିଷୟରେ' },
      development: { en: 'Development', or: 'ଉନ୍ନୟନ' },
      news:        { en: 'News & Media', or: 'ଖବର ଓ ମାଧ୍ୟମ' },
      gallery:     { en: 'Gallery', or: 'ଗ୍ୟାଲେରୀ' },
      contact:     { en: 'Contact', or: 'ଯୋଗାଯୋଗ' },
    },
  },

  hero: {
    badge:           { en: 'Official Website', or: 'ଅଧିକୃତ ୱେବସାଇଟ' },
    nameFirst:       { en: 'Suryabanshi', or: 'ସୂର୍ଯ୍ୟବଂଶୀ' },
    nameLast:        { en: 'Suraj', or: 'ସୂରଜ୍' },
    role:            { en: 'MLA, Dhamnagar Constituency (Bhadrak)', or: 'ବିଧାୟକ, ଧାମନଗର ନିର୍ବାଚନ ମଣ୍ଡଳୀ (ଭଦ୍ରକ)' },
    ministry:        {
      en: 'Minister of State (Independent Charge) - Higher Education, Sports & Youth Services, Odia Language, Literature & Culture',
      or: 'ସ୍ୱତନ୍ତ୍ର ଦାୟିତ୍ୱପ୍ରାପ୍ତ ରାଜ୍ୟମନ୍ତ୍ରୀ - ଉଚ୍ଚ ଶିକ୍ଷା, କ୍ରୀଡ଼ା ଓ ଯୁବ ସେବା, ଓଡ଼ିଆ ଭାଷା ସାହିତ୍ୟ ଓ ସଂସ୍କୃତି',
    },
    quote: {
      en: 'Empowering youth, preserving heritage, and building a future-ready Odisha through transparent and accountable governance.',
      or: 'ଯୁବ ସଶକ୍ତିକରଣ, ଐତିହ୍ୟ ସୁରକ୍ଷା ଓ ଆଧୁନିକ ଓଡ଼ିଶା ଗଢ଼ିବା ପାଇଁ ପାରଦର୍ଶୀ ଓ ଦାୟିତ୍ୱଶୀଳ ଶାସନ ପ୍ରତି ପ୍ରତିବଦ୍ଧ।',
    },
    // quotes: [
    //   {
    //     en: 'Empowering youth. Preserving heritage. Building Odisha.',
    //     or: 'ଯୁବ ସଶକ୍ତିକରଣ। ଐତିହ୍ୟ ସୁରକ୍ଷା। ଓଡ଼ିଶା ଗଢ଼ା।',
    //   },
    //   {
    //     en: 'Education for a developed, self-reliant Odisha.',
    //     or: 'ଉନ୍ନତ ଓ ସ୍ୱାବଳମ୍ବୀ ଓଡ଼ିଶା ପାଇଁ ଶିକ୍ଷା।',
    //   },
    //   {
    //     en: 'Odia identity is our pride.',
    //     or: 'ଓଡ଼ିଆ ଅସ୍ମିତା ଆମର ଗୌରବ।',
    //   },
    //   {
    //     en: 'From playground to podium—Odisha leads.',
    //     or: 'ଖେଳମାଠରୁ ପୁରସ୍କାର ମଞ୍ଚ—ଓଡ଼ିଶା ଅଗ୍ରଣୀ।',
    //   },
    //   {
    //     en: 'Transparency defines our governance.',
    //     or: 'ପାରଦର୍ଶିତା ଆମ ଶାସନର ପରିଚୟ।',
    //   },
    //   {
    //     en: 'Tradition and innovation build a New Odisha.',
    //     or: 'ପାରମ୍ପରିକତା ଓ ନବୋନ୍ମେଷରେ ନୂତନ ଓଡ଼ିଶା।',
    //   },
    // ],

    quotes: [
      {
        en: 'Empowering youth, preserving heritage, and building a future-ready Odisha through transparent and accountable governance.',
        or: 'ଯୁବ ସଶକ୍ତିକରଣ, ଐତିହ୍ୟ ସୁରକ୍ଷା ଓ ଆଧୁନିକ ଓଡ଼ିଶା ଗଢ଼ିବା ପାଇଁ ପାରଦର୍ଶୀ ଓ ଦାୟିତ୍ୱଶୀଳ ଶାସନ ପ୍ରତି ପ୍ରତିବଦ୍ଧତା।',
      },
      {
        en: 'Education is the cornerstone of a developed Odisha. We are committed to building a knowledge-driven state where academic excellence meets employability, paving the way for a "Viksit Odisha 2036" and a self-reliant India.',
        or: 'ଶିକ୍ଷା ହେଉଛି ଉନ୍ନତ ଓଡ଼ିଶାର ଭିତ୍ତିସ୍ଥମ୍ଭ। ଆମେ ଜ୍ଞାନମୂଳକ ରାଜ୍ୟ ଗଢ଼ିବାକୁ ପ୍ରତିବଦ୍ଧ, ଯେଉଁଠାରେ ଶିକ୍ଷାର କୃତିତ୍ୱ ଓ ରୋଜଗାର ସୁଯୋଗ ସହିତ ମିଶି "ବିକସିତ ଓଡ଼ିଶା 2036" ଓ ସ୍ୱାବଳମ୍ବୀ ଭାରତ ପାଇଁ ପଥ ପ୍ରସ୍ତୁତ କରେ।',
      },

      {
        en: 'Odia Asmita is not just our heritage; it is our identity and our pride. Our mission is to take the glory of the Odia language and culture from the grassroots to the global stage, ensuring our traditions thrive alongside modern progress.',
        or: 'ଓଡ଼ିଆ ଅସ୍ମିତା କେବଳ ଆମର ଐତିହ୍ୟ ନୁହେଁ; ଏହା ଆମର ପରିଚୟ ଓ ଗୌରବ। ଆମର ଲକ୍ଷ୍ୟ ହେଉଛି ଓଡ଼ିଆ ଭାଷା ଓ ସଂସ୍କୃତିର ଗୌରବକୁ ମୂଳସ୍ତରରୁ ବିଶ୍ୱମଞ୍ଚ ପର୍ଯ୍ୟନ୍ତ ପହଞ୍ଚାଇବା, ଯାହାଦ୍ୱାରା ଆମ ପାରମ୍ପରିକତା ଆଧୁନିକ ଉନ୍ନତି ସହ ସମୃଦ୍ଧି ପାଉ।',
      },

      {
        en: 'From the playground to the podium, we are channeling the boundless energy of our youth. By fostering a culture of sportsmanship and excellence, we are establishing Odisha as the true sports capital of India.',
        or: 'ଖେଳ ପଡିଆରୁ ପୁରସ୍କାର ମଞ୍ଚ ପର୍ଯ୍ୟନ୍ତ, ଆମେ ଯୁବଶକ୍ତିର ଅସୀମ ଉର୍ଜାକୁ ସଠିକ ଦିଗରେ ପରିଚାଳିତ କରୁଛୁ। କ୍ରୀଡ଼ାସ୍ପୃହା ଓ କୃତିତ୍ୱର ସଂସ୍କୃତିକୁ ପ୍ରୋତ୍ସାହନ ଦେଇ, ଓଡ଼ିଶାକୁ ଭାରତର ସତ୍ୟ କ୍ରୀଡ଼ା ରାଜଧାନୀ ଭାବେ ସ୍ଥାପିତ କରୁଛୁ।',
      },

      {
        en: 'Transparency is the soul of good governance. We believe in a democracy defined by open debate, accountability, and a relentless dedication to serving the last person in the queue with dignity and respect.',
        or: 'ପାରଦର୍ଶିତା ହେଉଛି ସୁଶାସନର ଆତ୍ମା। ଖୋଲା ଆଲୋଚନା, ଦାୟିତ୍ୱବୋଧ ଓ ଶେଷ ଲୋକ ପର୍ଯ୍ୟନ୍ତ ମର୍ଯ୍ୟାଦା ସହିତ ସେବା ପ୍ରଦାନର ଅଟୁଟ ପ୍ରତିବଦ୍ଧତାରେ ଆମର ଗଣତନ୍ତ୍ର ଉପରେ ଆସ୍ଥା ରହିଛି।',
      },

      {
        en: 'Bridging tradition with innovation to build a New Odisha—where our youth lead with confidence, our culture stands tall with pride, and our governance serves as a model of trust and transformation.',
        or: 'ପାରମ୍ପରିକତା ଓ ନବୋନ୍ମେଷକୁ ସେତୁବନ୍ଧ କରି ନୂତନ ଓଡ଼ିଶା ଗଢ଼ାଯାଉଛି—ଯେଉଁଠାରେ ଯୁବମାନେ ଆତ୍ମବିଶ୍ୱାସରେ ନେତୃତ୍ୱ ଦିଅନ୍ତି, ସଂସ୍କୃତି ଗୌରବରେ ଉଦ୍ଭାସିତ ହୁଏ, ଓ ଶାସନ ବିଶ୍ୱାସ ଓ ପରିବର୍ତ୍ତନର ଆଦର୍ଶ ହୁଏ।',
      },

    ],
    ctaAbout:        { en: 'About Me', or: 'ମୋ ବିଷୟରେ' },
    ctaConstituency: { en: 'Constituency Work', or: 'ନିର୍ବାଚନ ମଣ୍ଡଳୀ କାର୍ଯ୍ୟ' },
  },

  about: {
    sectionTitle:    { 
      en: 'About',                                                                     
      or: 'ବିଷୟରେ' 
    },
    sectionSubtitle: { 
      en: "A young leader driven by purpose, progress, and pride in Odisha's heritage.", 
      or: 'ଯୁବ ନେତୃତ୍ୱ, ଦୃଢ଼ ମୂଲ୍ୟବୋଧ ଓ ଓଡ଼ିଆ ସଂସ୍କୃତି ପ୍ରତି ଗର୍ବ।' 
    },
    bioName:         { 
      en: 'Suryabanshi Suraj',                                                          
      or: 'ସୂର୍ଯ୍ୟବଂଶୀ ସୂରଜ୍' 
    },
    bioPara1: {
      en: 'Suryabanshi Suraj is a dedicated public servant and one of the youngest members of the Odisha Cabinet. Representing Dhamnagar Constituency in Bhadrak district, he combines grassroots political engagement with a modern, technology-driven approach to governance.',
      or: 'ସୂର୍ଯ୍ୟବଂଶୀ ସୂରଜ୍ ଧାମନଗର ନିର୍ବାଚନ ମଣ୍ଡଳୀର ବିଧାୟକ ଓ ଓଡ଼ିଶା ମନ୍ତ୍ରିମଣ୍ଡଳର ସବୁଠୁ ଯୁବ ସଦସ୍ୟମାନଙ୍କ ମଧ୍ୟରୁ ଗୋଟିଏ। ସେ ଘାସମୂଳ ସ୍ତରର ଲୋକସମ୍ପର୍କ ଓ ଆଧୁନିକ ପ୍ରଶାସନିକ ଦୃଷ୍ଟିକୋଣକୁ ଏକତ୍ର କରି ଶାସନକୁ ନୂତନ ଦିଗ ଦେଉଛନ୍ତି।',
    },
    bioPara2: {
      en: 'With academic qualifications in Engineering (B.Tech) and Law (LL.B), he bridges innovation and legislation. His governance philosophy focuses on transparency, youth empowerment, institutional reform, and cultural preservation.',
      or: 'ଇଞ୍ଜିନିୟରିଂ (ବି.ଟେକ୍) ଓ ଆଇନ (ଏଲ୍‌.ଏଲ୍‌.ବି) ଶିକ୍ଷା ପ୍ରାପ୍ତ ସେ ପ୍ରଯୁକ୍ତି ଓ ନୀତି ନିର୍ମାଣକୁ ସମନ୍ୱୟ କରି ନିଷ୍ପତ୍ତି ନେବାରେ ବିଶ୍ୱାସ କରନ୍ତି। ତାଙ୍କ ଶାସନ ଦର୍ଶନ ପାରଦର୍ଶିତା, ଯୁବ ସଶକ୍ତିକରଣ ଓ ସମାବେଶୀ ଉନ୍ନୟନ ଉପରେ ଆଧାରିତ।',
    },
    bioPara3: {
      en: 'As Minister of State (Independent Charge) for Higher Education, Sports & Youth Services, and Odia Language, Literature & Culture, he is committed to transforming Odisha into a hub of educational excellence, athletic achievement, and linguistic pride.',
      or: 'ଉଚ୍ଚ ଶିକ୍ଷା, କ୍ରୀଡ଼ା ଓ ଯୁବ ସେବା ସହିତ ଓଡ଼ିଆ ଭାଷା ସାହିତ୍ୟ ଓ ସଂସ୍କୃତି ବିଭାଗର ସ୍ୱତନ୍ତ୍ର ଦାୟିତ୍ୱ ନେଇ ସେ ଓଡ଼ିଶାକୁ ଶିକ୍ଷା, କ୍ରୀଡ଼ା ଓ ସାଂସ୍କୃତିକ କ୍ଷେତ୍ରରେ ଜାତୀୟ ଓ ବିଶ୍ୱ ସ୍ତରରେ ପରିଚିତ କରିବା ପାଇଁ ପ୍ରୟାସରତ।',
    },
    badge1: { en: 'MLA, Dhamnagar',                  or: 'ବିଧାୟକ, ଧାମନଗର' },
    badge2: { en: 'Minister of State (Ind. Charge)',  or: 'ସ୍ୱତନ୍ତ୍ର ଦାୟିତ୍ୱପ୍ରାପ୍ତ ରାଜ୍ୟମନ୍ତ୍ରୀ' },
    badge3: { en: 'Government of Odisha',             or: 'ଓଡ଼ିଶା ସରକାର' },
    timelineTitle: { en: 'Political Journey', or: 'ରାଜନୈତିକ ଯାତ୍ରା' },
    timeline: [
      {
        year:        { en: '2022',              or: '2022' },
        title:       { en: 'By-Election Victory', or: 'ଉପନିର୍ବାଚନରେ ବିଜୟ' },
        description: {
          en: 'Elected as MLA from Dhamnagar in the 2022 by-election, carrying forward a legacy of public service and earning a strong mandate from the people.',
          or: '2022 ଉପନିର୍ବାଚନରେ ଧାମନଗରରୁ ବିଧାୟକ ଭାବେ ନିର୍ବାଚିତ ହୋଇ ଜନସେବାର ଏକ ନୂତନ ଅଧ୍ୟାୟ ଆରମ୍ଭ କଲେ।',
        },
      },
      {
        year:        { en: '2024 - Re-Election',         or: '2024 (ପୁନର୍ନିର୍ବାଚନ)' },
        title:       { en: 'Re-Elected with Strong Mandate', or: 'ଭାରୀ ଅଧିକ୍ୟତା ସହ ପୁନର୍ନିର୍ବାଚିତ' },
        description: {
          en: 'Re-elected with an overwhelming majority, reaffirming public trust in his leadership and development agenda.',
          or: '2024 ନିର୍ବାଚନରେ ଲୋକମାନଙ୍କର ବିଶ୍ୱାସ ପୁନର୍ବାର ଜିତି ବୃହତ୍ ଅଧିକ୍ୟତା ସହ ପୁନର୍ନିର୍ବାଚିତ।',
        },
      },
      {
        year:        { en: '2024 - Cabinet Induction',  or: '2024 (ମନ୍ତ୍ରିମଣ୍ଡଳରେ ଅନ୍ତର୍ଭୁକ୍ତ)' },
        title:       { en: 'Inducted into Odisha Cabinet', or: 'ମନ୍ତ୍ରିମଣ୍ଡଳରେ ଅନ୍ତର୍ଭୁକ୍ତ' },
        description: {
          en: 'Entrusted by party leadership to serve in the Odisha Cabinet under Chief Minister Mohan Charan Majhi with independent charge of key youth-centric portfolios.',
          or: 'ମୁଖ୍ୟମନ୍ତ୍ରୀ ମୋହନ ଚରଣ ମାଝିଙ୍କ ନେତୃତ୍ୱରେ ଓଡ଼ିଶା ମନ୍ତ୍ରିମଣ୍ଡଳରେ ସ୍ୱତନ୍ତ୍ର ଦାୟିତ୍ୱ ସହ ଯୋଗଦାନ।',
        },
      },
      {
        year:        { en: 'Present',                         or: 'ବର୍ତ୍ତମାନ' },
        title:       { en: 'Youngest Voice in Governance',    or: 'ଯୁବ କଣ୍ଠସ୍ୱର' },
        description: {
          en: 'Currently serving as one of the youngest ministers in the state cabinet, focusing on education reform, sports infrastructure, and promotion of Odia culture.',
          or: 'ରାଜ୍ୟର ଯୁବ ମନ୍ତ୍ରୀ ଭାବେ ଶିକ୍ଷା ସଂଶୋଧନ, କ୍ରୀଡ଼ା ପ୍ରାଣାଳୀ ଓ ଓଡ଼ିଆ ସଂସ୍କୃତି ପ୍ରଚାରରେ କେନ୍ଦ୍ରିତ।',
        },
      },
    ],
    values: [
      {
        title: { en: 'Integrity',            or: 'ସଚ୍ଚରିତ୍ରତା' },
        desc:  { en: 'Transparent, accountable, and citizen-focused governance.', or: 'ପାରଦର୍ଶୀ ଓ ଦାୟିତ୍ୱଶୀଳ ଶାସନ ପ୍ରତି ପ୍ରତିବଦ୍ଧତା।' },
      },
      {
        title: { en: 'Youth Empowerment',    or: 'ଯୁବ ସଶକ୍ତିକରଣ' },
        desc:  { en: 'Investing in education, sports, and skills to shape the next generation.', or: 'ଶିକ୍ଷା, କ୍ରୀଡ଼ା ଓ କୌଶଳ ବିକାଶ ମାଧ୍ୟମରେ ନୂତନ ପିଢ଼ିକୁ ସଶକ୍ତ କରିବା।' },
      },
      {
        title: { en: 'Cultural Pride',       or: 'ସାଂସ୍କୃତିକ ଗର୍ବ' },
        desc:  { en: 'Promoting Odia language, literature, and heritage globally.', or: 'ଓଡ଼ିଆ ଭାଷା, ସାହିତ୍ୟ ଓ ପାରମ୍ପରିକ ଐତିହ୍ୟର ସୁରକ୍ଷା ଓ ପ୍ରଚାର।' },
      },
      {
        title: { en: 'Inclusive Development', or: 'ସମାବେଶୀ ଉନ୍ନୟନ' },
        desc:  { en: 'Ensuring development benefits reach every household.', or: 'ଉନ୍ନୟନର ଲାଭ ପ୍ରତ୍ୟେକ ଘରକୁ ପହଞ୍ଚାଇବା।' },
      },
    ],
  },

  constituency: {
    sectionTitle:    { en: 'Constituency & Development',         or: 'ନିର୍ବାଚନ ମଣ୍ଡଳୀ ଓ ଉନ୍ନୟନ' },
    sectionSubtitle: {
      en: 'Dhamnagar - advancing through infrastructure growth, social investment, and community-driven governance.',
      or: 'ଧାମନଗର - ଆଧାରଭୂତ ପ୍ରାଣାଳୀ, ସାମାଜିକ ନିବେଶ ଓ ଦାୟିତ୍ୱଶୀଳ ଶାସନ ମାଧ୍ୟମରେ ଅଗ୍ରଗତିଶୀଳ ଅଞ୍ଚଳ।',
    },
    stats: [
      { number: { en: '4+',       or: '୪+' },         label: { en: 'Years as MLA',        or: 'ବର୍ଷର ସେବା' } },
      { number: { en: '200+',     or: '୨୦୦+' },       label: { en: 'Development Works',   or: 'ଉନ୍ନୟନ କାର୍ଯ୍ୟ' } },
      { number: { en: '50+',      or: '୫୦+' },        label: { en: 'Villages Covered',    or: 'ଆବର୍ତ୍ତ ଗ୍ରାମ' } },
      { number: { en: '₹500Cr+',  or: '₹୫୦୦କୋଟି+' }, label: { en: 'Funds Mobilized',     or: 'ସଂଗୃହୀତ ଧନରାଶି' } },
    ],
    initiatives: [
      {
        tag:         { en: 'Higher Education',             or: 'ଉଚ୍ଚ ଶିକ୍ଷା' },
        title:       { en: 'University & College Modernization', or: 'ମହାବିଦ୍ୟାଳୟ ଓ ବିଶ୍ୱବିଦ୍ୟାଳୟ ଉନ୍ନତି' },
        description: { 
          en: 'Strengthening higher education institutions, promoting research culture, and enabling digital infrastructure.', 
          or: 'ଡିଜିଟାଲ ଢାଞ୍ଚା, ଗବେଷଣା ପ୍ରୋତ୍ସାହନ ଓ ଶିକ୍ଷା ଗୁଣବତ୍ତା ବୃଦ୍ଧି।' 
        },
      },
      {
        tag:         { en: 'Sports',                       or: 'କ୍ରୀଡ଼ା' },
        title:       { en: 'Youth & Sports Infrastructure', or: 'କ୍ରୀଡ଼ା ପ୍ରାଣାଳୀ ଓ ଯୁବ ସେବା' },
        description: { 
          en: 'Developing stadiums, training centres, and grassroots talent programs across the constituency.', 
          or: 'ଷ୍ଟେଡିୟମ୍, ପ୍ରଶିକ୍ଷଣ କେନ୍ଦ୍ର ଓ ଘାସମୂଳ ସ୍ତରର କ୍ରୀଡ଼ା ପ୍ରତିଭା ପ୍ରୋତ୍ସାହନ।' 
        },
      },
      {
        tag:         { en: 'Culture',                      or: 'ସଂସ୍କୃତି' },
        title:       { en: 'Odia Language & Heritage Promotion', or: 'ଓଡ଼ିଆ ଭାଷା ଓ ସାହିତ୍ୟ ପ୍ରଚାର' },
        description: { 
          en: 'Digitization of Odia literature, support to artists, and global cultural outreach initiatives.', 
          or: 'ଓଡ଼ିଆ ସାହିତ୍ୟର ଡିଜିଟାଲିକରଣ ଓ ସାଂସ୍କୃତିକ ପ୍ରଚାର।' 
        },
      },
      {
        tag:         { en: 'Infrastructure',               or: 'ପାଇପାଇ ସଂରଚନା' },
        title:       { en: 'Road & Connectivity',          or: 'ସଡ଼କ ଓ ସଂଯୋଗ' },
        description: { 
          en: 'Improvement of rural roads, bridges, and last-mile connectivity.', 
          or: 'ଗ୍ରାମୀଣ ସଡ଼କ ଓ ସେତୁ ଉନ୍ନତି।' 
        },
      },
      {
        tag:         { en: 'Healthcare',                   or: 'ସ୍ୱାସ୍ଥ୍ୟ' },
        title:       { en: 'Healthcare Access',            or: 'ସ୍ୱାସ୍ଥ୍ୟ ସେବା ଉନ୍ନତି' },
        description: { 
          en: 'Upgrading health centres and improving service accessibility in rural areas.', 
          or: 'ସ୍ୱାସ୍ଥ୍ୟ କେନ୍ଦ୍ର ଓ ଚିକିତ୍ସା ସୁବିଧା ବୃଦ୍ଧି।' 
        },
      },
      {
        tag:         { en: 'Agriculture',                  or: 'କୃଷି' },
        title:       { en: 'Farmer Support',               or: 'କୃଷକ ସହାୟତା' },
        description: { 
          en: 'Strengthening irrigation, agricultural schemes, and rural livelihoods.', 
          or: 'ସିଚାଇ, କୃଷି ଯୋଜନା ଓ ଗ୍ରାମୀଣ ଜୀବିକା ଶକ୍ତିକରଣ।' },
      },
    ],
    ctaTitle:  { 
      en: 'Dhamnagar: A Youth-Driven Growth Model',
      or: 'ଯୁବ ଶକ୍ତି ସହ ଉଦୟମାନ ଧାମନଗର' 
    },
    ctaDesc:   { 
      en: 'Through focused leadership and accountable governance, Dhamnagar is progressing as a model constituency in Odisha.',
      or: 'ଦୃଢ଼ ନେତୃତ୍ୱ ଓ ଦାୟିତ୍ୱଶୀଳ ଶାସନ ମାଧ୍ୟମରେ ଧାମନଗର ଏକ ଆଦର୍ଶ ନିର୍ବାଚନ ମଣ୍ଡଳୀ ଭାବେ ଗଢ଼ିଉଠୁଛି।' 
    },
    ctaButton: { 
      en: 'Connect with Our Office',
      or: 'ଆମ କାର୍ଯ୍ୟାଳୟ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ' 
    },
  },

  news: {
    sectionTitle:    { en: 'News & Media',         or: 'ଖବର ଓ ମାଧ୍ୟମ' },
    sectionSubtitle: { en: 'Stay updated with official announcements, public engagements, and media coverage.', or: 'ଅଧିକୃତ ଘୋଷଣା, ସାର୍ବଜନିକ କାର୍ଯ୍ୟକ୍ରମ ଓ ପ୍ରେସ୍ କଭରେଜ୍ ସମ୍ବନ୍ଧୀୟ ଅଦ୍ୟତନ।' },
    instagramDesc:   { en: 'Updates from constituency visits, youth events, and cultural programs.', or: 'ନିର୍ବାଚନ ମଣ୍ଡଳୀ ସନ୍ଦର୍ଶନ, ଯୁବ କାର୍ଯ୍ୟକ୍ରମ ଓ ସାଂସ୍କୃତିକ ଆୟୋଜନର ଛବି ଓ ଅଦ୍ୟତନ।' },
    instagramBtn:    { en: 'View on Instagram',    or: 'ଇନ୍ଷ୍ଟାଗ୍ରାମରେ ଦେଖନ୍ତୁ' },
    youtubeDesc:     { en: 'Speeches, inaugurations, and development updates from Dhamnagar.', or: 'ଭାଷଣ, ଉଦ୍ଘାଟନ ଓ ଉନ୍ନୟନ କାର୍ଯ୍ୟକ୍ରମର ଭିଡିଓ ଅଦ୍ୟତନ।' },
    youtubeBtn:      { en: 'Watch on YouTube',     or: 'ୟୁଟ୍ୟୁବ୍ ରେ ଦେଖନ୍ତୁ' },
    pressTitle:          { en: 'Press Coverage',       or: 'ପ୍ରେସ୍ କଭରେଜ୍' },
    pressHighlightTitle: { en: 'Press Highlights',    or: 'ଉଲ୍ଲେଖଯୋଗ୍ୟ ଖବର' },
    pressNote:           { en: '',                    or: '' },
    newsItems: [
      {
        source: 'Sambad English (Feb 2026)', // published 22 Feb 2026 :contentReference[oaicite:0]{index=0}
        tag:    { en: 'Higher Education', or: 'ଉଚ୍ଚ ଶିକ୍ଷା' },
        title:  { en: 'Every Odisha district to have university: Suryabanshi on varsity status demand', or: 'ପ୍ରତ୍ୟେକ ଓଡ଼ିଶା ଜିଲ୍ଲାରେ ବିଶ୍ଵବିଦ୍ୟାଳୟ: ସୂର୍ଯ୍ୟବଂଶୀଙ୍କ ଆବେଦନ ଉପରେ ପ୍ରତିକ୍ରିୟା' },
        link: 'https://sambadenglish.com/latest-news/every-odisha-district-to-have-university-suryabanshi-on-varsity-status-demand-for-shailabala-womens-college-11144822',
      },
      {
        source: 'New Indian Express (Feb 2026)', // published Feb 8 2026 :contentReference[oaicite:6]{index=6}
        tag:    { en: 'Literature & Science', or: 'ସାହିତ୍ୟ ଓ ବିଜ୍ଞାନ' },
        title:  { en: 'Madhuree’s book on space science for kids released by Minister Suryabanshi Suraj', or: 'ମଧୁରୀଙ୍କ ମହାକାଶ ବିଜ୍ଞାନ ପୁସ୍ତକ ମନ୍ତ୍ରୀ ସୂର୍ଯ୍ୟବଂଶୀ ସୂରଜଙ୍କ ଦ୍ୱାରା ଉନ୍ମୋଚିତ' },
        link: 'https://www.newindianexpress.com/states/odisha/2026/Feb/08/madhurees-book-on-space-science-for-kids-released',
      },
      {
        source: 'New Indian Express (Dec 2025)', // published Dec 20 2025 :contentReference[oaicite:5]{index=5}
        tag:    { en: 'Higher Education Policy', or: 'ଉଚ୍ଚ ଶିକ୍ଷା ନୀତି' },
        title:  { en: 'Odisha eyes two higher education institutions in each block by 2047: Minister Suraj Suryabanshi', or: '୨୦୪୭ ସୁଦ୍ଧା ପ୍ରତି ବ୍ଲକରେ ଦୁଇଟି ଉଚ୍ଚ ଶିକ୍ଷାନୁଷ୍ଠାନ ଲକ୍ଷ୍ୟ: ମନ୍ତ୍ରୀ ସୂର୍ଯ୍ୟବଂଶୀ' },
        link: 'https://www.newindianexpress.com/cities/bhubaneswar/2025/Dec/20/odisha-eyes-two-higher-education-institutions-in-each-block-minister-suraj-suryabanshi',
      },
      {
        source: 'Times of India (Jul 2025)', // published ~Jul 2025 :contentReference[oaicite:4]{index=4}
        tag:    { en: 'Student Welfare', or: 'ଛାତ୍ର ସୁରକ୍ଷା' },
        title:  { en: 'Student sets self ablaze over harassment; Odisha govt to bear medical expenses, minister assures action', or: 'ଅଭିଯୋଗ ହେତୁ ଛାତ୍ରୀ ଆତ୍ମଦାହ: ସରକାର ଚିକିତ୍ସା ଖର୍ଚ୍ଚ ଦେବ, ମନ୍ତ୍ରୀ ପକ୍ଷରୁ କଡ଼ କାର୍ଯ୍ୟ ଆଶ୍ୱସନ' },
        link: 'https://timesofindia.indiatimes.com/india/student-sets-self-ablaze-over-harassment-odisha-govt-to-bear-medical-expenses-state-minister-assures-strict-action/articleshow/122418096.cms',
      },
      {
        source: 'The Tribune (May 2025)', // published May 3 2025 :contentReference[oaicite:2]{index=2}
        tag:    { en: 'Sports', or: 'କ୍ରୀଡ଼ା' },
        title:  { en: 'Odisha committed to grassroots sports development, says Minister Suryabanshi Suraj', or: 'ଗ୍ରାସ୍‌ରୁଟ୍ କ୍ରୀଡ଼ା ବିକାଶ ପାଇଁ ଓଡ଼ିଶା ପ୍ରତିବଦ୍ଧ: ମନ୍ତ୍ରୀ ସୂର୍ଯ୍ୟବଂଶୀ ସୂରଜ୍' },
        link: 'https://www.tribuneindia.com/news/sports/odisha-committed-to-grassroots-sports-development-says-minister-suryabanshi-suraj/',
      },
      {
        source: 'MyCityLinks (Dec 2024)', // published Dec 16 2024 :contentReference[oaicite:1]{index=1}
        tag:    { en: 'Leadership & Vision', or: 'ନେତୃତ୍ୱ ଓ ଭିଜନ' },
        title:  { en: 'Redefining Odisha\'s Future: A Conversation with Minister Suryabanshi Suraj', or: 'ସୂର୍ଯ୍ୟବଂଶୀ ସୂରଜ୍ ସହ ଓଡ଼ିଶାର ଭବିଷ୍ୟତ: ଏକ ଆଲୋଚନା' },
        link: 'https://www.mycitylinks.in/redefining-odishas-future-a-conversation-with-minister-suryabanshi-suraj-',
      },
      {
        source: 'Times of India (Aug 2024)', // published Aug 31 2024 :contentReference[oaicite:3]{index=3}
        tag:    { en: 'Education & Governance', or: 'ଶିକ୍ଷା' },
        title:  { en: 'Odisha to amend University Act, confirms Higher Education Minister Suryabanshi Suraj', or: 'ବିଶ୍ଵବିଦ୍ୟାଳୟ ଆଇନ ସଂଶୋଧନ କରିବା: ଉଚ୍ଚ ଶିକ୍ଷା ମନ୍ତ୍ରୀ ଆଶ୍ୱସନ' },
        link: 'https://timesofindia.indiatimes.com/education/news/odisha-to-amend-university-act-confirms-higher-education-minister-suryabanshi-suraj/articleshow/112943927.cms',
      },
    ],
    socialTitle: { en: 'Social Media', or: 'ସୋସିଆଲ ମିଡ଼ିଆ' },
  },

  news_feed: {
    sectionTitle: { en: 'Latest News',    or: 'ସର୍ବଶେଷ ଖବର' },
    refreshBtn:   { en: 'Refresh',        or: 'ରିଫ୍ରେଶ' },
    loadingText:  { en: 'Loading…',  or: 'ଲୋଡ଼ ହେଉଛି…' },
  },
  gallery: {
    sectionTitle:    { en: 'Gallery',                                                                  or: 'ଗ୍ୟାଲେରୀ' },
    sectionSubtitle: { en: 'Moments from public service, governance milestones, and community engagement.', or: 'ଜନସେବା, ଶାସନୀୟ ମାଇଲସ୍ଟୋନ୍ ଓ ସମୁଦାୟ ସହଭାଗିତାର ମୁହୂର୍ତ୍ତଗୁଡ଼ିକ।' },
    // items: [
    //   { en: 'Public Address at Community Gathering',    or: 'ସାମୁଦାୟିକ ସଭାରେ ଭାଷଣ' },
    //   { en: 'Interaction with Youth Sports Teams',      or: 'ଯୁବ କ୍ରୀଡ଼ା ଦଳ ସହ ଆଲୋଚନା' },
    //   { en: 'Visit to Educational Institution',         or: 'ଶିକ୍ଷା ସଂସ୍ଥା ସନ୍ଦର୍ଶନ' },
    //   { en: 'Cultural Program Participation',           or: 'ସାଂସ୍କୃତିକ କାର୍ଯ୍ୟକ୍ରମରେ ଅଂଶଗ୍ରହଣ' },
    //   { en: 'Sports Infrastructure Inauguration',       or: 'କ୍ରୀଡ଼ା ପ୍ରାଣାଳୀ ଉଦ୍ଘାଟନ' },
    //   { en: 'Review Meeting with Officials',            or: 'ଅଧିକାରୀମାନଙ୍କ ସହ ସମୀକ୍ଷା ବୈଠକ' },
    //   { en: 'Constituency Development Inspection',      or: 'ନିର୍ବାଚନ ମଣ୍ଡଳୀ ଉନ୍ନୟନ କାର୍ଯ୍ୟ ପରିଦର୍ଶନ' },
    //   { en: 'Interaction with Students',                or: 'ଛାତ୍ରଛାତ୍ରୀଙ୍କ ସହ ଆଲୋଚନା' },
    //   { en: 'Cabinet Oath Ceremony',                    or: 'ମନ୍ତ୍ରିମଣ୍ଡଳ ଶପଥ ଗ୍ରହଣ ଅନୁଷ୍ଠାନ' },
    // ],
  },

  contact: {
    sectionTitle:            { en: 'Contact Us',                    or: 'ଆମ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ' },
    sectionSubtitle:         { en: 'Reach out to the office for grievances, assistance, or meeting requests.', or: 'ଅଭିଯୋଗ, ସହାୟତା ବା ସାକ୍ଷାତ୍କାର ଅନୁରୋଧ ପାଇଁ କାର୍ଯ୍ୟାଳୟ ସହ ସମ୍ପର୍କ କରନ୍ତୁ।' },
    nameLbl:                 { en: 'Name',                          or: 'ନାମ' },
    namePlaceholder:         { en: 'Your full name',                or: 'ଆପଣଙ୍କ ପୂରା ନାମ' },
    phoneLbl:                { en: 'Phone Number',                  or: 'ଫୋନ ନମ୍ବର' },
    phonePlaceholder:        { en: '10-digit mobile number',        or: '୧୦ ଅଙ୍କ ବିଶିଷ୍ଟ ମୋବାଇଲ ନମ୍ବର' },
    emailLbl:                { en: 'Email',                         or: 'ଇମେଲ' },
    emailPlaceholder:        { en: 'your@email.com',                or: 'your@email.com' },
    subjectLbl:              { en: 'Subject',                       or: 'ବିଷୟ' },
    subjectPlaceholder:      { en: 'Select a subject',              or: 'ଏକ ବିଷୟ ବାଛନ୍ତୁ' },
    subjects: [
      { en: 'Grievance',              or: 'ଅଭିଯୋଗ' },
      { en: 'Meeting Request',        or: 'ସାକ୍ଷାତ୍କାର ଅନୁରୋଧ' },
      { en: 'Development Suggestion', or: 'ଉନ୍ନୟନ ପ୍ରସ୍ତାବ' },
      { en: 'Media Enquiry',          or: 'ମିଡ଼ିଆ ଅନୁସନ୍ଧାନ' },
      { en: 'Other',                  or: 'ଅନ୍ୟ' },
    ],
    constituencyLbl:         { en: 'Area / Village',                or: 'ଅଞ୍ଚଳ / ଗ୍ରାମ' },
    constituencyPlaceholder: { en: 'Your ward or village name',     or: 'ଆପଣଙ୍କ ୱାର୍ଡ ବା ଗ୍ରାମ ନାମ' },
    messageLbl:              { en: 'Message',                       or: 'ସନ୍ଦେଶ' },
    messagePlaceholder:      { en: 'Write your message here...',    or: 'ଏଠାରେ ଆପଣଙ୍କ ସନ୍ଦେଶ ଲେଖନ୍ତୁ...' },
    submitBtn:               { en: 'Submit',                        or: 'ଦାଖଲ କରନ୍ତୁ' },
    submittingBtn:           { en: 'Submitting…',                   or: 'ଦାଖଲ ହେଉଛି…' },
    successMsg:              { en: 'Thank you. Your message has been received.', or: 'ଧନ୍ୟବାଦ। ଆପଣଙ୍କ ସନ୍ଦେଶ ଗ୍ରହଣ କରାଗଲା।' },
    errorMsg:                { en: 'Something went wrong. Please try again.',   or: 'କିଛି ତ୍ରୁଟି ହୋଇଛି। ଦୟାକରି ପୁନଃ ଚେଷ୍ଟା କରନ୍ତୁ।' },
    phoneOrEmailRequired:    { en: 'Please provide at least a phone number or email address.', or: 'ଦୟାକରି ଅନ୍ତତଃ ଏକ ଫୋନ ନମ୍ବର ବା ଇମେଲ ଦିଅନ୍ତୁ।' },
  },

  footer: {
    brandName:          { en: 'Suryabanshi Suraj',                                                   or: 'ସୂର୍ଯ୍ୟବଂଶୀ ସୂରଜ୍' },
    brandSubtitle:      { en: 'MLA, Dhamnagar · Minister of State (Ind. Charge), Govt. of Odisha',   or: 'ବିଧାୟକ, ଧାମନଗର · ସ୍ୱତନ୍ତ୍ର ଦାୟିତ୍ୱପ୍ରାପ୍ତ ରାଜ୍ୟମନ୍ତ୍ରୀ, ଓଡ଼ିଶା ସରକାର' },
    brandDesc:          { en: 'Official portal for constituency development updates, ministerial initiatives, and citizen engagement.', or: 'ନିର୍ବାଚନ ମଣ୍ଡଳୀ ଓ ମନ୍ତ୍ରାଳୟ ସମ୍ବନ୍ଧୀୟ ସୂଚନା ପାଇଁ ଅଧିକୃତ ପୋର୍ଟାଲ୍।' },
    quickLinksTitle:    { en: 'Quick Links',                                                          or: 'ତ୍ୱରିତ ଲିଙ୍କ' },
    officialLinksTitle: { en: 'Official Resources',                                                   or: 'ଅଧିକୃତ ସନ୍ଦର୍ଭ' },
    quickLinks: [
      { en: 'About',                       or: 'ବିଷୟରେ' },
      { en: 'Constituency & Development',  or: 'ନିର୍ବାଚନ ମଣ୍ଡଳୀ ଓ ଉନ୍ନୟନ' },
      { en: 'News & Media',                or: 'ଖବର ଓ ମାଧ୍ୟମ' },
      { en: 'Gallery',                     or: 'ଗ୍ୟାଲେରୀ' },
    ],
    quickLinksUrls: [
      { en: '#about',                       or: '#about' },
      { en: '#constituency',                or: '#constituency' },
      { en: '#news',                        or: '#news' },
      { en: '#gallery',                     or: '#gallery' },
    ],
    officialLinks: [
      { en: 'Odisha Legislative Assembly', or: 'ଓଡ଼ିଶା ବିଧାନସଭା' },
      { en: 'Higher Education Department', or: 'ଉଚ୍ଚ ଶିକ୍ଷା ବିଭାଗ' },
      { en: 'Sports & Youth Services Department', or: 'କ୍ରୀଡା ଓ ଯୁବ ସେବା ବିଭାଗ' },
      { en: 'Odia Language, Literature & Culture Department',    or: 'ଓଡ଼ିଆ ଭାଷା, ସାହିତ୍ୟ ଓ ସଂସ୍କୃତି ବିଭାଗ' },
    ],
    officialLinksUrls: [
      { en: 'https://assembly.odisha.gov.in/Details.aspx?page=CouncilOfMinister/Shri%20Suryabanshi%20Suraj.HTML', or: 'https://assembly.odisha.gov.in/Details.aspx?page=CouncilOfMinister/Shri%20Suryabanshi%20Suraj.HTML' },
      { en: 'https://dhe.odisha.gov.in', or: 'https://dhe.odisha.gov.in' },
      { en: 'https://sports.odisha.gov.in',    or: 'https://sports.odisha.gov.in' },
      { en: 'https://culture.odisha.gov.in',    or: 'https://culture.odisha.gov.in' },
    ],
    allRightsReserved:   { en: 'All rights reserved.',                                        or: 'ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।' },
    disclaimer:          { en: 'This is the official website of Suryabanshi Suraj, MLA Dhamnagar. Content maintained by the office of the Minister. For official government schemes, visit', or: 'ଏହା ସୂର୍ଯ୍ୟବଂଶୀ ସୂରଜ୍, ବିଧାୟକ ଧାମନଗରଙ୍କ ଅଧିକୃତ ୱେବସାଇଟ। ବିଷୟବସ୍ତୁ ମନ୍ତ୍ରୀଙ୍କ କାର୍ଯ୍ୟାଳୟ ଦ୍ୱାରା ପରିଚାଳିତ। ସରକାରୀ ଯୋଜନା ପାଇଁ ଦେଖନ୍ତୁ' },
    disclaimerLinkLabel: { en: 'odisha.gov.in',                                               or: 'odisha.gov.in' },
  },
}

// ─── DERIVE ──────────────────────────────────────────────────────────────────
// Recursively walks `content` and replaces every { en, or } leaf with the
// value for the requested language.  Plain strings/numbers pass through as-is.
// To add a new language: add it to Lang + LANGS, then fill every leaf above.

type LangLeafValue<T> = T extends Record<Lang, infer V>
  ? Exclude<keyof T, Lang> extends never
    ? V
    : never
  : never

type DerivedTranslations<T> = T extends readonly (infer U)[]
  ? DerivedTranslations<U>[]
  : [LangLeafValue<T>] extends [never]
    ? T extends object
      ? { [K in keyof T]: DerivedTranslations<T[K]> }
      : T
    : LangLeafValue<T>

function derive<T>(lang: Lang, node: T): DerivedTranslations<T> {
  if (Array.isArray(node)) return node.map((item) => derive(lang, item)) as DerivedTranslations<T>
  if (node !== null && typeof node === 'object') {
    const keys = Object.keys(node as object)
    if (keys.length > 0 && keys.every((k) => LANGS.includes(k as Lang))) {
      // This is a translation leaf — return the requested language's value
      return (node as Record<Lang, unknown>)[lang] as DerivedTranslations<T>
    }
    return Object.fromEntries(
      Object.entries(node as object).map(([k, v]) => [k, derive(lang, v)])
    ) as DerivedTranslations<T>
  }
  return node as DerivedTranslations<T>
}

// ─── EXPORTS ─────────────────────────────────────────────────────────────────

// Derive the English shape once so we can use it as the canonical type.
const en = derive('en', content)

export type Translations = typeof en
export const translations: Record<Lang, Translations> = {
  en: en as Translations,
  or: derive('or', content) as Translations,
}
