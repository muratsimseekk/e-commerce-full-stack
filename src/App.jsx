import "./App.css";
import Header from "./LayoutComponents/Header";
import { CarouselWithContent } from "./PageContents/CarouselWithContent";

function App() {
  return (
    <div className="w-full  ">
      <Header />
      <CarouselWithContent />
    </div>
  );
}

export default App;
