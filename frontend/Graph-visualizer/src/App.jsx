import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import UserInput from "./components/UserInput";
import Welcome from "./components/Welcome";
import WelcomeNav from "./components/WelcomeNav";
import TempAlgo from "./components/TempAlgo";
import Store from "./Store/Store";
import Error from "./components/Error";
function App() {
  return (
    <>
      <Store>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <div className="relative min-h-screen">
                  <div className="absolute bg-[url(images/Designer.png)] md:bg-center-bottom-30 sm:bg-center-bottom-20 bg-center bg-cover inset-0"></div>
                  <div className="relative z-10">
                    <WelcomeNav />
                    <Welcome />
                  </div>
                </div>
              }
            />
            <Route path="/input" element={<UserInput />} />
            <Route path="/algos" element={<TempAlgo />} />
            <Route path="*" element={<Error />}/>
          </Routes>
        </Router>
      </Store>
    </>
  );
}

export default App;
