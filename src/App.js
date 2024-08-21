import { Provider } from "react-redux"; // Importing the Provider component from react-redux to connect the Redux store to the React application
import Body from "./components/Body"; // Importing the Body component, which likely represents the main content of the app
import appStore from "./utils/appStore"; // Importing the Redux store from the appStore file

function App() {
  return (
    // Wrapping the app with the Provider component to pass down the Redux store to all nested components
    <Provider store={appStore}>
      <Body /> {/* Rendering the Body component, which will now have access to the Redux store */}
    </Provider>
  );
}

export default App; // Exporting the App component as the default export
