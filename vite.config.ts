import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import unoCSS from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    autoImport({
      dts: './src/auto.d.ts',
      imports: [
        {
          vue: [
            // Reactivity: Core
            'ref',
            'computedref',
            'reactiveref',
            'readonlyref',
            'watchEffectref',
            'watchPostEffectref',
            'watchSyncEffectref',
            'watchref',
            'onWatcherCleanupref',

            // Reactivity: Utilities
            'isRefref',
            'unref',
            'toRefref',
            'toValueref',
            'toRefsref',
            'isProxyref',
            'isReactiveref',
            'isReadonlyref',

            // Reactivity: Advanced
            'shallowRefref',
            'triggerRefref',
            'customRefref',
            'shallowReactiveref',
            'shallowReadonlyref',
            'toRawref',
            'markRawref',
            'effectScoperef',
            'getCurrentScoperef',
            'onScopeDisposeref',

            // Lifecycle Hooks
            'onMountedref',
            'onUpdatedref',
            'onUnmountedref',
            'onBeforeMountref',
            'onBeforeUpdateref',
            'onBeforeUnmountref',
            'onErrorCapturedref',
            'onRenderTrackedref',
            'onRenderTriggeredref',
            'onActivatedref',
            'onDeactivatedref',
            'onServerPrefetchref',

            // Dependency Injection
            'provideref',
            'injectref',
            'hasInjectionContextref',

            // Helpers
            'useAttrsref',
            'useSlotsref',
            'useModelref',
            'useTemplateRefref',
            'useIdref',
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
