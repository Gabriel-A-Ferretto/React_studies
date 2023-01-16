# Estruturas de pastas Reactjs

## node_modules

*É onde fica todos os pacotes instalados das bibliotecas e recursos do projeto.*

<hr>

## packge.json

*Arquivo de configuração do nosso projeto, nele contem varias informações, como por exemplo **nome e versão do projeto** e muito mais.*
*Uma das partes do **packge.json** que podemos ver e reconhecer são os **"scripts { }"**, onde usamos o **npm** com os comandos **start**, **build** etc.*

```json
    "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```


*Qunado chamamos **npm start**, estamos chamando a primeira função, que no caso é:*

```json
    "start": "react-scripts start"
```

<hr>

## public

*Na pasta **public** é a pasta que onde de fato vai ter o código que vai para a produção.*

<hr>

## src

*Já dentro de  **src** vai ficar nossos códigos onde vai ficar os nossos códigos que criarmos.*

<hr>
<br>

### npm start

*Esse comando tem uma ligação direta com o arquivo **index.js**, que renderiza na tela um componete chamado **App.js**.*

```js
// index.js
function App() {
  return (
    <div className="App">
     <h1>Bem vindo ao meu primeiro projeto em ReactJs</h1>
    </div>
  );
}

export default App;
```

*Perceba que em **index.js** estamos passando uma mensagem e éla é chamada em **App.js**, pegando seu elementp principal(id global) **root**.*


```js
  // App.js
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

*Logo e renderizado a mensagem em **App.js**.*

*E onde está o **id="root"**  ?*
*Dentro da pasta **public** em **index.html**  .*

```html
  <div id="root"></div>
```

<hr># React_studies
