import reactDOM from "react-dom/client"
import App from "./App.js"
import { Provider } from "react-redux";
import store from "./redux/store.js"

const container = document.querySelector("#root");
const root = reactDOM.createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);