const songPhrases = [
  {
    section:'Lesson 1', title:'Everything feels different',
    thai:'ไม่รู้ว่าเป็นอะไร คล้าย ๆ โลกมันเปลี่ยนไป',
    pronunciation:'mâi rúu wâa bpen à-rai, kláai kláai lôok man bplìan bpai',
    meaning:'I don’t know what’s come over me; it feels like the whole world has changed.',
    note:'ไม่รู้ว่าเป็นอะไร is a very useful everyday way to say “I don’t know what’s wrong / what’s come over me.” คล้าย ๆ softens the comparison: “it’s kind of like…”.',
    words:[['ไม่รู้ว่า','don’t know that / what'],['เป็นอะไร','what is going on / what is wrong'],['คล้าย ๆ','kind of like / as if'],['โลก','world'],['มัน','it; colloquial emphasis'],['เปลี่ยนไป','has changed / changed away from before']],
    grammar:'เป็นอะไร often asks what is happening with someone, not literally “what is it?”. เปลี่ยนไป presents a change away from a previous state.',
    pattern:'ไม่รู้ว่าเป็นอะไร…', patternMeaning:'I don’t know what’s come over me / what’s going on…',
    examples:[['ไม่รู้ว่าเป็นอะไร วันนี้ง่วงมาก','I don’t know what’s come over me; I’m really sleepy today.'],['ช่วงนี้เขาเปลี่ยนไป','He has changed lately.']],
    prompt:'Say one thing about yourself today using ไม่รู้ว่าเป็นอะไร.'
  },
  {
    section:'Lesson 1', title:'Everything feels different',
    thai:'มองไปทางไหน สวยงามกว่าเคยทุกครั้ง',
    pronunciation:'maawng bpai thaang nǎi, sǔai-ngam gwàa khooei thúk khráng',
    meaning:'Wherever I look, everything seems more beautiful than ever.',
    note:'มองไปทางไหน literally asks “look in which direction?”, but here it means wherever I look. กว่าเคย means more than before / more than it used to be.',
    words:[['มอง','look'],['ไปทางไหน','in whichever direction / where'],['สวยงาม','beautiful'],['กว่า','more than'],['เคย','ever / previously'],['ทุกครั้ง','every time']],
    grammar:'Question words such as ไหน can become indefinite when the context is general: ทางไหน can mean “whichever direction / wherever”.',
    pattern:'ไปทางไหนก็…', patternMeaning:'wherever you go / whichever way…',
    examples:[['ไปทางไหนก็รถติด','Wherever you go, there is traffic.'],['วันนี้อากาศดีกว่าเคย','The weather is better than usual today.']],
    prompt:'Complete: มองไปทางไหนก็…'
  },
  {
    section:'Lesson 1', title:'Everything feels different',
    thai:'ถนนก็ดูแปลกไป',
    pronunciation:'thà-nǒn gâw duu bplàaek bpai',
    meaning:'Even the streets somehow look different.',
    note:'ดู + adjective means “look / seem…”. แปลกไป means noticeably different from normal, not necessarily bad or strange.',
    words:[['ถนน','road / street'],['ก็','even / also / then'],['ดู','look / seem'],['แปลก','strange / different'],['ไป','changed away from the usual state']],
    grammar:'ดู + adjective is a high-value spoken pattern: ดูดี, ดูเหนื่อย, ดูแปลก. Adding ไป can suggest a change from before.',
    pattern:'ดู + adjective', patternMeaning:'look / seem + adjective',
    examples:[['วันนี้คุณดูเหนื่อย','You look tired today.'],['ห้องนี้ดูแปลกไป','This room looks different somehow.']],
    prompt:'Describe how someone or somewhere looks using ดู + adjective.'
  },
  {
    section:'Lesson 1', title:'A brighter world',
    thai:'หัวเราะได้จนสุดทาง โลกช่างสดใสทั้งวัน',
    pronunciation:'hǔa-rór dâi jon sùt thaang, lôok châang sòt-sǎi tháng wan',
    meaning:'I can laugh all the way; the whole world feels bright all day.',
    note:'จนสุดทาง gives the image of continuing all the way to the end. ช่าง is an expressive “so / how…” often heard in songs and more emotional speech.',
    words:[['หัวเราะ','laugh'],['ได้','can / be able to'],['จน','until'],['สุดทาง','the end of the road / all the way'],['ช่าง','so / how'],['สดใส','bright / cheerful'],['ทั้งวัน','all day']],
    grammar:'จน introduces an endpoint or result. ทั้ง + time period means throughout that whole period: ทั้งวัน, ทั้งคืน, ทั้งปี.',
    pattern:'ทั้ง + time', patternMeaning:'all + time period / throughout',
    examples:[['ฝนตกทั้งวัน','It rained all day.'],['เขาอารมณ์ดีทั้งวัน','He was in a good mood all day.']],
    prompt:'Say something you did ทั้งวัน or ทั้งคืน.'
  },
  {
    section:'Lesson 2', title:'People everywhere',
    thai:'ฉันเห็นผู้คนมากมาย ไม่รู้ว่าใครต่อใคร',
    pronunciation:'chǎn hěn phûu-khon mâak-maai, mâi rúu wâa khrai dtàaw khrai',
    meaning:'I see so many people — people I don’t even know.',
    note:'ใครต่อใคร is an idiomatic expression meaning all sorts of people / various people / anyone and everyone, not a literal “who after who”.',
    words:[['เห็น','see'],['ผู้คน','people'],['มากมาย','many / numerous'],['ไม่รู้ว่า','don’t know'],['ใครต่อใคร','all sorts of people / various people']],
    grammar:'Thai often uses repeated or linked question words idiomatically: ใครต่อใคร broadens “who” into an unspecified crowd of people.',
    pattern:'ใครต่อใคร', patternMeaning:'all sorts of people / everyone around',
    examples:[['เขาเล่าเรื่องนี้ให้ใครต่อใครฟัง','He told this story to all sorts of people.'],['งานนี้มีผู้คนมากมาย','There are loads of people at this event.']],
    prompt:'Describe a busy place where you see ผู้คนมากมาย.'
  },
  {
    section:'Lesson 2', title:'People everywhere',
    thai:'ทั้งซ้ายทั้งขวา ยิ้มให้กันและกันทั้งนั้น',
    pronunciation:'tháng sáai tháng khwǎa, yím hâi gan láe gan tháng nán',
    meaning:'Left and right, everyone is smiling at one another.',
    note:'ทั้ง…ทั้ง… means both… and…. กันและกัน means one another / each other. ทั้งนั้น means all of them, with no exception.',
    words:[['ทั้งซ้ายทั้งขวา','both left and right / all around'],['ยิ้ม','smile'],['ให้','to / toward'],['กันและกัน','one another'],['ทั้งนั้น','all of them / every one']],
    grammar:'ทั้ง A ทั้ง B pairs two things. Verb + ให้ + person can mean doing the action toward someone: ยิ้มให้ = smile at.',
    pattern:'ทั้ง A ทั้ง B', patternMeaning:'both A and B',
    examples:[['ผมชอบทั้งกาแฟทั้งชา','I like both coffee and tea.'],['ทุกคนยิ้มให้กัน','Everyone smiled at each other.']],
    prompt:'Make a sentence with ทั้ง…ทั้ง… about two things you like.'
  },
  {
    section:'Lesson 2', title:'Happiness you can feel',
    thai:'รู้ไหมว่ามันสุขใจ',
    pronunciation:'rúu mái wâa man sùk-jai',
    meaning:'Do you know how happy this makes me?',
    note:'สุขใจ is happiness or contentment felt “in the heart”. It is warmer and more inward than simply ดีใจ, which often reacts to a specific piece of good news.',
    words:[['รู้ไหม','do you know?'],['ว่า','that'],['มัน','it / this situation'],['สุขใจ','feel happy / content at heart']],
    grammar:'รู้ไหมว่า… is a natural conversational frame for “Do you know that…?” or “Do you know how…?”.',
    pattern:'รู้ไหมว่า…', patternMeaning:'Do you know that / how…?',
    examples:[['รู้ไหมว่าผมคิดถึงคุณ','Do you know that I miss you?'],['ได้กลับบ้านแล้วสุขใจ','I feel happy now that I’m home.']],
    prompt:'Ask someone รู้ไหมว่า… and finish with something true.'
  },
  {
    section:'Lesson 2', title:'A good mood',
    thai:'รู้ไหม ที่เธอบอกกัน ฉันอารมณ์ดี',
    pronunciation:'rúu mái, thîi thəə bàawk gan, chǎn aa-rom dii',
    meaning:'You know, what you told me has put me in such a good mood.',
    note:'The lyric is elliptical rather than a neat textbook sentence. ที่เธอบอกกัน points back to what “you told me/us”; the emotional result is ฉันอารมณ์ดี.',
    words:[['รู้ไหม','you know? / do you know?'],['ที่','what / the fact that'],['เธอ','you'],['บอก','tell'],['กัน','together / one another; object left implicit here'],['อารมณ์ดี','be in a good mood']],
    grammar:'Thai frequently leaves pronouns and objects unstated when context makes them obvious. อารมณ์ดี is the everyday fixed phrase for being in a good mood.',
    pattern:'อารมณ์ดี', patternMeaning:'be in a good mood',
    examples:[['วันนี้ผมอารมณ์ดีมาก','I’m in a really good mood today.'],['แม่บอกข่าวดี ผมเลยอารมณ์ดี','Mum told me good news, so I’m in a good mood.']],
    prompt:'Say why you are อารมณ์ดี today.'
  },
  {
    section:'Lesson 3', title:'The chorus',
    thai:'อยากจะร้องดังดัง',
    pronunciation:'yàak jà ráawng dang dang',
    meaning:'I want to sing it out loud.',
    note:'อยากจะ + verb is a very common way to express wanting to do something. Repeating ดัง adds an informal, emphatic “really loud” feel.',
    words:[['อยากจะ','want to'],['ร้อง','sing / cry out'],['ดังดัง','loud / really loud']],
    grammar:'อยาก + verb is enough in speech; อยากจะ + verb can sound slightly fuller or more deliberate.',
    pattern:'อยากจะ + verb', patternMeaning:'want to + verb',
    examples:[['อยากจะกลับบ้านแล้ว','I want to go home now.'],['ผมอยากจะพูดภาษาไทยให้คล่อง','I want to speak Thai fluently.']],
    prompt:'Say three things you อยากจะ do this week.'
  },
  {
    section:'Lesson 3', title:'Tell everyone',
    thai:'พูดให้ใครต่อใครได้รู้ทั่วกัน',
    pronunciation:'phûut hâi khrai dtàaw khrai dâi rúu thûa gan',
    meaning:'I want to say it so absolutely everyone knows.',
    note:'ให้ here introduces the result: speak so that people get to know. ทั่วกัน means broadly / throughout the whole group.',
    words:[['พูด','say / speak'],['ให้','so that / cause'],['ใครต่อใคร','all sorts of people / everyone'],['ได้รู้','get to know / come to know'],['ทั่วกัน','throughout / everyone collectively']],
    grammar:'Verb + ให้ + person + ได้ + verb often means doing something so that someone gets the chance or result of doing the next verb.',
    pattern:'verb + ให้ + person + ได้ + verb', patternMeaning:'do something so that someone can / gets to…',
    examples:[['อธิบายให้เขาได้เข้าใจ','Explain it so he can understand.'],['บอกให้ทุกคนได้รู้','Tell it so everyone knows.']],
    prompt:'Use ให้…ได้… to say what you want someone to understand.'
  },
  {
    section:'Lesson 3', title:'Tell everyone',
    thai:'พูดให้ใครได้ฟังว่าเธอรักฉัน',
    pronunciation:'phûut hâi khrai dâi fang wâa thəə rák chǎn',
    meaning:'I want to say it so people can hear that you love me.',
    note:'ได้ฟัง means get to hear / have the chance to hear. ว่า introduces the content of what is heard.',
    words:[['พูด','say'],['ให้ใคร','for someone / so someone'],['ได้ฟัง','gets to hear'],['ว่า','that'],['เธอรักฉัน','you love me']],
    grammar:'ฟัง focuses on listening, while ได้ฟัง highlights the experience or opportunity of hearing something.',
    pattern:'ได้ + verb', patternMeaning:'get to / have the chance to + verb',
    examples:[['วันนี้ได้ฟังเพลงไทยเยอะ','Today I got to listen to a lot of Thai music.'],['อยากให้แม่ได้ฟังเรื่องนี้','I want Mum to hear this story.']],
    prompt:'Say one Thai thing you ได้ฟัง recently.'
  },
  {
    section:'Lesson 3', title:'The words that changed the day',
    thai:'คำที่เธอบอกกันว่ารักมากมาย',
    pronunciation:'kham thîi thəə bàawk gan wâa rák mâak-maai',
    meaning:'Those words you told me — that you love me so much.',
    note:'คำที่… means “the words that…”. The lyric again leaves the object of บอก implicit; the surrounding chorus makes the intended relationship clear.',
    words:[['คำ','word / words'],['ที่','that / which'],['เธอ','you'],['บอก','tell'],['ว่ารัก','that (you) love'],['มากมาย','very much / a great deal']],
    grammar:'Noun + ที่ + clause is one of the most useful Thai relative-clause patterns: คำที่พูด, คนที่รู้จัก, เพลงที่ชอบ.',
    pattern:'noun + ที่ + clause', patternMeaning:'the noun that / which…',
    examples:[['เพลงที่ผมชอบ','the song I like'],['คำที่แม่พูด','the words Mum said']],
    prompt:'Make one phrase with คนที่…, เพลงที่… or คำที่….'
  },
  {
    section:'Lesson 3', title:'Pure excitement',
    thai:'ฉันจะร้อง จะร้องให้ดังดัง ก็ฉันมันดีใจ',
    pronunciation:'chǎn jà ráawng, jà ráawng hâi dang dang, gâw chǎn man dii-jai',
    meaning:'I’m going to sing — sing it loud — because I’m just so happy.',
    note:'ก็ฉันมัน… is colloquial and emotional. มัน after ฉัน is not translated literally; it adds a “that’s just how I am / I’m simply…” emphasis.',
    words:[['จะร้อง','will sing / going to sing'],['ให้ดังดัง','make it loud / loudly'],['ก็','because / well'],['ฉันมัน','me, I’m just… (emphatic)'],['ดีใจ','glad / delighted']],
    grammar:'ให้ + adjective can express making something reach that quality: พูดให้ดัง = speak loudly, ทำให้ดี = do it well.',
    pattern:'verb + ให้ + adjective', patternMeaning:'do the verb so that it is + adjective',
    examples:[['พูดให้ช้าหน่อย','Speak a bit more slowly.'],['อ่านให้ดังหน่อย','Read it a bit louder.']],
    prompt:'Ask someone to do something ช้า, ดัง or ชัด using ให้.'
  },
  {
    section:'Lesson 4', title:'Shout it out',
    thai:'ที่เธอมาบอกกัน อยากจะตะโกนมันออกไป',
    pronunciation:'thîi thəə maa bàawk gan, yàak jà dtà-goon man àawk bpai',
    meaning:'Because you came and told me, I want to shout it out.',
    note:'มา + verb means come and do something. ออกไป gives a strong outward direction: send the words out into the world.',
    words:[['ที่','because of / the fact that'],['เธอ','you'],['มาบอก','came to tell'],['อยากจะ','want to'],['ตะโกน','shout'],['มัน','it'],['ออกไป','out / outward']],
    grammar:'มา + verb describes arriving in order to do an action: มาหา, มาบอก, มากิน. Verb + ออกไป sends the action outward.',
    pattern:'มา + verb', patternMeaning:'come to / come and + verb',
    examples:[['เพื่อนมาหาผมที่บ้าน','My friend came to see me at home.'],['แม่มาบอกข่าวดี','Mum came to tell me some good news.']],
    prompt:'Say who came to do something recently using มา + verb.'
  },
  {
    section:'Lesson 4', title:'Just one day',
    thai:'ฉันขอแค่เพียงสักวัน',
    pronunciation:'chǎn khǎaw khâae phiiang sàk wan',
    meaning:'Just give me one day.',
    note:'ขอ is the core Thai verb for asking or requesting. แค่เพียง is intentionally emphatic: only / merely. สักวัน here is “just one day”.',
    words:[['ขอ','ask for / request'],['แค่','just / only'],['เพียง','only / merely'],['สักวัน','a day / just one day']],
    grammar:'ขอ + noun asks for something; ขอ + verb asks permission to do something. แค่ and เพียง both limit the request.',
    pattern:'ขอ + noun / verb', patternMeaning:'can I have… / let me…',
    examples:[['ขอน้ำหน่อยครับ','Can I have some water?'],['ขอพักก่อนครับ','Let me rest first.']],
    prompt:'Make one real request with ขอ that you might use with family.'
  },
  {
    section:'Lesson 4', title:'Follow the heart',
    thai:'ให้ฉันได้ทำอย่างใจ ให้ฉันได้ร้องเข้าไป',
    pronunciation:'hâi chǎn dâi tham yàang jai, hâi chǎn dâi ráawng khâo bpai',
    meaning:'Let me do what my heart wants; let me keep singing.',
    note:'ทำอย่างใจ is poetic shorthand for doing as one’s heart wishes / doing what feels right. ร้องเข้าไป is idiomatic encouragement to keep doing it — sing away / keep singing.',
    words:[['ให้ฉัน','let me'],['ได้ทำ','get to do'],['อย่างใจ','as the heart wants / as one wishes'],['ร้อง','sing'],['เข้าไป','onward / keep at it']],
    grammar:'ให้ + person + ได้ + verb can mean “let someone get to do…”. Verb + เข้าไป can urge continuation: กินเข้าไป, พูดเข้าไป, ร้องเข้าไป.',
    pattern:'ให้ + person + ได้ + verb', patternMeaning:'let someone get to / have the chance to…',
    examples:[['ให้ผมได้ลองก่อน','Let me try first.'],['ให้เด็กได้พูดเอง','Let the child speak for himself.']],
    prompt:'Say one thing you want someone to let you do using ให้ผมได้…'
  },
  {
    section:'Lesson 4', title:'Let it reach the sky',
    thai:'ให้มันถึงฟ้า ก็เพราะว่ามันสุขใจ',
    pronunciation:'hâi man thʉ̌ng fáa, gâw phráw wâa man sùk-jai',
    meaning:'Let it reach the sky, simply because it makes me so happy.',
    note:'ให้มันถึงฟ้า is vivid song language: make the sound reach the sky. ก็เพราะว่า introduces the reason with emotional emphasis.',
    words:[['ให้มัน','make / let it'],['ถึง','reach'],['ฟ้า','sky'],['ก็เพราะว่า','simply because / because'],['สุขใจ','happy at heart']],
    grammar:'เพราะว่า introduces a cause. ก็ can appear before it for emphasis: ก็เพราะว่า… = “it’s because…”.',
    pattern:'ก็เพราะว่า…', patternMeaning:'it’s because… / simply because…',
    examples:[['ผมเรียนไทยก็เพราะว่าอยากคุยกับครอบครัว','I learn Thai because I want to talk with family.'],['ผมยิ้มก็เพราะว่าอารมณ์ดี','I’m smiling because I’m in a good mood.']],
    prompt:'Finish: ผมเรียนภาษาไทยก็เพราะว่า…'
  },
  {
    section:'Lesson 4', title:'At ease',
    thai:'ฉันขอร้องมันออกมา ฉันสบายใจ',
    pronunciation:'chǎn khǎaw ráawng man àawk maa, chǎn sà-baai-jai',
    meaning:'Let me sing it out; then I feel at ease.',
    note:'Parse this as ฉันขอ + ร้องมันออกมา — “let me sing it out” — rather than treating ขอร้อง as the single verb “beg”. สบายใจ means emotionally at ease or relieved.',
    words:[['ฉันขอ','let me / I ask to'],['ร้อง','sing'],['มัน','it'],['ออกมา','out / outward toward here'],['สบายใจ','feel at ease / relieved']],
    grammar:'Thai word boundaries depend on context. ขอร้อง can mean “beg”, but here the surrounding lyric supports ขอ + ร้อง. สบายใจ describes mental ease; สบาย can also describe physical comfort.',
    pattern:'สบายใจ', patternMeaning:'feel at ease / relieved / comfortable emotionally',
    examples:[['รู้ว่าแม่ถึงบ้านแล้วก็สบายใจ','I’m relieved now I know Mum got home.'],['พูดออกมาแล้วสบายใจขึ้น','I felt better after saying it out loud.']],
    prompt:'Say one situation that makes you สบายใจ.'
  }
];

let current = Number(localStorage.getItem('yak-rong-dang-current') || 0);
current = Math.max(0, Math.min(current, songPhrases.length - 1));
const saved = new Set(JSON.parse(localStorage.getItem('yak-rong-dang-saved') || '[]'));

const el = {
  sectionLabel: document.getElementById('section-label'), sectionTitle: document.getElementById('section-title'),
  number: document.getElementById('phrase-number'), total: document.getElementById('phrase-total'),
  thai: document.getElementById('phrase-thai'), pronunciation: document.getElementById('phrase-pronunciation'), meaning: document.getElementById('phrase-meaning'), note: document.getElementById('phrase-note'),
  words: document.getElementById('word-breakdown-list'), grammar: document.getElementById('phrase-grammar'), pattern: document.getElementById('pattern-thai'), patternMeaning: document.getElementById('pattern-meaning'), examples: document.getElementById('phrase-examples'), prompt: document.getElementById('your-turn-prompt'),
  previous: document.getElementById('previous-phrase'), next: document.getElementById('next-phrase'), dots: document.getElementById('lesson-dots'), save: document.getElementById('save-phrase'),
  form: document.getElementById('guided-practice-form'), input: document.getElementById('guided-practice-input'), feedback: document.getElementById('guided-practice-feedback')
};

el.total.textContent = songPhrases.length;
songPhrases.forEach((phrase, index) => {
  const button = document.createElement('button');
  button.type = 'button'; button.className = 'lesson-dot'; button.setAttribute('aria-label', `Go to phrase ${index + 1}`);
  button.addEventListener('click', () => show(index)); el.dots.appendChild(button);
});

function normaliseThai(value) {
  return value.replace(/[ๆ,.!?“”"'’]/g, '').replace(/\s+/g, '').trim();
}

function show(index) {
  current = Math.max(0, Math.min(index, songPhrases.length - 1));
  const p = songPhrases[current];
  el.sectionLabel.textContent = p.section; el.sectionTitle.textContent = p.title; el.number.textContent = current + 1;
  el.thai.textContent = p.thai; el.pronunciation.textContent = p.pronunciation; el.meaning.textContent = p.meaning; el.note.textContent = p.note;
  el.words.innerHTML = p.words.map(([thai, meaning]) => `<div class="word-breakdown-item"><strong class="thai">${thai}</strong><span>${meaning}</span></div>`).join('');
  el.grammar.textContent = p.grammar; el.pattern.textContent = p.pattern; el.patternMeaning.textContent = p.patternMeaning;
  el.examples.innerHTML = p.examples.map(([thai, meaning]) => `<p><strong class="thai">${thai}</strong><br><span class="muted">${meaning}</span></p>`).join('');
  el.prompt.textContent = p.prompt;
  el.previous.disabled = current === 0; el.next.disabled = current === songPhrases.length - 1; el.next.textContent = current === songPhrases.length - 1 ? 'End of lesson' : 'Next →';
  [...el.dots.children].forEach((dot, i) => dot.classList.toggle('active', i === current));
  const isSaved = saved.has(current); el.save.setAttribute('aria-pressed', isSaved ? 'true' : 'false'); el.save.textContent = isSaved ? '★ Saved' : '☆ Save phrase';
  el.input.value = ''; el.feedback.textContent = ''; el.feedback.className = 'feedback';
  localStorage.setItem('yak-rong-dang-current', current);
}

el.previous.addEventListener('click', () => show(current - 1));
el.next.addEventListener('click', () => show(current + 1));
el.save.addEventListener('click', () => {
  if (saved.has(current)) saved.delete(current); else saved.add(current);
  localStorage.setItem('yak-rong-dang-saved', JSON.stringify([...saved])); show(current);
});
el.form.addEventListener('submit', event => {
  event.preventDefault(); const answer = normaliseThai(songPhrases[current].thai); const value = normaliseThai(el.input.value);
  if (value === answer) { el.feedback.textContent = 'ถูกต้อง — correct.'; el.feedback.className = 'feedback success'; }
  else { el.feedback.textContent = `Not quite. Correct phrase: ${songPhrases[current].thai}`; el.feedback.className = 'feedback error'; }
});
document.addEventListener('keydown', event => {
  if (document.activeElement === el.input) return;
  if (event.key === 'ArrowLeft') show(current - 1); if (event.key === 'ArrowRight') show(current + 1);
});
show(current);
