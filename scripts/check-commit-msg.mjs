import { readFileSync } from 'node:fs'

const file = process.argv[2]
if (!file) process.exit(0)

const firstLine = readFileSync(file, 'utf8').split('\n')[0].trim()
const conventional =
  /^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(\(.+\))?!?: .+/
const allowed = conventional.test(firstLine) || /^(Merge|Revert) /.test(firstLine)

if (!allowed) {
  console.error(`提交信息不符合 Conventional Commits：${firstLine}`)
  console.error('示例：feat(admin): 新增登录页')
  process.exit(1)
}
