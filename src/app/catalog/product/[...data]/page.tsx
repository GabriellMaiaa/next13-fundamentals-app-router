import AddButton from '../add-to-cart-button'

interface ProductProps {
  params: {
    data: string[]
  }
}

export default async function Product({ params }: ProductProps) {
  const response = await fetch('https://api.github.com/users/GabriellMaiaa')
  const user = await response.json()

  const [productId, size, color] = params.data

  return (
    <div>
      <h1>Product: {productId}</h1>
      <h1>Tamanho: {size}</h1>
      <h1>Cor: {color}</h1>
      <AddButton />
    </div>
  )
}
