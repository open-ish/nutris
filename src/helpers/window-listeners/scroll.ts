import { onMounted, ref, onUnmounted } from 'vue'

export function scroll() {
  const isShowElement = ref(false)
  const downScrollToShow = 450
  const handleScroll = () =>
    (isShowElement.value = window.scrollY > downScrollToShow)
  const toTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  const windowHandle = (state: string) => window[state]('scroll', handleScroll)

  onMounted(() => windowHandle('addEventListener'))
  onUnmounted(() => windowHandle('removeEventListener'))

  return { isShowElement, toTop }
}
