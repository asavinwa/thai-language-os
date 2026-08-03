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