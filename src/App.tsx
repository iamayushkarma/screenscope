import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import ScreenTest from "./pages/ScreenTest";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/screen-test" element={<ScreenTest />} />
      </Routes>
    </div>
  );
}

export default App;
