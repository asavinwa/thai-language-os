const songPhrases = [
  {
    section:'Lesson 1', title:'Before this love',
    thai:'ไม่เคยมีใจให้ใครมาก่อน', pronunciation:'mâi khoei mii jai hâi khrai maa gàawn',
    meaning:'I had never given my heart to anyone before.',
    note:'มีใจให้ใคร means to have feelings for someone. มาก่อน adds the sense of “before now”.',
    words:[
      {thai:'ไม่เคย',meaning:'never have',note:'No experience of something up to now.'},
      {thai:'มีใจให้',meaning:'have feelings for',note:'Literally “have heart for”; often romantic.'},
      {thai:'ใคร',meaning:'anyone / who',note:'An unspecified person.'},
      {thai:'มาก่อน',meaning:'before / previously',note:'Shows the state existed before the present point.'}
    ],
    grammar:'ไม่เคย + verb means “have never…”. Adding มาก่อน reinforces that this was true before the present situation.',
    pattern:['ไม่เคย + กริยา + มาก่อน','have never… before'],
    examples:[['ผมไม่เคยมาที่นี่มาก่อน','I have never been here before.'],['ผมไม่เคยกินอันนี้มาก่อน','I have never eaten this before.']],
    turn:'Say one thing you have never done before.'
  },
  {
    section:'Lesson 1', title:'Before this love',
    thai:'ไม่เคยอ่อนให้ความรักเลย', pronunciation:'mâi khoei àawn hâi khwaam-rák loei',
    meaning:'I had never given in to love at all.',
    note:'อ่อนให้ means to yield or soften toward something. เลย strengthens a negative: “not at all”.',
    words:[
      {thai:'ไม่เคย',meaning:'never have',note:'Marks an experience that has never happened.'},
      {thai:'อ่อนให้',meaning:'yield / give in to',note:'To soften or surrender to something.'},
      {thai:'ความรัก',meaning:'love',note:'The noun form of รัก.'},
      {thai:'เลย',meaning:'at all',note:'With a negative, adds emphasis.'}
    ],
    grammar:'ไม่เคย…เลย is a strong way to say something has never happened at all.',
    pattern:['ไม่เคย…เลย','never… at all'],
    examples:[['ผมไม่เคยลืมเลย','I have never forgotten.'],['เขาไม่เคยบ่นเลย','He never complains at all.']],
    turn:'Make a simple sentence with ไม่เคย…เลย.'
  },
  {
    section:'Lesson 1', title:'People before her',
    thai:'จะมีใครๆ มากมาย คุ้นเคย', pronunciation:'jà mii khrai-khrai mâak-maai khún-khoei',
    meaning:'There had been plenty of people I knew.',
    note:'ใครๆ and มากมาย broaden the idea to many people. คุ้นเคย means familiar or well acquainted.',
    words:[
      {thai:'ใครๆ',meaning:'people / anyone',note:'Repetition makes ใคร broad and non-specific.'},
      {thai:'มากมาย',meaning:'many / numerous',note:'More expressive than มาก.'},
      {thai:'คุ้นเคย',meaning:'be familiar with',note:'Know someone or something well enough for it to feel familiar.'}
    ],
    grammar:'Thai often leaves the exact relationship between words implicit in lyrics. คุ้นเคย describes the many people as familiar.',
    pattern:['คุ้นเคยกับ…','be familiar with…'],
    examples:[['ผมคุ้นเคยกับที่นี่','I am familiar with this place.'],['มีคนมากมายที่นี่','There are many people here.']],
    turn:'Name somewhere or someone you are familiar with using คุ้นเคยกับ…'
  },
  {
    section:'Lesson 1', title:'People before her',
    thai:'แต่ไม่เคยมีใครอย่างเธอ', pronunciation:'dtàe mâi khoei mii khrai yàang thəə',
    meaning:'But there had never been anyone like you.',
    note:'อย่างเธอ means “like you” or “someone of your kind”.',
    words:[
      {thai:'แต่',meaning:'but',note:'Introduces the contrast.'},
      {thai:'ไม่เคยมี',meaning:'there has never been',note:'ไม่เคย + มี.'},
      {thai:'ใคร',meaning:'anyone',note:'Any person.'},
      {thai:'อย่างเธอ',meaning:'like you',note:'อย่าง + person/thing creates a comparison.'}
    ],
    grammar:'อย่าง + noun/pronoun means “like…” when comparing people or things.',
    pattern:['ไม่มีใครอย่าง…','there is nobody like…'],
    examples:[['ไม่มีใครอย่างแม่','There is nobody like Mum.'],['ผมไม่เคยเห็นอะไรอย่างนี้','I have never seen anything like this.']],
    turn:'Say “There is nobody like…” about someone you know.'
  },
  {
    section:'Lesson 2', title:'Have I told you?',
    thai:'ฉันเคยบอกกับเธอหรือยัง', pronunciation:'chǎn khoei bàawk gàp thəə rʉ̌ʉ yang',
    meaning:'Have I ever told you?',
    note:'หรือยัง asks whether something has happened yet. เคย adds the sense of “ever”.',
    words:[
      {thai:'ฉัน',meaning:'I',note:'Common informal first-person pronoun, especially in songs.'},
      {thai:'เคย',meaning:'ever / have before',note:'Marks previous experience.'},
      {thai:'บอกกับเธอ',meaning:'tell you',note:'บอก = tell; กับเธอ = to you.'},
      {thai:'หรือยัง',meaning:'yet? / have you?',note:'Asks whether something has happened by now.'}
    ],
    grammar:'เคย + verb + หรือยัง asks whether someone has ever done something by now.',
    pattern:['เคย…หรือยัง','have you ever… yet?'],
    examples:[['เคยไปเชียงใหม่หรือยัง','Have you ever been to Chiang Mai?'],['ผมบอกคุณหรือยัง','Have I told you yet?']],
    turn:'Ask someone whether they have ever done something.'
  },
  {
    section:'Lesson 2', title:'How much you mean',
    thai:'ว่าเธอมีความหมายเพียงใด', pronunciation:'wâa thəə mii khwaam-mǎai phiiang-dai',
    meaning:'How much you mean to me.',
    note:'เพียงใด is a more literary or emotional way to say “how much / to what extent”.',
    words:[
      {thai:'ว่า',meaning:'that',note:'Introduces what was said.'},
      {thai:'เธอ',meaning:'you',note:'Familiar/intimate pronoun.'},
      {thai:'มีความหมาย',meaning:'be meaningful / mean something',note:'Literally “have meaning”.'},
      {thai:'เพียงใด',meaning:'how much / to what extent',note:'Poetic or formal compared with แค่ไหน.'}
    ],
    grammar:'มีความหมาย means “to be meaningful”. In everyday speech, แค่ไหน is more common than เพียงใด.',
    pattern:['มีความหมายกับ/สำหรับ…','mean a lot to…'],
    examples:[['ครอบครัวมีความหมายกับผมมาก','Family means a lot to me.'],['เรื่องนี้มีความหมายมาก','This means a lot.']],
    turn:'Say what means a lot to you.'
  },
  {
    section:'Lesson 2', title:'A numb heart',
    thai:'กับคนที่ใจมันด้านชา', pronunciation:'gàp khon thîi jai man dâan-chaa',
    meaning:'To someone whose heart had gone numb.',
    note:'ด้านชา describes being numb, hardened or emotionally insensitive. ใจ is the emotional heart/mind.',
    words:[
      {thai:'กับคนที่',meaning:'to the person who',note:'Connects back to the person being described.'},
      {thai:'ใจ',meaning:'heart / mind',note:'Core Thai word for inner feeling.'},
      {thai:'มัน',meaning:'it',note:'Here refers informally to the heart.'},
      {thai:'ด้านชา',meaning:'numb / hardened',note:'Emotionally unresponsive or desensitised.'}
    ],
    grammar:'คนที่ + clause means “the person who…”. Thai commonly describes people with a following ที่-clause.',
    pattern:['คนที่ + ประโยค','the person who…'],
    examples:[['คนที่ช่วยผม','the person who helped me'],['คนที่พูดภาษาไทย','the person who speaks Thai']],
    turn:'Describe someone using คนที่ + a simple verb.'
  },
  {
    section:'Lesson 2', title:'From today onward',
    thai:'จากวันนี้และทุกเวลา', pronunciation:'jàak wan níi láe thúk wee-laa',
    meaning:'From today, at every moment.',
    note:'จากวันนี้ means “from today”. ทุกเวลา is literally “every time/moment”, giving the line a forever-like feeling.',
    words:[
      {thai:'จาก',meaning:'from',note:'Marks a starting point.'},
      {thai:'วันนี้',meaning:'today',note:'วัน + นี้.'},
      {thai:'และ',meaning:'and',note:'Connects the two time expressions.'},
      {thai:'ทุกเวลา',meaning:'all the time / every moment',note:'ทุก = every; เวลา = time.'}
    ],
    grammar:'จาก + time marks the point from which something begins.',
    pattern:['จากวันนี้…','from today…'],
    examples:[['จากวันนี้ผมจะฝึกมากขึ้น','From today I will practise more.'],['จากพรุ่งนี้ผมจะเริ่มใหม่','From tomorrow I will start again.']],
    turn:'Complete: จากวันนี้ผมจะ…'
  },
  {
    section:'Lesson 2', title:'Only one thing to say',
    thai:'จะมีแต่คำว่ารักเธอ', pronunciation:'jà mii dtàe kham wâa rák thəə',
    meaning:'There will be nothing but the words “I love you”.',
    note:'มีแต่ means “there is only / nothing but”. คำว่า introduces a word or expression itself.',
    words:[
      {thai:'จะ',meaning:'will',note:'Future or intention marker.'},
      {thai:'มีแต่',meaning:'have only / nothing but',note:'Limits what follows to one thing.'},
      {thai:'คำว่า',meaning:'the word(s) / phrase',note:'Used when talking about a word or expression.'},
      {thai:'รักเธอ',meaning:'love you',note:'Subject omitted because it is understood.'}
    ],
    grammar:'คำว่า + expression means “the word/phrase…”. มีแต่ + noun means “there is only…”.',
    pattern:['มีแต่…','there is only / nothing but…'],
    examples:[['วันนี้มีแต่งาน','Today there is nothing but work.'],['ผมจำได้แต่คำนี้','I only remember this word.']],
    turn:'Say one thing you have “nothing but” today using มีแต่…'
  },
  {
    section:'Lesson 3', title:'The old me',
    thai:'จากฉันคนเดิม จากรักไม่เป็น', pronunciation:'jàak chǎn khon doem jàak rák mâi pen',
    meaning:'From the old me, who did not know how to love.',
    note:'คนเดิม means the same person / the old version of someone. Verb + ไม่เป็น means not knowing how to do that action.',
    words:[
      {thai:'ฉันคนเดิม',meaning:'the old me / the same me',note:'คนเดิม = the person as before.'},
      {thai:'รัก',meaning:'love',note:'Love or to love.'},
      {thai:'ไม่เป็น',meaning:'not know how to',note:'Used after a verb for a skill or ability you cannot do.'}
    ],
    grammar:'Verb + เป็น means know how to do something; verb + ไม่เป็น means not know how.',
    pattern:['กริยา + ไม่เป็น','do not know how to…'],
    examples:[['ผมว่ายน้ำไม่เป็น','I cannot swim / do not know how to swim.'],['ผมเต้นไม่เป็น','I do not know how to dance.']],
    turn:'Say one thing you do not know how to do using …ไม่เป็น.'
  },
  {
    section:'Lesson 3', title:'Loving more than anyone',
    thai:'จะขอเป็นคนที่รักเธอยิ่งกว่าคนไหนๆ', pronunciation:'jà khǎaw pen khon thîi rák thəə yîng gwàa khon nǎi-nǎi',
    meaning:'I want to be the person who loves you more than anyone.',
    note:'จะขอ… expresses a heartfelt intention. ยิ่งกว่า means “even more than / more than”.',
    words:[
      {thai:'จะขอ',meaning:'I would like / I will ask to',note:'Often used to express a sincere intention.'},
      {thai:'เป็นคนที่',meaning:'be the person who',note:'Introduces a description of the person.'},
      {thai:'รักเธอ',meaning:'love you',note:'The action describing that person.'},
      {thai:'ยิ่งกว่า',meaning:'more than',note:'Comparative expression.'},
      {thai:'คนไหนๆ',meaning:'anyone / anybody',note:'Repetition broadens คนไหน.'}
    ],
    grammar:'A + ยิ่งกว่า + B compares degree: “A more than B”. คนที่ + verb means “the person who…”.',
    pattern:['…ยิ่งกว่า…','…more than…'],
    examples:[['ผมชอบอันนี้มากกว่าอันนั้น','I like this more than that.'],['วันนี้ร้อนกว่าเมื่อวาน','Today is hotter than yesterday.']],
    turn:'Compare two things using กว่า.'
  },
  {
    section:'Lesson 4', title:'From now on, you',
    thai:'จากนี้คือเธอ', pronunciation:'jàak níi khʉʉ thəə',
    meaning:'From now on, it is you.',
    note:'จากนี้ literally means “from this point”. In context it carries “from now on”.',
    words:[
      {thai:'จากนี้',meaning:'from now / from here',note:'A starting point from the present.'},
      {thai:'คือ',meaning:'is / equals',note:'Identifies what something is.'},
      {thai:'เธอ',meaning:'you',note:'The person being identified.'}
    ],
    grammar:'จากนี้ can stand alone for “from now on”, especially when the continuation is obvious.',
    pattern:['จากนี้…','from now on…'],
    examples:[['จากนี้ไปผมจะพูดไทยมากขึ้น','From now on I will speak more Thai.'],['จากนี้เราทำยังไง','What do we do from here?']],
    turn:'Make one sentence beginning จากนี้…'
  },
  {
    section:'Lesson 4', title:'Until the end',
    thai:'จากนี้จนวันตาย', pronunciation:'jàak níi jon wan dtaai',
    meaning:'From now until the day I die.',
    note:'จน marks an endpoint: “until”. วันตาย literally means “day of death”.',
    words:[
      {thai:'จากนี้',meaning:'from now',note:'Starting now.'},
      {thai:'จน',meaning:'until',note:'Marks the endpoint of a period.'},
      {thai:'วันตาย',meaning:'day of death / dying day',note:'Poetic and dramatic in this context.'}
    ],
    grammar:'จาก…จน… creates a span from one point to another.',
    pattern:['จาก…จน…','from… until…'],
    examples:[['จากเช้าจนเย็น','From morning until evening.'],['ทำงานจนดึก','Work until late.']],
    turn:'Describe a time span using จาก…จน…'
  },
  {
    section:'Lesson 4', title:'The title line',
    thai:'เธอคือสุดท้ายของทั้งชีวิตและหัวใจ', pronunciation:'thəə khʉʉ sùt-tháai khǎawng tháng chii-wít láe hǔa-jai',
    meaning:'You are the final one for my whole life and heart.',
    note:'This is the emotional payoff of the title. ทั้ง means the whole/all of something.',
    words:[
      {thai:'เธอคือ',meaning:'you are',note:'คือ identifies the person.'},
      {thai:'สุดท้าย',meaning:'last / final',note:'The title word.'},
      {thai:'ทั้ง',meaning:'all / whole',note:'Covers the entire thing or period.'},
      {thai:'ชีวิต',meaning:'life',note:'A person’s life.'},
      {thai:'หัวใจ',meaning:'heart',note:'Literal heart, also emotional heart.'}
    ],
    grammar:'ทั้ง + noun means “the whole/all of…”. สุดท้าย can mean “last” or “final”, and elsewhere can mean “in the end”.',
    pattern:['ทั้ง + คำนาม','the whole / all of…'],
    examples:[['ทั้งวัน','all day'],['ทั้งชีวิต','all my life']],
    turn:'Say “all day”, “all night”, and “all my life”.'
  },
  {
    section:'Lesson 5', title:'No matter which day',
    thai:'ไม่ว่าวันไหน', pronunciation:'mâi wâa wan nǎi',
    meaning:'No matter which day.',
    note:'ไม่ว่า introduces “no matter…”. วันไหน literally means “which day”.',
    words:[
      {thai:'ไม่ว่า',meaning:'no matter',note:'Introduces an unrestricted choice or condition.'},
      {thai:'วันไหน',meaning:'which day / any day',note:'วัน + ไหน.'}
    ],
    grammar:'ไม่ว่า + question word means “no matter…”: ไม่ว่าใคร, ไม่ว่าที่ไหน, ไม่ว่าเมื่อไร.',
    pattern:['ไม่ว่า + คำถาม','no matter + who/where/when…'],
    examples:[['ไม่ว่าใคร','no matter who'],['ไม่ว่าที่ไหน','no matter where']],
    turn:'Make two “no matter…” phrases with ไม่ว่า.'
  },
  {
    section:'Lesson 5', title:'No matter when',
    thai:'ไม่ว่าเมื่อไร', pronunciation:'mâi wâa mʉ̂a-rai',
    meaning:'No matter when.',
    note:'เมื่อไร means “when?”. After ไม่ว่า it becomes “whenever / no matter when”.',
    words:[
      {thai:'ไม่ว่า',meaning:'no matter',note:'Removes the restriction.'},
      {thai:'เมื่อไร',meaning:'when',note:'Question word for time.'}
    ],
    grammar:'The same ไม่ว่า pattern works with many question words.',
    pattern:['ไม่ว่าเมื่อไร…','no matter when…'],
    examples:[['ไม่ว่าเมื่อไรก็โทรมาได้','You can call no matter when.'],['ไม่ว่าเมื่อไรผมก็พร้อม','I am ready whenever.']],
    turn:'Say something you can do “whenever” using ไม่ว่าเมื่อไร.'
  },
  {
    section:'Lesson 5', title:'The simplest ending',
    thai:'ฉันรักเธอ', pronunciation:'chǎn rák thəə',
    meaning:'I love you.',
    note:'A simple subject–verb–object sentence. In everyday speech the subject can often be dropped when obvious.',
    words:[
      {thai:'ฉัน',meaning:'I',note:'Informal first-person pronoun.'},
      {thai:'รัก',meaning:'love',note:'Verb meaning to love.'},
      {thai:'เธอ',meaning:'you',note:'Familiar/intimate “you”.'}
    ],
    grammar:'Thai does not conjugate verbs for person. รัก stays the same regardless of who loves whom.',
    pattern:['ประธาน + รัก + คน','subject + loves + person'],
    examples:[['ผมรักครอบครัว','I love my family.'],['รักเมืองไทย','I love Thailand.']],
    turn:'Say one simple sentence with รัก.'
  }
];

let currentIndex = 0;
const savedKey = 'thai-os-saved-phrases';
const saved = new Set(JSON.parse(localStorage.getItem(savedKey) || '[]'));

const byId = (id) => document.getElementById(id);
const els = {
  sectionLabel: byId('section-label'),
  phraseNumber: byId('phrase-number'),
  phraseTotal: byId('phrase-total'),
  sectionTitle: byId('section-title'),
  thai: byId('phrase-thai'),
  pronunciation: byId('phrase-pronunciation'),
  meaning: byId('phrase-meaning'),
  note: byId('phrase-note'),
  words: byId('word-breakdown-list'),
  grammar: byId('phrase-grammar'),
  patternThai: byId('pattern-thai'),
  patternMeaning: byId('pattern-meaning'),
  examples: byId('phrase-examples'),
  turn: byId('your-turn-prompt'),
  previous: byId('previous-phrase'),
  next: byId('next-phrase'),
  dots: byId('lesson-dots'),
  save: byId('save-phrase'),
  form: byId('guided-practice-form'),
  input: byId('guided-practice-input'),
  feedback: byId('guided-practice-feedback')
};

function renderDots() {
  els.dots.innerHTML = '';
  songPhrases.forEach((_, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `lesson-dot${index === currentIndex ? ' active' : ''}`;
    button.setAttribute('aria-label', `Phrase ${index + 1}`);
    button.addEventListener('click', () => {
      currentIndex = index;
      render();
    });
    els.dots.appendChild(button);
  });
}

function renderWords(words) {
  els.words.innerHTML = '';
  words.forEach((word) => {
    const row = document.createElement('div');
    row.className = 'word-breakdown-row';

    const thai = document.createElement('div');
    thai.className = 'word-thai';
    thai.textContent = word.thai;

    const meaning = document.createElement('div');
    meaning.className = 'word-meaning';
    meaning.textContent = word.meaning;

    const note = document.createElement('div');
    note.className = 'word-note';
    note.textContent = word.note;

    row.append(thai, meaning, note);
    els.words.appendChild(row);
  });
}

function renderExamples(examples) {
  els.examples.innerHTML = '';
  examples.forEach(([thaiText, meaningText]) => {
    const row = document.createElement('div');
    row.className = 'example-row';
    const thai = document.createElement('p');
    thai.className = 'thai';
    thai.textContent = thaiText;
    const meaning = document.createElement('p');
    meaning.textContent = meaningText;
    row.append(thai, meaning);
    els.examples.appendChild(row);
  });
}

function render() {
  const phrase = songPhrases[currentIndex];
  els.sectionLabel.textContent = phrase.section;
  els.phraseNumber.textContent = currentIndex + 1;
  els.phraseTotal.textContent = songPhrases.length;
  els.sectionTitle.textContent = phrase.title;
  els.thai.textContent = phrase.thai;
  els.pronunciation.textContent = phrase.pronunciation;
  els.meaning.textContent = phrase.meaning;
  els.note.textContent = phrase.note;
  renderWords(phrase.words);
  els.grammar.textContent = phrase.grammar;
  els.patternThai.textContent = phrase.pattern[0];
  els.patternMeaning.textContent = phrase.pattern[1];
  renderExamples(phrase.examples);
  els.turn.textContent = phrase.turn;

  els.previous.disabled = currentIndex === 0;
  els.next.disabled = currentIndex === songPhrases.length - 1;

  const isSaved = saved.has(phrase.thai);
  els.save.textContent = isSaved ? '★ Saved' : '☆ Save phrase';
  els.save.classList.toggle('saved', isSaved);
  els.save.setAttribute('aria-pressed', String(isSaved));

  els.input.value = '';
  els.feedback.textContent = '';
  els.feedback.className = 'feedback';
  renderDots();
}

els.previous.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    render();
  }
});

els.next.addEventListener('click', () => {
  if (currentIndex < songPhrases.length - 1) {
    currentIndex += 1;
    render();
  }
});

els.save.addEventListener('click', () => {
  const key = songPhrases[currentIndex].thai;
  if (saved.has(key)) saved.delete(key);
  else saved.add(key);
  localStorage.setItem(savedKey, JSON.stringify([...saved]));
  render();
});

els.form.addEventListener('submit', (event) => {
  event.preventDefault();
  const answer = els.input.value.replace(/\s+/g, '').trim();
  const target = songPhrases[currentIndex].thai.replace(/\s+/g, '').trim();
  const correct = answer === target;
  els.feedback.textContent = correct ? 'Correct ✓' : `Try again — ${songPhrases[currentIndex].thai}`;
  els.feedback.className = `feedback ${correct ? 'success' : 'error'}`;
});

render();
