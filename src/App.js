import About from "./About";
import Footer from "./Footer";
const App = () => {
  return (
    <div>
      <About />
      <Footer />
    </div>
  );
};
function Foot() {
  return (
    <div>
      <Footer />
    </div>
  );
}
export default App;
export { Foot };