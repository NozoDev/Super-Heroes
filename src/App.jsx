import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";

import Informacion from "./components/Home/Informacion";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="/informacion" element={<Informacion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
