# Add a song workflow

This is the canonical workflow for every new song added to Thai Language OS.

When the user says **add a song**, follow this workflow unless they explicitly ask for only a queue/listening entry.

Do not invent a new format. Extend the existing system.

## Definition of done

A song is fully added only when all of the following are true:

1. The song appears in `songs/index.html`.
2. A full guided song lesson exists in the established interactive format.
3. The lesson covers the meaningful language of the song in order.
4. A song-derived original story exists in the established interactive story format.
5. The story appears in `stories/index.html`.
6. The song lesson links to the story.
7. The story links back to the song lesson.
8. Navigation, phrase/sentence counts and page labels are accurate.
9. Existing CSS/JavaScript conventions are reused rather than replaced with one-off components.
10. The finished pages have been checked against an existing canonical song lesson and story before completion is claimed.

If any of these are missing, the full song workflow is not finished.

## Step 1: inspect the canonical examples first

Before building anything, inspect the current versions of:

### Song lesson examples

- `songs/sing-thi-tam-ha.html`
- `songs/sing-thi-tam-ha.js`
- `songs/sut-rit-sut-det.html`
- `songs/sut-rit-sut-det.js`
- `songs/phrase-breakdown.css`

### Story examples

- `stories/the-person-he-had-searched-for.html`
- `stories/the-person-he-had-searched-for.js`
- `stories/the-answer-she-did-not-want.html`
- `stories/the-answer-she-did-not-want.js`

The current implementation is the design reference. Do not rely on memory of the format.

## Step 2: get or verify the lyrics

Lyrics supplied by the site owner are the preferred source of record.

If lyrics have not been supplied, it is acceptable to research reliable lyric sources. Do not invent or reconstruct missing lyrics from memory.

Respect copyright constraints when using external sources. If the complete source text is needed to build the full line-by-line lesson and cannot appropriately be reproduced from an external source, ask the user to paste the lyrics.

A song may remain a queue/listening entry until enough source text is available to build the full lesson.

## Step 3: build the full guided song lesson

The song page must use the established interactive lesson structure. It is not a static summary or generic study guide.

Required elements:

- Song title and artist
- Embedded listening player where appropriate
- Phrase-by-phrase navigation
- Lesson sections following the song in order
- Thai phrase
- Pronunciation
- Natural English meaning
- Language note
- Word-by-word breakdown
- Explanation of how the Thai works
- `Pattern to own`
- Natural example sentences
- `Your turn` prompt
- Save-phrase control
- Write-from-memory practice
- Vocabulary encounter tracking where supported

Work through the meaningful lines of the song. Do not select only a handful of disconnected vocabulary items.

Repeated choruses and verses do not need to be taught mechanically more than once. Use repetition for recognition or recall where useful.

## Step 4: teaching priorities for the song

For every phrase, prioritise:

1. Natural meaning in context.
2. How the Thai construction works.
3. Vocabulary and patterns useful outside the song.
4. How the learner could say something similar in real life.

Do not force literal word-for-word translation when it makes the Thai harder to understand.

## Step 5: add the song to the songs index

Add the completed song to `songs/index.html` using the same card pattern as existing full lessons.

The card should accurately describe what exists. Do not label a queue item as a full lesson.

## Step 6: build the story from the song

Every completed full song lesson should normally produce an original learner story unless the user explicitly says not to.

The story should reuse the strongest vocabulary, grammar and patterns from the song in a new context. It must not retell or paraphrase the song.

Story length:

- Minimum: normally 12 guided sentences.
- There is no fixed target or maximum.
- Use as many sentences as the narrative and learning value require.
- Do not pad to increase the count.
- Do not compress a good story to stay at 12.

Required story experience:

- Story number and learner level
- English title
- Short setup
- Accurate sentence count and approximate reading time
- Story map
- Story-song connection naming reused patterns
- Sentence-by-sentence Thai
- Pronunciation
- Natural English meaning
- Words tab
- Grammar tab
- Practice tab with write-from-memory exercise
- Previous / next navigation
- Sentence progress and jump dots

## Step 7: connect the song and story

Add both directions:

- Song lesson → `Continue through story`
- Story → `Story-song connection` → source song lesson

These are part of the learning loop, not optional extras.

## Step 8: add the story to the stories index

Add the new story to `stories/index.html` using the established story-card pattern.

Keep story numbering, level, title, description and sentence count accurate.

## Step 9: quality check before saying it is done

Before reporting completion, check:

- Does the song page visually and functionally match the established lessons?
- Does the lesson cover the meaningful song language rather than a sample?
- Do pronunciation and natural meaning exist for every guided phrase?
- Are word breakdowns, grammar, reusable patterns, examples and prompts populated?
- Does phrase navigation work from first to last phrase?
- Does memory practice use the current phrase?
- Is the song correctly listed in the songs index?
- Does the derived story use the same interaction pattern as existing stories?
- Is the story at least 12 sentences unless there is a specific reason otherwise?
- Does the story feel like a coherent original narrative rather than a grammar exercise?
- Is the story listed in the stories index?
- Are song ↔ story links present in both directions?
- Are displayed counts and labels correct?

Only after this check should the song be described as fully added.

## Related canonical rules

- `SONG-LESSON-RULES.md` — detailed song lesson rules
- `STORY-RULES.md` — detailed story rules

If there is ever a conflict, this workflow governs the end-to-end meaning of **add a song**, while the specialist rule file governs the detailed format of its component.