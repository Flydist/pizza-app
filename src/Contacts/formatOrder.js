export const formatOrder = (delivery, paytype, people, phone, address, comment, orderTotal, shoppingCart, status = 'new') => {

  const positionsMas = []

  // eslint-disable-next-line array-callback-return
  shoppingCart.map((item) => {
    positionsMas.push(
      `${item.name}`,
      ` ${item.count} шт`,
      ` ${item.price} рублей`
    )
  })

  const positionsToString = positionsMas.join()

  return {
    people,
    phone,
    address,
    delivery,
    paytype,
    comment,
    positions: positionsToString,
    orderTotal,
    status
  }
}