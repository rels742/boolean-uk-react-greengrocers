import { useState } from 'react'

import initialStoreItems from '../store-items'

// console.log(initialStoreItems)

function Store() {
  const [storeItems, setStoreItems] = useState(initialStoreItems)

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        {storeItems.map(item => {
          return (
            <div key={item.id}>
              <img src={`/assets/icons/${item.id}.svg`} alt={item.name}></img>
              <button>ADD TO CART</button>
            </div>
          )
        })}
      </ul>
    </header>
  )
}

export default Store

// click event needed so that when you click add to button, the item gets added into the cart...

// function that adds items to cart,
// cart componenet
// events listner for add to button
