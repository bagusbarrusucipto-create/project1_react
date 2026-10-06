import './App.css';
import Labelnama from './components/labelnama';
import Labelalamat from './components/labelalamat';
import Button1 from './components/button1';

function App() {
  return (
    <div className="App">
      <h1>Profile</h1>
      <Labelnama nama="Bagus" />
      <Labelnama nama="Kintori" />
      <Labelnama nama="Silvi" />
      <Labelalamat alamat="KaliBata II" />
      <Button1 />
    </div> 
  );
}

export default App;
