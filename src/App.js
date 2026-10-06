import './App.css';
import Labelnama from './components/labelnama';
import Labelalamat from './components/labelalamat';

function App() {
  return (
    <div className="App">
      <h1>Profile</h1>
      <Labelnama nama="Bagus" />
      <Labelnama nama="Kintori" />
      <Labelnama nama="Silvi" />
      <Labelalamat alamat="KaliBata II" />
    </div> 
  );
}

export default App;
