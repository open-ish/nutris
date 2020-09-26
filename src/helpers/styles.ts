export const getCssVariableValue = (variableName: string) =>
  getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim()
