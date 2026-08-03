const storySteps=[
{section:'Chapter 1',title:'Arrival',thai:'วันนี้ผมมาถึงประเทศไทยแล้ว',pronunciation:'wan níi phǒm maa thʉ̌ng bprà-thêet thai láeo',meaning:'Today I arrived in Thailand.',words:[['วันนี้','today'],['ผม','I (male speaker)'],['มาถึง','arrive'],['ประเทศไทย','Thailand'],['แล้ว','now / already']],grammar:'แล้ว shows that something has now happened. It often marks a completed change, not just “already”.'},
{section:'Chapter 1',title:'At the airport',thai:'ผมหากระเป๋าไม่เจอ',pronunciation:'phǒm hǎa grà-bpǎo mâi jer',meaning:'I could not find my bag.',words:[['หา','look for'],['กระเป๋า','bag'],['ไม่เจอ','cannot find']],grammar:'หาไม่เจอ is a useful pattern: look for something but fail to find it.'},
{section:'Chapter 2',title:'The taxi',thai:'คนขับแท็กซี่ถามว่าผมจะไปไหน',pronunciation:'khon-khàp thɛ́k-sîi thǎam wâa phǒm jà bpai nǎi',meaning:'The taxi driver asked where I was going.',words:[['คนขับแท็กซี่','taxi driver'],['ถามว่า','ask that / ask'],['จะไปไหน','where are you going?']],grammar:'ถามว่า introduces the content of a question: “asked that…” or simply “asked…”'},
{section:'Chapter 2',title:'The taxi',thai:'ผมบอกว่าไปบ้านแม่ครับ',pronunciation:'phǒm bàawk wâa bpai bâan mâae khráp',meaning:'I said I was going to my mother’s house.',words:[['บอกว่า','say / tell that'],['บ้านแม่','mother’s house'],['ครับ','polite particle']],grammar:'Thai often omits “I am” or “I want to”. The destination can follow ไป directly.'},
{section:'Chapter 3',title:'Home',thai:'แม่กำลังรอผมอยู่หน้าบ้าน',pronunciation:'mâae gam-lang raw phǒm yùu nâa bâan',meaning:'Mum was waiting for me in front of the house.',words:[['กำลัง...อยู่','currently doing'],['รอ','wait for'],['หน้าบ้าน','in front of the house']],grammar:'กำลัง + verb + อยู่ frames an action as happening right now.'},
{section:'Chapter 3',title:'Home',thai:'ทุกคนดีใจที่ได้เจอผม',pronunciation:'thúk-khon dii-jai thîi dâi jer phǒm',meaning:'Everyone was happy to see me.',words:[['ทุกคน','everyone'],['ดีใจ','happy / glad'],['ได้เจอ','get to meet / see']],grammar:'ดีใจที่... means “happy that…” or “glad to…”'},
{section:'Chapter 4',title:'Dinner',thai:'เราไปกินข้าวด้วยกัน',pronunciation:'rao bpai gin khâao dûai gan',meaning:'We went to eat together.',words:[['เรา','we'],['กินข้าว','eat / have a meal'],['ด้วยกัน','together']],grammar:'ไป + verb often means “go and do something”.'},
{section:'Chapter 4',title:'Dinner',thai:'อาหารเผ็ดมากแต่ผมชอบ',pronunciation:'aa-hǎan phèt mâak dtàe phǒm châawp',meaning:'The food was very spicy, but I liked it.',words:[['อาหาร','food'],['เผ็ดมาก','very spicy'],['แต่','but'],['ชอบ','like']],grammar:'Thai adjectives can follow nouns directly: อาหารเผ็ด = spicy food / the food is spicy.'},
{section:'Chapter 5',title:'The gym',thai:'ตอนเช้าผมไปฝึกมวยไทย',pronunciation:'dtaawn cháao phǒm bpai fʉ̀k muai thai',meaning:'In the morning I went to train Muay Thai.',words:[['ตอนเช้า','in the morning'],['ฝึก','train / practise'],['มวยไทย','Muay Thai']],grammar:'Time phrases often come first in Thai to set the scene.'},
{section:'Chapter 5',title:'A good first day',thai:'ผมเหนื่อยมากแต่มีความสุข',pronunciation:'phǒm nʉ̀ai mâak dtàe mii khwaam-sùk',meaning:'I was very tired, but happy.',words:[['เหนื่อยมาก','very tired'],['มีความสุข','be happy'],['แต่','but']],grammar:'มีความสุข literally means “have happiness”, but naturally means “to be happy”.'}
];

let current=Number(localStorage.getItem('ben-story-current')||0);
current=Math.max(0,Math.min(current,storySteps.length-1));

const el={section:document.getElementById('story-section'),title:document.getElementById('story-title'),number:document.getElementById('story-number'),total:document.getElementById('story-total'),thai:document.getElementById('story-thai'),pronunciation:document.getElementById('story-pronunciation'),meaning:document.getElementById('story-meaning'),words:document.getElementById('panel-words'),grammar:document.getElementById('panel-grammar'),previous:document.getElementById('story-previous'),next:document.getElementById('story-next'),dots:document.getElementById('story-dots'),form:document.getElementById('story-practice-form'),input:document.getElementById('story-practice-input'),feedback:document.getElementById('story-feedback')};

el.total.textContent=storySteps.length;
storySteps.forEach((step,index)=>{const button=document.createElement('button');button.type='button';button.className='lesson-dot';button.setAttribute('aria-label',`Go to sentence ${index+1}`);button.addEventListener('click',()=>show(index));el.dots.appendChild(button);});

document.querySelectorAll('.story-tab').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.story-tab').forEach(tab=>tab.classList.toggle('active',tab===button));document.querySelectorAll('.story-panel').forEach(panel=>panel.hidden=panel.id!==`panel-${button.dataset.tab}`);}));

function show(index){
 current=Math.max(0,Math.min(index,storySteps.length-1));
 const step=storySteps[current];
 el.section.textContent=step.section;el.title.textContent=step.title;el.number.textContent=current+1;el.thai.textContent=step.thai;el.pronunciation.textContent=step.pronunciation;el.meaning.textContent=step.meaning;
 el.words.innerHTML=`<div class="word-grid story-word-grid">${step.words.map(([thai,meaning])=>`<div><strong class="thai">${thai}</strong><br><span class="muted">${meaning}</span></div>`).join('')}</div>`;
 el.grammar.innerHTML=`<p>${step.grammar}</p>`;
 el.previous.disabled=current===0;el.next.disabled=current===storySteps.length-1;el.next.textContent=current===storySteps.length-1?'End of story':'Next →';
 el.input.value='';el.feedback.textContent='';el.feedback.className='feedback';[...el.dots.children].forEach((dot,i)=>dot.classList.toggle('active',i===current));localStorage.setItem('ben-story-current',current);
}

el.previous.addEventListener('click',()=>show(current-1));el.next.addEventListener('click',()=>show(current+1));
document.addEventListener('keydown',event=>{if(document.activeElement===el.input)return;if(event.key==='ArrowLeft')show(current-1);if(event.key==='ArrowRight')show(current+1);});
el.form.addEventListener('submit',event=>{event.preventDefault();const answer=storySteps[current].thai.replace(/\s+/g,' ').trim();const value=el.input.value.replace(/\s+/g,' ').trim();if(value===answer){el.feedback.textContent='ถูกต้อง — correct.';el.feedback.className='feedback success';}else{el.feedback.textContent=`Not quite. Correct sentence: ${answer}`;el.feedback.className='feedback error';}});
show(current);