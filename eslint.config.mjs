// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  // Vue 3 推薦規則
  rules: {
    // Vue 3 規則
    'vue/multi-word-component-names': 'off', // 允許單字元件名稱
    'vue/no-multiple-template-root': 'off', // Vue 3 支援多根節點
    'vue/no-v-model-argument': 'off', // Vue 3 v-model 支援參數
    'vue/require-default-prop': 'off', // 不強制 props 預設值
    'vue/no-v-html': 'warn', // v-html 安全警告
    'vue/component-tags-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
    'vue/define-macros-order': ['error', {
      order: ['defineProps', 'defineEmits'],
    }],
    'vue/block-lang': ['error', {
      script: { lang: 'ts' },
    }],
    'vue/define-emits-declaration': ['error', 'type-based'],
    'vue/define-props-declaration': ['error', 'type-based'],
    'vue/no-unused-refs': 'warn',
    'vue/no-useless-v-bind': 'error',
    'vue/prefer-separate-static-class': 'warn',
    'vue/prefer-true-attribute-shorthand': 'warn',

    // TypeScript 規則
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    }],

    // 通用規則
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
  },
})
