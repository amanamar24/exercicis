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
          </ul>
        </nav>
        <aside className="HolyGrail-ads">...</aside>
      </div>
      <footer>by Marouane Boutaleb</footer>
    </>
  );
}