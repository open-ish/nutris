<template>
  <div class="card">
    <div class="header">
      <div class="title">
        <h2>{{ item.diet.name }}</h2>
        <span>{{ formatDate(item.createdAt) }}</span>
      </div>
      <div class="info">
        <div class="data">
          <span>{{ item.patient.currentBody }} kg</span>
          <span>{{ item.patient.calGoal }} kcal/mL</span>
          <span>{{ item.patient.proteinGoal }} gPTN/kg</span>
          <span>{{ item.patient.volumeReceived }} mL recebido</span>
        </div>
      </div>
    </div>
    <div class="body" :class="isOpen ? 'is-active' : ''">
      <div class="protein">
        <h3><i class="fas fa-dna"></i>Adequação protéica</h3>
        <dl class="list">
          <div class="item">
            <dt class="item-title">Porcentagem</dt>
            <dd class="item-description">
              {{ item.parenteralResult.protein.relationByGoal * 100 }}%
            </dd>
          </div>
          <div class="item">
            <dt
              class="item-title"
              :style="{
                color: hasProteinExcess ? 'var(--blue-3)' : 'var(--red-3)',
              }"
            >
              {{ hasProteinExcess ? 'Excesso' : 'Defasagem' }}
            </dt>
            <dd
              class="item-description"
              :style="{
                color: hasProteinExcess ? 'var(--blue-3)' : 'var(--red-3)',
              }"
            >
              {{
                (hasProteinExcess
                  ? item.parenteralResult.protein.excess
                  : item.parenteralResult.protein.missing) * 100
              }}%
            </dd>
          </div>
          <div class="item">
            <dt class="item-title">
              Quantidade recebida
            </dt>
            <dd class="item-description">
              {{ item.parenteralResult.protein.amountReceived }} gPTN
            </dd>
          </div>
          <div class="item">
            <dt class="item-title">
              Relação (massa corporal)
            </dt>
            <dd class="item-description">
              {{ item.parenteralResult.protein.relationByBody }} g/kg
            </dd>
          </div>
        </dl>
      </div>
      <!-- cal -->
      <div class="cal">
        <h3><i class="fas fa-sun"> </i>Adequação calórica</h3>
        <dl class="list">
          <div class="item">
            <dt class="item-title">Porcentagem</dt>
            <dd class="item-description">
              {{ item.parenteralResult.cal.relationByGoal * 100 }}%
            </dd>
          </div>
          <div class="item">
            <dt
              class="item-title"
              :style="{
                color: hasCalExcess ? 'var(--blue-3)' : 'var(--red-3)',
              }"
            >
              {{ hasCalExcess ? 'Excesso' : 'Defasagem' }}
            </dt>
            <dd
              class="item-description"
              :style="{
                color: hasCalExcess ? 'var(--blue-3)' : 'var(--red-3)',
              }"
            >
              {{
                (hasCalExcess
                  ? item.parenteralResult.cal.excess
                  : item.parenteralResult.cal.missing) * 100
              }}%
            </dd>
          </div>
          <div class="item">
            <dt class="item-title">
              Quantidade recebida
            </dt>
            <dd class="item-description">
              {{ item.parenteralResult.cal.amountReceived }} kcal
            </dd>
          </div>
          <div class="item">
            <dt class="item-title">
              Relação (massa corporal)
            </dt>
            <dd class="item-description">
              {{ item.parenteralResult.cal.relationByBody }} kcal/kg
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <Button color="primary" @click="toggle">
      {{ isOpen ? 'Menos' : 'Mais' }}
      <i
        :class="['nutris-angle-down', isOpen ? 'is-active' : '']"
        aria-hidden="true"
        aria-label="seta pra baixo"
      ></i>
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Button from '@/components/form/button/Button.vue'
import { formatDate } from '@/helpers/date/date'

export default defineComponent({
  name: 'Card',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  components: {
    Button,
  },
  created() {
    this.hasProteinExcess = !!this.item.parenteralResult.protein.excess
    this.hasCalExcess = !!this.item.parenteralResult.cal.excess
  },
  setup() {
    const isOpen = ref(false)
    const hasProteinExcess = ref(false)
    const hasCalExcess = ref(false)
    const toggle = () => (isOpen.value = !isOpen.value)

    return {
      isOpen,
      toggle,
      hasProteinExcess,
      hasCalExcess,
      formatDate,
    }
  },
})
</script>
<style lang="scss" scoped>
@import '@/assets/styles/screen.scss';

.card {
  display: flex;
  background-color: var(--gray-1);
  flex-direction: column;
  padding: var(--space-xs);

  &:not(:last-child) {
    margin-bottom: var(--space-xs);

    @media screen and (min-width: $screen-sm) {
      margin-bottom: var(--space-sm);
    }
  }

  @media screen and (min-width: $screen-sm) {
    padding: var(--space);
  }

  & > .button {
    max-width: 100px;
    margin: 0 auto;
  }
}

// card header
.title {
  display: flex;
  justify-content: space-between;
}

.info {
  display: flex;
  margin-top: var(--space-sm);

  @media screen and (max-width: $screen-sm) {
    flex-direction: column;
  }

  @media screen and (min-width: $screen-sm) {
    margin-top: var(--space-md);
    align-items: center;
  }

  & > .data {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-grow: 1;

    @media screen and (max-width: $screen-sm) {
      margin-bottom: var(--space-sm);
    }

    @media screen and (min-width: $screen-sm) {
      margin-right: var(--space-lg);
    }
  }
}

.nutris-angle-down {
  transform: rotate(0);
  transition: transform var(--transition-duration-speed);
  &.is-active {
    transform: rotate(180deg);
  }
}

// card body
h3 {
  margin-bottom: var(--space-xs);
}

.body {
  left: 0;
  height: 0;
  padding-top: var(--space-xs);
  margin-top: var(--space-xs);
  border-top: 1px solid var(--gray-3);
  opacity: 0;
  top: 0;
  transform: scaleY(0);
  transform-origin: top bottom;
  transition: transform var(--transition-duration-speed);
  width: 100%;

  &.is-active {
    height: auto;
    opacity: 1;
    transform: scaleX(1);
  }
}

.cal {
  margin-top: var(--space-sm);
}

.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.item {
  &:not(:last-child) {
    margin-bottom: var(--space-xs);
  }

  &-title {
    color: var(--gray-3);
    font-weight: 500;
  }
  &-description {
    color: var(--black);
  }
}

.fas {
  margin-right: var(--space-xxs);
  font-size: 13px;

  &.fa-sun {
    color: var(--orange-3);
  }

  &.fa-dna {
    color: var(--green-3);
  }
}
</style>
