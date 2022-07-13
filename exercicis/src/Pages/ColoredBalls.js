export default function ColoredBalls({ estilos }) {
  let cssButton =
    estilos + " w-[40px] h-[40px] font-bold py-2 px-4 rounded-full square";

  return (
    <>
      <button className={cssButton}></button>
    </>
  );
}
