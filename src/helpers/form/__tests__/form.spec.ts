import { changeToDot, maxLength, removeAllEmptySpace } from '../form'
import * as mocks from './mocks'

describe('Date', () => {
  it('Should return string without empty space', () => {
    expect(removeAllEmptySpace(mocks.STRING_WITHOUT_SPACE)).toBe(
      mocks.STRING_WITHOUT_SPACE
    )
    expect(removeAllEmptySpace(mocks.STRING_WITH_SIDE_SPACE)).toBe(
      mocks.STRING_WITH_SIDE_SPACE_RESULT
    )
    expect(removeAllEmptySpace(mocks.STRING_WITH_SPACE)).toBe(
      mocks.STRING_WITH_SPACE_RESULT
    )
  })
  it('Should validate max length', () => {
    expect(maxLength(mocks.NUMBER_OVERFLOW, 6)).toBe(
      mocks.NUMBER_OVERFLOW_RESULT
    )
    expect(maxLength('1354', 6)).toBe('1354')
    expect(maxLength(mocks.TEXT_OVERFLOW, 6)).toBe(mocks.TEXT_OVERFLOW_RESULT)
  })

  it('Should change comma to dot', () => {
    expect(changeToDot(mocks.WITH_COMMA)).toBe(mocks.WITHOUT_COMMA)
    expect(changeToDot(mocks.WITHOUT_COMMA)).toBe(mocks.WITHOUT_COMMA)
  })
})
