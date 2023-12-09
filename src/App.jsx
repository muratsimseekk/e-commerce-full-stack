import "./App.css";
import Header from "./LayoutComponents/Header";
import Home from "./PageContents/Home";
import { CarouselWithContent } from "./PageContents/Home/CarouselWithContent";
import EditorPicks from "./PageContents/Home/EditorPicks";

function App() {
  return (
    <div className="w-full ">
      <Header />
      <Home />
    </div>
  );
}

export default App;
