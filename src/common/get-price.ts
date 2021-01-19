const getPrice = (
  qty: number,
  groupQty: number,
  individualPrice: number,
  groupPrice: number
): number => {
  const groupCount = Math.floor(qty / groupQty)
  const individualCount = qty % groupQty

  return groupCount * groupPrice + individualCount * individualPrice
}

export { getPrice }
