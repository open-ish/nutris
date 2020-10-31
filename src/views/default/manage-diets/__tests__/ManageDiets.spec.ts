import ManageDiets from '@/views/default/manage-diets/ManageDiets.vue'
import { setup } from '@/test/setup.ts'
import EmptyState from '@/components/empty-state/EmptyState.vue'
import { Diet } from '@/models/Diet'
import mockStore from '@/test/mockStore'

const TESTID_MANAGE_DIETS = '[data-testid="manage-diets-list"]'
const FAKE_DIET: Diet = {
  name: 'diet',
  proteinAmount: 1,
  calAmount: 2,
  id: 'tete',
}

mockStore.state['manageDiets'].diets = [FAKE_DIET]
describe.skip('<ManageDiets/>', () => {
  const wrapper = setup(ManageDiets)

  it.skip('Should render diets', async () => {
    const diets = wrapper.find(TESTID_MANAGE_DIETS)
    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(EmptyState).exists()).toBeFalsy()
    expect(diets.exists()).toBeTruthy()
  })
})
