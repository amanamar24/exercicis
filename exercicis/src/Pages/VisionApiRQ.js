import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
const sendBase64Axios = (base64) => {
  // return axios.post("https://tc-todo-2022.herokuapp.com/todos", base64);
  // CONNEXION TO VISIONAPI
};
export function GetImageOCR(base64) {
  const { isLoading, data } = useQuery(
    "sendBase64", //you must delete this query for the cache next time
    sendBase64Axios(base64),
    // (base64) => {
    //   return axios.get("https://tc-todo-2022.herokuapp.com/todos");
    // },
    {
      select: (data) => {
        return data.data; // data transformation
      },
    }
  );
  return { isLoading, data };
}
