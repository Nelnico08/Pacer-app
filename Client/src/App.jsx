import { Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import Register from './Components/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/signin" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
