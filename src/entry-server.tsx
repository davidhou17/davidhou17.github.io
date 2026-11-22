import { renderToString } from "react-dom/server";
import Home from "./Home";

export const render = () => renderToString(<Home />);
// eslint-disable-next-line react-refresh/only-export-components
export * from "./content";
export { toMarkdown } from "./llms";
