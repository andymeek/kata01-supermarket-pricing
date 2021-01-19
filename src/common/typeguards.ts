const isOfType = <T>(
  varToBeChecked: any,
  prop: keyof T
): varToBeChecked is T => {
  return varToBeChecked && (varToBeChecked as T)[prop] !== undefined
}

export { isOfType }
