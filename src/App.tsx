import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import ScreenTest from "./pages/ScreenTest";
import { Toaster } from "react-hot-toast";
import PageNotFound from "./pages/PageNotFound";
import Support from "./pages/Support";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/support" element={<Support />} />
        </Route>
        <Route path="/screen-test" element={<ScreenTest />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
