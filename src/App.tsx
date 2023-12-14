import { Task } from './Task';
import { Header } from './components/Header';

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Task 
        content="Terminar o desafio do Ignite"
      />
      <Task 
        content="Não ficar louco"
      />
    </div>
  )
}


