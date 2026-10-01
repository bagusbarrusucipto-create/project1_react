import './App.css';
import Labelnama from './components/labelnama';

function App() {
  return (
    <div className="App">
      <h1>Profile</h1>
      <Labelnama nama="Bagus" />
      <Labelnama nama="Kintori" />
      <Labelnama nama="Silvi" />
      <p> Alamat : jalan kali</p>
    </div> 
  );
}

export default App;
