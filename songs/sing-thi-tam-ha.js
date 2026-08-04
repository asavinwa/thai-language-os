const songPhrases = [
  {section:'Lesson 1',title:'Loneliness and feeling lost',thai:'ติดอยู่ในชีวิตที่ช่างเดียวดาย',pronunciation:'dtìt yùu nai chii-wít thîi châang diaao-daai',meaning:'Stuck in such a lonely life.',note:'ติดอยู่ means to be stuck. ช่าง adds emotional emphasis: “so” or “such”.'},
  {section:'Lesson 1',title:'Loneliness and feeling lost',thai:'เดินอยู่บนถนนที่ไร้จุดหมาย',pronunciation:'dern yùu bon thà-nǒn thîi rái jùt-mǎai',meaning:'Walking along a road with no destination.',note:'ไร้ is a literary “without”. จุดหมาย can mean a destination or a goal.'},
  {section:'Lesson 1',title:'Loneliness and feeling lost',thai:'และแม้พบเจอผู้คนมากมาย',pronunciation:'láe máe phóp-jer phûu-khon mâak-maai',meaning:'And even though I meet so many people.',note:'แม้ means “even though”. พบเจอ means to meet or encounter.'},
  {section:'Lesson 1',title:'Loneliness and feeling lost',thai:'ภายในใจยังเหมือนบางอย่างขาดหาย',pronunciation:'phaai-nai jai yang mʉ̌an baang-yàang khàat-hǎai',meaning:'Inside, it still feels as though something is missing.',note:'บางอย่าง means something. ขาดหาย means missing or absent.'},
  {section:'Lesson 2',title:'Searching and losing hope',thai:'สิ่งใดที่ใจฉันนั้นคอยมานาน',pronunciation:'sìng dai thîi jai chǎn nán khoi maa naan',meaning:'The thing my heart has been waiting for all this time.',note:'A poetic sentence built around สิ่งใด and the continuing-action pattern คอยมานาน.'},
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

const lessonDetails = [
  {w:'ติดอยู่|be stuck|A continuing state of being trapped.;ใน|in|Introduces the setting.;ชีวิต|life|The speaker’s life.;ที่|that / which|Links ชีวิต to its description.;ช่าง|so / such|Adds emotional emphasis.;เดียวดาย|lonely / solitary|A poetic word for being alone.',g:'ติดอยู่ describes an ongoing state. ที่ introduces the description of ชีวิต, while ช่าง intensifies the emotion.',p:'ติดอยู่ใน…|be stuck in…',e:'ผมติดอยู่ในรถ|I am stuck in the car.;เขารู้สึกเดียวดาย|He feels lonely.',t:'Describe something you sometimes feel stuck in.'},
  {w:'เดินอยู่|be walking|อยู่ marks the action as ongoing.;บน|on|Location marker.;ถนน|road|The route being walked.;ที่|that / which|Introduces the description.;ไร้|without / lacking|Literary alternative to ไม่มี.;จุดหมาย|destination / goal|A physical destination or life goal.',g:'Verb + อยู่ shows an action in progress. ไร้ gives the phrase a more literary tone than ไม่มี.',p:'ไร้ + noun|without / lacking…',e:'ชีวิตที่ไร้ความหมาย|A life without meaning.;เดินอยู่บนถนน|Walking on the road.',t:'Make a sentence with ไร้ or ไม่มี.'},
  {w:'และ|and|Connects this line to the previous thought.;แม้|even though|Introduces a contrast.;พบเจอ|meet / encounter|A slightly fuller form of พบ.;ผู้คน|people|People collectively.;มากมาย|many / numerous|Adds a broad sense of quantity.',g:'แม้ introduces a contrast: even though many people are present, the speaker still feels something is missing.',p:'แม้…แต่…|even though… but…',e:'แม้เหนื่อยแต่ก็ไป|Even though I was tired, I went.;ผมพบเจอผู้คนมากมาย|I meet many people.',t:'Say something you do even though you are tired.'},
  {w:'ภายใน|inside / within|More formal than ใน.;ใจ|heart / mind|The inner emotional self.;ยัง|still|Shows the feeling continues.;เหมือน|seems / like|Introduces a comparison.;บางอย่าง|something|An unspecified thing.;ขาดหาย|missing / absent|Something that should be there is not.',g:'ยัง + verb/adjective shows continuation. เหมือนบางอย่างขาดหาย means “it feels as though something is missing”.',p:'ยังเหมือน…|it still feels like…',e:'ยังเหมือนเดิม|It still feels the same.;บางอย่างขาดหายไป|Something is missing.',t:'Describe something that still feels incomplete.'},
  {w:'สิ่งใด|whatever / what thing|An unspecified thing, with a poetic tone.;ที่|that / which|Connects the thing to its description.;ใจ|heart|The emotional heart.;ฉัน|I / me / my|ใจฉัน means “my heart”.;นั้น|that very|Adds emphasis.;คอย|wait for / await|Suggests continuing, expectant waiting.;มา|continuing up to now|Shows the action began earlier.;นาน|for a long time|Duration.',g:'ใจฉัน is literally “heart + me”, but naturally means “my heart”. คอยมานาน shows an action continuing from the past up to now.',p:'คอยมานาน|have been waiting for a long time',e:'นี่คือสิ่งที่ผมตามหามานาน|This is what I have been looking for.;ผมคิดเรื่องนี้มานานแล้ว|I have thought about this for a long time.;ผมอยากมาที่นี่นานแล้ว|I have wanted to come here for a long time.',t:'Complete: สิ่งที่ผมอยากทำคือ…'},
  {w:'ยังคง|still continue to|Stronger than ยัง alone.;อยากจะ|want to|Soft, natural expression of desire.;ค้น|search|Search deliberately.;ให้เจอ|until finding it|ให้ + result gives the intended outcome.;สักครั้ง|at least once / one time|A modest hoped-for occurrence.',g:'ค้นให้เจอ means “search until it is found”. ให้ introduces the desired result of the action.',p:'verb + ให้ + result|do something until a result happens',e:'พยายามให้สำเร็จ|Try until you succeed.;หาให้เจอ|Find it.',t:'Name one thing you still want to achieve.'},
  {w:'แม้|even though / even if|Introduces contrast.;คืน|night|Paired with วัน.;และ|and|Connects two nouns.;วัน|day|Together คืนและวัน means time passing.;จะ|will / would|Marks a future or hypothetical event.;เลยผ่านไป|pass by|Time moving onwards.',g:'แม้…จะ… means “even though/even if…”. The sentence leaves the contrasting result for the next line.',p:'แม้…จะ…|even though / even if…',e:'แม้เวลาจะผ่านไป|Even though time passes.;แม้ฝนจะตกก็ไป|Even if it rains, I will go.',t:'Make an “even if” sentence about tomorrow.'},
  {w:'จน|until / to the point that|Introduces a resulting state.;บางที|sometimes|An occasional event.;ก็|then / also|Natural linking particle.;เริ่ม|begin|Start of a change.;รู้สึก|feel|Emotional or physical feeling.;หมดหวัง|lose hope / hopeless|Literally “hope is exhausted”.',g:'จน introduces the outcome caused by everything before it: the waiting continues until hopelessness begins.',p:'เริ่มรู้สึก…|begin to feel…',e:'เริ่มรู้สึกเหนื่อย|I am beginning to feel tired.;อย่าหมดหวัง|Do not lose hope.',t:'Say how you are beginning to feel today.'},
  {w:'แต่|but|Marks a turn in the story.;เมื่อ|when|Introduces the moment.;ได้พบ|got to meet / met|ได้ adds a sense of finally experiencing it.;เธอ|you|Intimate or neutral second-person pronoun.',g:'ได้ + verb can show that someone got the opportunity to experience the action.',p:'เมื่อได้…|when I got to…',e:'เมื่อได้มาเมืองไทย|When I got to come to Thailand.;ดีใจที่ได้พบคุณ|Glad to meet you.',t:'Describe something that changed when you met someone.'},
  {w:'เธอ|you|Subject.;เปลี่ยน|change|Main verb.;ให้|so that / causing|Introduces the resulting state.;โลกนี้|this world|โลก + นี้.;ไม่เหมือน|not like / no longer the same|Negative comparison.;เก่า|before / old|Here it means the old state.',g:'เปลี่ยนให้ + noun + result means “change something so that it becomes…”.',p:'ทำ/เปลี่ยนให้…|make / change so that…',e:'เพลงนี้ทำให้ผมมีความสุข|This song makes me happy.;มันไม่เหมือนเก่า|It is not like before.',t:'Say one thing that changed your life.'},
  {w:'เธอ|you|Subject.;ทำให้|make / cause|Essential causative structure.;ฉัน|me|Person affected.;นั้น|that very|Adds lyrical emphasis.;ได้เข้าใจ|came to understand|ได้ highlights reaching understanding.',g:'ทำให้ + person + verb means “make/cause someone to do or feel something”.',p:'ทำให้ฉัน…|makes me…',e:'เธอทำให้ฉันยิ้ม|You make me smile.;เรื่องนี้ทำให้ผมเข้าใจ|This made me understand.',t:'Complete: ภาษาไทยทำให้ผม…'},
  {w:'เวลา|time|The central subject.;ที่เสียไป|that was lost|ที่ links เวลา to เสียไป.;ฉัน|I|Subject of the second clause.;เสียไป|lost / spent|Can mean lose or use up.;เพื่อ|in order to / for|Introduces purpose.;รอพบ|wait to meet|Two verbs working together.;ใคร|someone / who|Unknown person.',g:'Thai repeats เสียไป for poetic effect. เพื่อ introduces the purpose behind the lost time.',p:'เพื่อ + verb|in order to…',e:'เรียนเพื่อทำงาน|Study in order to work.;รอพบใครบางคน|Wait to meet someone.',t:'Say what you spend time doing and why.'},
  {w:'เธอ|you|Subject.;คือ|are / is|Identifies what something is.;สิ่งที่|the thing that|Relative-clause pattern.;ฉัน|I|Subject inside the clause.;ตามหา|search for|Actively look for something wanted.',g:'สิ่งที่ + clause means “the thing that…”. คือ connects เธอ with that description.',p:'สิ่งที่ฉัน…|the thing that I…',e:'นี่คือสิ่งที่ผมต้องการ|This is what I need.;อาหารที่ฉันชอบ|The food I like.',t:'Complete: สิ่งที่ฉันตามหาคือ…'},
  {w:'คือ|is / are|The earlier subject เธอ is understood.;สิ่งที่|the thing that|Introduces a description.;ฉัน|I / me|Here it is tied to the speaker.;ขาดหาย|was missing|Something absent from a whole.',g:'Thai often drops a repeated subject when it is already clear from context.',p:'ละประธาน|omit a clear repeated subject',e:'นี่คือสิ่งที่ขาดหาย|This is what was missing.;อยากกิน แต่ไม่มีเวลา|I want to eat, but have no time.',t:'Say what has been missing from your routine.'},
  {w:'มา|come / came to|Shows movement or an arriving change.;เปลี่ยน|change|Main action.;ชีวิต|life|Object being changed.;ใน|in|Time marker.;วันนี้|today|The present day.',g:'มา + verb can describe someone coming and then doing the action, or a change arriving into the present.',p:'มา + verb|come and…',e:'มาช่วยผมหน่อย|Come help me.;วันนี้ชีวิตเปลี่ยนไป|Life changed today.',t:'Say what you came to Thailand to do.'},
  {w:'เธอ|you|Subject.;คือ|are|Identification.;คนที่|the person who|Relative-clause pattern for people.;ฉัน|I|Subject inside the clause.;ใฝ่ฝัน|dream of / aspire to|A strong, poetic longing.',g:'Use คนที่ for people and สิ่งที่ for things.',p:'คนที่…|the person who…',e:'เขาคือคนที่ผมไว้ใจ|He is the person I trust.;งานที่ผมใฝ่ฝัน|The job I dream of.',t:'Describe a person you admire.'},
  {w:'คือ|is / are|The earlier subject is understood.;คนที่|the person who|Introduces the person description.;ฉัน|I|Subject within the clause.;เฝ้ารอ|wait longingly for|More emotional than รอ.',g:'เฝ้า before another verb suggests sustained, attentive or emotional continuation.',p:'เฝ้า + verb|keep doing / longingly continue…',e:'เฝ้ารอวันนั้น|Keep waiting for that day.;แม่เฝ้าดูลูก|A mother watches over her child.',t:'Name something you have been eagerly waiting for.'},
  {w:'เพียงพอ|enough / sufficient|The amount needed.;แล้ว|already / now|Marks a completed or changed state.;แค่|just / only|Limits what is needed.;มี|have|Existential possession.;เธอ|you|One person present.;กับ|with / and|Connects people.;ฉัน|me|The speaker.',g:'เพียงพอแล้ว means “it is enough now”. แค่ introduces the only condition needed.',p:'แค่…ก็พอ|just… is enough',e:'แค่นี้ก็พอ|This is enough.;มีครอบครัวก็เพียงพอแล้ว|Having family is enough.',t:'Complete: สำหรับผม แค่…ก็พอ'},
  {w:'อยู่|stay / be|Ongoing state.;เคียงข้าง|beside / supportively near|Emotional as well as physical closeness.;กัน|each other|Reciprocal action.;ตลอดไป|forever|For all future time.',g:'กัน makes the action reciprocal: both people are beside one another.',p:'verb + กัน|do something together / to each other',e:'ช่วยกันทำงาน|Help each other work.;อยู่ด้วยกันตลอดไป|Stay together forever.',t:'Make a sentence using กัน about family.'},
  {w:'ไม่ว่า|no matter|Opens a no-matter construction.;วันพรุ่งนี้|tomorrow|Literally “the day tomorrow”.;จะ|will|Future marker.;เป็น|be|State verb.;อย่างไร|how / what it is like|Unknown condition.',g:'ไม่ว่า…จะ… means “no matter…”. It normally leads into a promise or result.',p:'ไม่ว่า…จะ…|no matter…',e:'ไม่ว่าจะเกิดอะไรขึ้น|No matter what happens.;พรุ่งนี้จะเป็นอย่างไร|What tomorrow will be like.',t:'Make a promise beginning with ไม่ว่า…'},
  {w:'จะ|will|Future intention.;ไม่|not|Negation.;ปล่อย|let / allow|Permit something to happen.;เวลา|time|Object.;ให้|to / so that|Introduces the result.;เสีย|be wasted / lost|Negative result.;อีกแล้ว|again anymore|Marks that it will not happen again.',g:'ปล่อย + noun + ให้ + result means “let something become/happen”. อีกแล้ว means “again anymore” in a negative sentence.',p:'จะไม่…อีกแล้ว|will not… anymore',e:'ผมจะไม่สายอีกแล้ว|I will not be late anymore.;อย่าปล่อยเวลาให้เสีย|Do not let time go to waste.',t:'Say one habit you will not repeat.'},
  {w:'จะใช้|will use|Future intention plus action.;เพื่อ|in order to|Purpose marker.;ทำให้|make / cause|Causative structure.;เธอ|you|Person affected.;ได้รู้|come to know|ได้ emphasizes reaching knowledge.;ว่า|that|Introduces what follows.',g:'เพื่อ + verb states purpose. ทำให้เธอได้รู้ว่า means “make it possible for you to know that…”.',p:'เพื่อทำให้…|in order to make…',e:'พูดเพื่อให้เข้าใจ|Speak so it can be understood.;ผมอยากให้คุณรู้ว่า…|I want you to know that…',t:'Complete: ผมอยากให้ครอบครัวรู้ว่า…'},
  {w:'เธอ|you|Subject.;มีความหมาย|mean / be meaningful|Literally “have meaning”.;เพียงใด|how much / to what extent|Poetic question degree.;สำหรับ|for / to|Marks the person concerned.;ฉัน|me|The speaker.',g:'มีความหมายสำหรับ + person means “mean something to someone”. เพียงใด is more poetic than แค่ไหน.',p:'มีความหมายสำหรับ…|mean a lot to…',e:'ครอบครัวมีความหมายสำหรับผมมาก|Family means a lot to me.;คุณรู้ไหมว่าแค่ไหน|Do you know how much?',t:'Say what Thailand means to you.'},
  {w:'เพราะ|because|Introduces a reason.;เมื่อ|when|Introduces the moment.;ได้พบ|got to meet|Reaching the experience.;เธอ|you|Person met.',g:'เพราะ gives the reason for the emotional change described in the chorus.',p:'เพราะเมื่อ…|because when…',e:'เพราะเมื่อผมกลับบ้าน|Because when I return home.;ดีใจที่ได้พบเธอ|Glad to have met you.',t:'Give a reason beginning with เพราะ.'},
  {w:'เพียงพอแล้ว|it is enough now|A complete emotional conclusion.;แค่|just|Limits the requirement.;มี|have|Possession or presence.;เธอกับฉัน|you and me|Two people together.;อยู่|stay / be|Continuing state.;เคียงข้างกัน|beside each other|Mutual closeness and support.',g:'Two clauses are joined without a formal connector, which sounds natural and emotional in a lyric.',p:'อยู่เคียงข้างกัน|stay beside each other',e:'เราอยู่เคียงข้างกัน|We stay beside each other.;แค่มีคุณก็พอแล้ว|Just having you is enough.',t:'Say what is enough for you in life.'}
];

function parseWords(value) {
  return value.split(';').map(item => {
    const [thai, meaning, note] = item.split('|');
    return {thai, meaning, note};
  });
}

function parseExamples(value) {
  return value.split(';').map(item => {
    const [thai, meaning] = item.split('|');
    return {thai, meaning};
  });
}

songPhrases.forEach((phrase, index) => {
  const detail = lessonDetails[index];
  phrase.words = parseWords(detail.w);
  phrase.grammar = detail.g;
  const [patternThai, patternMeaning] = detail.p.split('|');
  phrase.pattern = {thai: patternThai, meaning: patternMeaning};
  phrase.examples = parseExamples(detail.e);
  phrase.yourTurn = detail.t;
});

let currentPhrase = Number(localStorage.getItem('sing-thi-tam-ha-current') || 0);
currentPhrase = Math.max(0, Math.min(currentPhrase, songPhrases.length - 1));
const savedPhrases = new Set(JSON.parse(localStorage.getItem('sing-thi-tam-ha-saved') || '[]'));

const elements = {
  sectionLabel: document.getElementById('section-label'), sectionTitle: document.getElementById('section-title'),
  number: document.getElementById('phrase-number'), total: document.getElementById('phrase-total'),
  thai: document.getElementById('phrase-thai'), pronunciation: document.getElementById('phrase-pronunciation'),
  meaning: document.getElementById('phrase-meaning'), note: document.getElementById('phrase-note'),
  breakdown: document.getElementById('phrase-breakdown'), wordList: document.getElementById('word-breakdown-list'),
  grammar: document.getElementById('phrase-grammar'), patternThai: document.getElementById('pattern-thai'),
  patternMeaning: document.getElementById('pattern-meaning'), examples: document.getElementById('phrase-examples'),
  yourTurn: document.getElementById('your-turn-prompt'), save: document.getElementById('save-phrase'),
  previous: document.getElementById('previous-phrase'), next: document.getElementById('next-phrase'),
  dots: document.getElementById('lesson-dots'), form: document.getElementById('guided-practice-form'),
  input: document.getElementById('guided-practice-input'), feedback: document.getElementById('guided-practice-feedback')
};

elements.total.textContent = songPhrases.length;

songPhrases.forEach((phrase, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'lesson-dot';
  button.setAttribute('aria-label', `Go to phrase ${index + 1}: ${phrase.thai}`);
  button.addEventListener('click', () => showPhrase(index, true));
  elements.dots.appendChild(button);
});

function renderBreakdown(phrase) {
  elements.wordList.innerHTML = phrase.words.map(word => `<div class="word-breakdown-row"><div class="word-thai" lang="th">${word.thai}</div><div class="word-meaning">${word.meaning}</div><div class="word-note">${word.note}</div></div>`).join('');
  elements.grammar.textContent = phrase.grammar;
  elements.patternThai.textContent = phrase.pattern.thai;
  elements.patternMeaning.textContent = phrase.pattern.meaning;
  elements.examples.innerHTML = phrase.examples.map(example => `<div class="example-row"><p class="thai" lang="th">${example.thai}</p><p>${example.meaning}</p></div>`).join('');
  elements.yourTurn.textContent = phrase.yourTurn;
}

function updateSaveButton(phrase) {
  const saved = savedPhrases.has(phrase.thai);
  elements.save.textContent = saved ? '★ Saved' : '☆ Save phrase';
  elements.save.setAttribute('aria-pressed', String(saved));
  elements.save.classList.toggle('saved', saved);
}

function showPhrase(index, scrollToLesson = false) {
  currentPhrase = Math.max(0, Math.min(index, songPhrases.length - 1));
  const phrase = songPhrases[currentPhrase];
  elements.sectionLabel.textContent = phrase.section;
  elements.sectionTitle.textContent = phrase.title;
  elements.number.textContent = currentPhrase + 1;
  elements.thai.textContent = phrase.thai;
  elements.pronunciation.textContent = phrase.pronunciation;
  elements.meaning.textContent = phrase.meaning;
  elements.note.textContent = phrase.note;
  renderBreakdown(phrase);
  updateSaveButton(phrase);
  elements.previous.disabled = currentPhrase === 0;
  elements.next.disabled = currentPhrase === songPhrases.length - 1;
  elements.next.textContent = currentPhrase === songPhrases.length - 1 ? 'End of song' : 'Next →';
  elements.input.value = '';
  elements.feedback.textContent = '';
  elements.feedback.className = 'feedback';
  [...elements.dots.children].forEach((dot, i) => dot.classList.toggle('active', i === currentPhrase));
  localStorage.setItem('sing-thi-tam-ha-current', currentPhrase);
  if (scrollToLesson) document.querySelector('.top-phrase-nav').scrollIntoView({behavior:'smooth', block:'start'});
}

elements.previous.addEventListener('click', () => showPhrase(currentPhrase - 1, true));
elements.next.addEventListener('click', () => showPhrase(currentPhrase + 1, true));
elements.save.addEventListener('click', () => {
  const phrase = songPhrases[currentPhrase].thai;
  savedPhrases.has(phrase) ? savedPhrases.delete(phrase) : savedPhrases.add(phrase);
  localStorage.setItem('sing-thi-tam-ha-saved', JSON.stringify([...savedPhrases]));
  updateSaveButton(songPhrases[currentPhrase]);
});

document.addEventListener('keydown', event => {
  if (document.activeElement === elements.input) return;
  if (event.key === 'ArrowLeft') showPhrase(currentPhrase - 1, true);
  if (event.key === 'ArrowRight') showPhrase(currentPhrase + 1, true);
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