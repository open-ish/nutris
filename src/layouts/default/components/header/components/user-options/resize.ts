import { ref, onMounted } from 'vue'
import { getCssVariableValue } from '@/helpers/styles.ts'

type displayCreated = (value?: string | undefined) => string
type displayFactory = (
  element: ElementCSSInlineStyle['style']
) => displayCreated

export function resize() {
  const none = 'none'
  const initial = 'initial'
  const flex = 'flex'
  const menu = ref()
  const mask = ref()
  const createDisplay: displayFactory = (element) => (value) =>
    (element.display = value ?? element.display)

  const isSmallScreen = (): boolean =>
    Number(`${window.innerWidth}`) <
    Number(getCssVariableValue('--screen-sm').replace('px', ''))

  let menuDisplay: displayCreated = () => ''
  let maskDisplay: displayCreated = () => ''

  onMounted(() => {
    menuDisplay = createDisplay((menu.value as HTMLElement).style)
    maskDisplay = createDisplay((mask.value as HTMLElement).style)

    window.addEventListener('resize', () => {
      const isSmallScreenAndMaskNone = isSmallScreen() && maskDisplay() === none

      isSmallScreenAndMaskNone && menuDisplay(none)
      !isSmallScreen() && maskDisplay(none) && menuDisplay(flex)
    })
  })

  const toggleMenu = () => {
    if (!isSmallScreen()) return

    const isMenuNone = menuDisplay() !== none && menuDisplay() !== ''
    isMenuNone
      ? menuDisplay(none) && maskDisplay(none)
      : menuDisplay(flex) && maskDisplay(initial)
  }
  return { toggleMenu, menu, mask, isSmallScreen }
}
