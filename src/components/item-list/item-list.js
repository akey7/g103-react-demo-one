import React from 'react'
import Item from '../item/item'

const ItemList = ({ items }) => (
  <ul>
    { items.map((item, idx) => <Item key={idx} item={item} />)}
  </ul>
)

export default ItemList
