// src/App.jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout";

// Pages
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="works" element={<WorksPage />} />
      <Route path="contact" element={<ContactPage />} />
      {/* You can add a 404 Not Found page here later */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
