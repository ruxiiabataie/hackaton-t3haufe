import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth"; // 🔥 IMPORTANT
import EditorPage from "./pages/EditorPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/editor" element={<EditorPage />} />
    </Routes>
  );
}

export default App;