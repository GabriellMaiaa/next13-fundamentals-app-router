export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('https://api.github.com/users/GabriellMaiaa')
  const user = await response.json()

  return (
    <div>
      <h1>Hello World!!</h1>
      <p>{JSON.stringify(user, null, 2)}</p>
    </div>
  )
}
