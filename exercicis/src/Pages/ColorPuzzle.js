import Eprouvette from "./Eprouvette";
import { useState, useReducer } from "react";
export default function ColorPuzzle() {
  // draw eprouvette
  // calling eprouvette component x times
  // i still got it
  const [clickeado, setClickeado] = useState(null);
  const [jugadas, setJugadas] = useState([]);
  const [colorTranfer, setColorTransfer] = useState(null);
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
    let j = 0;
    resultKeys = Object.keys(jugadas[jugadas.length - 1]).length;
    while (j < distribution[i].length - 1 && distribution[i][j] === 5) {
      // el 5 representa white
      j++;
    }
    let ballFounded = j--;

    if (jugadas.length === 0 || resultKeys !== 2) {
      //¬(A||B) = ¬A && ¬B
      //jugadas.length ===0 is for the first entry
      //or resultKeys !== 2
      // or the previous was full
      // register the first historic

      auxjugada = { firstEpr: i, firstBall: ballFounded };
      setColorTransfer(distribution[i][ballFounded]);
    } else {
      // diferenciate between 2 components or 4
      //const result = Object.keys(student).length;
      // diferenciate empty by colors

      // searching the last white ball in distribution
      // to diferenciate the first click

      // update the next sequences based in the previous object
      auxjugada = {
        // firstEpr: clickeado,
        // taking data from the previous click registred in jugadas
        firstEpr: jugadas[jugadas.length - 1].firstEpr,
        firstBall: jugadas[jugadas.length - 1].firstBall,
        // taking data from the previous click registred in jugadas
        secondEpr: i,
        secondBall: ballFounded,
        // in i eprouvette searching the last white ball
        // in distribution
      };
      jugadas.pop();

      // setJugadas([...jugadas]);
    }
    jugadas.push(auxjugada);
    setJugadas([...jugadas]);
    //console.log(jugadas[jugadas.length - 1]);
    console.log(jugadas);
    let aux = [...distribution];
    // we start here the sort algorithm
    // 2 options working with jugadas(i could have a delay problem) or working
    // with auxjugada
    // the change is in first click making the ball white
    // in the second click transfering the color of the first ball before making it white
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
