import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header> Exercicis React -Marouane Boutaleb </header>
      <div className="HolyGrail-body">
        <main className="HolyGrail-content">
          <Outlet />
        </main>

        <nav className="HolyGrail-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Graella">Graella</Link>
            </li>
            <li>
              <Link to="/MorpionFrame">Morpion</Link>
            </li>
            <li>
              <Link to="/MorpionFrameReduce">MorpionWreduce</Link>
            </li>
            <li>
              <Link to="/MorpionFrameRedux">MorpionWredu</Link>
            </li>
            <li>
              <Link to="/Compteur">Compteur</Link>
            </li>
            <li>
              <Link to="/CompteurRedux">CompteurRedux</Link>
            </li>
            <li>
              <Link to="/TodoList">TodoList</Link>
            </li>
            <li>
              <Link to="/TodoListRest">TodoListRest</Link>
            </li>
            {/* <li>
              <Link to="/NevaReact">NevaReact</Link>
            </li> */}
            <li>
              <Link to="/SixDMindGames">SixDMindGames</Link>
            </li>
            <li>
              <Link to="/ColorPuzzle">color puzzle</Link>
            </li>

            <li>
              <Link to="/ReactOCR">ReactOCR</Link>
            </li>
            <li>
              <Link to="/UserApi">UserApi</Link>
            </li>
          </ul>
        </nav>
        <aside className="HolyGrail-ads">...</aside>
      </div>
      <footer>by Marouane Boutaleb</footer>
    </>
  );
}
