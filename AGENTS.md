# AGENTS.md

## Purpose

This file defines the required workflow for AI coding agents working in every repository.

Keep this file short and operational. Project-specific plans, architecture, tasks, decisions, and setup details belong in the linked docs under `docs/`.

## Required Reading

Before making changes, read:

1. This `AGENTS.md`
2. Repository-level `AGENTS.md` files if present
3. `docs/codebase-map.md` if it exists
4. `docs/project-plan.md` if it exists and the task affects product behavior
5. `docs/architecture.md` if it exists and the task affects system structure
6. `docs/tasks.md` if it exists
7. Any source files directly related to the requested work

If a referenced doc does not exist, continue without it. Do not create missing docs unless the task requires it or the user asks for project scaffolding.

## Source of Truth

Use these files when present:

- `docs/codebase-map.md`: concise map of important directories, entry points, core modules, data flow, and files that should usually be inspected for common task types
- `docs/project-plan.md`: product goals, roadmap, milestones, non-goals, acceptance criteria
- `docs/architecture.md`: system structure, boundaries, data flow, technical patterns
- `docs/tasks.md`: active tasks, pending work, completed task markers
- `docs/devlog.md`: completed work log
- `docs/decisions.md`: durable product and architecture decisions
- `docs/setup.md`: install, run, test, build, deploy, and troubleshooting commands
- `docs/api.md`: API contracts, endpoints, schemas, request/response examples
- `docs/ui.md`: UI patterns, design rules, component conventions
- `docs/testing.md`: testing strategy, required checks, known test limitations

Do not treat chat history as the source of truth when repository docs or code disagree with it. Prefer the current repository state.

## Codebase Digestion

Prefer targeted inspection over broad repository scans.

When starting work:

1. Read `docs/codebase-map.md` if it exists.
2. Read only the docs relevant to the task.
3. Search for symbols, routes, commands, schemas, components, tests, or errors related to the task.
4. Inspect directly related source files before editing.
5. Do not read unrelated directories just to build general context.

Use search tools before opening many files. Prefer precise searches for names, imports, routes, commands, error messages, and test names.

Do not read generated files, build outputs, dependency folders, lockfile contents, or large data files unless the task specifically requires them.

When the repository structure changes significantly, update `docs/codebase-map.md` briefly. Keep it concise. It should be a navigation aid, not a full architecture document.

## Work Intake

When the user requests work:

1. Restate the task internally as a concrete implementation goal.
2. Inspect the relevant files before editing.
3. Identify the smallest safe change.
4. Avoid broad rewrites unless explicitly requested.
5. Preserve existing behavior unless the task requires changing it.

If the request is ambiguous, make the safest reasonable assumption and proceed. Ask a question only when the ambiguity could cause destructive, irreversible, or clearly wrong work.

## Task Tracking

Use `docs/tasks.md` when present.

Add or update a task when:

- The user requests a feature, bug fix, refactor, or investigation
- A bug is discovered during implementation
- Follow-up work is required to complete the requested change
- Technical debt directly blocks or risks the requested work

Do not add speculative cleanup tasks, nice-to-haves, or broad refactors unless the user explicitly asks for them.

When completing a tracked task:

1. Implement the change
2. Run relevant validation
3. Update `docs/devlog.md` if present
4. Mark the task complete in `docs/tasks.md`
5. Do not delete completed tasks

Prefer this task format:

```markdown
### [Priority] Task Title

Description and acceptance criteria.

- **Files**: Affected areas
- **Context**: Why this is needed
- **Status**: Active | Blocked | Done
```

Prefer this devlog format:

```markdown
## YYYY-MM-DD – Task/Bug Title

Summary of implementation or bug fix.

- **Changes**: What changed
- **Impact**: User-visible or developer-visible impact
- **Validation**: Tests, checks, or manual verification performed
```

## Implementation Rules

Make the smallest safe change that satisfies the task.

Prefer:

- Existing patterns over new abstractions
- Localized changes over broad rewrites
- Explicit code over clever code
- Simple interfaces over premature generalization
- Tests that cover changed behavior

Avoid:

- Reformatting unrelated files
- Renaming files or symbols without need
- Introducing new dependencies without clear justification
- Changing public behavior unless requested
- Mixing cleanup with feature work

## Validation

Run the most relevant validation available for the change.

Prefer targeted checks first:

- Tests for the changed module or feature
- Type checks for affected areas
- Lint checks if configured
- Build checks when the change affects build output, packaging, routing, or deployment

If validation cannot be run, state what was not run and why.

Do not claim a change is fully verified unless relevant validation passed.

## Documentation Updates

Update documentation only when the change affects documented behavior, setup, architecture, API contracts, UI conventions, or developer workflow.

Keep docs concise. Do not duplicate code behavior in prose unless it helps future agents navigate the project.

Update `docs/codebase-map.md` only when the structure, entry points, or common task areas change.

## Communication

When reporting completed work:

1. Summarize what changed.
2. List files touched.
3. State validation performed.
4. Mention any follow-up work only if it is required or directly relevant.

Do not include long explanations unless the user asks for them.
Do not present speculative improvements as required work.
