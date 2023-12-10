import "./App.css";
import Footer from "./LayoutComponents/Footer";
import Header from "./LayoutComponents/Header";
import Home from "./PageContents/Home";
import { CarouselWithContent } from "./PageContents/Home/CarouselWithContent";
import EditorPicks from "./PageContents/Home/EditorPicks";

function App() {
  return (
    <div className="w-full ">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
