import MindGamesBox from "./MindGamesBox";

export default function SixDMindGames() {
  let cssButton =
    "bg-slate-500 w-[150px] h-[150px] hover:bg-slate-700 text-white font-bold py-2 px-4 rounded";

  return (
    <>
      <div className="m-auto grid grid-cols-4 gap-4 w-[620px] h-[600px] grid place-items-center h-screen">
        {[...Array(16)].map((x, i) => (
          <MindGamesBox estilos={cssButton} simbolo={i + 1} />
        ))}
      </div>
    </>
  );
}
