import TodoListRestAxios from "./TodoListRestAxios";
// import TodoListRestRQ from "./TodoListRestRQ";
import { GetTodos, PostNewTodo } from "./TodoListRestRQ";
import { useState } from "react";
export default function TodoListRest() {
  //   //   const datosAxios = TodoListRestAxios();
  //   //   const datosAxios = TodoListRestRQ();

  const [title, setTask] = useState("");
  const [details, setDetail] = useState("");
  const [listStatus, setListStatus] = useState("ALL");
  const { isLoading, data } = GetTodos();
  const { mutate: addTodo } = PostNewTodo();
  const handleClick = () => {
    // alert("df");
    // console.log("handle");
    const todo = { title, details };
    addTodo(todo);
    console.log({ title, details });
  };
  //   const { isLoading, data } = TodoListRestAxios();
  // if (isLoading) {
  //   return <h2>Loading...</h2>;
  // }
  //   if (datosAxios.length === 0) {
  //     return <h2>Loading...</h2>;
  //   }
  //                         console.log(data);
  //   return (
  //     <>
  //       {/* {isLoading ? <h2>Loading...</h2> : <h2>list of todo's with api rest</h2>} */}
  //       {/* {datosAxios.map((todo) => { */}
  //       {/* {data?.data.map((todo) => { */}
  //       {data.map((todo) => {
  //         return <div key={todo.title}>{todo.title}</div>;
  //       })}
  //    </>
  // //  );
  return (
    <>
      <div className="todo w-{500px} h-96 bg-slate-500 m-0.5">
        <input
          onClick={() => setListStatus("ALL")}
          type="radio"
          name="listStatus"
          value="ALL"
        />
        ALL
        <input
          onClick={() => setListStatus("DONE")}
          type="radio"
          name="listStatus"
          value="DONE"
        />
        DONE
        <input
          onClick={() => setListStatus("TODO")}
          type="radio"
          name="listStatus"
          value="TODO"
        />
        TODO
        <input
          className=" m-0.5"
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={title}
        />
        <label>todo</label>
        <input
          className=" m-0.5"
          type="text"
          onChange={(e) => setDetail(e.target.value)}
          value={details}
        />
        <label>detail</label>
        <button className="  m-0.5 bg-slate-50 h-6" onClick={handleClick}>
          addTodo
        </button>
        <button
          className=" m-0.5 ml-16 mt-4 bg-slate-50 h-6"
          // onClick={() => dispatch(clearList())}
        >
          reset
        </button>
        <ul>
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            data.map((x, i) => (
              <li
                className={
                  "grid grid-cols-6 gap-4 " +
                  (listStatus === "ALL"
                    ? ""
                    : listStatus === "DONE" && x.completed === true
                    ? ""
                    : listStatus === "TODO" && x.completed === false
                    ? ""
                    : " hidden")
                }
                key={i}
              >
                <label> {x.title}</label>
                <label className>DONE</label>
                <input
                  className=""
                  type="checkbox"
                  title="task"
                  // onChange={() => dispatch(doneTask(i))}
                />
                <label className>UNDO</label>
                <input
                  className=""
                  type="checkbox"
                  title="task"
                  // onChange={() => dispatch(undoTask(i))}
                />
                <button
                  className=" m-0.5 ml-16  bg-slate-50 W-6 h-6"
                  // onClick={() => dispatch(clearTask(i))}
                >
                  🗑
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}
