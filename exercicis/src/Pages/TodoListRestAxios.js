import { useState, useEffect } from "react";
import axios from "axios";

export default function TodoListRestAxios() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // axios.get("http://localhost:4000/superheroes").then((res) => {
    axios.get("https://tc-todo-2022.herokuapp.com/todos").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  // if (isLoading) {
  //   return <h2>Loading...</h2>;
  // }
  return { data, isLoading };
  //   return (
  //     <>
  //       <h2>list of todo's with api rest</h2>
  //       {data.map((todo) => {
  //         return <div>{todo.title}</div>;
  //       })}
  //     </>
  //   );
}
