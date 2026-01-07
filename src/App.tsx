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
import UploadPage from "./pages/UploadPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="works" element={<WorksPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="upload" element={<UploadPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
