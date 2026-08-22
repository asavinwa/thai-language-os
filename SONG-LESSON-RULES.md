# Song lesson rules

These rules are canonical for every full song lesson in Thai Language OS.

For the end-to-end meaning of **add a song**, follow `ADD-SONG-WORKFLOW.md` first. This file governs the detailed lesson format within that workflow.

## 1. Do not invent a new lesson format

Every full song lesson must follow the same interactive structure as the established lessons such as:

- `songs/sing-thi-tam-ha.html`
- `songs/sut-rit-sut-det.html`

A song page is not a static study guide, summary, playlist entry or generic 30-minute exercise.

## 2. Lyrics can be supplied or researched

Lyrics supplied by the site owner are the preferred source of record because they can be used directly to build the full phrase-by-phrase lesson.

If the user asks to add a song but has not supplied lyrics, it is acceptable to search for reliable lyric sources to identify, verify and research the language in the song. Do not invent or reconstruct missing lyrics from memory.

When external lyrics are used, respect copyright constraints: use them as research/reference material and only reproduce the amount permitted. If a complete line-by-line guided lesson requires more lyric text than can appropriately be reproduced from an external source, ask the user to paste or supply the lyrics. Once the user supplies them, treat that text as the source of record for the lesson.

A song can also be added to the listening / future lesson queue before a full lesson is ready.

## 3. Required full lesson structure

A completed song lesson should match the established guided-song experience and include:

- Song title and artist
- Embedded listening player where appropriate
- Phrase-by-phrase navigation
- Lesson sections that follow the song in order
- Thai phrase
- Pronunciation
- Natural English meaning
- Language note
- Word-by-word breakdown
- Explanation of how the Thai works
- A reusable `Pattern to own`
- Natural example sentences
- A short `Your turn` speaking prompt
- Save-phrase control
- Write-from-memory practice
- Vocabulary encounter tracking where supported by the existing lesson system

The lesson should work through the meaningful lines of the song rather than selecting a handful of disconnected vocabulary items.

## 4. Repetition in songs

Repeated choruses and verses do not need to be duplicated mechanically in the lesson. Teach each meaningful phrase once, then use repeated sections for recognition, recall or variation where useful.

## 5. Teaching priority

The goal is not to translate lyrics word-for-word. For every phrase, prioritise:

1. What the Thai naturally means in context.
2. How the construction works.
3. Which words or patterns are useful outside the song.
4. How the learner could say something similar in real life.

## 6. Consistency before novelty

Reuse the existing HTML, CSS and JavaScript conventions before adding new components or interaction patterns. New song pages should visually and functionally feel like part of the same product.

## 7. Queue vs lesson

A song can appear in the song queue before its lesson is complete.

Only label a song a full guided lesson when it genuinely matches the established phrase-by-phrase format. If the full source text is needed and has not been supplied, ask the user for the lyrics rather than publishing a shallow substitute.
