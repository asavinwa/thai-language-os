const form = document.querySelector('#priorityForm');
const planList = document.querySelector('#priorityPlan');
const missionTitle = document.querySelector('#missionTitle');
const priorityReason = document.querySelector('#priorityReason');
const planTotal = document.querySelector('#planTotal');
const firstCommand = document.querySelector('#firstCommand');
const primaryLink = document.querySelector('#primaryLink');

const activityLibrary = {
  listening: {
    label: 'Train listening with ThaiPod101',
    detail: 'Listen once for the gist, replay a short section, then identify three useful chunks. Do not try to decode every word.',
    href: 'https://open.spotify.com/show/1nilDMDXl5EkT4mHWmHD30'
  },
  speaking: {
    label: 'Respond in Thai with ChatGPT voice',
    detail: 'Use voice mode after listening. Talk about what you understood, then continue with one ordinary family topic.',
    href: 'index.html'
  },
  story: {
    label: 'Read the interactive story aloud',
    detail: 'Read for gist first, then aloud. Notice chunks you would expect to hear in conversation.',
    href: 'stories/ben-arrives-in-thailand.html'
  },
  music: {
    label: 'Listen closely to one song section',
    detail: 'Follow one small section, notice the sounds and keep one reusable phrase. Do not turn the whole song into homework.',
    href: 'songs/index.html'
  },
  vocab: {
    label: 'Use Drops for focused vocabulary',
    detail: 'Do one short session. Pick five words that could help you understand real speech and say each inside a phrase.',
    href: 'index.html'
  },
  writing: {
    label: 'Write three useful chunks from memory',
    detail: 'Write or type three phrases you heard or used today without copying, then check them.',
    href: 'practice.html'
  },
  review: {
    label: 'Close the loop',
    detail: 'Record one phrase you now recognise, one thing you still missed and one listening target for next time.',
    href: 'index.html'
  }
};

function buildPlan(total, energy, recent) {
  const plans = [];
  let reason = '';
  let mission = 'Understand the gist, then respond.';

  if (recent === 'building' || recent === 'none') {
    reason = 'Understanding natural Thai is the current bottleneck. Start with focused listening, support it with vocabulary, then answer with Thai you understood.';
    plans.push(['listening', Math.round(total * 0.4)]);
    plans.push(['vocab', Math.round(total * 0.2)]);
    plans.push(['speaking', Math.round(total * 0.25)]);
    plans.push(['review', total]);
  } else if (recent === 'listening') {
    reason = 'You have already trained your ear. Convert what you heard into active language and reinforce the useful chunks.';
    plans.push(['speaking', Math.round(total * 0.35)]);
    plans.push(['vocab', Math.round(total * 0.2)]);
    plans.push(['story', Math.round(total * 0.25)]);
    plans.push(['review', total]);
  } else if (recent === 'speaking') {
    reason = 'Speaking is useful, but comprehension needs extra weight right now. Return to listening and make familiar speech easier to process.';
    plans.push(['listening', Math.round(total * 0.4)]);
    plans.push(['story', Math.round(total * 0.25)]);
    plans.push(['vocab', Math.round(total * 0.2)]);
    plans.push(['review', total]);
  } else if (recent === 'reading') {
    reason = 'You have taken in Thai visually. Now connect those words and patterns to natural sound.';
    plans.push(['listening', Math.round(total * 0.45)]);
    plans.push(['speaking', Math.round(total * 0.25)]);
    plans.push(['vocab', Math.round(total * 0.15)]);
    plans.push(['review', total]);
  } else if (recent === 'music') {
    reason = 'Music is useful exposure. Follow it with clearer spoken Thai so everyday speech becomes easier to recognise.';
    plans.push(['listening', Math.round(total * 0.4)]);
    plans.push(['speaking', Math.round(total * 0.25)]);
    plans.push(['music', Math.round(total * 0.2)]);
    plans.push(['review', total]);
  } else {
    reason = 'Vocabulary helps most when you can hear it at speed. Use Drops briefly, then put the words into listening and speech.';
    plans.push(['listening', Math.round(total * 0.4)]);
    plans.push(['vocab', Math.round(total * 0.2)]);
    plans.push(['speaking', Math.round(total * 0.25)]);
    plans.push(['review', total]);
  }

  if (energy === 'low') {
    mission = 'Make Thai easy to start, but keep your ear involved.';
    const first = plans.shift();
    plans.unshift(['music', Math.max(5, Math.round(total * 0.2))]);
    plans.splice(1, 0, first);
  }

  if (energy === 'high' && total >= 45) {
    mission = 'Listen at natural speed, recover the gist and answer.';
  }

  let used = 0;
  const normalized = plans.map(([key, amount], index) => {
    if (index === plans.length - 1) {
      amount = Math.max(5, total - used);
    }
    used += amount;
    return [key, amount];
  });

  return { mission, reason, plan: normalized };
}

function renderPlan(total, energy, recent) {
  const result = buildPlan(total, energy, recent);
  missionTitle.textContent = result.mission;
  priorityReason.textContent = result.reason;
  planTotal.textContent = `${total} minutes`;
  planList.innerHTML = '';

  result.plan.forEach(([key, minutes], index) => {
    const activity = activityLibrary[key];
    const item = document.createElement('li');
    item.innerHTML = `
      <span class="priority-step-number">${String(index + 1).padStart(2, '0')}</span>
      <div>
        <div class="priority-step-title"><strong>${activity.label}</strong><span>${minutes} min</span></div>
        <p>${activity.detail}</p>
      </div>`;
    planList.appendChild(item);
  });

  const firstKey = result.plan[0][0];
  const firstActivity = activityLibrary[firstKey];
  firstCommand.textContent = `Start now: ${firstActivity.label.toLowerCase()} for ${result.plan[0][1]} minutes.`;
  primaryLink.href = firstActivity.href;
  primaryLink.textContent = firstKey === 'listening' ? 'Open ThaiPod101' : 'Open supporting practice';

  localStorage.setItem('thaiPrioritySettings', JSON.stringify({ total, energy, recent }));
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const total = Number(data.get('minutes'));
  const energy = data.get('energy');
  const recent = data.get('recent');
  renderPlan(total, energy, recent);
  document.querySelector('#priorityResult').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

const saved = JSON.parse(localStorage.getItem('thaiPrioritySettings') || 'null');
if (saved) {
  document.querySelector('#minutes').value = String(saved.total);
  document.querySelector('#energy').value = saved.energy;
  const recentInput = document.querySelector(`input[name="recent"][value="${saved.recent}"]`);
  if (recentInput) recentInput.checked = true;
  renderPlan(saved.total, saved.energy, saved.recent);
} else {
  renderPlan(60, 'normal', 'building');
}
