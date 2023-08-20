export function capitalizeFirstLetter (inputString: string): string {
  if (inputString.length === 0) return inputString
  inputString = inputString.toLowerCase()
  const firstLetter = inputString.charAt(0).toUpperCase()
  const restOfString = inputString.slice(1)
  return firstLetter + restOfString
}
