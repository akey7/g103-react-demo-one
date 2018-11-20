import React from 'react'
import Item from '../item/item'

const ItemList = ({ items }) => (
  <ul>
    { items.map((item, idx) => <Item key={idx} id={item.id} item={item} />)}
  </ul>
)

export default ItemList
