import { mount, shallowMount, VueWrapper } from '@vue/test-utils'
import { GlobalMountOptions } from '@vue/test-utils/dist/types'
import store from '@/store'
import router from '@/router'
import { DefineComponent } from 'vue'
import { Vue } from 'vue-class-component'

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
  const wrapper = !shallow
    ? mount(component, {
        props: props,
        global: {
          plugins: [store, router],
          stubs,
          components,
        },
      })
    : shallowMount(component, {
        props: props,
        global: {
          plugins: [store, router],
          stubs,
          components,
        },
      })
  ;async () => await router.isReady()
  return wrapper
}
