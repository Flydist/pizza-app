const initialState = {
  menu: [
    {
      id: 1,
      name: 'Флорентина',
      description: 'Пицца соус, колбаски Баварские, ветчина, шампиньоны, сыр Моцарелла, сыр Пармезан, сыр Фетаки, соус Шри-рача',
      price: 550,
      category: 'pizza'
    },
    {
      id: 2,
      name: 'Ветчина и цыпленок',
      description: 'Пицца соус, Сливочный соус "Альфредо", сыр моцарелла, ветчина, цыпленок гриль, томаты, соус Ранч',
      price: 520,
      category: 'pizza'
    },
    {
      id: 3,
      name: 'Техасская',
      description: 'Пицца соус, ветчина, бекон, красный лук, маринованные огурчики, моцарелла, соус Барбекю',
      price: 540,
      category: 'pizza'
    },
    {
      id: 4,
      name: 'Мясная',
      description: 'Пицца соус, цыпленок, ветчина, пикантная пепперони, томатный соус, острая чоризо, моцарелла',
      price: 580,
      category: 'pizza'
    },
    {
      id: 5,
      name: 'Альфредо',
      description: 'Пицца соус, сливочно-шпинатный соус, моцарелла, ветчина, хрустящий бекон, шампиньоны, сочные томаты',
      price: 550,
      category: 'pizza'
    },
    {
      id: 6,
      name: 'Пепперони',
      description: 'Пицца соус, колбаса Пепперони, шампиньоны, сыр моцарелла, соус томатный, базилик',
      price: 510,
      category: 'pizza'
    },
    {
      id: 7,
      name: 'Грибная',
      description: 'Пицца соус, сыр моцарелла, соус чесночный, грибы (вешенки, шампиньоны), петрушка',
      price: 550,
      category: 'pizza'
    },
    {
      id: 8,
      name: 'Курица терияки',
      description: 'Пицца соус, соус Ранч, сыр моцарелла, курица копченая, ананас, кунжут микс, соус Терияки',
      price: 540,
      category: 'pizza'
    },
    {
      id: 9,
      name: 'Четыре сыра',
      description: 'Пицца соус, сыр моцарелла, сыр Дор-блю, сыр Чеддер, сыр Эмменталь',
      price: 540,
      category: 'pizza'
    },
    {
      id: 10,
      name: 'Pepsi',
      description: 'Объем: 0.5 литра',
      price: 70,
      category: 'drinks'
    },
    {
      id: 11,
      name: 'Sprite',
      description: 'Объем: 0.5 литра',
      price: 70,
      category: 'drinks'
    },
    {
      id: 12,
      name: 'Bon Aqua',
      description: 'Объем: 0.5 литра',
      price: 70,
      category: 'drinks'
    },
    {
      id: 13,
      name: 'Coca-Cola',
      description: 'Объем: 0.5 литра',
      price: 70,
      category: 'drinks'
    },
    {
      id: 14,
      name: 'Burn',
      description: 'Объем: 0.45 литра',
      price: 110,
      category: 'drinks'
    },
    {
      id: 15,
      name: 'Морс облепиховый',
      description: 'Объем: 0.5 литра',
      price: 70,
      category: 'drinks'
    },
    {
      id: 16,
      name: 'Чизкейк "Нью-Йорк" с ягодой',
      description: '250 грамм',
      price: 190,
      category: 'desserts'
    },
    {
      id: 17,
      name: 'Морковный торт',
      description: '250 грамм',
      price: 190,
      category: 'desserts'
    },
    {
      id: 18,
      name: 'Тирамису',
      description: '250 грамм',
      price: 170,
      category: 'desserts'
    },
    {
      id: 19,
      name: 'Соус Heinz сырный',
      description: '15 грамм',
      price: 15,
      category: 'sause'
    },
    {
      id: 20,
      name: 'Соус Heinz кисло-сладкий',
      description: '15 грамм',
      price: 15,
      category: 'sause'
    },
    {
      id: 21,
      name: 'Соус Heinz чесночный',
      description: '15 грамм',
      price: 15,
      category: 'sause'
    },
    {
      id: 22,
      name: 'Соус Heinz томатный',
      description: '15 грамм',
      price: 15,
      category: 'sause'
    }
  ],
  shoppingCart: [],
  orderTotal: 0,
  reviews: [
    {
      peopleName: 'Андрей',
      text: 'Вкусно!',
      starsCount: 5
    },
    {
      peopleName: 'Игорь',
      text: 'Вкусно, но не сытно!',
      starsCount: 4
    },
    {
      peopleName: 'Анастасия',
      text: 'Не приехала!',
      starsCount: 0
    },
  ]
}

const reducer = (state = initialState, action) => {
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
    default:
      return state
  }
}

const updateOrder = (state, itemId, quantity) => {
  const { menu, shoppingCart, orderTotal } = state

  const menuItem = menu.find((item) => item.id === itemId);
  let itemIndex = shoppingCart.findIndex(({ id }) => id === itemId);
  const item = shoppingCart[itemIndex]

  const newItem = updateCartItem(menuItem, item, quantity);
  const newOrderTotal = orderTotal + quantity * menuItem.price

  return {
    ...state,
    orderTotal: newOrderTotal,
    shoppingCart: updateCartItems(shoppingCart, newItem, itemIndex)
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