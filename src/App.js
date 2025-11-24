import React from "react";
import Counter from "./components/Counter";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>React + Jenkins + Docker + Kubernetes</h1>
      <p>CI/CD Pipeline Demo 🚀</p>

      <Counter />
    </div>
  );
}

export default App;
