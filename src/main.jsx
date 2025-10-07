import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './Login/Login.jsx'
import Header from './Header/Header.jsx'

let validUsers = [
  {
    nombre: "Alejandro",
    apellido: "Bueno",
    correo: "alejandro.bueno.vera.97@gmail.com",
    username: "abueno",
    password: "123"
  },
  {
    nombre: "Tiburcio",
    apellido: "Ramirez",
    correo: "tramirez@gmail.com",
    username: "cliente",
    password: "123"
  }
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Login validUsers={validUsers} />
  </StrictMode>,
)
