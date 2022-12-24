import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CurrentCharacter from "./pages/CurrentCharacter";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/characters/*' element={<CurrentCharacter />} />
    </Routes>
  )
}

export default App;
