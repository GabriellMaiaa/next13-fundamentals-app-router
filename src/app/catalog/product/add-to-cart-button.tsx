'use client'

import { useState } from 'react'

export default function AddButton() {
  const [count, setCount] = useState(0)

  function addCart() {
    setCount((state) => state + 1)
    console.log(count)
  }

  return <button onClick={addCart}>Adicionar ao Carrinho {count}</button>
}
