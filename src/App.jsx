import { Routes, Route } from "react-router-dom"
import Home from "./componentes/portafolio"
import Portfolio from "./screens/portafolio"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  )
}

export default App
