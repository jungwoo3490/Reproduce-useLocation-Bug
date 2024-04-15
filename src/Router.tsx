import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Sub from "./pages/Sub";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sub" element={<Sub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
