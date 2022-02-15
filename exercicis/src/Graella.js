import { useState } from "react";
import Foto from "./Foto";
export default function Graella() {
  const fotos = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
  ];
  const [clickeado, setClickeado] = useState("");
  const clickear = (source) => {
    alert({ source });
    // crear states en el bucle del map
    // y actualizarlos en el onclick
  };
  return (
    <div>
      {fotos.map((element, indice) => (
        <Foto source={element} indice={indice} func={clickear} />
      ))}
    </div>
    // <img src="images/1.jpg" alt="1" width="100px" heigth="100px" />
  );
}
