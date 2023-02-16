import { useSelector } from "react-redux";
import "./App.scss";
import Loading from "./components/Loading/Loading";
import Menu from "./modul/Menu/Menu";
import Questions from "./modul/Questions/Questions";

function App() {
  const { isMenu, isLoading } = useSelector(state => state.quiz);
  return (
    <div className="App">
      {isMenu && <Menu />}
      {isLoading && <Loading />}
      {!isLoading && !isMenu && <Questions />}
    </div>
  );
}

export default App;
