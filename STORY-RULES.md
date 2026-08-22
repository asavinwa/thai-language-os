# Story rules

These rules are canonical for stories in Thai Language OS, especially stories built from song lessons.

## 1. Match the established interactive story format

New story pages should follow the same structure and interaction patterns as the established stories such as:

- `stories/the-person-he-had-searched-for.html`
- `stories/the-answer-she-did-not-want.html`

Reuse the existing HTML, CSS and JavaScript conventions before inventing new components.

## 2. Story length is driven by the story, not a fixed template

A full song-derived story should normally contain **at least 12 guided sentences**.

Twelve is a minimum, not a target or maximum.

Use as many sentences as needed to create a coherent narrative, give the reused Thai enough context and make the reading exercise worthwhile. A story may be 12, 15, 18, 20 or more sentences when that produces a better learning experience.

Do not pad a story merely to increase the count. Do not compress a story merely to keep it at 12.

## 3. Song-derived stories must be original narratives

A story inspired by a song should reuse useful vocabulary, grammar and patterns from the song in a new context. It should not simply retell, paraphrase or reproduce the song lyrics.

The story-song connection should explicitly identify the important patterns being recycled and link back to the source song lesson.

## 4. Required story experience

A completed interactive story should include:

- Story number and learner level
- English story title
- Short setup
- Sentence count and approximate reading time
- Story map showing the narrative progression
- Story-song connection when derived from a song
- Sentence-by-sentence Thai
- Pronunciation
- Natural English meaning
- Words tab
- Grammar tab
- Practice tab with write-from-memory exercise
- Previous / next navigation
- Sentence progress and jump dots

## 5. Teaching priority

The narrative should be readable and interesting first. Language teaching should emerge from the story rather than making characters behave unnaturally just to demonstrate grammar.

Prioritise:

1. Thai the learner might encounter or use.
2. Repeated exposure to useful patterns.
3. Natural meaning rather than literal translation.
4. Enough context to understand why a construction is being used.
5. A progression that can be retold aloud after reading.

## 6. Song-to-story workflow

When a full song lesson has been created:

1. Identify its strongest reusable vocabulary and grammar patterns.
2. Create a new narrative that naturally uses several of them.
3. Use at least 12 guided sentences, but extend the story when the narrative needs more space.
4. Add the story to `stories/index.html`.
5. Add a `Continue through story` link from the song lesson back to the story.
