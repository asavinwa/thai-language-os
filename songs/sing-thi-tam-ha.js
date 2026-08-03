const songPhrases = [
  {section:'Lesson 1',title:'Loneliness and feeling lost',thai:'ติดอยู่ในชีวิตที่ช่างเดียวดาย',pronunciation:'dtìt yùu nai chii-wít thîi châang diaao-daai',meaning:'Stuck in such a lonely life.',note:'ติดอยู่ means to be stuck. ช่าง adds emotional emphasis: “so” or “such”.'},
  {section:'Lesson 1',title:'Loneliness and feeling lost',thai:'เดินอยู่บนถนนที่ไร้จุดหมาย',pronunciation:'dern yùu bon thà-nǒn thîi rái jùt-mǎai',meaning:'Walking along a road with no destination.',note:'ไร้ is a literary “without”. จุดหมาย can mean a destination or a goal.'},
  {section:'Lesson 1',title:'Loneliness and feeling lost',thai:'และแม้พบเจอผู้คนมากมาย',pronunciation:'láe máe phóp-jer phûu-khon mâak-maai',meaning:'And even though I meet so many people.',note:'แม้ means “even though”. พบเจอ means to meet or encounter.'},
  {section:'Lesson 1',title:'Loneliness and feeling lost',thai:'ภายในใจยังเหมือนบางอย่างขาดหาย',pronunciation:'phaai-nai jai yang mʉ̌an baang-yàang khàat-hǎai',meaning:'Inside, it still feels as though something is missing.',note:'บางอย่าง means something. ขาดหาย means missing or absent.'},

  {section:'Lesson 2',title:'Searching and losing hope',thai:'สิ่งใดที่ใจฉันนั้นคอยมานาน',pronunciation:'sìng dai thîi jai chǎn nán khoi maa naan',meaning:'Whatever it is that my heart has long been waiting for.',note:'สิ่งใด is a poetic “what thing”. คอย means to wait or keep waiting.'},
  {section:'Lesson 2',title:'Searching and losing hope',thai:'ยังคงอยากจะค้นให้เจอสักครั้ง',pronunciation:'yang-khong yàak jà khón hâi jer sàk khráng',meaning:'I still want to search until I find it, just once.',note:'ให้เจอ means until it is found. สักครั้ง means at least once.'},
  {section:'Lesson 2',title:'Searching and losing hope',thai:'แม้คืนและวันจะเลยผ่านไป',pronunciation:'máe khʉʉn láe wan jà loei phàan pai',meaning:'Even as nights and days pass by.',note:'เลยผ่านไป gives the sense of time passing and moving on.'},
  {section:'Lesson 2',title:'Searching and losing hope',thai:'จนบางทีก็เริ่มรู้สึกหมดหวัง',pronunciation:'jon baang-thii gâw rœ̂œm rúu-sʉ̀k mòt-wǎng',meaning:'Until sometimes I begin to feel hopeless.',note:'จน introduces a result. หมดหวัง means to lose hope.'},

  {section:'Lesson 3',title:'Meeting her',thai:'แต่เมื่อได้พบเธอ',pronunciation:'dtàe mʉ̂a dâi phóp thəə',meaning:'But when I met you.',note:'ได้พบ suggests finally getting the chance to meet someone.'},
  {section:'Lesson 3',title:'Meeting her',thai:'เธอเปลี่ยนให้โลกนี้ไม่เหมือนเก่า',pronunciation:'thəə plìan hâi lôok níi mâi mʉ̌an gào',meaning:'You changed this world so it was no longer as before.',note:'เปลี่ยนให้… means to change something so that…'},
  {section:'Lesson 3',title:'Meeting her',thai:'เธอทำให้ฉันนั้นได้เข้าใจ',pronunciation:'thəə tham hâi chǎn nán dâi khâo-jai',meaning:'You made me understand.',note:'ทำให้ is an essential structure meaning to make or cause someone to do something.'},
  {section:'Lesson 3',title:'Meeting her',thai:'เวลาที่เสียไป ฉันเสียไปเพื่อรอพบใคร',pronunciation:'wee-laa thîi sǐa pai, chǎn sǐa pai phʉ̂a raw phóp khrai',meaning:'The time I lost was spent waiting to meet someone.',note:'The lyric reframes “lost time” as time spent waiting for the right person.'},

  {section:'Lesson 4',title:'The chorus',thai:'เธอคือสิ่งที่ฉันตามหา',pronunciation:'thəə khʉʉ sìng thîi chǎn dtaam-hǎa',meaning:'You are what I have been looking for.',note:'คือ identifies what something is. สิ่งที่ฉันตามหา is “the thing that I search for”.'},
  {section:'Lesson 4',title:'The chorus',thai:'คือสิ่งที่ฉันขาดหาย',pronunciation:'khʉʉ sìng thîi chǎn khàat-hǎai',meaning:'You are the thing that was missing from me.',note:'The subject เธอ is omitted because it is understood from the previous line.'},
  {section:'Lesson 4',title:'The chorus',thai:'มาเปลี่ยนชีวิตในวันนี้',pronunciation:'maa plìan chii-wít nai wan níi',meaning:'You came and changed my life today.',note:'มา + verb often expresses coming to do something or a change that has arrived.'},
  {section:'Lesson 4',title:'The chorus',thai:'เธอคือคนที่ฉันใฝ่ฝัน',pronunciation:'thəə khʉʉ khon thîi chǎn fàai-fǎn',meaning:'You are the person I have dreamed of.',note:'ใฝ่ฝัน means to dream of or deeply aspire to something.'},
  {section:'Lesson 4',title:'The chorus',thai:'คือคนที่ฉันเฝ้ารอ',pronunciation:'khʉʉ khon thîi chǎn fâo-raw',meaning:'The person I have been waiting for.',note:'เฝ้ารอ is stronger and more emotional than simply รอ.'},
  {section:'Lesson 4',title:'The chorus',thai:'เพียงพอแล้วแค่มีเธอกับฉัน',pronunciation:'phiiang-phaw láeo khâe mii thəə gàp chǎn',meaning:'It is enough just to have you and me.',note:'แค่ means just or only. เพียงพอแล้ว means that is enough now.'},
  {section:'Lesson 4',title:'The chorus',thai:'อยู่เคียงข้างกันตลอดไป',pronunciation:'yùu khiang-khâang gan dtà-lòot pai',meaning:'Staying beside each other forever.',note:'เคียงข้างกัน means to remain beside one another.'},

  {section:'Lesson 5',title:'Commitment',thai:'ไม่ว่าวันพรุ่งนี้จะเป็นอย่างไร',pronunciation:'mâi wâa wan phrûng-níi jà pen yàang-rai',meaning:'No matter what tomorrow will be like.',note:'ไม่ว่า…จะ… is the standard pattern for “no matter…”.'},
  {section:'Lesson 5',title:'Commitment',thai:'จะไม่ปล่อยเวลาให้เสียอีกแล้ว',pronunciation:'jà mâi plòi wee-laa hâi sǐa ìik láeo',meaning:'I will not let any more time go to waste.',note:'ปล่อย…ให้… means to let or allow something to happen.'},
  {section:'Lesson 5',title:'Commitment',thai:'จะใช้เพื่อทำให้เธอได้รู้ว่า',pronunciation:'jà chái phʉ̂a tham hâi thəə dâi rúu wâa',meaning:'I will use it to let you know that…',note:'The omitted object is time. Thai often leaves repeated information unstated.'},
  {section:'Lesson 5',title:'Commitment',thai:'เธอมีความหมายเพียงใดสำหรับฉัน',pronunciation:'thəə mii khwaam-mǎai phiiang-dai sǎm-ràp chǎn',meaning:'How much you mean to me.',note:'มีความหมายสำหรับ… means to be meaningful to someone. เพียงใด is a poetic “how much”.'},

  {section:'Lesson 6',title:'Repetition and variation',thai:'เพราะเมื่อได้พบเธอ',pronunciation:'phráw mʉ̂a dâi phóp thəə',meaning:'Because when I met you.',note:'The earlier verse uses แต่เมื่อ, “but when”. Here เพราะเมื่อ means “because when”.'},
  {section:'Lesson 6',title:'Repetition and variation',thai:'เพียงพอแล้วแค่มีเธอกับฉัน อยู่เคียงข้างกัน',pronunciation:'phiiang-phaw láeo khâe mii thəə gàp chǎn, yùu khiang-khâang gan',meaning:'It is enough just to have you and me beside each other.',note:'The shortened ending drops ตลอดไป, creating a brief pause before the final full chorus.'}
];

let currentPhrase = Number(localStorage.getItem('sing-thi-tam-ha-current') || 0);
currentPhrase = Math.max(0, Math.min(currentPhrase, songPhrases.length - 1));

const elements = {
  sectionLabel: document.getElementById('section-label'),
  sectionTitle: document.getElementById('section-title'),
  number: document.getElementById('phrase-number'),
  total: document.getElementById('phrase-total'),
  thai: document.getElementById('phrase-thai'),
  pronunciation: document.getElementById('phrase-pronunciation'),
  meaning: document.getElementById('phrase-meaning'),
  note: document.getElementById('phrase-note'),
  previous: document.getElementById('previous-phrase'),
  next: document.getElementById('next-phrase'),
  dots: document.getElementById('lesson-dots'),
  form: document.getElementById('guided-practice-form'),
  input: document.getElementById('guided-practice-input'),
  feedback: document.getElementById('guided-practice-feedback')
};

elements.total.textContent = songPhrases.length;

songPhrases.forEach((phrase, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'lesson-dot';
  button.setAttribute('aria-label', `Go to phrase ${index + 1}: ${phrase.thai}`);
  button.addEventListener('click', () => showPhrase(index));
  elements.dots.appendChild(button);
});

function showPhrase(index) {
  currentPhrase = Math.max(0, Math.min(index, songPhrases.length - 1));
  const phrase = songPhrases[currentPhrase];
  elements.sectionLabel.textContent = phrase.section;
  elements.sectionTitle.textContent = phrase.title;
  elements.number.textContent = currentPhrase + 1;
  elements.thai.textContent = phrase.thai;
  elements.pronunciation.textContent = phrase.pronunciation;
  elements.meaning.textContent = phrase.meaning;
  elements.note.textContent = phrase.note;
  elements.previous.disabled = currentPhrase === 0;
  elements.next.disabled = currentPhrase === songPhrases.length - 1;
  elements.next.textContent = currentPhrase === songPhrases.length - 1 ? 'End of song' : 'Next phrase →';
  elements.input.value = '';
  elements.feedback.textContent = '';
  elements.feedback.className = 'feedback';
  [...elements.dots.children].forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === currentPhrase));
  localStorage.setItem('sing-thi-tam-ha-current', currentPhrase);
}

elements.previous.addEventListener('click', () => showPhrase(currentPhrase - 1));
elements.next.addEventListener('click', () => showPhrase(currentPhrase + 1));

document.addEventListener('keydown', event => {
  if (document.activeElement === elements.input) return;
  if (event.key === 'ArrowLeft') showPhrase(currentPhrase - 1);
  if (event.key === 'ArrowRight') showPhrase(currentPhrase + 1);
});

elements.form.addEventListener('submit', event => {
  event.preventDefault();
  const answer = songPhrases[currentPhrase].thai.replace(/\s+/g, ' ').trim();
  const value = elements.input.value.replace(/\s+/g, ' ').trim();
  if (value === answer) {
    elements.feedback.textContent = 'ถูกต้อง — correct.';
    elements.feedback.className = 'feedback success';
  } else {
    elements.feedback.textContent = `Not quite. Correct phrase: ${answer}`;
    elements.feedback.className = 'feedback error';
  }
});

showPhrase(currentPhrase);