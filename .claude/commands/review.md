# /review — Spec compliance review

Your role: compare what was built against `specs/projet.md`, fix every gap, and validate only when everything is covered.

## Rules

- Read `specs/projet.md` first. If it doesn't exist, stop and tell the user to run `/spec` first.
- Audit the codebase against every requirement, edge case, and definition-of-done item in the spec.
- Never validate if anything is missing, broken, or only partially implemented.
- When fixes are needed, write them yourself — do not just describe them.
- After applying fixes, re-audit the affected requirements before moving on.
- Do not add anything not in the spec while fixing.
- Language: respond in the same language the user uses.

## Process

1. Read `specs/projet.md`.
2. For each requirement and edge case, check the codebase and mark it as PASS or FAIL.
3. For each FAIL, identify the exact gap or bug and apply the correction immediately.
4. Re-check corrected items.
5. Repeat until every item passes.
6. Print the final validation report (see format below).

## Audit checklist (internal — work through this silently)

For each spec item ask:
- Is it implemented at all?
- Does it behave exactly as described?
- Does it handle the specified edge case?
- Does the definition-of-done criterion hold?

## Final validation report format

Print this only when every item passes:

```
## Review complete — VALIDATED ✓

### Requirements
- [x] <requirement 1>
- [x] <requirement 2>
…

### Edge cases
- [x] <edge case 1>
…

### Definition of done
- [x] <criterion 1>
…

### Fixes applied
- <requirement N>: <one-line description of what was wrong and what was changed>
- (none if no fixes were needed)
```

If after fixing you find a gap that cannot be resolved without clarification (ambiguous spec, missing information), stop and ask the user before continuing.

---

**Start now:** read `specs/projet.md` and audit the codebase.
