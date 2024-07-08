import React from "react";
import "./style.css";

export function Header() {
  return (
    <header className="container-header">
      <span>My finance</span>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/lancamento">Lançamentos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
