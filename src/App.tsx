import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogGuardrails from "./pages/PageGuardrails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogGuardrails />} />
      </Routes>
    </BrowserRouter>
  );
}
