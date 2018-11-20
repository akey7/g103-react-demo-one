import React from 'react'
import Item from '../item/item'

const ItemList = ({ items, onDeleteItem }) => (
  <ul>
    { items.map((item, idx) => <Item key={item.id} id={item.id} item={item} onDeleteItem={onDeleteItem} />)}
  </ul>
)

export default ItemList
