Centralised tooling config for Nested Code packages.

---

The goal of this project is to support modern, minimal and consistent project scaffolding and
configuration for a variety of environments and targets (CLIs, Node/Deno, browser).

### Entry Points

Distinct bundles can be imported from sub-paths, to be implemented as either:
- **Providers**: where the consumer will have a tool as a dependency and Cogs provides its config.
- **Runners**: where the dependency is not required, Cogs both configures and execute the tool.

Current bundles:
- Jest Provider: `@nested-code/cogs/jest`
- ESBuild Runner: `@nested-code/cogs/esbuild`
- Utils: `@nested-code/cogs/utils` supports interfaces of other bundles.

### Features

- [ ] ESBuild
  - [ ] Lint
  - [ ] Build and bundle
  - [ ] Write type definitions
  - [ ] Update package exports
- [ ] TSConfig
- [ ] ESLint config
- [ ] Jest config

# ES Modules

One choice I've made to achieve that is to publish exclusively as ES modules (mostly using
Typescript, for Node 14). Narrowing support to ESM (not publishing Common JS) supports not just
simplicity but a forward looking JS ecosystem.

[Start here if you're wondering why or how to support
ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

# Learnings

Typescript ES Modules require imports to specify `.js` extensions. Some compilers will handle a
missing extension and infer the path to a matching TS file (tsc) while others use plugins to rewrite
paths (esbuild), but executing directly (ts-node) will still fail.

To overcome this, imports in TS files can use `.js` extension (which is a bit off for my liking)
but there's also an experimental flag `--experimental-specifier-resolution node` that allows no
extension to be given in TS files for importing other TS files.
