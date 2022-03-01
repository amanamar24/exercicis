import MorpionBox from "./MorpionBox";
import { useReducer, useState } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
//----------------------
// import CounterRedux from "./Counter";
// const store = createStore(counter);
// export default function App() {
//     return (
//       <Provider store={store}>
//         <CounterRedux />
//       </Provider>
//     );
//    }

export default function MorpionFrameRedux() {
  // let cssButtonRow = " board-row";
  const [signo, setSigno] = useState("X");
  const [clickeado, setClickeado] = useState(null);
  const [contador, setContador] = useState(0);
  const [winner, setWinner] = useState([]);

  let cssButton =
    "bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded";
  let cssWinner =
    "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded";
  let initialState = [
    // añadir show : true, false
    { pos: 0, signo: "", cuenta: null, back: false },
    { pos: 1, signo: "", cuenta: null, back: false },
    { pos: 2, signo: "", cuenta: null, back: false },
    { pos: 3, signo: "", cuenta: null, back: false },
    { pos: 4, signo: "", cuenta: null, back: false },
    { pos: 5, signo: "", cuenta: null, back: false },
    { pos: 6, signo: "", cuenta: null, back: false },
    { pos: 7, signo: "", cuenta: null, back: false },
    { pos: 8, signo: "", cuenta: null, back: false },
  ];
  // setHistorico;
  const [historico, dispatchHist] = useReducer(reducerHist, initialState);
  function reducerHist(prevState, action) {
    let array;
    switch (action.type) {
      case "clickMo":
        array = [...prevState];
        array[action.indice].signo = signo;
        array[action.indice].cuenta = contador;
        signo === "O" ? setSigno("X") : setSigno("O");
        setContador(contador + 1); // las dos ultimas lineas porque habia desfase teniendo las en clickMo
        // ganador(array[action.indice].signo); //still don't like it
        return array;
      case "backward":
        array = [...prevState];
        array.back = true;
        return array;
      case "forward":
        array = [...prevState];
        array[action.indice].back = false;
        return array;
      case "read":
        array = [...prevState];
        return array;

      default:
        throw new Error();
    }
  }
  function clickForbiden() {
    winner.length !== 0
      ? alert("game is finished")
      : alert("cell already clicked");
  }

  function ganador(señal) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // fatlta un dispatch para retornar datos??

    console.log("señal dentro ganador", señal);
    let filtered = historico.filter((sign) => sign.signo === señal);
    console.log("filtered", filtered);
    let filteredPos = filtered.map((n) => n.pos);
    console.log("filteredPos", filteredPos);

    let containsAll = false;
    let i = 0;
    do {
      containsAll = lines[i].every((element) => {
        return filteredPos.includes(element);
      });
      i++;
    } while (i < lines.length && !containsAll);
    if (containsAll === true) {
      let aux = i - 1;
      let winnerAux = winner.concat(lines[aux]);
      setWinner([...winnerAux]);
      console.log("winnerState", winner);
      console.log("historico ", historico);
      // cambiar state winner
    }
  }
  function clickMo(i) {
    // let histArray;
    // histArray = dispatchHist({ type: "read" });
    // console.log("histArray", histArray);
    console.log("historico-clickmo", historico);

    setClickeado(i);
    console.log("señal dentro de clickMO", signo);

    dispatchHist({ type: "clickMo", indice: i });
    //using callback here can resolve the issue?

    if (contador >= 4) {
      ganador(signo);
    }
    // setContador(contador + 1);
    // signo === "O" ? setSigno("X") : setSigno("O");
    // alert(indice);
  }

  function backward() {
    let contaux = contador - 1;
    setContador(contador - 1); // porque en la celda 0 vale 1,y el ultimo click lo incrementa a 1 para usar posteriorment pero con el juego terminado no se usa
    setWinner([]);
    if (contaux > -1) {
      for (let j = 0; j < historico.length; j++) {
        if (historico[j].cuenta === contaux) {
          ///------------ codigo con un state-------
          //alert("hey");
          dispatchHist({ type: "backward", indice: j });

          break;
        }
      }
      console.log("historico", historico);
    } else {
      alert("abortar operacion");
    }
  }
  function forward() {
    let contaux = contador + 1;
    console.log("contaux", contaux);
    console.log("contador antes", contador);
    setContador(contador + 1); // porque en la celda 0 vale 1,y el ultimo click lo incrementa a 1 para usar posteriorment pero con el juego terminado no se usa
    console.log("contador despues", contador);
    // let histAux = []; // cambiar a constante
    let filtered = historico.filter((cont) => cont.cuenta !== null); // to highlights only the elements clicked before an having the count
    let filteredCuenta = filtered.map((n) => n.cuenta);
    let cuentAux = Math.max(...filteredCuenta);
    // console.log("cuentAux", cuentAux);
    if (contaux <= cuentAux) {
      //alert("vamos bien");
      for (let j = 0; j < historico.length; j++) {
        if (historico[j].cuenta === contaux) {
          dispatchHist({ type: "forward", indice: j });
        }
      }
    } else {
    }
  }
  return (
    <>
      <h2 className="proceso-juego">
        {contador === 9 || winner.length !== 0
          ? signo === "O"
            ? "game over . the winner is: X"
            : "game over . the winner is: O"
          : signo + " it's your turn"}
      </h2>
      <div className="grid grid-cols-3 gap-2 morpion-container grid place-items-center h-screen">
        {[...Array(9)].map((x, i) => (
          <MorpionBox
            indice={i}
            func={
              historico[i].cuenta !== null || winner.length !== 0
                ? clickForbiden
                : clickMo
            }
            key={i}
            estilos={
              winner !== null && winner.includes(i) ? cssWinner : cssButton
            }
            simbolo={
              clickeado === i ||
              (historico[i].cuenta !== null && !historico[i].back) //back esta a false
                ? historico[i].signo
                : ""
            }
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 morpion-container grid place-items-center h-screen">
        <button onClick={() => backward()} className={cssButton + " w-[100px]"}>
          backward
        </button>
        <button onClick={() => forward()} className={cssButton + " w-[100px]"}>
          forward
        </button>
      </div>
    </>
  );
}
