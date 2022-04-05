import Home from "./pages/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";


// end day 2
function App() {
  const user = false

  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/register" element={user ? <Home /> : <Register />}></Route>
          <Route path="/login" element={user ? <Home /> : <Login />}></Route>
          <Route path="/write" element={user ? <Write /> : <Register />}></Route>
          <Route path="/settings" element={user ? <Settings /> : <Register />}></Route>
          <Route path="/post/:postId" element={<Single />}></Route>

        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
