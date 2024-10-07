import reactDOM from "react-dom/client"
import App from "./App.js"
const container = document.querySelector("#root");
const root = reactDOM.createRoot(container);
root.render(<App />);