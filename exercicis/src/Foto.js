export default function Foto({ source, indice, func }) {
  return <img src={source} alt={source} key={indice} onClick={func(source)} />;
}
