import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import UserInput from "./components/UserInput";
import Welcome from "./components/Welcome";
import WelcomeNav from "./components/WelcomeNav";
import Error from "./screens/Error";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 min-h-screen">
                <WelcomeNav />
                <Welcome />
              </div>
            }
            errorElement={<Error />}
          />
          <Route
            path="/input"
            element={<UserInput />}
          />
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
