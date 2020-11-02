<template>
  <div class="social-login">
    <p>Acessar via</p>
    <div class="actions">
      <Button
        aria-label="Fazer login com Google"
        @click="login"
        color="primary"
        shape="circle"
        ><i class="nutris-google"></i>
      </Button>
      <Button
        aria-label="Fazer login com Facebook"
        disabled
        color="primary"
        shape="circle"
        ><i class="nutris-facebook"></i>
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespacedHelpers } from 'vuex'
import { useI18n } from 'vue-i18n'

import { I18nGetters, I18nActions } from '@/store/i18n/types'
const { mapGetters, mapActions } = createNamespacedHelpers('i18n')

import Button from '@/components/button/Button.vue'
import { signInWithGoogle } from '@/services/auth.service.ts'

export default defineComponent({
  name: 'SocialLogin',
  components: {
    Button,
  },
  setup() {
    return {
      useI18n,
      signInWithGoogle,
    }
  },
  computed: {
    ...mapGetters({
      language: I18nGetters.LANGUAGE,
      labelToggle: I18nGetters.LABEL_TOGGLE,
    }),
  },
  methods: {
    ...mapActions({
      changeLanguage: I18nActions.CHANGE_LANGUAGE,
    }),
    async login() {
      await signInWithGoogle()
      document.location.reload(true)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/layouts/default/Default-variables.scss';

.social-login {
  color: var(--gray-3);
  display: flex;
  justify-content: space-around;
  color: var(--white);

  @media screen and (min-width: $screen-sm) {
    font: var(--typography-subheader-font);
    font-weight: 900;
    align-items: center;
    margin-left: auto;
    white-space: nowrap;
  }

  @media screen and (max-width: $screen-sm) {
    text-align: center;
  }

  .actions {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 350px;
    justify-self: center;

    @media screen and (min-width: $screen-sm) {
      > .button {
        margin-left: var(--space-sm);
      }
    }
  }
}
</style>
