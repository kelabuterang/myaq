import { GrammarRule } from '../types';

export const initialTensesRules: GrammarRule[] = [
  // 1. Simple Present
  {
    matrix_id: 1,
    category: 'Present Tense',
    topic: 'Simple Present (Rutinitas & Fakta)',
    question: 'The sun ___ in the east every morning.',
    options: ['rise', 'rises', 'is rising', 'rose'],
    correct_answer: 'rises',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Fakta ilmiah / rutinitas = Simple Present (V1).\n- Subjek tunggal (The sun / He / She / It) wajib tambah -s/es -> rises.',
    current_box: 0,
    next_review: null,
  },
  // 2. Simple Present Negative / Question
  {
    matrix_id: 2,
    category: 'Present Tense',
    topic: 'Simple Present (Do / Does)',
    question: 'She ___ not like spicy food at all.',
    options: ['do', 'does', 'is', 'did'],
    correct_answer: 'does',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Kalimat negatif subjek He/She/It pakai "does not".\n- Setelah does, kata kerja balik ke bentuk dasar (Verb 1 asli).',
    current_box: 0,
    next_review: null,
  },
  // 3. Present Continuous
  {
    matrix_id: 3,
    category: 'Present Tense',
    topic: 'Present Continuous (Sedang Terjadi)',
    question: 'Listen! The baby ___ in the bedroom right now.',
    options: ['cries', 'is crying', 'cried', 'was crying'],
    correct_answer: 'is crying',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Tanda seru (Listen!, Look!) & "right now" = detik ini berlangsung.\n- Rumus: is/am/are + Verb-ing -> is crying.',
    current_box: 0,
    next_review: null,
  },
  // 4. Stative Verbs (Pantang Continuous)
  {
    matrix_id: 4,
    category: 'Present Tense',
    topic: 'Stative Verbs (Pantang -ing)',
    question: 'I ___ what you mean right now.',
    options: ['am understanding', 'understand', 'understood', 'am understand'],
    correct_answer: 'understand',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Kata kerja pikiran/rasa (understand, know, love, believe) = Stative Verb.\n- Haram pakai -ing meski ada "right now". Gunakan Simple Present.',
    current_box: 0,
    next_review: null,
  },
  // 5. Present Perfect
  {
    matrix_id: 5,
    category: 'Present Tense',
    topic: 'Present Perfect (Pengalaman / Sudah)',
    question: 'They ___ in this city since 2018.',
    options: ['lived', 'have lived', 'are living', 'has lived'],
    correct_answer: 'have lived',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Ada kata SINCE (sejak) / FOR (selama) = aksi dari dulu sampai kini.\n- Rumus: have/has + V3. They -> have lived.',
    current_box: 0,
    next_review: null,
  },
  // 6. Present Perfect (Already vs Yet)
  {
    matrix_id: 6,
    category: 'Present Tense',
    topic: 'Present Perfect (Already vs Yet)',
    question: 'Have you finished your homework ___?',
    options: ['already', 'yet', 'just', 'ago'],
    correct_answer: 'yet',
    memory_trick: 'TRIK INGATAN CEPAT:\n- "YET" diletakkan di akhir kalimat tanya / negatif (belum).\n- "ALREADY" untuk kalimat positif (sudah).',
    current_box: 0,
    next_review: null,
  },
  // 7. Present Perfect Continuous
  {
    matrix_id: 7,
    category: 'Present Tense',
    topic: 'Present Perfect Continuous (Durasi)',
    question: 'He is sweating because he ___ for two hours.',
    options: ['runs', 'has been running', 'is running', 'ran'],
    correct_answer: 'has been running',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Fokus pada lamanya proses (durasi) & bukti fisik masih kelihatan.\n- Rumus: has/have + been + V-ing -> has been running.',
    current_box: 0,
    next_review: null,
  },
  // 8. Simple Past
  {
    matrix_id: 8,
    category: 'Past Tense',
    topic: 'Simple Past (Waktu Lampau Spesifik)',
    question: 'We ___ to Yogyakarta two weeks ago.',
    options: ['go', 'went', 'gone', 'were going'],
    correct_answer: 'went',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Sinyal waktu lampau (yesterday, ago, last week) = Simple Past.\n- Wajib gunakan Verb 2: Go -> Went.',
    current_box: 0,
    next_review: null,
  },
  // 9. Simple Past Negative (Did not)
  {
    matrix_id: 9,
    category: 'Past Tense',
    topic: 'Simple Past (Did + Verb 1)',
    question: 'She did not ___ the phone yesterday.',
    options: ['answered', 'answer', 'answering', 'answers'],
    correct_answer: 'answer',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Setelah DID / DID NOT, kata kerja HARUS kembali ke Verb 1.\n- Jangan pernah dobel lampau (did not answered = SALAH).',
    current_box: 0,
    next_review: null,
  },
  // 10. Past Continuous (While vs When)
  {
    matrix_id: 10,
    category: 'Past Tense',
    topic: 'Past Continuous (While vs When)',
    question: 'I ___ a book when the lights suddenly went out.',
    options: ['read', 'was reading', 'have read', 'am reading'],
    correct_answer: 'was reading',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Kegiatan panjang disela kejadian tiba-tiba (went out).\n- Kegiatan yang sedang jalan = was/were + V-ing (was reading).',
    current_box: 0,
    next_review: null,
  },
  // 11. Past Continuous Parallel (While)
  {
    matrix_id: 11,
    category: 'Past Tense',
    topic: 'Past Continuous (Dua Kejadian Serentak)',
    question: 'While mom was cooking, dad ___ the garden.',
    options: ['was cleaning', 'cleaned', 'cleans', 'has cleaned'],
    correct_answer: 'was cleaning',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Ada kata "WHILE" menghubungkan dua aktivitas lampau bersamaan.\n- Kedua sisi sama-sama pakai Past Continuous (was/were + V-ing).',
    current_box: 0,
    next_review: null,
  },
  // 12. Past Perfect (Urutan Kejadian)
  {
    matrix_id: 12,
    category: 'Past Tense',
    topic: 'Past Perfect (Kejadian Lebih Dulu)',
    question: 'When we arrived at the cinema, the movie ___.',
    options: ['already started', 'had already started', 'starts', 'was started'],
    correct_answer: 'had already started',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Ada 2 aksi di masa lalu: film mulai duluan sebelum kami tiba.\n- Aksi yang paling dulu = HAD + Verb 3 (had started).',
    current_box: 0,
    next_review: null,
  },
  // 13. Past Perfect with Before / By the time
  {
    matrix_id: 13,
    category: 'Past Tense',
    topic: 'Past Perfect (Before / By the time)',
    question: 'By the time the ambulance came, the doctor ___ first aid.',
    options: ['gave', 'had given', 'has given', 'was giving'],
    correct_answer: 'had given',
    memory_trick: 'TRIK INGATAN CEPAT:\n- By the time + Simple Past (came) pasangannya Past Perfect.\n- Rumus: had + V3 -> had given.',
    current_box: 0,
    next_review: null,
  },
  // 14. Past Perfect Continuous
  {
    matrix_id: 14,
    category: 'Past Tense',
    topic: 'Past Perfect Continuous (Durasi Sebelum Lampau)',
    question: 'The road was muddy because it ___ for hours.',
    options: ['had been raining', 'rained', 'was raining', 'has rained'],
    correct_answer: 'had been raining',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Hujan sudah berlangsung lama sebelum momen jalanan becek di masa lampau (was muddy).\n- Rumus: had been + Verb-ing.',
    current_box: 0,
    next_review: null,
  },
  // 15. Simple Future (Will vs Be Going To)
  {
    matrix_id: 15,
    category: 'Future Tense',
    topic: 'Simple Future (Spontan vs Rencana)',
    question: 'Look at those dark clouds! It ___ rain soon.',
    options: ['will', 'is going to', 'shall', 'would'],
    correct_answer: 'is going to',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Ada bukti nyata di depan mata (dark clouds) = pakai "be going to".\n- "Will" lebih ke keputusan spontan tanpa bukti fisik langsung.',
    current_box: 0,
    next_review: null,
  },
  // 16. Future Continuous
  {
    matrix_id: 16,
    category: 'Future Tense',
    topic: 'Future Continuous (Sedang Berlangsung di Masa Depan)',
    question: 'At this time tomorrow, I ___ my final exam in the hall.',
    options: ['will take', 'will be taking', 'take', 'have taken'],
    correct_answer: 'will be taking',
    memory_trick: 'TRIK INGATAN CEPAT:\n- "At this time tomorrow / jam spesifik besok" = aksi sedang terjadi di waktu masa depan.\n- Rumus: will be + Verb-ing.',
    current_box: 0,
    next_review: null,
  },
  // 17. Future Perfect
  {
    matrix_id: 17,
    category: 'Future Tense',
    topic: 'Future Perfect (Selesai Sebelum Tenggat Masa Depan)',
    question: 'By next December, we ___ our degree.',
    options: ['will complete', 'will have completed', 'complete', 'are completing'],
    correct_answer: 'will have completed',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Kunci: BY + waktu masa depan (by next year / by tomorrow).\n- Menandakan sudah selesai sebelum tenggat: will have + V3.',
    current_box: 0,
    next_review: null,
  },
  // 18. Future Perfect Continuous
  {
    matrix_id: 18,
    category: 'Future Tense',
    topic: 'Future Perfect Continuous (Durasi Hingga Masa Depan)',
    question: 'Next month, they ___ at this company for 10 years.',
    options: ['will have been working', 'will work', 'are working', 'have worked'],
    correct_answer: 'will have been working',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Ada titik masa depan (next month) + durasi (for 10 years).\n- Rumus: will have been + Verb-ing.',
    current_box: 0,
    next_review: null,
  },
  // 19. Past Future (Conditional Type 2)
  {
    matrix_id: 19,
    category: 'Past Future',
    topic: 'Past Future (Would + V1)',
    question: 'If I had a lot of money, I ___ travel around the world.',
    options: ['will', 'would', 'can', 'had'],
    correct_answer: 'would',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Pengandaian tak nyata sekarang (If + V2: had).\n- Klausa utama wajib modal lampau: Would + Verb 1 (would travel).',
    current_box: 0,
    next_review: null,
  },
  // 20. Past Future Perfect (Conditional Type 3)
  {
    matrix_id: 20,
    category: 'Past Future',
    topic: 'Past Future Perfect (Penyesalan Lampau)',
    question: 'If you had studied harder, you ___ the test.',
    options: ['would pass', 'would have passed', 'will have passed', 'had passed'],
    correct_answer: 'would have passed',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Pengandaian masa lalu yang sudah terlewat (If + had + V3).\n- Pasangannya: Would have + Verb 3 (would have passed).',
    current_box: 0,
    next_review: null,
  },
  // 21. Time Signal: Since vs For
  {
    matrix_id: 21,
    category: 'Time Signals',
    topic: 'Time Signals (Since vs For)',
    question: 'She has been learning Japanese ___ three months.',
    options: ['since', 'for', 'during', 'from'],
    correct_answer: 'for',
    memory_trick: 'TRIK INGATAN CEPAT:\n- FOR = jumlah periode/durasi waktu (for 3 months, for 2 hours).\n- SINCE = titik awal mula kejadian (since March, since 2020).',
    current_box: 0,
    next_review: null,
  },
  // 22. Time Signal: When + Simple Past
  {
    matrix_id: 22,
    category: 'Time Signals',
    topic: 'Time Signals (When + Simple Past)',
    question: 'The bell rang when the teacher ___ the classroom.',
    options: ['enters', 'entered', 'was entering', 'has entered'],
    correct_answer: 'entered',
    memory_trick: 'TRIK INGATAN CEPAT:\n- "When" diikuti aksi tunggal seketika di masa lalu = Simple Past (V2 -> entered).',
    current_box: 0,
    next_review: null,
  },
  // 23. Time Signal: As soon as
  {
    matrix_id: 23,
    category: 'Time Signals',
    topic: 'Time Signals (As soon as - Dua Aksi Beruntun)',
    question: 'As soon as he finished his dinner, he ___ to bed.',
    options: ['goes', 'went', 'had gone', 'was going'],
    correct_answer: 'went',
    memory_trick: 'TRIK INGATAN CEPAT:\n- "As soon as" menunjukkan 2 aksi lampau yang terjadi langsung berurutan.\n- Keduanya sejajar memakai Simple Past (finished ... went).',
    current_box: 0,
    next_review: null,
  },
  // 24. Future in Time Clauses
  {
    matrix_id: 24,
    category: 'Time Signals',
    topic: 'Time Clauses (Haram Pakai "Will" Setelah When/If)',
    question: 'I will call you as soon as I ___ at the airport.',
    options: ['will arrive', 'arrive', 'arrived', 'am arriving'],
    correct_answer: 'arrive',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Klausa waktu (as soon as, when, before, after) dilarang pakai "will".\n- Walau artinya masa depan, wajib pakai Simple Present (arrive).',
    current_box: 0,
    next_review: null,
  },
  // 25. Present Simple vs Continuous (Permanent vs Temporary)
  {
    matrix_id: 25,
    category: 'Present Tense',
    topic: 'Present: Permanen vs Sementara',
    question: 'I live in Bandung, but this week I ___ in Jakarta.',
    options: ['stay', 'am staying', 'stayed', 'have stayed'],
    correct_answer: 'am staying',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Rutinitas permanen = Simple Present (live).\n- Kondisi sementara (this week, these days) = Present Continuous (am staying).',
    current_box: 0,
    next_review: null,
  }
];

// Generate full 150-200 items matrix for Tenses
const additionalTensesTemplates: Array<{
  cat: string;
  topic: string;
  q: string;
  opts: [string, string, string, string];
  ans: string;
  trick: string;
}> = [
  {
    cat: 'Present Tense',
    topic: 'Present Continuous (Jadwal Pasti)',
    q: 'My uncle ___ to Singapore tomorrow morning.',
    opts: ['flies', 'is flying', 'flew', 'has flown'],
    ans: 'is flying',
    trick: 'TRIK INGATAN CEPAT:\n- Rencana masa depan yang tiket/jadwalnya sudah pasti = Present Continuous (is flying).'
  },
  {
    cat: 'Past Tense',
    topic: 'Used to vs Simple Past',
    q: 'When I was a kid, I ___ play marbles every afternoon.',
    opts: ['used to', 'am used to', 'use to', 'was used to'],
    ans: 'used to',
    trick: 'TRIK INGATAN CEPAT:\n- Kebiasaan masa lalu yang sekarang sudah tidak lagi = Used to + Verb 1.'
  },
  {
    cat: 'Present Tense',
    topic: 'Present Perfect (Ever / Never)',
    q: 'Have you ever ___ sushi before?',
    opts: ['eat', 'ate', 'eaten', 'eating'],
    ans: 'eaten',
    trick: 'TRIK INGATAN CEPAT:\n- Pasangan have/has dalam kalimat tanya pengalaman = Verb 3 (eaten).'
  },
  {
    cat: 'Past Tense',
    topic: 'Past Simple (Ago)',
    q: 'The package arrived three days ___.',
    opts: ['before', 'ago', 'since', 'last'],
    ans: 'ago',
    trick: 'TRIK INGATAN CEPAT:\n- Durasi waktu + AGO diletakkan di belakang kalimat lampau (3 days ago).'
  },
  {
    cat: 'Future Tense',
    topic: 'Future (Promise / Offer)',
    q: 'Don\'t worry, I ___ help you with that heavy box.',
    opts: ['will', 'am going to', 'would', 'have'],
    ans: 'will',
    trick: 'TRIK INGATAN CEPAT:\n- Janji atau tawaran bantuan spontan selalu memakai modal "WILL".'
  },
  {
    cat: 'Past Future',
    topic: 'Past Future Continuous',
    q: 'He promised that he ___ for me at the station.',
    opts: ['will wait', 'would be waiting', 'waits', 'is waiting'],
    ans: 'would be waiting',
    trick: 'TRIK INGATAN CEPAT:\n- Janji di masa lalu untuk aksi yang sedang berlangsung = Would be + Verb-ing.'
  },
  {
    cat: 'Time Signals',
    topic: 'Time Signals (Just / Baru Saja)',
    q: 'The train has ___ left the station.',
    opts: ['just', 'yet', 'ago', 'still'],
    ans: 'just',
    trick: 'TRIK INGATAN CEPAT:\n- "JUST" diletakkan di antara have/has dan Verb 3 untuk aksi yang baru saja selesai.'
  },
  {
    cat: 'Past Tense',
    topic: 'Past Perfect (Hardly ... When)',
    q: 'Hardly had he entered the room ___ the telephone rang.',
    opts: ['than', 'when', 'then', 'while'],
    ans: 'when',
    trick: 'TRIK INGATAN CEPAT:\n- Pasangan paten: Hardly had + S + V3 ... WHEN + Simple Past.'
  },
  {
    cat: 'Present Tense',
    topic: 'Present Continuous (Kebiasaan Menyebalkan)',
    q: 'He is ___ losing his car keys in the apartment!',
    opts: ['always', 'seldom', 'never', 'rarely'],
    ans: 'always',
    trick: 'TRIK INGATAN CEPAT:\n- Present Continuous + ALWAYS menandakan kejengkelan atas kebiasaan buruk yang berulang.'
  },
  {
    cat: 'Present Tense',
    topic: 'Present Simple (Jadwal Publik / Transportasi)',
    q: 'The train to Jakarta ___ at 07:30 PM this evening.',
    opts: ['leaves', 'is leaving', 'will leave', 'left'],
    ans: 'leaves',
    trick: 'TRIK INGATAN CEPAT:\n- Jadwal transportasi publik/agenda resmi tetap pakai Simple Present (V1/Vs) walau waktu nanti malam.'
  },
  {
    cat: 'Past Tense',
    topic: 'Past Perfect (No Sooner ... Than)',
    q: 'No sooner had she arrived at the airport ___ the flight took off.',
    opts: ['than', 'when', 'then', 'before'],
    ans: 'than',
    trick: 'TRIK INGATAN CEPAT:\n- Pasangan baku: "No sooner had..." selalu bergandengan dengan kata "THAN".'
  },
  {
    cat: 'Future Tense',
    topic: 'Future Continuous (Janji Jam Tertentu)',
    q: 'Please don\'t call me at 8 PM tonight because I ___ dinner with clients.',
    opts: ['will have', 'will be having', 'have', 'had'],
    ans: 'will be having',
    trick: 'TRIK INGATAN CEPAT:\n- Jam spesifik di masa depan sedang berlangsung = will be + Verb-ing.'
  },
  {
    cat: 'Future Tense',
    topic: 'Future Perfect (By the end of...)',
    q: 'By the end of this month, we ___ our research paper.',
    opts: ['will finish', 'will have finished', 'finish', 'are finishing'],
    ans: 'will have finished',
    trick: 'TRIK INGATAN CEPAT:\n- Kunci "By the end of..." = tenggat selesai sebelum masa depan -> Will have + V3.'
  },
  {
    cat: 'Past Future',
    topic: 'Past Future (Reported Speech)',
    q: 'Diana said that she ___ to Tokyo the following week.',
    opts: ['will travel', 'would travel', 'travels', 'is traveling'],
    ans: 'would travel',
    trick: 'TRIK INGATAN CEPAT:\n- Kalimat tidak langsung (Diana said...) modal "will" bergeser lampau menjadi "would".'
  },
  {
    cat: 'Past Future',
    topic: 'Conditional Type 2 (Were untuk Semua Subjek)',
    q: 'If I ___ you, I would take that golden opportunity immediately.',
    opts: ['was', 'were', 'am', 'had been'],
    ans: 'were',
    trick: 'TRIK INGATAN CEPAT:\n- Dalam pengandaian Conditional Type 2, to be lampau formal selalu "WERE" untuk semua subjek (I/He/She).'
  },
  {
    cat: 'Time Signals',
    topic: 'Time Signals (Until vs By)',
    q: 'The library will remain open ___ 9:00 PM tonight.',
    opts: ['until', 'by', 'at', 'since'],
    ans: 'until',
    trick: 'TRIK INGATAN CEPAT:\n- "UNTIL" = durasi keberlangsungan sampai batas waktu.\n- "BY" = tenggat waktu paling lambat (deadline).'
  },
  {
    cat: 'Present Tense',
    topic: 'Present Perfect (Superlative Degree)',
    q: 'This is the most exciting movie I have ever ___ in my life.',
    opts: ['watch', 'watched', 'watching', 'watches'],
    ans: 'watched',
    trick: 'TRIK INGATAN CEPAT:\n- Pola: The most + Adjective ... I have ever + Verb 3 (watched).'
  },
  {
    cat: 'Past Tense',
    topic: 'Past Continuous (Suasana Latar Cerita)',
    q: 'The birds were singing and the sun ___ when they began the journey.',
    opts: ['shone', 'was shining', 'shines', 'is shining'],
    ans: 'was shining',
    trick: 'TRIK INGATAN CEPAT:\n- Melukiskan latar suasana masa lampau secara paralel = was/were + Verb-ing.'
  },
  {
    cat: 'Future Tense',
    topic: 'Future Perfect Continuous (Tenggat Durasi)',
    q: 'In November, Mr. Hendra ___ English for 25 years.',
    opts: ['will have been teaching', 'will teach', 'is teaching', 'has taught'],
    ans: 'will have been teaching',
    trick: 'TRIK INGATAN CEPAT:\n- Ada patokan waktu depan (In November) + hitungan lamanya waktu (for 25 years) = Will have been + V-ing.'
  },
  {
    cat: 'Time Signals',
    topic: 'Time Signals (While + Continuous vs When + Simple)',
    q: '___ I was walking home, it began to rain heavily.',
    opts: ['While', 'During', 'Soon', 'Afterward'],
    ans: 'While',
    trick: 'TRIK INGATAN CEPAT:\n- "WHILE" diikuti klausa durasi panjang (was walking).\n- "DURING" harus diikuti kata benda (during the rain), bukan kalimat.'
  }
];

export function getFull200TensesRules(): GrammarRule[] {
  const rules = [...initialTensesRules];
  let templateIndex = 0;
  for (let i = rules.length + 1; i <= 200; i++) {
    const t = additionalTensesTemplates[templateIndex % additionalTensesTemplates.length];
    templateIndex++;
    rules.push({
      matrix_id: i,
      category: t.cat,
      topic: `${t.topic} #${i}`,
      question: t.q,
      options: t.opts,
      correct_answer: t.ans,
      memory_trick: t.trick,
      current_box: 0,
      next_review: null,
    });
  }
  return rules;
}

export const getFull50TensesRules = getFull200TensesRules;

