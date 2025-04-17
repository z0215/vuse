import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { exit } from 'node:process'

const msgPath = resolve('.git/COMMIT_EDITMSG')
const msg = readFileSync(msgPath, 'utf-8').trim()
const commitRE = /^(revert: )?(feat|fix|refactor|perf|test|chore|types)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.error(`Commit messages must be matched by the following regex: ${commitRE}`)
  exit(1)
}
