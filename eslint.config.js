// @ts-check
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(
  antfu(
    {
      formatters: true,
      rules: {
        'no-console': 'warn',
      },
    },
  ),
  {
    ignores: ['scripts/**/*', 'i18n/**/*', 'components/ui/**/*', 'ast-grep/**/*'],
  },
)
