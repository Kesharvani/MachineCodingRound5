import "./styles.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/home/Home";
import { RecipeDetailPage } from "./pages/recipeDetail/RecipeDetailPage";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:recipeId" element={<RecipeDetailPage />} />
      </Routes>
    </div>
  );
}
