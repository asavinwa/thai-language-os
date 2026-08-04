const form = document.querySelector('#priorityForm');
const planList = document.querySelector('#priorityPlan');
const missionTitle = document.querySelector('#missionTitle');
const priorityReason = document.querySelector('#priorityReason');
const planTotal = document.querySelector('#planTotal');
const firstCommand = document.querySelector('#firstCommand');
const primaryLink = document.querySelector('#primaryLink');

const activityLibrary = {
  speaking: {
    label: 'Speak with ChatGPT in Thai',
    detail: 'Use voice mode. Talk about your morning, your plans and one family topic. Ask for corrections only after you finish each answer.',
    href: 'index.html#today'
  },
  story: {
    label: 'Read the interactive story aloud',
    detail: 'Work through Ben arrives in Thailand. Read each line aloud before revealing the support. Repeat any difficult sentence three times.',
    href: 'stories/ben-arrives-in-thailand.html'
  },
  music: {
    label: 'Shadow one section of สิ่งที่ตามหา',
    detail: 'Listen to a short section, follow the Thai, then speak with the singer. Do not study the entire song.',
    href: 'songs/sing-thi-tam-ha.html'
  },
  writing: {
    label: 'Write from memory',
    detail: 'Type three sentences you used today without copying. Check them, correct them and type each corrected version once more.',
    href: 'stories/ben-arrives-in-thailand.html'
  },
  vocab: {
    label: 'Use Drops for focused vocabulary',
    detail: 'Do one short session only. Stop when the timer ends and say five useful words in complete sentences.',
    href: 'index.html#today'
  },
  review: {
    label: 'Close the loop',
    detail: 'Record one sentence you now own, one word you still miss and the exact topic the next session should revisit.',
    href: 'index.html#today'
  }
};

function buildPlan(total, energy, recent) {
  const plans = [];
  let reason = '';
  let mission = 'Own one useful sentence and use it aloud.';

  if (recent === 'building' || recent === 'none') {
    reason = 'You have spent more time around Thai than producing Thai. Speaking is the highest priority.';
    plans.push(['speaking', Math.round(total * 0.4)]);
    plans.push(['story', Math.round(total * 0.25)]);
    plans.push(['writing', Math.round(total * 0.2)]);
    plans.push(['review', total]);
  } else if (recent === 'speaking') {
    reason = 'You have already produced Thai recently. Consolidate it through reading, writing and a shorter speaking return.';
    plans.push(['story', Math.round(total * 0.35)]);
    plans.push(['writing', Math.round(total * 0.25)]);
    plans.push(['speaking', Math.round(total * 0.25)]);
    plans.push(['review', total]);
  } else if (recent === 'reading') {
    reason = 'You have taken in Thai. Now retrieve and produce it without support.';
    plans.push(['speaking', Math.round(total * 0.45)]);
    plans.push(['writing', Math.round(total * 0.25)]);
    plans.push(['story', Math.round(total * 0.15)]);
    plans.push(['review', total]);
  } else if (recent === 'music') {
    reason = 'Music has given you input and motivation. Convert one lyric pattern into active spoken Thai.';
    plans.push(['speaking', Math.round(total * 0.4)]);
    plans.push(['music', Math.round(total * 0.25)]);
    plans.push(['writing', Math.round(total * 0.2)]);
    plans.push(['review', total]);
  } else {
    reason = 'Vocabulary only matters when you can retrieve it in context. Use the words in speech immediately.';
    plans.push(['speaking', Math.round(total * 0.4)]);
    plans.push(['vocab', Math.round(total * 0.2)]);
    plans.push(['writing', Math.round(total * 0.25)]);
    plans.push(['review', total]);
  }

  if (energy === 'low') {
    mission = 'Start easily, then speak before you stop.';
    const first = plans.shift();
    plans.unshift(['music', Math.max(5, Math.round(total * 0.2))]);
    plans.splice(1, 0, first);
  }

  if (energy === 'high' && total >= 45) {
    mission = 'Produce Thai under pressure, then correct it.';
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
  primaryLink.textContent = firstKey === 'speaking' ? 'Open today’s speaking prompt' : 'Open supporting lesson';

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
