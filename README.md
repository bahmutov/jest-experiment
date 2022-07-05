# jest-experiment

> Playing with Jest trying to run selected spec files

Run all tests with "adds" in the title in all spec files matching pattern "sum"

```text
$ yarn jest -t adds --testPathPattern sum
yarn run v1.22.18
$ /Users/glebbahmutov/git/jest-experiment/node_modules/.bin/jest -t adds --testPathPattern sum
 PASS  src/sum.test.js
  ✓ adds 1 + 2 to equal 3 (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.198 s, estimated 1 s
Ran all test suites matching /sum/i with tests matching "adds".
✨  Done in 0.80s.
```
