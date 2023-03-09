import './App.css'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'

function App() {

  return (
    <div className="App">
      Hello World!;
      <Routes>
        <Route path='/' element={<Sidebar />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

export default App
