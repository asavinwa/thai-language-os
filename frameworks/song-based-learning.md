# Song-based learning

Thai Language OS is built around one song at a time.

Every learning activity is generated from the current song until it has been mastered. Only then does the learner move to a new song.

The current song is [สิ่งที่ตามหา](../songs/sing-thi-tam-ha.html), which is already broken into six lessons across twenty-seven phrases.

## Core principle

The current song is the centre of the learning system.

Everything else exists to help the learner understand, remember and use the language from that song.

A song is not the reward at the end of a unit of study. It is the syllabus. The vocabulary list, the grammar sequence and the conversation topics are all read out of it rather than chosen independently.

## Learning cycle

For each song, build lessons covering:

1. Vocabulary
2. Sentence breakdowns
3. Grammar patterns
4. Reading practice
5. Listening practice
6. Pronunciation
7. Writing from memory
8. Conversation practice
9. Storytelling using the same patterns
10. Real-life applications

These are ten kinds of lesson, not ten steps to complete in order. The cycle runs continuously across the life of a song, and the priority order below decides which kind comes up next on any given day.

The last two carry the most weight. A song that never reaches conversation and real-life application has been studied rather than learned.

## How this fits the priority order

The learner profile puts speaking first and vocabulary last. Song-based learning does not change that, and should not be read as overriding it.

The song decides **what** is practised. The priority order decides **how**.

So a vocabulary item from the song is not learned by drilling the word — it is learned by speaking a sentence that contains it. A grammar pattern is not explained and moved past — it is used in conversation until it arrives without assembly. The song supplies the material; the activity stays in profile order.

This also resolves the concern recorded in the build log, that songs are harder to control vocabulary progression than stories. Progression is controlled by choosing the song carefully, then by generating stories from its patterns. Point 9 of the cycle is where the story format earns its place inside a song-first system rather than competing with it.

## Progress

Track mastery separately for:

- Vocabulary
- Grammar
- Reading
- Listening
- Speaking
- Writing

These move at genuinely different speeds. Reading a line of the song is comfortable long before saying it unprompted is, so a single overall percentage would hide exactly the gap that matters and would almost certainly be led by the strands that improve fastest.

The learner should only move to a new song when they can confidently understand, read and use the language from the current one.

Speaking is the gate. The others can be strong while speaking lags, and moving on at that point leaves the song as passive knowledge — which is the specific failure this framework exists to prevent.

### What mastery means for each strand

- **Vocabulary** — the word is produced in a sentence of my own, not merely recognised in the lyric.
- **Grammar** — the pattern is used correctly in a context the song never mentions.
- **Reading** — the line is read at natural speed without the transliteration.
- **Listening** — the line is understood at full song speed, without the text.
- **Speaking** — the line, or a close variation of it, is produced from memory in conversation without pausing to assemble it.
- **Writing** — the line is written from memory and self-corrected.

## Lesson generation

Every lesson should reuse vocabulary, sentence structures and grammar from the current song whenever possible.

Avoid introducing unrelated material unless needed to support understanding.

When new material is genuinely required, prefer the smallest addition that unlocks the song line, and connect it back to the line immediately.

Repetition across lessons is the point, not a flaw to design out. A word met once in a lyric and then in a conversation, a story and a piece of writing is on its way to being owned. A word met once and replaced by the next word on a list is not.

## Song data requirements

For a song to drive the whole cycle, its lesson file needs, per phrase:

- the Thai line
- pronunciation
- meaning
- a short note on the pattern or the unusual word
- **a structured word list** — each word with its meaning

`sing-thi-tam-ha.js` currently has the first four and not the fifth. `songs/vocabulary-tracker.js` reads `phrase.words` and counts `word.thai`; the song file defines no `words` field at all, so `getSongWordCounts()` returns an empty object and per-word tracking is silently inert for the current song. The story file does define `words`, but as pairs like `['ตอนเช้า','in the morning']`, where `word.thai` is undefined.

Vocabulary mastery cannot be tracked until that is fixed. It is the first piece of work this framework depends on.

## Choosing the next song

A song is a syllabus, so the choice matters more than personal preference alone.

Prefer songs that are:

- sung at a speed I can follow
- built on everyday sentence patterns rather than heavily literary ones
- about subjects I would actually discuss — family, home, work, missing someone, everyday life
- long enough to carry several weeks of material, short enough to finish

Songs written largely in poetic or literary register are worth enjoying but make a poor syllabus, since most lines convert badly into speech. Note that สิ่งที่ตามหา leans literary in places — ไร้ for "without", ช่าง for emphasis, สิ่งใด — and uses ฉัน throughout. Under the pronoun rules in the learner profile, those lines need converting into natural male speech before they are practised as my own.

## Long-term objective

Each completed song becomes part of the learner's active Thai rather than passive knowledge.

The aim is not to know many songs.

The aim is to let each song permanently expand spoken Thai.

Two or three songs fully absorbed in a year would be a success. A dozen songs half-learned would not.
