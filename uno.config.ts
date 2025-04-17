import {
  defineConfig,
  toEscapedSelector as e,
  presetIcons,
  presetWind3,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      text: 'var(--text-color)',
      background: 'var(--background-color)',
      primary: {
        text: 'var(--primary-text-color)',
        DEFAULT: 'var(--primary-color)',
      },
      second: 'var(--second-color)',
      border: 'var(--border-color)',
      hover: 'var(--hover-color)',
      success: 'var(--success-color)',
      warning: 'var(--warning-color)',
      error: 'var(--error-color)',
    },
  },
  rules: [
    [/^scroll(-x|-y)?$/, ([, name], { rawSelector }) => {
      const selector = e(rawSelector)
      return `
        ${selector} {
          overflow${name ?? ''}: auto;
          scrollbar-gutter: stable;
        }
        ${selector}::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ${selector}::-webkit-scrollbar-button {
          display: none;
        }
        ${selector}::-webkit-scrollbar-thumb {
          opacity: 0;
          background-color: rgba(50, 50, 50, 0.3);
          border-radius: 8px;
        }
        ${selector}:hover::-webkit-scrollbar-thumb {
          opacity: 1;
        }
      `
    }],
  ],
  presets: [
    presetWind3(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
        'font-size': '18px !important',
      },
    }),
  ],
})
