import { GrammarRule } from '../types';

export const initialGrammarRules: GrammarRule[] = [
  {
    matrix_id: 1,
    category: 'Noun',
    topic: 'Noun (Countable vs Uncountable)',
    question: 'I need some ___ about the schedule.',
    options: ['informations', 'information', 'an information', 'pieces information'],
    correct_answer: 'information',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Information = Uncountable Noun (tak bisa dihitung).\n- Pantang tambah akhiran -s meski jumlahnya banyak.',
    current_box: 0,
    next_review: null,
  },
  {
    matrix_id: 2,
    category: 'Noun',
    topic: 'Noun (Irregular Plural Nouns)',
    question: 'Three ___ are playing football in the backyard.',
    options: ['childs', 'childrens', 'children', 'childes'],
    correct_answer: 'children',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Bentuk jamak dari Child adalah Children.\n- Jangan tambah akhiran -s lagi (childrens = salah).',
    current_box: 0,
    next_review: null,
  },
  {
    matrix_id: 3,
    category: 'Pronoun',
    topic: 'Pronoun (Subject vs Object)',
    question: 'The teacher called my friend and ___ to the office.',
    options: ['I', 'me', 'my', 'mine'],
    correct_answer: 'me',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Posisi setelah kata kerja (called) = Object Pronoun.\n- Gunakan "me", bukan "I" atau "my".',
    current_box: 0,
    next_review: null,
  },
  {
    matrix_id: 4,
    category: 'Pronoun',
    topic: 'Pronoun (Possessive Adjective vs Pronoun)',
    question: 'This jacket belongs to Sarah. That one is ___.',
    options: ['my', 'mine', 'me', 'myself'],
    correct_answer: 'mine',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Berdiri sendiri tanpa kata benda di belakang = Mine (milikku).\n- Kalau pakai "my" wajib ada bendanya (my jacket).',
    current_box: 0,
    next_review: null,
  },
  {
    matrix_id: 5,
    category: 'Adjective',
    topic: 'Adjective (-ed vs -ing Adjectives)',
    question: 'The lecture was so ___ that many students fell asleep.',
    options: ['bored', 'boring', 'bore', 'bores'],
    correct_answer: 'boring',
    memory_trick: 'TRIK INGATAN CEPAT:\n- -ING = Karakter penyebab sifat (membosankan).\n- -ED = Efek perasaan orang (merasa bosan).',
    current_box: 0,
    next_review: null,
  },
  {
    matrix_id: 6,
    category: 'Adjective',
    topic: 'Adjective (Comparative Degree)',
    question: "Today's grammar quiz is ___ than yesterday's exam.",
    options: ['more easy', 'easier', 'easiest', 'more easier'],
    correct_answer: 'easier',
    memory_trick: 'TRIK INGATAN CEPAT:\n- 2 suku kata berakhiran -y (easy) berubah jadi -ier (easier).\n- Pantang dobel kata "more easier".',
    current_box: 0,
    next_review: null,
  },
  {
    matrix_id: 7,
    category: 'Verb',
    topic: 'Verb (Subject-Verb Agreement)',
    question: 'Every morning, my brother ___ two glasses of water.',
    options: ['drink', 'drinks', 'drinking', 'drank'],
    correct_answer: 'drinks',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Subjek tunggal (He/She/Brother) wajib tambah -s/es pada Verb.\n- Pola rutinitas = Simple Present Tense.',
    current_box: 0,
    next_review: null,
  },
  {
    matrix_id: 8,
    category: 'Verb',
    topic: 'Verb (Irregular Past Simple)',
    question: 'She ___ a new laptop yesterday afternoon.',
    options: ['buy', 'buyed', 'bought', 'buying'],
    correct_answer: 'bought',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Ada penanda waktu lampau (yesterday) = butuh Verb 2.\n- Buy berubah bentuk jadi Bought (bukan buyed).',
    current_box: 0,
    next_review: null,
  },
  {
    matrix_id: 9,
    category: 'Adverb',
    topic: 'Adverb (Adverb of Manner)',
    question: 'The speaker delivered the message very ___.',
    options: ['clear', 'clearly', 'clearness', 'more clear'],
    correct_answer: 'clearly',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Menerangkan cara kerja kata kerja (delivered) = butuh Adverb (-ly).\n- Clear (Adjective) -> Clearly (Adverb).',
    current_box: 0,
    next_review: null,
  },
  {
    matrix_id: 10,
    category: 'Adverb',
    topic: 'Adverb (Irregular Adverb: Fast)',
    question: 'He was late, so he had to drive very ___.',
    options: ['fastly', 'fast', 'fasterly', 'more fastly'],
    correct_answer: 'fast',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Kata "fastly" tidak ada dalam bahasa Inggris baku.\n- Bentuk Adjective maupun Adverb tetap sama: FAST.',
    current_box: 0,
    next_review: null,
  },
  {
    matrix_id: 11,
    category: 'Conjunction',
    topic: 'Conjunction (Although vs Because)',
    question: '___ it was raining heavily, they went hiking in the forest.',
    options: ['Because', 'Although', 'Therefore', 'Despite of'],
    correct_answer: 'Although',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Hubungan pertentangan (hujan tapi tetap mendaki) = pakai Although (Meskipun).\n- Diikuti klausa lengkap (Subject + Verb).',
    current_box: 0,
    next_review: null,
  },
  {
    matrix_id: 12,
    category: 'Conjunction',
    topic: 'Conjunction (Paired: Neither... Nor)',
    question: 'Neither the manager nor the employees ___ aware of the issue.',
    options: ['was', 'were', 'is', 'be'],
    correct_answer: 'were',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Pada pasangan "Neither... Nor", kata kerja mengikuti subjek terdekat (employees = plural -> were).',
    current_box: 0,
    next_review: null,
  },
  {
    matrix_id: 13,
    category: 'Preposition',
    topic: 'Preposition (In, On, At for Time)',
    question: 'The meeting is scheduled to start ___ 9:00 AM sharp.',
    options: ['in', 'on', 'at', 'by'],
    correct_answer: 'at',
    memory_trick: 'TRIK INGATAN CEPAT:\n- AT untuk jam spesifik (at 9 AM).\n- ON untuk hari/tanggal (on Monday).\n- IN untuk bulan/tahun (in July).',
    current_box: 0,
    next_review: null,
  },
  {
    matrix_id: 14,
    category: 'Preposition',
    topic: 'Preposition (Dependent Preposition: Interested)',
    question: 'She has always been interested ___ ancient history.',
    options: ['about', 'in', 'with', 'for'],
    correct_answer: 'in',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Pasangan paten "Interested" selalu "IN" (tertarik pada).\n- Jangan pakai "interested with" atau "about".',
    current_box: 0,
    next_review: null,
  },
  {
    matrix_id: 15,
    category: 'Passive',
    topic: 'Active and Passive Voice (Present Passive)',
    question: 'English ___ by millions of people around the world.',
    options: ['speaks', 'is speaking', 'is spoken', 'spoken'],
    correct_answer: 'is spoken',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Rumus Passive: to be + Verb 3.\n- English (tunggal) -> is + spoken (diucapkan).',
    current_box: 0,
    next_review: null,
  },
  {
    matrix_id: 16,
    category: 'Passive',
    topic: 'Active and Passive Voice (Past Passive)',
    question: 'The Mona Lisa ___ by Leonardo da Vinci in the 16th century.',
    options: ['painted', 'was painted', 'is painted', 'has painted'],
    correct_answer: 'was painted',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Kejadian lampau (16th century) + objek pasif = was/were + V3.\n- Lukisan tunggal -> was painted.',
    current_box: 0,
    next_review: null,
  },
  {
    matrix_id: 17,
    category: 'Gerund',
    topic: 'Gerund after Preposition',
    question: 'He apologized for ___ late to the interview.',
    options: ['arrive', 'arrived', 'arriving', 'to arrive'],
    correct_answer: 'arriving',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Setelah kata depan (preposition seperti for, about, in, at) wajib bentuk GERUND (Verb-ing).',
    current_box: 0,
    next_review: null,
  },
  {
    matrix_id: 18,
    category: 'Gerund',
    topic: 'Infinitive with To (Purpose)',
    question: 'She went to the supermarket ___ some fresh vegetables.',
    options: ['buy', 'to buy', 'buying', 'for buy'],
    correct_answer: 'to buy',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Menyatakan tujuan tindakan = To + Infinitive (to buy = untuk membeli).\n- Jangan pakai "for buy".',
    current_box: 0,
    next_review: null,
  },
  {
    matrix_id: 19,
    category: 'Concord',
    topic: 'Concord / Agreement (Quantifier: Each of)',
    question: 'Each of the participants ___ given a certificate.',
    options: ['was', 'were', 'are', 'have been'],
    correct_answer: 'was',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Kata "Each of..." selalu dianggap tunggal (singular).\n- Gunakan "was", bukan "were".',
    current_box: 0,
    next_review: null,
  },
  {
    matrix_id: 20,
    category: 'Word Order',
    topic: 'Word Order (Royal Order of Adjectives)',
    question: 'She bought a ___ handbag at the boutique.',
    options: ['leather beautiful brown', 'beautiful brown leather', 'brown beautiful leather', 'leather brown beautiful'],
    correct_answer: 'beautiful brown leather',
    memory_trick: 'TRIK INGATAN CEPAT:\n- Urutan Sifat: OSASCOMP (Opinion -> Color -> Material).\n- Beautiful (opini) -> Brown (warna) -> Leather (bahan).',
    current_box: 0,
    next_review: null,
  }
];

// Rich pool of grammar themes for the full 200 matrix
const syllabusThemes: Array<{
  cat: GrammarRule['category'];
  topic: string;
  q: string;
  opts: [string, string, string, string];
  ans: string;
  trick: string;
}> = [
  {
    cat: 'Noun',
    topic: 'Noun (Plural of Words Ending in -f/-fe)',
    q: 'The wolves attacked two stray ___ near the village.',
    opts: ['calfs', 'calves', 'calfes', 'calve'],
    ans: 'calves',
    trick: 'TRIK INGATAN CEPAT:\n- Kata benda berakhiran -f/-fe (calf, half, knife, leaf, wolf) jamaknya ganti -ves.'
  },
  {
    cat: 'Pronoun',
    topic: 'Pronoun (Reflexive Pronoun)',
    q: 'He cut ___ while he was chopping onions.',
    opts: ['him', 'himself', 'his', 'he'],
    ans: 'himself',
    trick: 'TRIK INGATAN CEPAT:\n- Subjek dan objek adalah orang yang sama -> pakai Reflexive (-self).'
  },
  {
    cat: 'Adjective',
    topic: 'Adjective (Superlative with The)',
    q: 'Mount Everest is ___ mountain in the entire world.',
    opts: ['highest', 'the highest', 'most high', 'the most high'],
    ans: 'the highest',
    trick: 'TRIK INGATAN CEPAT:\n- Superlative derajat tertinggi wajib memakai artikel "The" di depan (The highest).'
  },
  {
    cat: 'Verb',
    topic: 'Verb (Causative Have / Get)',
    q: 'I had the technician ___ my broken laptop.',
    opts: ['repair', 'to repair', 'repaired', 'repairing'],
    ans: 'repair',
    trick: 'TRIK INGATAN CEPAT:\n- HAVE + Orang + Verb 1 asli (tanpa to).\n- Kalau pakai GET + Orang -> to + Verb 1.'
  },
  {
    cat: 'Verb',
    topic: 'Verb (Subjunctive Mood)',
    q: 'The doctor recommended that he ___ more rest.',
    opts: ['takes', 'take', 'took', 'taking'],
    ans: 'take',
    trick: 'TRIK INGATAN CEPAT:\n- Mandat/saran formal (recommend/suggest that...) kata kerja wajib BARE INFINITIVE (Verb 1 polos tanpa -s).'
  },
  {
    cat: 'Conjunction',
    topic: 'Conjunction (Despite vs Although)',
    q: '___ the heavy traffic, we arrived at the airport on time.',
    opts: ['Despite', 'Although', 'Even though', 'Because'],
    ans: 'Despite',
    trick: 'TRIK INGATAN CEPAT:\n- Despite / In spite of + NOUN PHRASE (the heavy traffic).\n- Although / Even though + Kalimat utuh (S + V).'
  },
  {
    cat: 'Preposition',
    topic: 'Preposition (Collocation: Accused of)',
    q: 'The suspect was accused ___ stealing confidential documents.',
    opts: ['of', 'for', 'with', 'about'],
    ans: 'of',
    trick: 'TRIK INGATAN CEPAT:\n- Pasangan paten: Accused + OF (dituduh melakukan).\n- Jangan pakai "accused for".'
  },
  {
    cat: 'Concord',
    topic: 'Concord (A number of vs The number of)',
    q: 'A number of students ___ participating in the competition.',
    opts: ['is', 'are', 'was', 'has been'],
    ans: 'are',
    trick: 'TRIK INGATAN CEPAT:\n- "A number of..." = artinya banyak (Plural -> ARE/WERE).\n- "The number of..." = jumlah angka (Singular -> IS/WAS).'
  },
  {
    cat: 'Word Order',
    topic: 'Word Order (Inversion with Negative Adverb)',
    q: 'Seldom ___ such a breathtaking view in my life.',
    opts: ['I have seen', 'have I seen', 'did I saw', 'I saw'],
    ans: 'have I seen',
    trick: 'TRIK INGATAN CEPAT:\n- Di awal kalimat ada kata negatif (Seldom, Never, Rarely, Hardly).\n- Susunan wajib dibalik seperti tanya: Auxiliary + Subject + Verb.'
  },
  {
    cat: 'Gerund',
    topic: 'Gerund vs Infinitive (Look forward to)',
    q: 'I am looking forward to ___ you next week.',
    opts: ['see', 'seeing', 'saw', 'have seen'],
    ans: 'seeing',
    trick: 'TRIK INGATAN CEPAT:\n- "To" di "look forward to" adalah Preposisi, BUKAN infinitive to.\n- Wajib diikuti Verb-ing (seeing).'
  },
  {
    cat: 'Gerund',
    topic: 'Gerund vs Infinitive (Stop to vs Stop -ing)',
    q: 'He was tired, so he stopped ___ a cup of coffee.',
    opts: ['drinking', 'to drink', 'drank', 'drink'],
    ans: 'to drink',
    trick: 'TRIK INGATAN CEPAT:\n- Stop TO V1 = Berhenti sejenak demi melakukan sesuatu.\n- Stop V-ing = Menghentikan total suatu kebiasaan.'
  },
  {
    cat: 'Pronoun',
    topic: 'Pronoun (Relative: Who vs Whom)',
    q: 'The candidate ___ you interviewed yesterday got the job.',
    opts: ['who', 'whom', 'whose', 'which'],
    ans: 'whom',
    trick: 'TRIK INGATAN CEPAT:\n- Menggantikan objek orang yang dikenai tindakan (you interviewed him) = WHOM.'
  },
  {
    cat: 'Pronoun',
    topic: 'Pronoun (Relative: Whose untuk Kepemilikan)',
    q: 'That is the author ___ book won the international award.',
    opts: ['who', 'which', 'whose', 'whom'],
    ans: 'whose',
    trick: 'TRIK INGATAN CEPAT:\n- Kepemilikan (bukunya penulis itu) = WHOSE + kata benda langsung tanpa the/a.'
  },
  {
    cat: 'Adverb',
    topic: 'Adverb (Hard vs Hardly)',
    q: 'She was so exhausted that she could ___ keep her eyes open.',
    opts: ['hard', 'hardly', 'harder', 'more hard'],
    ans: 'hardly',
    trick: 'TRIK INGATAN CEPAT:\n- HARD = keras/sungguh-sungguh.\n- HARDLY = hampir tidak bisa (makna negatif).'
  },
  {
    cat: 'Adverb',
    topic: 'Adverb (Too vs Enough Placement)',
    q: 'He is not experienced ___ to lead this major project.',
    opts: ['too', 'enough', 'very', 'so'],
    ans: 'enough',
    trick: 'TRIK INGATAN CEPAT:\n- ENOUGH diletakkan SETELAH kata sifat (experienced enough).\n- TOO diletakkan SEBELUM kata sifat (too young).'
  },
  {
    cat: 'Passive',
    topic: 'Passive Voice (Double Object Verbs)',
    q: 'A warm welcome was given ___ all the new delegates.',
    opts: ['to', 'for', 'with', 'at'],
    ans: 'to',
    trick: 'TRIK INGATAN CEPAT:\n- Kalimat pasif dengan kata benda sebagai subjek: Given TO someone.'
  },
  {
    cat: 'Passive',
    topic: 'Passive Voice (Impersonal: It is said that)',
    q: 'It is ___ that eating apples daily keeps the doctor away.',
    opts: ['say', 'said', 'saying', 'says'],
    ans: 'said',
    trick: 'TRIK INGATAN CEPAT:\n- Rumus pasif impersonal: It + is + Verb 3 (It is said / believed / reported).'
  },
  {
    cat: 'Concord',
    topic: 'Concord (Subject with As well as)',
    q: 'The teacher, as well as the students, ___ excited about the trip.',
    opts: ['were', 'was', 'are', 'have been'],
    ans: 'was',
    trick: 'TRIK INGATAN CEPAT:\n- Frasa "as well as / along with" tidak mengubah subjek utama.\n- Subjek utama: The teacher (tunggal) -> WAS.'
  },
  {
    cat: 'Concord',
    topic: 'Concord (Collective Noun as a Unit)',
    q: 'The jury ___ reached its final verdict after hours of debate.',
    opts: ['have', 'has', 'are', 'were'],
    ans: 'has',
    trick: 'TRIK INGATAN CEPAT:\n- Petunjuk ada kata "ITS" (menunjukkan satu kesatuan tunggal) -> pakai HAS.'
  },
  {
    cat: 'Word Order',
    topic: 'Question Tag (Let\'s)',
    q: 'Let\'s go for a walk in the park, ___?',
    opts: ['will you', 'shall we', 'don\'t we', 'aren\'t we'],
    ans: 'shall we',
    trick: 'TRIK INGATAN CEPAT:\n- Tag question untuk ajakan "Let\'s..." selalu berpasangan dengan "shall we?".'
  },
  {
    cat: 'Word Order',
    topic: 'Question Tag (Negative Sentence)',
    q: 'She rarely speaks in public meetings, ___?',
    opts: ['doesn\'t she', 'does she', 'isn\'t she', 'did she'],
    ans: 'does she',
    trick: 'TRIK INGATAN CEPAT:\n- Kata "rarely / seldom / never" bernilai negatif.\n- Ekor pertanyaan (tag) WAJIB positif: does she?'
  },
  {
    cat: 'Noun',
    topic: 'Noun (Compound Noun as Adjective)',
    q: 'They stayed at a luxurious ___ hotel during their holiday.',
    opts: ['five-stars', 'five-star', 'five star\'s', 'fives-star'],
    ans: 'five-star',
    trick: 'TRIK INGATAN CEPAT:\n- Angka + kata benda yang berfungsi sebagai kata sifat (di depan hotel) HARAM dijamakkan (-s).'
  },
  {
    cat: 'Noun',
    topic: 'Noun (Uncountable: Advice)',
    q: 'Can you give me a useful piece of ___?',
    opts: ['advice', 'advices', 'advise', 'advises'],
    ans: 'advice',
    trick: 'TRIK INGATAN CEPAT:\n- Advice = kata benda tak bisa dihitung (tanpa -s).\n- Advise dengan huruf \'s\' adalah kata kerja (to advise).'
  },
  {
    cat: 'Adjective',
    topic: 'Adjective (Double Comparative: The more... The more)',
    q: 'The harder you study, the ___ your grades will be.',
    opts: ['good', 'better', 'best', 'more good'],
    ans: 'better',
    trick: 'TRIK INGATAN CEPAT:\n- Rumus ganda: The + comparative..., the + comparative...\n- Harder -> berpasangan dengan Better.'
  },
  {
    cat: 'Preposition',
    topic: 'Preposition (Similar vs Different)',
    q: 'Her perspective on this problem is quite different ___ mine.',
    opts: ['from', 'with', 'to', 'than'],
    ans: 'from',
    trick: 'TRIK INGATAN CEPAT:\n- Baku bahasa Inggris: Different + FROM.\n- Jangan terpengaruh terjemahan bahasa Indonesia "berbeda dengan".'
  },
  {
    cat: 'Verb',
    topic: 'Verb (Used to vs Be used to)',
    q: 'She lives in London now, so she is used to ___ on the left.',
    opts: ['drive', 'driving', 'drove', 'driven'],
    ans: 'driving',
    trick: 'TRIK INGATAN CEPAT:\n- BE USED TO (terbiasa dengan) diikuti Verb-ing (driving).\n- Kalau USED TO (dulu pernah) diikuti Verb 1 polos.'
  },
  {
    cat: 'Adjective',
    topic: 'Adjective (Senior/Superior + To, Bukan Than)',
    q: 'His technical skills are superior ___ mine in every way.',
    opts: ['to', 'than', 'from', 'with'],
    ans: 'to',
    trick: 'TRIK INGATAN CEPAT:\n- Sifat berakhiran -ior (superior, inferior, senior, junior) berpasangan dengan "TO", bukan "than".'
  },
  {
    cat: 'Verb',
    topic: 'Modals (Should have + V3)',
    q: 'You failed the exam. You ___ studied harder last week.',
    opts: ['should have', 'must have', 'would have', 'could'],
    ans: 'should have',
    trick: 'TRIK INGATAN CEPAT:\n- SHOULD HAVE + V3 = Penyesalan (seharusnya dilakukan tapi nyatanya tidak).'
  },
  {
    cat: 'Verb',
    topic: 'Modals of Deduction (Must have + V3)',
    q: 'The ground is wet everywhere. It ___ rained heavily last night.',
    opts: ['must have', 'should have', 'can have', 'ought to'],
    ans: 'must have',
    trick: 'TRIK INGATAN CEPAT:\n- MUST HAVE + V3 = Kesimpulan pasti atas bukti nyata di masa lampau (pasti sudah hujan).'
  },
  {
    cat: 'Noun',
    topic: 'Noun (Irregular Foreign Plural: Phenomenon)',
    q: 'Scientists are observing several strange natural ___ in the Arctic.',
    opts: ['phenomena', 'phenomenons', 'phenomenas', 'phenomenon'],
    ans: 'phenomena',
    trick: 'TRIK INGATAN CEPAT:\n- Singular: Phenomenon (-on).\n- Plural jamak: Phenomena (-a).'
  },
  {
    cat: 'Noun',
    topic: 'Noun (Criterion vs Criteria)',
    q: 'What are the main ___ for selecting the scholarship winners?',
    opts: ['criteria', 'criterions', 'criterion', 'criterias'],
    ans: 'criteria',
    trick: 'TRIK INGATAN CEPAT:\n- Ada kata "What ARE" (jamak) -> pilih bentuk jamak "criteria".\n- Tunggalnya adalah "criterion".'
  },
  {
    cat: 'Conjunction',
    topic: 'Conjunction (Unless = If Not)',
    q: 'You won\'t pass the driving test ___ you practice parking.',
    opts: ['unless', 'if', 'without', 'except'],
    ans: 'unless',
    trick: 'TRIK INGATAN CEPAT:\n- UNLESS bermakna "kecuali jika" (if not).\n- Pantang menambahkan kata not lagi di dalam klausa unless.'
  },
  {
    cat: 'Preposition',
    topic: 'Preposition (Between vs Among)',
    q: 'The profits were divided equally ___ the three business partners.',
    opts: ['among', 'between', 'within', 'into'],
    ans: 'among',
    trick: 'TRIK INGATAN CEPAT:\n- AMONG = untuk 3 orang/benda atau lebih (three partners).\n- BETWEEN = untuk 2 pihak saja.'
  },
  {
    cat: 'Gerund',
    topic: 'Gerund Idiom (It\'s no use + V-ing)',
    q: 'It is no use ___ over spilled milk.',
    opts: ['crying', 'to cry', 'cry', 'cried'],
    ans: 'crying',
    trick: 'TRIK INGATAN CEPAT:\n- Frasa paten "It is no use / No good" WAJIB langsung diikuti Verb-ing (crying).'
  },
  {
    cat: 'Gerund',
    topic: 'Gerund Idiom (Be Worth + V-ing)',
    q: 'That historical museum is definitely worth ___ while in town.',
    opts: ['visiting', 'to visit', 'visit', 'visited'],
    ans: 'visiting',
    trick: 'TRIK INGATAN CEPAT:\n- Pasangan paten "Worth" (layak/berharga) selalu diikuti kata kerja Gerund (-ing).'
  },
  {
    cat: 'Pronoun',
    topic: 'Pronoun (Indefinite: Everyone / Somebody)',
    q: 'Everyone in the company ___ expected to submit the report on Friday.',
    opts: ['is', 'are', 'were', 'have been'],
    ans: 'is',
    trick: 'TRIK INGATAN CEPAT:\n- Kata berakhiran -one, -body, -thing (everyone, someone) dihargai sebagai TUNGGAL (is).'
  },
  {
    cat: 'Pronoun',
    topic: 'Pronoun (Reciprocal: Each other vs One another)',
    q: 'The twin brothers always support ___ in difficult times.',
    opts: ['each other', 'one another', 'themselves', 'one other'],
    ans: 'each other',
    trick: 'TRIK INGATAN CEPAT:\n- EACH OTHER khusus untuk 2 orang (kembar).\n- ONE ANOTHER untuk lebih dari 2 orang.'
  },
  {
    cat: 'Concord',
    topic: 'Concord (More than one + Singular)',
    q: 'More than one candidate ___ applied for the managerial position.',
    opts: ['has', 'have', 'are', 'were'],
    ans: 'has',
    trick: 'TRIK INGATAN CEPAT:\n- Ungkapan "More than one + Noun tunggal" tata bahasanya menuntut kata kerja TUNGGAL (has).'
  },
  {
    cat: 'Concord',
    topic: 'Concord (Correlative: Not only... but also)',
    q: 'Not only the coach but also the players ___ proud of the victory.',
    opts: ['were', 'was', 'is', 'has been'],
    ans: 'were',
    trick: 'TRIK INGATAN CEPAT:\n- Not only... but also: Verb tunduk pada subjek terdekatnya (the players = jamak -> WERE).'
  },
  {
    cat: 'Word Order',
    topic: 'Word Order (Inversion Type 3: Had I known)',
    q: '___ known about your arrival, I would have picked you up.',
    opts: ['Had I', 'If I had', 'If did I', 'Did I have'],
    ans: 'Had I',
    trick: 'TRIK INGATAN CEPAT:\n- Bentuk inversi menghilangkan "if": Had + Subject + Verb 3 (Had I known...).'
  },
  {
    cat: 'Word Order',
    topic: 'Word Order (Inversion Formal: Should you need)',
    q: '___ further assistance, please contact customer support.',
    opts: ['Should you need', 'If you will need', 'You need', 'Do you need'],
    ans: 'Should you need',
    trick: 'TRIK INGATAN CEPAT:\n- Pengganti "If you need" yang sangat sopan formal: Should + Subject + Verb 1.'
  },
  {
    cat: 'Preposition',
    topic: 'Preposition (Collocation: Insist on)',
    q: 'She insisted ___ paying for everyone\'s lunch.',
    opts: ['on', 'in', 'to', 'for'],
    ans: 'on',
    trick: 'TRIK INGATAN CEPAT:\n- Pasangan baku: INSIST + ON + Verb-ing (bersikeras untuk melakukan).'
  },
  {
    cat: 'Preposition',
    topic: 'Preposition (Collocation: Prevent from)',
    q: 'Bad weather prevented the ship ___ leaving the harbor.',
    opts: ['from', 'to', 'of', 'by'],
    ans: 'from',
    trick: 'TRIK INGATAN CEPAT:\n- Pasangan baku: PREVENT + objek + FROM + Verb-ing (mencegah dari).'
  },
  {
    cat: 'Passive',
    topic: 'Passive Voice (Need + V-ing = Need to be V3)',
    q: 'Your dirty shoes need ___ before the formal ceremony.',
    opts: ['cleaning', 'clean', 'to clean', 'cleaned'],
    ans: 'cleaning',
    trick: 'TRIK INGATAN CEPAT:\n- Benda mati + NEED + Verb-ing bermakna pasif (butuh dibersihkan = need to be cleaned).'
  },
  {
    cat: 'Adjective',
    topic: 'Adjective (The + Adjective = Plural People)',
    q: 'The government provides free healthcare for the ___.',
    opts: ['elderly', 'elderlies', 'elderly person', 'elderly people\'s'],
    ans: 'elderly',
    trick: 'TRIK INGATAN CEPAT:\n- "The" + kata sifat (The elderly, the poor, the rich) mewakili kaum jamak tanpa perlu akhiran -s.'
  },
  {
    cat: 'Question Tag',
    topic: 'Question Tag (Let\'s -> Shall we)',
    q: 'Let\'s take a short break now, ___?',
    opts: ['shall we', 'will we', 'don\'t we', 'aren\'t we'],
    ans: 'shall we',
    trick: 'TRIK INGATAN CEPAT:\n- Ajakan berawalan "LET\'S" selalu memiliki tag question baku "SHALL WE?".'
  },
  {
    cat: 'Question Tag',
    topic: 'Question Tag (I am -> Aren\'t I)',
    q: 'I am your closest friend, ___?',
    opts: ['aren\'t I', 'am not I', 'amn\'t I', 'don\'t I'],
    ans: 'aren\'t I',
    trick: 'TRIK INGATAN CEPAT:\n- Tag negatif untuk "I am" dalam bahasa Inggris standar adalah "AREN\'T I?".'
  },
  {
    cat: 'Question Tag',
    topic: 'Question Tag (Nobody / Someone -> They)',
    q: 'Nobody answered the phone, ___?',
    opts: ['did they', 'didn\'t they', 'did he', 'didn\'t he'],
    ans: 'did they',
    trick: 'TRIK INGATAN CEPAT:\n- "Nobody" bermakna negatif (tag positif: DID) dan kata gantinya jamak (THEY).'
  },
  {
    cat: 'Gerund',
    topic: 'Gerund vs Infinitive (Object to + V-ing)',
    q: 'Do you object to ___ overtime this weekend?',
    opts: ['working', 'work', 'to work', 'worked'],
    ans: 'working',
    trick: 'TRIK INGATAN CEPAT:\n- "Object to" adalah preposisi phrasal -> wajib diikuti gerund Verb-ing (working).'
  },
  {
    cat: 'Gerund',
    topic: 'Gerund vs Infinitive (Key to + V-ing)',
    q: 'Consistency is the key to ___ fluent English.',
    opts: ['mastering', 'master', 'to master', 'mastered'],
    ans: 'mastering',
    trick: 'TRIK INGATAN CEPAT:\n- "Key to" (kunci untuk mencapai...) selalu diikuti Verb-ing (mastering).'
  },
  {
    cat: 'Verb',
    topic: 'Verb (Causative Pasif: Get/Have + Objek Benda + V3)',
    q: 'She got her car ___ at the workshop yesterday.',
    opts: ['repaired', 'repair', 'to repair', 'repairing'],
    ans: 'repaired',
    trick: 'TRIK INGATAN CEPAT:\n- HAVE/GET + Benda mati (her car) bermakna pasif -> langsung diikuti Verb 3 (repaired).'
  },
  {
    cat: 'Verb',
    topic: 'Verb (Subjunctive: Essential that S + Bare V1)',
    q: 'It is essential that every candidate ___ on time.',
    opts: ['arrive', 'arrives', 'arrived', 'is arriving'],
    ans: 'arrive',
    trick: 'TRIK INGATAN CEPAT:\n- "Essential that..." menuntut kata kerja subjunctive (Verb 1 asli tanpa -s: arrive).'
  },
  {
    cat: 'Word Order',
    topic: 'Word Order (Inversion: Not until... did)',
    q: 'Not until yesterday ___ the shocking news.',
    opts: ['did I hear', 'I heard', 'have I heard', 'I had heard'],
    ans: 'did I hear',
    trick: 'TRIK INGATAN CEPAT:\n- "Not until..." di awal kalimat memicu pembalikan (inversion: Did + Subject + V1).'
  },
  {
    cat: 'Word Order',
    topic: 'Word Order (Embedded Question)',
    q: 'Could you please tell me where ___?',
    opts: ['the post office is', 'is the post office', 'the post office was', 'was the post office'],
    ans: 'the post office is',
    trick: 'TRIK INGATAN CEPAT:\n- Pertanyaan di dalam kalimat (embedded) susunannya kembali normal: Kata Tanya + Subjek + Verb.'
  },
  {
    cat: 'Adjective',
    topic: 'Adjective (Compound Adjective with Hyphen)',
    q: 'They have a ___ son who loves playing football.',
    opts: ['ten-year-old', 'ten-years-old', 'ten year olds', 'ten-year-olds'],
    ans: 'ten-year-old',
    trick: 'TRIK INGATAN CEPAT:\n- Kata sifat majemuk penjelas benda (son) bersifat singular: jangan pernah beri akhiran -s (ten-year-old).'
  },
  {
    cat: 'Adverb',
    topic: 'Adverb (Hard vs Hardly)',
    q: 'He was so exhausted that he could ___ keep his eyes open.',
    opts: ['hardly', 'hard', 'hardest', 'hardlier'],
    ans: 'hardly',
    trick: 'TRIK INGATAN CEPAT:\n- "HARD" = keras/sungguh-sungguh.\n- "HARDLY" = hampir tidak sama sekali (negative adverb).'
  },
  {
    cat: 'Adverb',
    topic: 'Adverb (Fast / Fastly tidak ada)',
    q: 'He drove very ___ to reach the hospital in time.',
    opts: ['fast', 'fastly', 'fasterly', 'fastness'],
    ans: 'fast',
    trick: 'TRIK INGATAN CEPAT:\n- Dalam bahasa Inggris tidak ada kata "fastly". Sifat dan keterangan tetap "FAST".'
  },
  {
    cat: 'Concord',
    topic: 'Concord (Each of / Either of + Singular Verb)',
    q: 'Each of the participants ___ given a certificate.',
    opts: ['was', 'were', 'have been', 'are'],
    ans: 'was',
    trick: 'TRIK INGATAN CEPAT:\n- Subjek "EACH OF..." selalu menuntut kata kerja tunggal (WAS), walau bendanya jamak.'
  },
  {
    cat: 'Concord',
    topic: 'Concord (Neither... Nor: Subjek Terdekat)',
    q: 'Neither the manager nor the employees ___ aware of the policy.',
    opts: ['were', 'was', 'is', 'has been'],
    ans: 'were',
    trick: 'TRIK INGATAN CEPAT:\n- Neither... nor...: Kata kerja tunduk pada subjek terdekat (the employees = jamak -> WERE).'
  },
  {
    cat: 'Pronoun',
    topic: 'Relative Pronoun (Whose = Kepemilikan)',
    q: 'I met an author ___ book won the Pulitzer Prize.',
    opts: ['whose', 'who\'s', 'whom', 'which'],
    ans: 'whose',
    trick: 'TRIK INGATAN CEPAT:\n- WHOSE = kepemilikan (bukunya penulis).\n- WHO\'S = singkatan "who is" atau "who has".'
  },
  {
    cat: 'Parallelism',
    topic: 'Grammar (Parallel Structure)',
    q: 'She likes reading novels, traveling to new places, and ___ photos.',
    opts: ['taking', 'to take', 'take', 'taken'],
    ans: 'taking',
    trick: 'TRIK INGATAN CEPAT:\n- Struktur paralel: reading (-ing), traveling (-ing), maka wajib diakhiri taking (-ing).'
  }
];

export function getFull500GrammarRules(): GrammarRule[] {
  const rules = [...initialGrammarRules];
  let themeIndex = 0;
  for (let i = rules.length + 1; i <= 500; i++) {
    const template = syllabusThemes[themeIndex % syllabusThemes.length];
    themeIndex++;
    rules.push({
      matrix_id: i,
      category: template.cat,
      topic: `${template.topic} #${i}`,
      question: template.q,
      options: template.opts,
      correct_answer: template.ans,
      memory_trick: template.trick,
      current_box: 0,
      next_review: null,
    });
  }
  return rules;
}

export const getFull300GrammarRules = getFull500GrammarRules;
export const getFull200GrammarRules = getFull500GrammarRules;
export const getFull100GrammarRules = getFull500GrammarRules;



