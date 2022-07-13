import ColoredBalls from "./ColoredBalls";
// still got it
export default function Eprouvette({ indice, func, dist }) {
  let cssEprouvette =
    "border border-black pl-[5px] pt-[5px] pb-[5px] m-auto grid grid-cols-1 gap-4 bg-slate-50 w-[50px] h-[225px]  text-white font-bold ";
  let colors = [
    "bg-red-500 ",
    "bg-yellow-500 ",
    "bg-green-500 ",
    "bg-purple-500 ",
    "bg-violet-500 ",
    "bg-slate-50",
  ];

  return (
    <>
      <div className={cssEprouvette} onClick={() => func(indice)}>
        {/* specific styles */}
        {/* full === "full" && */}
        {[...Array(4)].map((x, i) => (
          <ColoredBalls
            estilos={colors[dist[i]]}
            // estilos={colors[Math.floor(Math.random() * 5)]}
            key={i}
          ></ColoredBalls>
        ))}
      </div>
      {/*  draw eprouvette and inside colored balls */}
    </>
  );
}
