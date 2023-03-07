//import logo from './logo.svg';
//importaciones a recursos externos

//importaciones de compoentes interno
import './App.css';
import Card from './components/Card'
//importar assets o mages y hojas de estilos


function App() {
  
const imagenLogo = 'https://picsum.photos/id/870/200/300?grayscale&blur=2'
let title = 'El Faro'
let text = 'Un faro es una torre de señalización luminosa situada en el litoral marítimo o tierra firme, como referencia y aviso costero o aéreo para navegantes. ​ Están coronados por una o dos lámparas potentes.' 
  
return (
    <div className="App">

      <h1>{title}</h1>
      <img src={imagenLogo} className="app-image" alt="logo" />
      <p>{text}</p>

      <h2>{"Dog"}</h2>
      <img src="https://picsum.photos/id/237/200/300" className="app-image" alt="logo" />
      <p>{"El perro, llamado perro doméstico o can, y en algunos lugares coloquialmente llamado chucho, tuso, choco, entre otros; es un mamífero carnívoro de la familia de los cánidos, que constituye una especie del género Canis."}</p>

      {/*llamar con cierre automatico*/}
      <Card/>
      {/*llamar componenete equetas normales*/}
      <Card></Card>
    </div>

  

  );
}

export default App;
