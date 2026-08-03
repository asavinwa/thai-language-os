const todayKey = new Date().toISOString().slice(0, 10);
const habitsKey = `thai-os-habits-${todayKey}`;
const logKey = `thai-os-log-${todayKey}`;
const completionKey = 'thai-os-completed-days';

const savedHabits = JSON.parse(localStorage.getItem(habitsKey) || '{}');
document.querySelectorAll('[data-habit]').forEach((checkbox) => {
  checkbox.checked = Boolean(savedHabits[checkbox.dataset.habit]);
  checkbox.addEventListener('change', () => {
    savedHabits[checkbox.dataset.habit] = checkbox.checked;
    localStorage.setItem(habitsKey, JSON.stringify(savedHabits));
  });
});

function getCompletedDays() {
  return JSON.parse(localStorage.getItem(completionKey) || '[]');
}

function saveCompletedDays(days) {
  localStorage.setItem(completionKey, JSON.stringify([...new Set(days)].sort()));
}

function calculateStreak(days) {
  const completed = new Set(days);
  const cursor = new Date();
  let streak = 0;
  while (completed.has(cursor.toISOString().slice(0, 10))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function renderStreak() {
  const streak = calculateStreak(getCompletedDays());
  document.getElementById('streakCount').textContent = `${streak} day${streak === 1 ? '' : 's'}`;
}

document.getElementById('completeDay').addEventListener('click', () => {
  const days = getCompletedDays();
  if (!days.includes(todayKey)) days.push(todayKey);
  saveCompletedDays(days);
  renderStreak();
  renderCalendar();
  document.getElementById('completeDay').textContent = 'Today complete ✓';
});

const themes = ['Daily life', 'Family', 'Food', 'Boxing', 'Football', 'Travel', 'Review'];

function dateKey(date) {
  return date.toISOString().slice(0, 10);
}

function renderCalendar() {
  const grid = document.getElementById('calendarGrid');
  const completed = new Set(getCompletedDays());
  grid.innerHTML = '';

  for (let offset = 0; offset < 7; offset += 1) {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    const key = dateKey(date);
    const card = document.createElement('article');
    card.className = `calendar-day${completed.has(key) ? ' done' : ''}`;
    card.innerHTML = `
      <strong>${date.toLocaleDateString('en-GB', { weekday: 'short' })}</strong>
      <span>${date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</span>
      <p>${themes[offset]}</p>
      <button type="button">${completed.has(key) ? 'Complete ✓' : 'Mark complete'}</button>
    `;
    card.querySelector('button').addEventListener('click', () => {
      const days = getCompletedDays();
      if (days.includes(key)) {
        saveCompletedDays(days.filter((day) => day !== key));
      } else {
        days.push(key);
        saveCompletedDays(days);
      }
      renderCalendar();
      renderStreak();
    });
    grid.appendChild(card);
  }
}

const logFields = ['bestConversation', 'ownedPhrase', 'stuckPoint'];
const savedLog = JSON.parse(localStorage.getItem(logKey) || '{}');
logFields.forEach((id) => {
  document.getElementById(id).value = savedLog[id] || '';
});

document.getElementById('saveLog').addEventListener('click', () => {
  const log = {};
  logFields.forEach((id) => {
    log[id] = document.getElementById(id).value.trim();
  });
  localStorage.setItem(logKey, JSON.stringify(log));
  const status = document.getElementById('saveStatus');
  status.textContent = 'Saved on this device ✓';
  window.setTimeout(() => { status.textContent = ''; }, 2500);
});

renderStreak();
renderCalendar();
