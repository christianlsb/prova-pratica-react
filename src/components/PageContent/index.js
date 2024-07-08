import React from "react";
import "./style.css";

export function PageContent({ children, title }) {
  return (
    <main className="container-main">
      <h1>{title}</h1>
      {children}
    </main>
  );
}
