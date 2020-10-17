import { mount, shallowMount } from '@vue/test-utils'
import { GlobalMountOptions } from '@vue/test-utils/dist/types'
import store from '@/store'
import router from '@/router'
import { DefineComponent } from 'vue'

interface TestHelper extends GlobalMountOptions {
  component: DefineComponent
  shallow?: boolean
  props?: { [key: string]: unknown }
}

export const setup = async ({
  component,
  components,
  props,
  shallow,
  stubs,
  directives,
}: TestHelper) => {
  const wrapper = !shallow
    ? mount(component, {
        props,
        global: {
          plugins: [store, router],
          stubs,
          components,
          directives,
        },
      })
    : shallowMount(component, {
        props,
        global: {
          plugins: [store, router],
          stubs,
          components,
          directives,
        },
      })

  await router.isReady()
  return wrapper
}
