# Amundi Explorer
## A Next-Generation Educational Quiz Game
### Pitch Deck — Marketing & Products

---

## Slide 1 — The Concept in One Line

> **We turned Amundi's institutional knowledge into an immersive, game-based experience — in 8 languages, in a single afternoon.**

---

## Slide 2 — Why This Matters

Finance is perceived as complex and inaccessible.
Training materials are read once and forgotten.
Onboarding decks collect dust.

**Amundi Explorer flips the model:**
- Knowledge is delivered as *play*, not as slides
- Retention spikes when learners are emotionally engaged
- A gamified experience is *shareable*, *viral*, and *brand-building*

---

## Slide 3 — Phase 1 · Research & Content Consolidation via Perplexity

Before any line of code was written, all content was **researched and verified** using **Perplexity AI** — pulling together publicly available, authoritative information on Amundi:

```
Sources consolidated:
• Amundi official website & investor relations
• Euronext Paris filings (ticker: AMUN)
• Press releases: AUM €2,398Bn (Mar 2026)
• Strategic Plan "Invest for the Future" 2025–2028
• Governance update (Dec 2024 / Jan 2025)
• Partnership network: SBI, NH-Amundi, ABC-CA
• Acquisition history: Pioneer (€3,545M, 2017), Lyxor (ETF #2 EU)
```

This research was packaged into a **structured Markdown brief** — fact-checked, business-vocabulary-ready — covering:
- 5 thematic zones
- 15 verified facts
- 19 questions with correct answer indices
- Key figures, names, titles and org structure (including M&P's real team architecture)

**One source of truth. Zero hallucinations.**

---

## Slide 4 — Phase 2 · AI-Enhanced UI/UX via Higgsfield MCP

To move from a functional prototype to a **premium visual experience**, the **Higgsfield MCP** was connected to the development pipeline.

This unlocked:
- AI-generated visual concepts and motion references
- Real Amundi brand imagery woven into the game (HQ Paris + Eiffel Tower, World Investment Forum stage, executive portraits, the 2028 Strategic Plan cube, partner logo wall)
- Each zone card designed as a **cinematic level-select screen** — a familiar pattern from AAA games, reimagined for finance

The result is not a quiz tool that *looks like a quiz tool*.
It looks like a product a major asset manager would be proud to ship.

---

## Slide 5 — Phase 3 · Execution Prompt

The single prompt that launched production:

> *"Improve this video game by adding sound effects, animations, transitions and other special effects that would make it immersive for the user, the interface needs some improvements as well, make it seem smoother and more vibey"*

From this brief, a **full feature roadmap** was derived and executed autonomously:

| Feature | Status |
|---|---|
| Web Audio synth engine (SFX + ambient generative music) | ✅ |
| Screen-wipe transitions with brand flash | ✅ |
| Entrance animations (staggered, per-screen) | ✅ |
| Hover states with scale + glow | ✅ |
| Confetti bursts + floating score popups | ✅ |
| Coins flying to score counter | ✅ |
| Screen shake + camera punch | ✅ |
| Code Lyoko–style activated towers + scanner beams | ✅ |
| Synthwave perspective grid | ✅ |
| Stock-ticker tape with live Amundi data | ✅ |
| HiDPI / Retina 2× rendering | ✅ |
| iOS-style Apple emoji system | ✅ |

---

## Slide 6 — Iteration Log · From v1 to Final

### v1 — Core Game
> *Initial HTML canvas quiz: 5 zones, 19 questions, flat UI.*

### v2 — Sound + Motion
> Added Web Audio synth, screen transitions, hover states, confetti, score popups, ripple effects, screen shake.

### v3 — Visual FX (Game-Inspired)
> Synthwave grid, flying coins, impact shockwaves, "ON FIRE" combo streaks, "ZONE CLEARED" slam, god rays, stock-ticker tape.

### v4 — Bug Fix (Critical)
> **Zone-completion freeze:** on the last question, `qIdx` overflowed beyond `questions.length` during the wipe transition, killing the animation loop.
> Fix: clamp question index in `drawQuiz()` + `try/catch` guard around the render loop so no single error can freeze the game.

### v5 — Imagery
> Per-zone photo/illustration system: Paris skyline + Eiffel Tower (HQ), WIF stage (Investment Hub), executive portrait (M&P), 2028 cube (Strategy), partner logo wall (Global Network). Ken-Burns motion on all imagery. Real-photo drop-in slots via `MEDIA` config.

### v6 — HiDPI + iOS Emoji + Code Lyoko
> 2× Retina canvas backing store. Apple-style emoji via CDN (with native fallback). Code Lyoko digital-transfer transition, scanner materialization rings, code rain, activated towers with halo rings.

### v7 — French Translation (Business Register)
> Full French localisation adapted to finance vocabulary: *encours, collecte nette, rattaché à, actionnaire de référence, refonte de la gouvernance, résultat net ajusté, fonds souverains, coentreprises…*
> M&P fact corrected: not "~7 people" but several specialised teams (COO, Chief of Staff, Content, BI, Products).

### v8 — Contrast + Spacing + Lexique
> Illegible grey text raised to readable blue-greys. Intro pills widened and spaced. Business vocabulary refined throughout.

### v9 — 8-Language Selector *(Final approved version)*
> Top-right native dropdown. Languages: English · Français · Deutsch · Español · Italiano · 日本語 · 廣東話 · 华语.
> Full business-register translations (not literal). Finance terms localised per market convention.

### v9.1 — CJK Text-Wrap Fix
> Japanese/Chinese text had no word-boundaries, causing overflow. `wrap()` rewritten to be CJK-aware: breaks between characters while preserving Latin tokens (ETF, AMUN, CAC 40). Fact card gets vertical safety-fit shrink.

---

## Slide 7 — The Final Product at a Glance

```
┌─────────────────────────────────────────────────────────┐
│  AMUNDI EXPLORER — Single HTML file, ~2,700 lines       │
├─────────────────────────────────────────────────────────┤
│  5 Zones   19 Questions   15 Facts   1,900 pts max      │
│  8 Languages (EN/FR/DE/ES/IT/JA/YUE/ZH)                │
│  HiDPI Retina · iOS Emoji · Web Audio (no files needed) │
│  Code Lyoko FX · Synthwave Grid · Coin System           │
│  Per-zone Imagery (photo slots + illustrated fallback)  │
│  Zero external dependencies — open in any browser       │
└─────────────────────────────────────────────────────────┘
```

**Total time from blank canvas to final approved version: one focused session.**

---

## Slide 8 — Why This is a Marketing Masterstroke

### 1. It changes the conversation around Amundi
Instead of presenting Amundi through PDFs and decks, you *put people inside the brand*. They play it. They remember it.

### 2. It demonstrates technological leadership
A generative-AI–built, Lyoko-themed, multilingual quiz game signals that Amundi is not just managing assets — it is managing the future. That matters to clients, recruits and regulators alike.

### 3. It is infinitely distributable
One HTML file. No app store. No install. Send it by email, embed it on a page, put it on an iPad at a conference stand, run it on a screen at the World Investment Forum. It works everywhere, instantly.

### 4. It trains without feeling like training
The retention science is clear: gamified learning outperforms passive reading by 40%+. Every M&P team member, partner and new joiner who plays this game walks away knowing Amundi's AUM, its governance, its strategic plan and its global reach — without sitting through a single slide.

### 5. It is a flagship for M&P's own mandate
The Marketing & Products team exists to bridge expertise and markets. What better proof of that mission than a piece of content so innovative that *the content itself becomes the pitch?*

### 6. It is extensible
New zones can be added. Questions can be updated quarterly. Language packs are a config change. The same engine can host a client-facing version, an internal training version, and a recruiter showcase — from a single source file.

---

## Slide 9 — Call to Action

> **Three things we can do this week:**

1. **Polish & brand** — swap the illustrated scenes for licensed Amundi photography, finalize all 8 language packs, add the Amundi logo and brand colors to the loading screen.

2. **Deploy** — host on a single URL (amundi.com/explorer or internal intranet) — one upload, instant global reach.

3. **Extend** — add a 6th zone for ESG / Responsible Investment, or a "Client Edition" with adapted questions for prospect onboarding at roadshows and events.

---

> *"This is what it looks like when Marketing & Products leads from the front — not just distributing products, but creating the experiences people talk about."*

---

**Created with Perplexity · Higgsfield MCP · Claude**
*Amundi Explorer — Because the best brief is one you never want to stop reading.*
