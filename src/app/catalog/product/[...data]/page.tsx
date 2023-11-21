'use client'
interface ProductProps {
  params: {
    data: string[]
  }
}

export default function Product({ params }: ProductProps) {
  const [productId, size, color] = params.data

  function addCart() {
    console.log('Adicionado')
  }

  return (
    <div>
      <h1>Product: {productId}</h1>
      <h1>Tamanho: {size}</h1>
      <h1>Cor: {color}</h1>

      <button onClick={addCart}>Adicionar ao Carrinho</button>
    </div>
  )
}
