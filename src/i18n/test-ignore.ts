import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
  locale: 'en-US',
  datetimeFormats: {
    'en-US': {
      long: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      },
    },
    'ja-JP-u-ca-japanese': {
      long: {
        era: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        weekday: 'long',
        hour12: true,
        timeZoneName: 'long',
      },
    },
  },
  messages: {
    en: {
      message: {
        language: 'English',
        quantity: 'Quantity',
        list: 'hello, {0}!',
        named: 'hello, {name}!',
        linked: '@:message.named How are you?',
        plural: 'no bananas | {n} banana | {n} bananas',
      },
    },
    ja: {
      message: {
        language: '日本語',
        list: 'こんにちは、{0}！',
        named: 'こんにちは、{name}！',
        linked: '@:message.named ごきげんいかが？',
      },
    },
  },
})
