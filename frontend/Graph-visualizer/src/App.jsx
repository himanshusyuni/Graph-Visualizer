import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import UserInput from "./components/UserInput";
import Welcome from "./components/Welcome";
import WelcomeNav from "./components/WelcomeNav";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="relative min-h-screen">
                <div className="absolute bg-[url(images/Designer-3.png)] md:bg-center-bottom-30 sm:bg-center-bottom-20 bg-center bg-cover inset-0"></div>
                <div className="relative z-10">
                  <WelcomeNav />
                  <Welcome />
                </div>
              </div>
            }
          />
          <Route path="/input" element={<UserInput />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
