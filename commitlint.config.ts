import type { UserConfig } from '@commitlint/types'

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['init', 'feat', 'refactor', 'fix', 'format', 'clean', 'chore', 'release']
    ],
    'subject-case': [
      2,
      'always',
      ['lower-case', 'upper-case', 'camel-case', 'pascal-case']
    ]
  }
}

module.exports = Configuration
