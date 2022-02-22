import "./App.css";
import Graella from "./Pages/Graella";
import MorpionFrame from "./Pages/MorpionFrame";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
function App() {
  return (
    // <div>
    //   <h1>galeria fotos</h1>
    //   <Graella />
    //   <hr />
    //   <h1 className="bg-slate-200 text-3xl font-bold underline">
    //     jeu de morpion
    //   </h1>
    //   <MorpionFrame />
    // </div>
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="Graella" element={<Graella />}></Route>
            <Route path="MorpionFrame" element={<MorpionFrame />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
