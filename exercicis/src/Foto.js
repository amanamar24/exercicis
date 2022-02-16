export default function Foto({ clase, source, indice, func }) {
  let sour = source;
  console.log(clase);
  return (
    <img
      className={clase}
      src={source}
      alt={source}
      onClick={() => func(indice)}
    />
  );
}
