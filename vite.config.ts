import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import unoCSS from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import router from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import layouts from 'vite-plugin-vue-layouts'

export default defineConfig({
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 9527,
  },
  plugins: [
    router({
      dts: 'src/auto.router.d.ts',
    }),
    layouts(),
    vue(),
    autoImport({
      dts: './src/auto.core.d.ts',
      imports: [
        VueRouterAutoImports,
        {
          vue: [
            // Reactivity: Core
            'ref',
            'computed',
            'reactive',
            'readonly',
            'watchEffect',
            'watchPostEffect',
            'watchSyncEffect',
            'watch',
            'onWatcherCleanup',

            // Reactivity: Utilities
            'isRef',
            'unref',
            'toRef',
            'toValue',
            'toRefs',
            'isProxy',
            'isReactive',
            'isReadonly',

            // Reactivity: Advanced
            'shallowRef',
            'triggerRef',
            'customRef',
            'shallowReactive',
            'shallowReadonly',
            'toRaw',
            'markRaw',
            'effectScope',
            'getCurrentScope',
            'onScopeDispose',

            // Lifecycle Hooks
            'onMounted',
            'onUpdated',
            'onUnmounted',
            'onBeforeMount',
            'onBeforeUpdate',
            'onBeforeUnmount',
            'onErrorCaptured',
            'onRenderTracked',
            'onRenderTriggered',
            'onActivated',
            'onDeactivated',
            'onServerPrefetch',

            // Dependency Injection
            'provide',
            'inject',
            'hasInjectionContext',

            // Helpers
            'useAttrs',
            'useSlots',
            'useModel',
            'useTemplateRef',
            'useId',
          ],
        },
        {
          from: 'vue',
          imports: [
            // Component
            'Component',

            // Reactivity
            'MaybeRef',
            'MaybeRefOrGetter',
            'ComputedRef',
            'Ref',

            // DOM
            'HTMLAttributes',
            'CSSProperties',
          ],
          type: true,
        },
      ],
      dirs: ['./src/auto-imports'],
    }),
    unoCSS(),
  ],
})
