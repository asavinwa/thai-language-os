const activities = {
  listen: {
    eyebrow: 'Listening',
    title: 'Train your ear with ThaiPod101.',
    intro: 'Listening comprehension is the current bottleneck. The goal is to catch the gist first, then notice the chunks you missed.',
    steps: [
      '10 min — listen to one ThaiPod101 lesson or dialogue on Spotify without trying to understand every word.',
      '8 min — replay a short section and write or say what you think is happening.',
      '7 min — pick three useful chunks you heard and repeat them aloud.',
      '5 min — listen once more and notice how much easier the same Thai feels.'
    ],
    actions: [{ label: 'Open ThaiPod101 on Spotify →', href: 'https://open.spotify.com/show/1nilDMDXl5EkT4mHWmHD30' }]
  },
  vocab: {
    eyebrow: 'Vocabulary',
    title: 'Use Drops, then make the words useful.',
    intro: 'Drops is for widening recognition. Keep it short, then connect a few words to Thai you might actually hear or say.',
    steps: [
      '10 min — do one focused Drops session.',
      '5 min — choose five words you genuinely want to remember.',
      '10 min — say a simple sentence or phrase with each word.',
      '5 min — try to recall the five words without opening Drops again.'
    ],
    actions: [{ label: 'Open Thai in Drops →', href: 'https://languagedrops.com/language/learn-thai' }]
  },
  music: {
    eyebrow: 'Music',
    title: 'Learn one bit of a song properly.',
    intro: 'Don’t try to finish a whole song. Own one small section and let the rest stay enjoyable.',
    steps: [
      '5 min — listen once without stopping and pick one line you like.',
      '10 min — work out the meaning, pronunciation and what makes the line natural Thai.',
      '10 min — replay and say or sing the line until it feels familiar.',
      '5 min — close the lyrics and see what you can remember.'
    ],
    actions: [{ label: 'Open song lessons →', href: 'songs/index.html' }]
  },
  phrases: {
    eyebrow: 'Phrases',
    title: 'Collect five phrases you would genuinely use.',
    intro: 'Useful beats impressive. Pick language that belongs in your actual life.',
    steps: [
      '5 min — choose a situation: family, food, football, travel, boxing or complaining.',
      '10 min — find five natural phrases for that situation.',
      '10 min — say each phrase inside a different mini-sentence.',
      '5 min — choose the one phrase you want to remember next time.'
    ],
    actions: [{ label: 'Open writing practice →', href: 'practice.html' }]
  },
  speak: {
    eyebrow: 'Speak',
    title: 'Have a messy Thai conversation.',
    intro: 'The aim is not accuracy. The aim is staying in Thai long enough for your brain to stop reaching for English.',
    steps: [
      '5 min — pick an ordinary topic: today, dinner, football, family or what you watched.',
      '10 min — talk to ChatGPT voice mostly in Thai. Ask for gentler corrections only when needed.',
      '10 min — repeat the same topic but try to reuse three better phrases.',
      '5 min — note the one thing you kept wanting to say but could not.'
    ],
    actions: []
  },
  watch: {
    eyebrow: 'Watch',
    title: 'Turn Netflix into relaxed listening practice.',
    intro: 'Keep the English subtitles on. You are hunting for meaning and recurring Thai, not pausing every thirty seconds.',
    steps: [
      '15 min — watch Thai audio with English subtitles and follow the story normally.',
      '5 min — notice repeated words, endings or phrases without stopping the episode.',
      '5 min — pick one or two lines that caught your ear and say them aloud.',
      '5 min — keep one phrase you could imagine using yourself.'
    ],
    actions: []
  },
  read: {
    eyebrow: 'Read',
    title: 'Read one short thing twice.',
    intro: 'First for meaning, then for sound. You do not need to decode every word.',
    steps: [
      '10 min — read a short Thai story or passage and work out the broad meaning.',
      '10 min — read it aloud slowly, paying attention to words you recognise.',
      '5 min — choose three useful words or chunks, not ten.',
      '5 min — explain the passage back in very simple Thai.'
    ],
    actions: [{ label: 'Open Thai stories →', href: 'stories/index.html' }]
  },
  play: {
    eyebrow: 'Play',
    title: 'Make yourself retrieve Thai.',
    intro: 'Recognition is easy. The game is getting Thai out of your head without looking.',
    steps: [
      '5 min — choose ten phrases you have seen before.',
      '10 min — hide the Thai and try to produce it from the situation or meaning.',
      '10 min — turn the misses into tiny spoken examples.',
      '5 min — finish with a speed round: say as many as you can without checking.'
    ],
    actions: [{ label: 'Open guided practice →', href: 'priority.html' }]
  }
};

const buttons = [...document.querySelectorAll('[data-mode]')];
const surpriseButton = document.getElementById('surpriseMe');
const stage = document.getElementById('activityStage');
const eyebrow = document.getElementById('activityEyebrow');
const title = document.getElementById('activityTitle');
const intro = document.getElementById('activityIntro');
const steps = document.getElementById('activitySteps');
const actions = document.getElementById('activityActions');

function showActivity(mode) {
  const activity = activities[mode];
  if (!activity) return;

  buttons.forEach((button) => {
    const active = button.dataset.mode === mode;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  eyebrow.textContent = activity.eyebrow;
  title.textContent = activity.title;
  intro.textContent = activity.intro;
  steps.innerHTML = activity.steps.map((step) => `<li>${step}</li>`).join('');
  actions.innerHTML = activity.actions.map((action) => `<a class="button" href="${action.href}">${action.label}</a>`).join('');

  stage.classList.add('active');
  stage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

buttons.forEach((button) => {
  button.setAttribute('aria-pressed', 'false');
  button.addEventListener('click', () => showActivity(button.dataset.mode));
});

surpriseButton.addEventListener('click', () => {
  const modes = Object.keys(activities);
  const weightedModes = [...modes, 'listen', 'listen'];
  const mode = weightedModes[Math.floor(Math.random() * weightedModes.length)];
  showActivity(mode);
});
