import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Componenets/Home'
import Create from './Componenets/Create'
import Update from './Componenets/Update'
import Read from './Componenets/Read'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/create' element={<Create/>} ></Route>
          <Route path='/update/:id' element={<Update/>} ></Route>
          <Route path='/read/:id' element={<Read/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
