// export default function MorpionBox({ indice, simbolo, func }) {
//   return <button onClick={func(indice)}>{simbolo}</button>;
// }
export default function MorpionBox({ indice, estilos, simbolo, func }) {
  return (
    <button className={estilos} onClick={() => func(indice)}>
      {simbolo}
    </button>
  );
}
