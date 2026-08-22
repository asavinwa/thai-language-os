# Song lesson rules

These rules are canonical for every new song added to Thai Language OS.

## 1. Do not invent a new lesson format

Every full song lesson must follow the same interactive structure as the established lessons such as:

- `songs/sing-thi-tam-ha.html`
- `songs/sut-rit-sut-det.html`

A song page is not a static study guide, summary, playlist entry or generic 30-minute exercise.

## 2. Lyrics must come from the site owner

Do not fetch, scrape, search for, reconstruct or import song lyrics from the web or any external source.

If the user asks to add a song but has not supplied the lyrics:

1. Add the song to the listening / future lesson queue if useful.
2. Ask the user to paste or supply the lyrics.
3. Do not build the full phrase-by-phrase lesson until the lyrics have been supplied by the user.

Once lyrics are supplied by the user, treat that supplied text as the source of record for the lesson.

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

The lesson should work through the meaningful lines of the supplied song rather than selecting a handful of disconnected vocabulary items.

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

A song without user-supplied lyrics can appear in the song queue.

A song should only be labelled a full guided lesson when the phrase-by-phrase lesson has actually been built from user-supplied lyrics.
