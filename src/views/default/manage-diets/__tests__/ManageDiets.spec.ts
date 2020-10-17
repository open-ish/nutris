import ManageDiets from '@/views/default/manage-diets/ManageDiets.vue'
// import { ManageDietsGetters } from '@/store/manage-diets/types'

import { setup } from '@/test/setup.ts'
import manageDietsStore from '@/store/manage-diets/index.ts'
import EmptyState from '@/components/empty-state/EmptyState.vue'
import { Diet } from '@/models/Diet'

const TESTID_MANAGE_DIETS = '[data-testid="manage-diets"]'
const FAKE_DIET: Diet = { name: 'diet', proteinAmount: 1, calAmount: 2 }
describe('<ManageDiets/> Empty State', () => {
  const wrapper = setup(ManageDiets)

  it('Should show Empty State component', () => {
    expect(wrapper.findComponent(EmptyState).exists()).toBeTruthy()
  })
})

describe('<ManageDiets/>', () => {
  manageDietsStore.mutations.CHANGE_DIETS(manageDietsStore.state, FAKE_DIET)
  const wrapper = setup(ManageDiets)

  it('Should render diets', () => {
    const diets = wrapper.find(TESTID_MANAGE_DIETS)

    expect(wrapper.findComponent(EmptyState).exists()).toBeFalsy()
    expect(diets.exists()).toBeTruthy()
  })
})
