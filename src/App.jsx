import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Peers from "./components/Peers";
function App() {
  return (
    <div>
      <Nav />
      {/* {Hero section} */}
      <Hero />
      <Peers />
      {/* Alumni Details - OnClick opens a model*/}
    </div>
  );
}

export default App;
