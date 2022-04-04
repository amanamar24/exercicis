import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
const addTodo = (todo) => {
  return axios.post("https://tc-todo-2022.herokuapp.com/todos", todo);
};
export function PostNewTodo() {
  const queryClient = useQueryClient();
  return useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
}

const updateTodo = (todo) => {
  // console.log(todo.id);
  const url = todo.id;
  delete todo.id;
  console.log(todo);
  return axios.post("https://tc-todo-2022.herokuapp.com/todos/" + url, todo);
};
export function useUpdateItem() {
  const queryClient = useQueryClient();
  return useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
}
const deleteTodo = (id) => {
  return axios.delete("https://tc-todo-2022.herokuapp.com/todos/" + id);
};
export function useDeleteItem() {
  const queryClient = useQueryClient();
  return useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
}

export function GetTodos() {
  const { isLoading, data } = useQuery(
    "todos",
    () => {
      return axios.get("https://tc-todo-2022.herokuapp.com/todos");
    },
    {
      select: (data) => {
        return data.data; // data transformation
      },
    }
  );
  return { isLoading, data };
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     // axios.get("http://localhost:4000/superheroes").then((res) => {
  //     axios.get("https://tc-todo-2022.herokuapp.com/todos").then((res) => {
  //       setData(res.data);
  //       setIsLoading(false);
  //     });
  //   }, []);

  //   // if (isLoading) {
  //   //   return <h2>Loading...</h2>;
  //   // }
  //
  //   //   return (
  //   //     <>
  //   //       <h2>list of todo's with api rest</h2>
  //   //       {data.map((todo) => {
  //   //         return <div>{todo.title}</div>;
  //   //       })}
  //   //     </>
  //   //   );
}
