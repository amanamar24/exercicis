import Eprouvette from "./Eprouvette";
import { useState, useReducer } from "react";
export default function ColorPuzzle() {
  // draw eprouvette
  // calling eprouvette component x times
  // i still got it
  const [clickeado, setClickeado] = useState(null);
  const [jugadas, setJugadas] = useState([]);
  let initialState = [
    // añadir show : true, false
    [0, 2, 4, 3],
    [0, 2, 4, 3],
    [0, 2, 4, 3],
    [0, 2, 4, 3],
    [0, 2, 4, 3],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
  ];
  const [distribution, setDistribution] = useState(initialState);
  function moveBall(i) {
    // compare i with clickeado and change distribution
    // make rules as a filter
    // alert(i);
    // in success increment ball sorted
    // console.log(jugadas.length);
    let resultKeys = null;
    let auxjugada = {};
    if (jugadas.length === 0) {
      // or the previous was full
      // register the first historic

      auxjugada = { firstEpr: i, firstBall: 0 };
    } else {
      // diferenciate between 2 components or 4
      //const result = Object.keys(student).length;
      // diferenciate empty by colors
      resultKeys = Object.keys(jugadas[jugadas.length - 1]).length;
      if (resultKeys === 2) {
        // to diferenciate the first click
        jugadas.pop();
        // update the next sequences based in the previous object
        auxjugada = {
          // firstEpr: clickeado,
          // taking data from the previous click registred in jugadas
          firstEpr: jugadas[jugadas.length - 1].firstEpr,
          firstBall: jugadas[jugadas.length - 1].firstBall,
          // taking data from the previous click registred in jugadas
          secondEpr: i,
          secondBall: 3,
        };
      } else {
        auxjugada = { firstEpr: i, firstBall: 0 };
      }

      // setJugadas([...jugadas]);
      auxjugada = {
        firstEpr: clickeado,
        firstBall: 0,
        secondEpr: i,
        secondBall: 3,
      };
    }
    jugadas.push(auxjugada);
    setJugadas([...jugadas]);
    //console.log(jugadas[jugadas.length - 1]);
    console.log(jugadas);
    let aux = [...distribution];
    // we start here the sort algorithm
    aux[i][0] = 5;
    // eprouvette i position 0 jugadas:[{epr1:clickeado,ball1:0,epr2:i,ball2:}]
    // if jugadas empty
    //jugada 2
    // if(clickeado !== null)
    // else
    //setClickeado null
    setDistribution([...aux]);
    // setDistribution(...)
    setClickeado(i);
    console.log({ clickeado });
  }
  return (
    <>
      <div className="mt-40 m-auto grid grid-cols-7 gap-20 w-[210px] h-[250px] grid place-items-center h-screen">
        {[...Array(7)].map((x, i) => (
          <Eprouvette
            key={i}
            indice={i}
            func={moveBall}
            dist={distribution[i]}
          ></Eprouvette>
        ))}
      </div>
    </>
  );
}
