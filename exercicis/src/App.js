import "./App.css";
import Graella from "./Pages/Graella";
import MorpionFrame from "./Pages/MorpionFrame";
import MorpionFrameReduce from "./Pages/MorpionFrameReduce";
import MorpionFrameRedux from "./Pages/MorpionFrameRedux";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Compteur from "./Pages/Compteur";
import CompteurRedux from "./Pages/CompteurRedux";
import TodoList from "./Pages/TodoList";
import TodoListRest from "./Pages/TodoListRest";
import ReactOcr from "./Pages/ReactOcr";
import UserApi from "./Pages/UserApi";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="Graella" element={<Graella />}></Route>
            <Route path="MorpionFrame" element={<MorpionFrame />}></Route>
            <Route path="Compteur" element={<Compteur />}></Route>
            <Route path="CompteurRedux" element={<CompteurRedux />}></Route>
            <Route path="TodoList" element={<TodoList />}></Route>
            <Route path="TodoListRest" element={<TodoListRest />}></Route>
            <Route path="ReactOCR" element={<ReactOcr />}></Route>
            <Route path="UserApi" element={<UserApi />}></Route>
            <Route
              path="MorpionFrameReduce"
              element={<MorpionFrameReduce />}
            ></Route>
            <Route
              path="MorpionFrameRedux"
              element={<MorpionFrameRedux />}
            ></Route>
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
///-------------------pol
// import "./App.css";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   increaseCounter,
//   decreaseCounter,
//   resetCounter,
// } from "./redux/actions/counterActions";

// function App() {
//   const count = useSelector((store) => store.counterReducer.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>{count}</p>
//         <button onClick={() => dispatch(increaseCounter(1))}>
//           Increase counter
//         </button>
//         <button onClick={() => dispatch(increaseCounter(5))}>
//           Increase counter + 5
//         </button>
//         <button onClick={() => dispatch(decreaseCounter(1))}>
//           Decrease counter
//         </button>
//         <button onClick={() => dispatch(decreaseCounter(5))}>
//           Decrease counter - 5
//         </button>
//         <button onClick={() => dispatch(resetCounter())}>
//           RESET
//         </button>
//       </header>
//     </div>
//   );
// }

// export default App;

///-------------------pol
