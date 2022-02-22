export default function Foto({ clase, source, indice, func }) {
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
