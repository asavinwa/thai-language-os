const normalise=value=>value.trim().replace(/\s+/g,' ');

document.querySelectorAll('[data-answer]').forEach(form=>{
  const input=form.querySelector('input,textarea');
  const feedback=form.querySelector('.feedback');
  const answer=form.dataset.answer;
  const key=`thai-practice:${answer}`;
  input.value=localStorage.getItem(key)||'';
  form.addEventListener('submit',event=>{
    event.preventDefault();
    const value=normalise(input.value);
    localStorage.setItem(key,input.value);
    if(value===answer){
      feedback.textContent='ถูกต้อง — correct.';
      feedback.className='feedback success';
      const completed=Number(localStorage.getItem('thai-completed')||0)+1;
      localStorage.setItem('thai-completed',completed);
      document.querySelectorAll('[data-progress]').forEach(el=>el.textContent=completed);
    }else{
      feedback.textContent='Not quite. Compare the letters and try again.';
      feedback.className='feedback error';
    }
  });
});

document.querySelectorAll('[data-progress]').forEach(el=>el.textContent=localStorage.getItem('thai-completed')||0);

const phraseNote=document.getElementById('phrase-note');
if(phraseNote){
  const label=phraseNote.closest('p')?.querySelector('strong');
  if(label) label.textContent='Phrase breakdown:';

  const renderBreakdown=()=>{
    const text=phraseNote.textContent.trim();
    if(!text||phraseNote.dataset.rendered===text)return;
    phraseNote.dataset.rendered=text;
    const parts=text.split(/\.\s+/).map(part=>part.replace(/\.$/,'').trim()).filter(Boolean);
    phraseNote.innerHTML=parts.map(part=>{
      const match=part.match(/^(.+?) means (.+)$/i);
      if(match){
        return `<span class="breakdown-item"><strong class="thai">${match[1]}</strong><small>${match[2]}</small></span>`;
      }
      return `<span class="breakdown-item"><small>${part}</small></span>`;
    }).join('');
  };

  new MutationObserver(renderBreakdown).observe(phraseNote,{childList:true,characterData:true,subtree:true});
  renderBreakdown();

  const practice=document.querySelector('.guided-practice');
  if(practice){
    const reference=document.createElement('section');
    reference.className='lesson-card chorus-reference';
    reference.innerHTML=`
      <p class="eyebrow">Chorus focus</p>
      <h2 class="thai">เธอคือสิ่งที่ฉันตามหา</h2>
      <p class="pronunciation">thoe khue sing thi chan tam ha</p>
      <p><strong>Meaning:</strong> You are the thing I have been looking for.</p>
      <div class="word-grid">
        <div><strong class="thai">เธอคือ</strong><br><span class="muted">you are</span></div>
        <div><strong class="thai">สิ่งที่ฉันตามหา</strong><br><span class="muted">the thing I am looking for</span></div>
        <div><strong class="thai">สิ่งที่ฉันขาดหาย</strong><br><span class="muted">the thing missing from my life</span></div>
      </div>
      <h3 class="thai">เธอคือคนที่ฉันเฝ้ารอ</h3>
      <p class="muted">You are the person I have been waiting for.</p>
      <h3 class="thai">เพียงพอแล้วแค่มีเธอกับฉัน</h3>
      <p class="muted">It is enough just to have you with me.</p>
      <hr>
      <p class="eyebrow">Reusable pattern</p>
      <h2>noun + ที่ + clause</h2>
      <p>Use <strong>ที่</strong> to connect a noun to a clause that describes it.</p>
      <div class="word-grid">
        <div><strong class="thai">สิ่งที่ฉันตามหา</strong><br><span class="muted">the thing I am looking for</span></div>
        <div><strong class="thai">คนที่ฉันเฝ้ารอ</strong><br><span class="muted">the person I am waiting for</span></div>
        <div><strong class="thai">เพลงที่ฉันชอบ</strong><br><span class="muted">the song I like</span></div>
      </div>`;
    practice.insertAdjacentElement('afterend',reference);
  }
}