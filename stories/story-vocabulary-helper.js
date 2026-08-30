const storyWordDictionary = {
  'ผม':'I / me (male speaker)','ฉัน':'I / me','เขา':'he / she / they','เธอ':'she / you','เรา':'we / us','มัน':'it / that thing; sometimes colloquial emphasis','ทุกคน':'everyone','คน':'person / people','ตัวเอง':'oneself / myself / himself','แม่':'mum / mother','ป้า':'aunt / older female relative','เพื่อน':'friend','ครอบครัว':'family','ภรรยา':'wife','ทีม':'team','ลูกค้า':'customer / client',
  'หนึ่ง':'one','สอง':'two','สาม':'three','หลาย':'many / several','ทั้งหมด':'all / the whole lot','นาน':'a long time / long','เกิน':'too much / beyond / more than','ครู่':'a short while / moment','รอบ':'round / pass / time through something','แรก':'first','วันนี้':'today','วัน':'day','วันหนึ่ง':'one day','เย็น':'evening','คืนนั้น':'that night','ตอน':'time / when','ตอนเช้า':'in the morning','ครั้ง':'time / occasion','ครั้งนี้':'this time','ครั้งแรก':'first time','หลายครั้ง':'many times','ปี':'year','นาที':'minute','ทุกวัน':'every day','ปกติ':'normally','บางครั้ง':'sometimes','สุดท้าย':'finally / in the end','ในที่สุด':'finally / in the end','ต่อมา':'later / next','หลังจากนั้น':'after that','เมื่อกี้':'just now',
  'มา':'come / up to now (in duration)','ไป':'go / away','กลับ':'return / back','ถึง':'reach / arrive at','อยู่':'be / stay / ongoing action','มี':'have / there is','ไม่มี':'do not have / there is no','เป็น':'be / become','ได้':'can / get to / did','จะ':'will / going to','แล้ว':'already / now / then','ยัง':'still / yet','เคย':'ever / used to','กำลัง':'currently / in the process of','เริ่ม':'start / begin','จบ':'finish / end','ทำ':'do / make','ใช้':'use','ฟัง':'listen','พูด':'speak / say','คุย':'talk / chat','ถาม':'ask','ตอบ':'answer / reply','บอก':'tell / say','คิด':'think','นึก':'think of / recall','รู้':'know','เข้าใจ':'understand','เห็น':'see','มอง':'look','อ่าน':'read','เขียน':'write','ส่ง':'send','เปิด':'open','หา':'look for','เจอ':'find / meet','รอ':'wait','ช่วย':'help','เลือก':'choose','ลอง':'try','ฝึก':'practise / train','เรียน':'study / learn','ยิ้ม':'smile','หัวเราะ':'laugh','โทร':'call','ตรวจ':'check / inspect','ย้าย':'move','ชวน':'invite','กิน':'eat','ดื่ม':'drink','วาง':'put down / hang up','ตัดสินใจ':'decide','ตั้งใจ':'intend / concentrate','ไว้ใจ':'trust','ยอมรับ':'admit / accept','โกหก':'lie','กลัว':'be afraid','กล้า':'dare / be brave enough','เปลี่ยน':'change','ตาม':'follow / keep up','หมายถึง':'mean','รู้สึก':'feel','คุ้น':'be familiar with / be used to','ทัน':'in time / keep up in time','ออก':'out / be able to produce (in some verb patterns)','ขึ้น':'up / become more','ลง':'down / become less',
  'ดี':'good','ดีใจ':'glad / happy about something','สุขใจ':'happy at heart / content','สบายใจ':'feel at ease / relieved','อารมณ์ดี':'be in a good mood','มีความสุข':'be happy','เหนื่อย':'tired','เผ็ด':'spicy','สำคัญ':'important','ผิด':'wrong / incorrect','จริง':'true / really','ง่าย':'easy','ยาก':'difficult','เร็ว':'fast','ช้า':'slow','มาก':'very / a lot','น้อย':'little / few','เกือบ':'almost','พิเศษ':'special','สมบูรณ์แบบ':'perfect','แปลก':'strange / different','สดใส':'bright / cheerful','เหงา':'lonely','โกรธ':'angry','เสียใจ':'sad / upset / sorry','เจ็บใจ':'hurt / resentful',
  'ภาษา':'language','ภาษาไทย':'Thai language','ภาษาอังกฤษ':'English language','คำ':'word','ประโยค':'sentence','เรื่อง':'matter / story / topic','งาน':'work','อาหาร':'food','ข้าว':'rice / meal','บ้าน':'house / home','ถนน':'road / street','เมือง':'city','รถไฟ':'train','แท็กซี่':'taxi','กระเป๋า':'bag','ไฟล์':'file','รายงาน':'report','ข้อมูล':'information / data','ข้อความ':'message / text','เสียง':'sound / voice','ข้อความเสียง':'voice message','หลักฐาน':'evidence','คำตอบ':'answer','ความจริง':'truth','ความผิด':'mistake / fault','ความรู้สึก':'feeling','เวลา':'time','ทาง':'way / direction','ฟ้า':'sky','โลก':'world','ใจ':'heart / mind','หู':'ear','กลุ่ม':'group',
  'กับ':'with','และ':'and','แต่':'but','หรือ':'or','ว่า':'that / introduces reported speech','ที่':'that / which / at','เพราะ':'because','เพราะว่า':'because','ถ้า':'if','ก็':'then / so / also','เลย':'so / therefore','จึง':'therefore / so','ให้':'give / let / make / so that','เพื่อ':'in order to / for','โดย':'by / via','แทน':'instead / on behalf of','ก่อน':'before / first','หลัง':'after / behind','จาก':'from','ใน':'in','บน':'on','หน้า':'in front of / face','ข้าง':'side / beside','ระหว่าง':'during / between','ทั่ว':'throughout','ทั้ง':'all / whole / both','แค่':'just / only','เพียง':'only / merely','สัก':'some / just one','อีก':'again / more','เอง':'self / by oneself / emphasis','บ้าง':'some / somewhat','ค่อย':'then / gradually / only then','มัก':'usually / tend to','ไม่':'not','ไม่ค่อย':'not very / not really','ไม่ต้อง':'do not need to','ไม่เคย':'have never','อะไร':'what / something','ใคร':'who / someone','ไหน':'which / where','อย่างไร':'how / what way','เท่าไร':'how much / how many','เท่านั้น':'only that much','มากขึ้น':'more / increasingly','ช้าลง':'slower','ง่ายขึ้น':'easier','ต่อ':'continue / next','กัน':'together / each other','จริง ๆ':'really / genuinely','เร็ว ๆ':'quickly','ซ้ำ ๆ':'repeatedly','ตรง ๆ':'directly / frankly'
};

function addMoreStoryWords() {
  const thaiEl = document.getElementById('story-thai');
  const panel = document.getElementById('panel-words');
  if (!thaiEl || !panel) return;

  const sentence = thaiEl.textContent.trim();
  if (!sentence) return;

  const existingThai = new Set([...panel.querySelectorAll('.thai')].map(el => el.textContent.trim()));
  const found = [];
  const seen = new Set();

  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter('th', { granularity: 'word' });
    for (const part of segmenter.segment(sentence)) {
      if (!part.isWordLike) continue;
      const word = part.segment.trim();
      if (storyWordDictionary[word] && !existingThai.has(word) && !seen.has(word)) {
        found.push([word, storyWordDictionary[word]]);
        seen.add(word);
      }
    }
  }

  Object.keys(storyWordDictionary)
    .filter(key => key.length > 4 && sentence.includes(key) && !existingThai.has(key) && !seen.has(key))
    .sort((a,b) => b.length - a.length)
    .forEach(key => {
      found.push([key, storyWordDictionary[key]]);
      seen.add(key);
    });

  panel.querySelector('.extra-story-words')?.remove();
  if (!found.length) return;

  const extra = document.createElement('section');
  extra.className = 'extra-story-words';
  extra.innerHTML = `
    <p class="panel-label">More word-by-word help</p>
    <p class="muted">Smaller words from this sentence, so you should not need to leave the story to look them up.</p>
    <div class="word-grid story-word-grid">
      ${found.map(([thai,meaning]) => `<div><strong class="thai">${thai}</strong><br><span class="muted">${meaning}</span></div>`).join('')}
    </div>`;
  panel.appendChild(extra);
}

const storyThaiEl = document.getElementById('story-thai');
if (storyThaiEl) {
  new MutationObserver(() => setTimeout(addMoreStoryWords, 0)).observe(storyThaiEl, { childList: true, characterData: true, subtree: true });
}
setTimeout(addMoreStoryWords, 0);
