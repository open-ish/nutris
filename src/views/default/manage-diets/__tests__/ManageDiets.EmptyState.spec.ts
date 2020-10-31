import ManageDiets from '@/views/default/manage-diets/ManageDiets.vue'
import { setup } from '@/test/setup.ts'
import store from '@/test/mockStore'
import EmptyState from '@/components/empty-state/EmptyState.vue'

jest.spyOn(store, 'dispatch').mockImplementation()
describe.skip('<ManageDiets/> Empty State', () => {
  const wrapper = setup(ManageDiets)

  it.skip('Should show Empty State component', () => {
    expect(wrapper.findComponent(EmptyState).exists()).toBeTruthy()
  })
})
