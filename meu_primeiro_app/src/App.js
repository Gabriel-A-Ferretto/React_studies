import Nome from "./components/Nome"; // importando um o componente chamado nome

// Nome do componente semmpre a primeira letra maiuscula
function App() {
  return(
    <div>
      <h1>Hello Word!</h1>
      <Nome aluno="Bilbo" textoAlternativo="a minha idade é:" idade="35"/>
    </div>
  );
}

export default App;
