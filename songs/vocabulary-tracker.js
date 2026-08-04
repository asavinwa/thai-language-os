const vocabularyStorageKey = 'thai-language-os-word-encounters';

function loadVocabularyEncounters() {
  try {
    return JSON.parse(localStorage.getItem(vocabularyStorageKey) || '{}');
  } catch (error) {
    return {};
  }
}

function saveVocabularyEncounters(encounters) {
  localStorage.setItem(vocabularyStorageKey, JSON.stringify(encounters));
}

function getSongWordCounts() {
  const counts = {};
  songPhrases.forEach(phrase => {
    (phrase.words || []).forEach(word => {
      counts[word.thai] = (counts[word.thai] || 0) + 1;
    });
  });
  return counts;
}

const songWordCounts = getSongWordCounts();

function addEncounter(word, phraseId) {
  const encounters = loadVocabularyEncounters();
  const phraseIds = new Set(encounters[word] || []);
  phraseIds.add(phraseId);
  encounters[word] = [...phraseIds];
  saveVocabularyEncounters(encounters);
  return encounters[word].length;
}

function decorateWordRows() {
  const phraseNumber = Number(document.getElementById('phrase-number')?.textContent || 1);
  const phraseId = `sing-thi-tam-ha-${phraseNumber}`;
  const encounters = loadVocabularyEncounters();

  document.querySelectorAll('.word-breakdown-row').forEach(row => {
    const thaiElement = row.querySelector('.word-thai');
    const noteElement = row.querySelector('.word-note');
    if (!thaiElement || !noteElement || row.querySelector('.word-history')) return;

    const word = thaiElement.textContent.trim();
    const reviewedCount = addEncounter(word, phraseId);
    const songCount = songWordCounts[word] || 1;

    const history = document.createElement('div');
    history.className = 'word-history';

    if (songCount > 1) {
      history.textContent = `Appears in ${songCount} phrases in this song · encountered in ${reviewedCount}`;
    } else if ((encounters[word] || []).length > 0) {
      history.textContent = `Seen before · encountered in ${reviewedCount} phrase${reviewedCount === 1 ? '' : 's'}`;
    } else {
      history.textContent = 'First appearance in this song';
    }

    noteElement.appendChild(history);
  });
}

const vocabularyObserver = new MutationObserver(decorateWordRows);
const wordList = document.getElementById('word-breakdown-list');
const phraseNumberElement = document.getElementById('phrase-number');

if (wordList) vocabularyObserver.observe(wordList, { childList: true });
if (phraseNumberElement) vocabularyObserver.observe(phraseNumberElement, { childList: true, characterData: true, subtree: true });

decorateWordRows();
