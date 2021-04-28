const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return (
        updateOrder(state, action.payload, 1)
      )
    case 'MINUS_ITEM':
      return (
        updateOrder(state, action.payload, -1)
      )
    case 'DELETE_ITEM':
      const item = state.shoppingCart.find(({ id }) => id === action.payload)
      return (
        updateOrder(state, action.payload, -item.count)
      )
    case 'ADD_REVIEW':
      return {
        ...state,
        reviews: [
          action.payload,
          ...state.reviews
        ]
      }
    case 'FETCH_ALL_REVIEWS':
      return {
        ...state,
        reviews: action.payload
      }
    case 'RESET_CART':
      return {
        ...state,
        shoppingCart: [],
        orderTotal: 0,
        discount: 0,
      }
    case 'SET_DISCOUNT_10':
      return {
        ...state,
        orderTotal: state.orderTotal - state.orderTotal * 0.1,
        discount: 0.1
      }
    case 'RESET_DISCOUNT':
      return {
        ...state,
        discount: 0
      }
    default:
      return state
  }
}

const updateOrder = (state, itemId, quantity) => {
  const { menu, shoppingCart, orderTotal, discount } = state

  const menuItem = menu.find((item) => item.id === itemId);
  let itemIndex = shoppingCart.findIndex(({ id }) => id === itemId);
  const item = shoppingCart[itemIndex]

  const newItem = updateCartItem(menuItem, item, quantity);
  const newOrderTotal = (orderTotal + quantity * (menuItem.price - menuItem.price * discount)) < 0 ? 0 : orderTotal + quantity * (menuItem.price - menuItem.price * discount)

  return {
    ...state,
    orderTotal: newOrderTotal,
    shoppingCart: updateCartItems(shoppingCart, newItem, itemIndex),

  }
}

const updateCartItem = (menuItem, item = {}, quantity) => {

  const {
    id = menuItem.id,
    name = menuItem.name,
    count = 0,
    price = 0
  } = item;

  return {
    id,
    name,
    count: count + quantity,
    price: price + quantity * menuItem.price
  }
}

const updateCartItems = (shoppingCart, newItem, idx) => {
  if (newItem.count === 0) {
    return [
      ...shoppingCart.slice(0, idx),
      ...shoppingCart.slice(idx + 1)
    ]
  }

  if (idx === -1) {
    return [
      ...shoppingCart,
      newItem
    ]
  }
  return [
    ...shoppingCart.slice(0, idx),
    newItem,
    ...shoppingCart.slice(idx + 1)
  ]
}

export default reducer;