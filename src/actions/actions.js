

export const addItem = ItemId => ({
  type: 'ADD_ITEM',
  payload: ItemId
})
export const minusItem = ItemId => ({
  type: 'MINUS_ITEM',
  payload: ItemId
})
export const deleteItem = ItemId => ({
  type: 'DELETE_ITEM',
  payload: ItemId
})
export const addReview = newReview => ({
  type: 'ADD_REVIEW',
  payload: newReview
})
export const fetchAllReviews = revs => ({
  type: 'FETCH_ALL_REVIEWS',
  payload: revs
})
export const resetCart = () => ({
  type: 'RESET_CART'
})