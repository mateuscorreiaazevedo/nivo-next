export const fallbackFormat = (value: string, secondValue?: string) => {
  const upperCase = (value: string) => value.toUpperCase()

  if (secondValue) {
    return upperCase(`${value.slice(0, 1)}${secondValue.slice(0, 1)}`)
  }

  const valueArray = value.split(' ')
  const firstName = valueArray[0]
  const lastName = valueArray[1]

  return upperCase(`${firstName?.slice(0, 1)}${lastName?.slice(0, 1)}`)
}
