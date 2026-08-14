import './App.css'
import { useState } from 'react'

function App() {

  const [name, setName] = useState("Exemple")
  const [email, setEmail] = useState("exemple@example.com")
  const [password, setPassword] = useState("123456")
  const [users, setUsers] = useState([
    { id: 1, name: "exemple", email: "exemple@example.com", password: "123456" }
  ])

  function handleSubmit(event){
    event.preventDefault();

    setUsers([...users, {
      id: users.length + 1,
      name,
      email,
      password
    }])

  }

  return (
    <>
    
    <div className="app">
      <h1>Cadastro de Usuário</h1>
    </div>  

    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)}></input>
      <input type="email" placeholder="Email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <input type="password" placeholder="Senha" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
      <button type="submit">Cadastrar</button>
    </form>


    <section>
      {users.map((user) => (
        <div key={user.id}>
          <img src={`https://robohash.org/${user.id}`} width="60px"/>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.password}</p>
        </div>
      ))}
    </section>
    </>
  )
}

export default App
