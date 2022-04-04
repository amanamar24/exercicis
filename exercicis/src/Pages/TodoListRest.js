import TodoListRestAxios from "./TodoListRestAxios";
// import TodoListRestRQ from "./TodoListRestRQ";
import {
  GetTodos,
  PostNewTodo,
  useDeleteItem,
  useUpdateItem,
} from "./TodoListRestRQ";
import { useState, useRef } from "react";
export default function TodoListRest() {
  //   //   const datosAxios = TodoListRestAxios();
  //   //   const datosAxios = TodoListRestRQ();
  const itemTitle = useRef([]);
  const itemDetail = useRef([]);
  const itemCompleted = useRef([]);
  const [title, setTask] = useState("");
  const [details, setDetail] = useState("");
  // poner states array para hacer update en  block
  var todoId = "";
  var idLocalizador = "";
  const [listStatus, setListStatus] = useState("ALL");
  const { isLoading, data } = GetTodos();
  const { mutate: addTodo } = PostNewTodo();
  const { mutate: updateTodo } = useUpdateItem();
  const { mutate: deleteTodo } = useDeleteItem();
  const handleClick = () => {
    //
    // console.log("handle");
    const todo = { title, details };
    addTodo(todo);
    console.log(todo);
  };
  const handleDeleteClick = () => {
    console.log({ idLocalizador });
    deleteTodo(idLocalizador);
  };
  const handleUpdateClick = () => {
    // alert(todoId);
    // alert(itemTitle.current[todoId].value);
    //alert(itemDetail.current[todoId].value);
    let completed = false;
    console.log(itemCompleted.current[todoId]);
    if (itemCompleted.current[todoId].checked) {
      completed = true;
      console.log(completed);
    }
    const todo = {
      title: itemTitle.current[todoId].value,
      details: itemDetail.current[todoId].value,
      completed: completed,
      id: idLocalizador,
    };
    updateTodo(todo);
    // console.log({ todo });
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
        {/* <button
          className=" m-0.5 ml-16 mt-4 bg-slate-50 h-6"
          // onClick={() => dispatch(clearList())}
        >
          reset
        </button> */}
        <ul className="pt-8">
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            data.map((x, i) => (
              <li
                className={
                  " " +
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
                {/* <label> {x.title}</label> */}
                <input
                  ref={(i) => itemTitle.current.push(i)}
                  className="w-36"
                  type="text"
                  // onChange={(e) => setTask(e.target.value)}
                  defaultValue={x.title}
                />
                <input
                  ref={(i) => itemDetail.current.push(i)}
                  className="w-36 ml-4"
                  type="text"
                  defaultValue={x.details}
                />

                <input
                  ref={(i) => itemCompleted.current.push(i)}
                  className="ml-4"
                  type="checkbox"
                  title="task"
                  defaultChecked={x.completed ? "checked" : ""}
                  // onChange={() => dispatch(doneTask(i))}
                />
                <label className>DONE</label>
                {/* <label className>UNDO</label>
                <input
                  className=""
                  type="checkbox"
                  title="task"
                  // onChange={() => dispatch(undoTask(i))}
                /> */}
                <button
                  className=" m-0.5 ml-16  bg-slate-50 W-6 h-6"
                  onClick={() => {
                    // todoId = x.id;
                    todoId = i;
                    idLocalizador = x.id;
                    handleUpdateClick();
                  }}
                  // onClick={handleUpdateClick(i)}
                >
                  update
                </button>
                <button
                  className=" m-0.5 ml-16  bg-slate-50 W-6 h-6"
                  onClick={() => {
                    // todoId = x.id;
                    todoId = i;
                    idLocalizador = x.id;
                    handleDeleteClick();
                  }}
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
