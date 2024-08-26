import { createBrowserRouter } from "react-router-dom"; // Import createBrowserRouter for defining routes
import Browse from "./Browse"; // Import the Browse component
import Login from "./Login"; // Import the Login component
import { RouterProvider } from "react-router-dom"; // Import RouterProvider to integrate the router into the app

// Body component
const Body = () => {
  // Define the routes using createBrowserRouter
  const appRouter = createBrowserRouter([
    {
      path: "/", // Root path
      element: <Login />, // Render the Login component at the root path
    },
    {
      path: "/browse", // Path for browsing
      element: <Browse />, // Render the Browse component at the /browse path
    },
  ]);

  return (
    <div>
      {/* Provide the router configuration to the app */}
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body; // Export the Body component as the default export
