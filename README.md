Centralised config of dev tooling for Nested Code packages.

---

The goal for this project is to support simple and consistent package config across a variety of
platforms and interfaces (CLIs, Node/Deno, browser).

One choice I've made to achieve that is to publish exclusively as ES modules (mostly using
Typescript, for Node 14). Narrowing support to ESM (not publishing Common JS) supports not just
simplicity but a forward looking JS ecosystem.

[Start here if you're wondering why or how to support ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

### Configs

- [ ] ESBuild script to:
  - [ ] Lint
  - [ ] Build and bundle
  - [ ] Write type definitions
  - [ ] Update package exports
- [ ] TSConfig
- [ ] ESLint config
- [ ] Jest config
