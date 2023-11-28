export default async function GithubProfile() {
  await new Promise((resolve) => setTimeout(resolve, 8000))

  const response = await fetch('https://api.github.com/users/GabriellMaiaa')
  const user = await response.json()

  return (
    <div>
      <h1>Github Profile</h1>
      <p>{JSON.stringify(user, null, 2)}</p>
    </div>
  )
}
