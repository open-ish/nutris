import { mount, shallowMount, VueWrapper } from '@vue/test-utils'
import { GlobalMountOptions } from '@vue/test-utils/dist/types'
import store from '@/store'
import router from '@/router'
import { DefineComponent } from 'vue'
import { Vue } from 'vue-class-component'
import { i18n } from '@/i18n/index.ts'

interface TestHelper extends GlobalMountOptions {
  shallow?: boolean
  props?: { [key: string]: unknown }
}

type setupFunction = (
  component: DefineComponent,
  config?: TestHelper
) => VueWrapper<Vue>

export const setup: setupFunction = (
  component,
  { shallow, props, stubs, components } = { shallow: false }
) => {
  router.isReady()

  const wrapper = !shallow
    ? mount(component, {
        props: props,
        global: {
          plugins: [store, router, i18n],
          stubs,
          components,
        },
      })
    : shallowMount(component, {
        props: props,
        global: {
          plugins: [store, router, i18n],
          stubs,
          components,
        },
      })

  return wrapper
}
