import storage from '../localStorage'
import * as mocks from './mocks'

const actionMock = {
  someData: mocks.SOME_DATA,
}

const localStorageMock = (() => {
  return {
    getItem<T>(key: string): T | null {
      return actionMock[key] || null
    },
    setItem(key: string, value: any) {
      actionMock[key] = value
    },
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

describe('LocalStorage helper', () => {
  it('Should get item from local storage', () => {
    expect(storage.get('someData')).toBe(mocks.SOME_DATA)
    expect(storage.get('notExist')).toBeNull()
    expect(typeof storage.get('someData')).toBe('string')

    storage.set('someData', mocks.ARRAY_DATA)
    expect(storage.get('someData')).toEqual(mocks.ARRAY_DATA)

    storage.set('someData', mocks.COMPLEX_DATA)
    expect(storage.get('someData')).toEqual(mocks.COMPLEX_DATA)
  })
})
