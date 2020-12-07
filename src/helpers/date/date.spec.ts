import { formatDate, getAge } from './date'

const DATE_RESULT = '31/10/2020'

describe('Date', () => {
  it('Should return valid dates', () => {
    expect(formatDate(1604194938654)).toBe(DATE_RESULT)
    expect(formatDate('Sat Oct 31 2020 22:34:11 GMT-0300')).toBe(DATE_RESULT)
  })

  it('Should return date in ages', () => {
    expect(getAge('1994/09/14')).toBe('26')
  })
})
