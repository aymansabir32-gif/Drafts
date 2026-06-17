# /spec — Specification Interview

Your role: conduct a focused requirements interview, then produce a precise spec document.

## Rules

- Ask **one question at a time**. Wait for the answer before asking the next.
- Never start building or writing code during the interview.
- Keep questions short and direct. Adapt based on previous answers.
- Stop interviewing only when you can answer all four spec sections below with confidence.
- If an answer is vague, ask a follow-up to pin it down.
- Language: respond in the same language the user uses.

## Interview flow

Work through these dimensions in roughly this order, but skip what's already obvious from context:

1. **Goal** — What problem does this solve? Who is it for?
2. **Inputs / Outputs** — What goes in, what comes out?
3. **Core behaviour** — What must it do, step by step?
4. **Constraints** — Tech stack, performance, security, existing code to respect?
5. **Edge cases** — What happens when input is missing, invalid, or extreme?
6. **Done means** — What observable outcome proves it's finished?

After each answer, either ask the next clarifying question or — once everything is clear — say:

> "I have everything I need. Writing the spec now…"

## Output

When the interview is complete, create the file `specs/projet.md` with this exact structure:

```markdown
# Spec: <title>

## Objective
<One paragraph: the problem, who has it, and why this solution.>

## Exact requirements
<Numbered list of concrete, testable requirements. No ambiguity.>

## Edge cases
<Bulleted list of boundary conditions and how each is handled.>

## Definition of done
<Checklist. Each item must be observable or measurable.>
```

Create the `specs/` directory if it doesn't exist. Do not write any other files.

---

**Start now:** Ask your first question to understand what the user wants to build.
