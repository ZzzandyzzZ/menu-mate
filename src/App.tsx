import { Route, Routes } from "react-router-dom";

import ListDishesPage from "@/pages/ListDishesPage";
import AddDishPage from "@/pages/AddDishPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListDishesPage />} />
      <Route path="/new-dish" element={<AddDishPage />} />
    </Routes>
  );
}

export default App;
