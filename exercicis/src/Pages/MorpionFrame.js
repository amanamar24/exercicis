import MorpionBox from "./MorpionBox";
import { useState } from "react";
export default function MorpionFrame() {
  // let cssButtonRow = " board-row";
  const [signo, setSigno] = useState("X");
  const [clickeado, setClickeado] = useState(null);
  const [contador, setContador] = useState(0);
  const [winner, setWinner] = useState([]);
  // const [ganador, setGanador] = useState(null);
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
  const [historico, setHistorico] = useState(initialState);
  const [backwardHis, setBackwarHis] = useState([]);
  // historico[signo][i]
  let cssButton =
    "bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded";
  let cssWinner =
    "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded";

  function clickForbiden() {
    winner.length !== 0
      ? alert("game is finished")
      : alert("cell already clicked");
  }

  function ganador(signo) {
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
    // 0: {pos: 0, signo: 'X', cuenta: 0}
    // 1: {pos: 2, signo: 'X', cuenta: 4}
    // 2: {pos: 4, signo: 'X', cuenta: 2}
    // 3: {pos: 6, signo: 'X', cuenta: 6}
    // length: 4
    let filtered = historico.filter((sign) => sign.signo === signo);
    console.log("filtered", filtered);
    let filteredPos = filtered.map((n) => n.pos);
    console.log("filteredPos", filteredPos);

    let containsAll = false;
    // painting in red the winner line
    let i = 0;
    do {
      containsAll = lines[i].every((element) => {
        return filteredPos.includes(element);
      });
      i++;
    } while (i < lines.length && !containsAll);
    if (containsAll === true) {
      let aux = i - 1;
      // console.log("winner by filtered pos ", filteredPos);
      // console.log("winner ", lines[aux]);
      let winnerAux = winner.concat(lines[aux]);
      setWinner([...winnerAux]);
      console.log("winnerState", winner);
      console.log("historico ", historico);
      // cambiar state winner
    }
  }
  function clickMo(indice) {
    setClickeado(indice);
    historico[indice].signo = signo;
    historico[indice].cuenta = contador; // luego cambiarlo a contador
    setHistorico([...historico]);
    if (contador >= 4) {
      // hacer comprobaciones en la funcion ganador
      ganador(signo);
    }
    setContador(contador + 1);
    // let filtered = historico.filter(sign => sign.signo !== "" );
    // // console.log("filtered",filtered);
    //console.log("historico",historico);
    // historico[indice].signo
    signo === "O" ? setSigno("X") : setSigno("O");
    // alert(indice);
  }

  function backward() {
    // con el contador recoger el indice
    let contaux = contador - 1;
    console.log("contaux", contaux);
    console.log("contador antes", contador);
    setContador(contador - 1); // porque en la celda 0 vale 1,y el ultimo click lo incrementa a 1 para usar posteriorment pero con el juego terminado no se usa
    console.log("contador despues", contador);
    let backAux = [];
    let histAux = []; // cambiar a constante
    //22/02/2022
    // setWinner([]);
    //22/02/2022
    if (contaux > -1) {
      for (let j = 0; j < historico.length; j++) {
        if (historico[j].cuenta === contaux) {
          ///------------ codigo con un state-------
          //alert("hey");
          console.log("historico[j].pos", historico[j].pos);
          histAux = [...historico];
          histAux[j] = { ...histAux[j] }; //de david , fuciona sin este codigo
          histAux[j].back = true;
          console.log(histAux[j].back);
          // historico[j].back = trxue;
          setHistorico(histAux);
          // console.log("historico con back", historico);
          // ///------------ codigo con un state-------
          // //actualizar backawarHis
          // // { pos: 0, signo: "", cuenta: null },

          // // backAux = historico[j];

          // // setBackwarHis([...backwardHis]);

          // // setBackwarHis(historico[j]);
          // // backwardHis = historico[j];
          // console.log("historico[j]", historico[j]);
          // // histAux.push(historico);
          // // backAux.push(backwardHis);
          // histAux = historico;
          // backAux = backwardHis;
          // // backAux.push(historico[j]);
          // // llamar este trozo de codigo en una func
          // // para hacer un delay
          // backAux.push(histAux[j]);
          // console.log("back", backAux);
          // setBackwarHis([...backAux]);
          // histAux[j].cuenta = null;
          //histAux[j].signo = "";
          // histAux[j].pos = "";
          // historico[j].cuenta = null;
          // historico[j].signo = "";
          // j = historico.length;
          break;
        }
      }
      // setHistorico([...histAux]);
      // setHistorico([...historico]);
      // setBackwarHis([...backAux]);

      console.log("backwardHis", backwardHis);
      console.log("historico", historico);
    } else {
      alert("abortar operacion");
    }

    // setHistorico([...historico]);
    // console.log("historico", historico);
    //
    // alert("back");
    // alert("as");
  }
  function forward() {
    //------codigo con un state--------------
    let contaux = contador + 1;
    console.log("contaux", contaux);
    console.log("contador antes", contador);
    setContador(contador + 1); // porque en la celda 0 vale 1,y el ultimo click lo incrementa a 1 para usar posteriorment pero con el juego terminado no se usa
    console.log("contador despues", contador);
    let histAux = []; // cambiar a constante
    let filtered = historico.filter((cont) => cont.cuenta !== null); // to highlights only the elements clicked before an having the count
    // console.log("historico", historico);
    // console.log("filtered", filtered);
    let filteredCuenta = filtered.map((n) => n.cuenta);
    let cuentAux = Math.max(...filteredCuenta);
    // console.log("cuentAux", cuentAux);
    if (contaux <= cuentAux) {
      //alert("vamos bien");
      for (let j = 0; j < historico.length; j++) {
        if (historico[j].cuenta === contaux) {
          histAux = [...historico];
          histAux[j] = { ...histAux[j] }; //de david , fuciona sin este codigo
          histAux[j].back = false;
          setHistorico(histAux);
        }
      }
    } else {
    }

    // setWinner([]); // hacerlo que sea automatico
    //------codigo con un state--------------
    // backwardHis.pop();
    //-------------codigo anterior
    //   let auxH = backwardHis[backwardHis.length - 1];
    //   console.log("bakwardHis.length", backwardHis);
    //   console.log("auxH", auxH);
    //   historico[auxH.pos].cuenta = auxH.cuenta;
    //   historico[auxH.pos].signo = auxH.signo;
    //   setHistorico([...historico]);
    //   setBackwarHis([...auxH]);
    //   // setBackwarHis([...backwardHis]);
    //   setContador(contador + 1);
    //   console.log("historico,afterward", historico);
  }
  //--------------------codigo anterior

  return (
    <>
      <h2 className="proceso-juego">
        {contador === 9 || winner.length !== 0
          ? signo === "O"
            ? "game over . the winner is: X"
            : "game over . the winner is: O"
          : signo + " it's your turn"}
        {/* {contador === 9 || winner.length !== 0
          ? "game over . the winner is: " + signo
          : signo + " it's your turn"} */}
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
            //  func={ clickMo }
            key={i}
            //estilos={cssButton}
            estilos={
              winner !== null && winner.includes(i) ? cssWinner : cssButton
            }
            // simbolo={clickeado === i ? signo : ""}
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
