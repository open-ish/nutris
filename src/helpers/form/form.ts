export const removeAllEmptySpace = (string: string) => {
  return string?.replace(/\s+/g, '')
}

export const maxLength = (value: string, max: number) => {
  const hasAmount = value.length < max
  return hasAmount ? value : value.slice(0, max)
}

export const changeToDot = (value: string) => {
  return value.toString().replace(/,/g, '.')
}
