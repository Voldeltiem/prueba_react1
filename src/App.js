import MiApi from "./api/MiApi";
import Footer from "./components/Footer";
function App() {
  return (
    //se llama a los componentes a ocupar
    <div className="App">
      <MiApi></MiApi>
      <Footer></Footer>
    </div>
  );
}

export default App;
