const songPhrases = [
  {section:'Lesson 1',title:'The title and commitment',thai:'คนสุดท้าย',pronunciation:'khon sùt-tháai',meaning:'the last person / the final person',note:'สุดท้าย means last or final. With คน it describes the person as the final one in a sequence or relationship.',words:[['คน','person / people','A person, or people in general.'],['สุดท้าย','last / final','The final one in a sequence.']],grammar:'Thai often puts the describing word after the noun: คน + สุดท้าย = the last person.',pattern:['คำนาม + สุดท้าย','the last / final + noun'],examples:[['วันสุดท้าย','the last day'],['ครั้งสุดท้าย','the last time']],turn:'Say “the last day” and “the last time” in Thai.'},
  {section:'Lesson 1',title:'Talking about love',thai:'รักเธอ',pronunciation:'rák thəə',meaning:'love you / I love you',note:'Thai often drops the subject when it is obvious from context, so รักเธอ can naturally mean “I love you”.',words:[['รัก','love / to love','A very common verb for romantic or affectionate love.'],['เธอ','you / she','Familiar and intimate pronoun, common in songs.']],grammar:'The subject can be omitted when context makes it clear. Verb + object is enough.',pattern:['รัก + คน','love + someone'],examples:[['รักครอบครัว','love my family'],['รักเมืองไทย','love Thailand']],turn:'Say one thing or person you love using รัก.'},
  {section:'Lesson 2',title:'From now on',thai:'จากนี้ไป',pronunciation:'jàak níi bpai',meaning:'from now on',note:'จาก means from, นี้ means this, and ไป pushes the meaning forward. Together they form a very useful time phrase.',words:[['จาก','from','Marks a starting point.'],['นี้','this','Refers to the current point.'],['ไป','go / onward','Adds the sense of continuing forward.']],grammar:'จาก + time/place + ไป can describe continuing forward from a point.',pattern:['จากนี้ไป…','from now on…'],examples:[['จากนี้ไปผมจะพูดภาษาไทยมากขึ้น','From now on I’ll speak more Thai.'],['จากนี้ไปต้องฝึกทุกอาทิตย์','From now on I need to practise every week.']],turn:'Complete: จากนี้ไปผมจะ…'},
  {section:'Lesson 2',title:'Talking about a whole life',thai:'ทั้งชีวิต',pronunciation:'tháng chii-wít',meaning:'the whole life / all one’s life',note:'ทั้ง means all or the whole of something. It is extremely reusable in everyday Thai.',words:[['ทั้ง','all / whole','Covers the entire amount or period.'],['ชีวิต','life','A person’s life.']],grammar:'ทั้ง + noun means the whole/all of that noun.',pattern:['ทั้ง + เวลา/สิ่งของ','all / the whole…'],examples:[['ทั้งวัน','all day'],['ทั้งคืน','all night']],turn:'Say “all day” and “all night”.'},
  {section:'Lesson 3',title:'Talking about the heart',thai:'ใจ',pronunciation:'jai',meaning:'heart / mind / inner feeling',note:'ใจ appears in a huge number of Thai words about emotion, personality and mental state.',words:[['ใจ','heart / mind','A core Thai concept used in many compounds.']],grammar:'ใจ combines with other words to create emotional vocabulary.',pattern:['___ + ใจ','emotion / state of mind'],examples:[['ดีใจ','glad / happy'],['เสียใจ','sorry / sad'],['เข้าใจ','understand']],turn:'Say one sentence using ดีใจ, เสียใจ or เข้าใจ.'},
  {section:'Lesson 3',title:'Talking about someone',thai:'คน',pronunciation:'khon',meaning:'person / people',note:'คน is one of the highest-value nouns in Thai because it combines easily with descriptions.',words:[['คน','person / people','Used for people and as a classifier for humans.']],grammar:'Put a description after คน: คนไทย, คนดี, คนสุดท้าย.',pattern:['คน + คำบรรยาย','a person who is…'],examples:[['คนไทย','Thai person'],['คนดี','good person']],turn:'Describe two kinds of people with คน + adjective/noun.'},
  {section:'Lesson 4',title:'Talking about endings',thai:'สุดท้าย',pronunciation:'sùt-tháai',meaning:'last / finally / in the end',note:'สุดท้าย works both as an adjective and as an adverbial idea meaning “finally” or “in the end”.',words:[['สุดท้าย','last / finally','Final in sequence or eventual outcome.']],grammar:'สุดท้าย can modify a noun or stand at the start of a clause to mean “in the end”.',pattern:['สุดท้าย…','in the end / finally…'],examples:[['สุดท้ายก็เข้าใจ','In the end, I understood.'],['นี่คือครั้งสุดท้าย','This is the last time.']],turn:'Say something that happened “in the end” using สุดท้าย.'}
];

let currentIndex = 0;
const savedKey = 'thai-os-saved-phrases';
const saved = new Set(JSON.parse(localStorage.getItem(savedKey) || '[]'));

const byId = (id) => document.getElementById(id);
const els = {
  sectionLabel: byId('section-label'), phraseNumber: byId('phrase-number'), phraseTotal: byId('phrase-total'),
  sectionTitle: byId('section-title'), thai: byId('phrase-thai'), pronunciation: byId('phrase-pronunciation'),
  meaning: byId('phrase-meaning'), note: byId('phrase-note'), words: byId('word-breakdown-list'), grammar: byId('phrase-grammar'),
  patternThai: byId('pattern-thai'), patternMeaning: byId('pattern-meaning'), examples: byId('phrase-examples'), turn: byId('your-turn-prompt'),
  previous: byId('previous-phrase'), next: byId('next-phrase'), dots: byId('lesson-dots'), save: byId('save-phrase'),
  form: byId('guided-practice-form'), input: byId('guided-practice-input'), feedback: byId('guided-practice-feedback')
};

function renderDots(){
  els.dots.innerHTML='';
  songPhrases.forEach((_,i)=>{
    const b=document.createElement('button'); b.type='button'; b.className=`lesson-dot${i===currentIndex?' active':''}`;
    b.setAttribute('aria-label',`Phrase ${i+1}`); b.addEventListener('click',()=>{currentIndex=i;render();}); els.dots.appendChild(b);
  });
}

function render(){
  const p=songPhrases[currentIndex];
  els.sectionLabel.textContent=p.section; els.phraseNumber.textContent=currentIndex+1; els.phraseTotal.textContent=songPhrases.length;
  els.sectionTitle.textContent=p.title; els.thai.textContent=p.thai; els.pronunciation.textContent=p.pronunciation; els.meaning.textContent=p.meaning; els.note.textContent=p.note;
  els.words.innerHTML=''; p.words.forEach(([thai,meaning,note])=>{ const div=document.createElement('div'); div.className='word-breakdown-item'; div.innerHTML=`<strong class="thai">${thai}</strong><span><b>${meaning}</b><small>${note}</small></span>`; els.words.appendChild(div); });
  els.grammar.textContent=p.grammar; els.patternThai.textContent=p.pattern[0]; els.patternMeaning.textContent=p.pattern[1];
  els.examples.innerHTML=''; p.examples.forEach(([thai,meaning])=>{ const div=document.createElement('p'); div.innerHTML=`<strong class="thai">${thai}</strong><br><span>${meaning}</span>`; els.examples.appendChild(div); });
  els.turn.textContent=p.turn; els.previous.disabled=currentIndex===0; els.next.disabled=currentIndex===songPhrases.length-1;
  const isSaved=saved.has(p.thai); els.save.textContent=isSaved?'★ Saved':'☆ Save phrase'; els.save.setAttribute('aria-pressed',String(isSaved));
  els.input.value=''; els.feedback.textContent=''; renderDots();
}

els.previous.addEventListener('click',()=>{if(currentIndex>0){currentIndex--;render();}});
els.next.addEventListener('click',()=>{if(currentIndex<songPhrases.length-1){currentIndex++;render();}});
els.save.addEventListener('click',()=>{const key=songPhrases[currentIndex].thai; saved.has(key)?saved.delete(key):saved.add(key); localStorage.setItem(savedKey,JSON.stringify([...saved])); render();});
els.form.addEventListener('submit',(e)=>{e.preventDefault(); const answer=els.input.value.replace(/\s+/g,'').trim(); const target=songPhrases[currentIndex].thai.replace(/\s+/g,'').trim(); els.feedback.textContent=answer===target?'Correct ✓':`Try again — ${songPhrases[currentIndex].thai}`; els.feedback.className=`feedback ${answer===target?'success':'error'}`;});
render();