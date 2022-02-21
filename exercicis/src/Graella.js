import { useState } from "react";
import Foto from "./Foto";
import $ from "jquery";
export default function Graella() {
  const fotos = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
  ];
  const [clickeado, setClickeado] = useState("");
  function clickear(indice) {
    // alert({ sour });
    // $( "ul li:nth-child(2)" ).append( "<span> - 2nd!</span>" );
    setClickeado(indice);
    console.log(indice);
  }
  // const clickear = {(sour) => {
  //   alert({ sour });

  //   // crear states en el bucle del map
  //   // y actualizarlos en el onclick

  // }
  // };
  return (
    <div>
      {fotos.map((element, indice) => (
        <Foto
          clase={clickeado === indice ? " gran" : "nada"}
          source={element}
          indice={indice}
          key={indice}
          func={clickear}
        />
      ))}
    </div>
    // <img src="images/1.jpg" alt="1" width="100px" heigth="100px" />
  );
}
