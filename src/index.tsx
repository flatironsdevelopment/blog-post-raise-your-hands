import ReactDOM from "react-dom/client";
import App from "./App";

const targetDiv = document.createElement("div");
document.body.appendChild(targetDiv);
const root = ReactDOM.createRoot(targetDiv as HTMLElement);

root.render(<App />);
