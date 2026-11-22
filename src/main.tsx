import { createRoot, hydrateRoot } from "react-dom/client";
import Home from "./Home";
import "./index.css";

const root = document.getElementById("root")!;

// Production HTML is prerendered (scripts/prerender.mjs); dev serves an empty root.
if (root.hasChildNodes()) hydrateRoot(root, <Home />);
else createRoot(root).render(<Home />);
