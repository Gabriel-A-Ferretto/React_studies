
function Nome(props) { // Chamando a propriedade -> aluno
    return(
      <spam>Bem-Vindo: {props.aluno} {props.textoAlternativo} {props.idade} </spam>
    );
  }

  export default Nome;

  /*
  Outra maneira de chamar a propriedade

  function Nome({aluno}) { //Nesse Caso perceba que estamos usando { } isso se chama desestruturação, chamamos o valor direto sem ter que passar outra propriedade(props)
    return(
        <spam>Bem-Vindo: </spam>
    );
  }
  
  */