import { readFileSync, writeFileSync } from 'fs'

const EMOJI_MAP = {
  init: '🌱',
  feat: '✨',
  refactor: '♻️',
  fix: '🚨',
  format: '🎨',
  clean: '🔥',
  chore: '🚀',
  release: '🎉'
}

// 找到对应的commit type并替换
const msg = readFileSync(process.argv[2], 'utf8')
const typeMatch = msg.match(/([^:]*):/)
const type = typeMatch ? typeMatch[1] : null
const typeEmoji = type ? EMOJI_MAP[type] : null
if (typeEmoji) {
  // 写回commit msg文件
  const withEmojiMsg = `${typeEmoji} ${msg}`
  writeFileSync(process.argv[2], withEmojiMsg, 'utf8')
}
