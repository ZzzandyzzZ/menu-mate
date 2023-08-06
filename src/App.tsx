import { Route, Routes } from "react-router-dom";

import AddDishPage from "@/pages/AddDishPage";
import EditDishPage from "@/pages/EditDishPage";
import ListDishesPage from "@/pages/ListDishesPage";
import ListProposedDishesPage from "./pages/ListProposedDishesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListDishesPage />} />
      <Route path="/new-dish" element={<AddDishPage />} />
      <Route path="/edit-dish" element={<EditDishPage />} />
      <Route path="/proposals" element={<ListProposedDishesPage />} />
    </Routes>
  );
}

export default App;
