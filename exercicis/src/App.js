import "./App.css";
import Graella from "./Graella";
import MorpionFrame from "./MorpionFrame";

function App() {
  return (
    <div>
      <h1>galeria fotos</h1>
      <Graella />
      <hr />
      <h1 className="bg-slate-200 text-3xl font-bold underline">
        jeu de morpion
      </h1>
      <MorpionFrame />
    </div>
  );
}

export default App;
