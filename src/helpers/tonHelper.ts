export const shortAddress = (address: string) => {
  const firstChar = address.slice(0, 3)
  const lastChar = address.slice(-4)

  const result = `${firstChar}...${lastChar}`
  return result
}
