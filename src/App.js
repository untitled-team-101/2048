import "./App.scss";
import { HashRouter, Route, Switch } from "react-router-dom";
import Board from "./components/Board";
import FrontPage from "./components/FrontPage";
import { AnimatePresence, motion } from "framer-motion";
import HowToMobile from "./components/HowToMobile";
import HowToDesktop from "./components/HowToDesktop";
import GameOver from "./components/GameOver";
import Credits from "./components/Credits";

function App() {
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <HashRouter>
          <Switch>
            <Route exact path={"/"}>
              <FrontPage />
            </Route>
            <Route exact path={"/how_to_desktop"}>
              <HowToDesktop />
            </Route>
            <Route exact path={"/how_to_mobile"}>
              <HowToMobile />
            </Route>
            <Route exact path={"/game"}>
              <Board />
            </Route>
            <Route exact path={"/gameOver"}>
              <GameOver />
            </Route>
            <Route exact path={"/credits"}>
              <Credits />
            </Route>
            <Route path={"/"}>
              <h1>404 Error</h1>
            </Route>
          </Switch>
        </HashRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
