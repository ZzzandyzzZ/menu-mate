import { Navigate, Route, Routes } from "react-router-dom";

import AddDishPage from "@/pages/AddDishPage";
import EditDishPage from "@/pages/EditDishPage";
import ListDishesPage from "@/pages/ListDishesPage";
import ListProposedDishesPage from "./pages/ListProposedDishesPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useSession } from "./hooks/useSession";

function App() {
  const { name } = useSession();
  return (
    <Routes>
      <Route path="/" element={<Navigate to="login" />} />
      <Route path="/login" element={<LoginPage />} />
      {name && (
        <>
          <Route path="/list" element={<ListDishesPage />} />
          <Route path="/new-dish" element={<AddDishPage />} />
          <Route path="/edit-dish" element={<EditDishPage />} />
          <Route path="/proposals" element={<ListProposedDishesPage />} />
        </>
      )}
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
