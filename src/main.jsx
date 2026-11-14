import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";

import Home from "./component/Home.jsx";
import FAQ from "./component/FAQ.jsx";

import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import BMVerification from "./pages/BMVerification.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import BMSolutions from "./pages/BMSolutions.jsx";
import Pricing from "./pages/Pricing.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Privacy from "./pages/Privacy.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import ServiceDetails from "./pages/ServiceDetails.jsx";
import BMGuide from "./pages/BMGuide.jsx";
import VerifyRequirements from "./pages/VerifyRequirements.jsx";
import VerifyProblems from "./pages/VerifyProblems.jsx";
import DomainVerify from "./pages/DomainVerify.jsx";
import BuyVerifiedBm from "./pages/BuyVerifiedBm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "facebook-business-manager-verification",
        element: <BMVerification />,
      },
      {
        path: "verified-business-manager-guide",
        element: <BMGuide />,
      },
      {
        path: "facebook-business-verification-requirements",
        element: <VerifyRequirements />,
      },
      {
        path: "facebook-business-manager-verification-problems",
        element: <VerifyProblems />,
      },
      {
        path: "domain-verification-facebook-business-manager",
        element: <DomainVerify />,
      },
      {
        path: "buy-verified-business-manager",
        element: <BuyVerifiedBm />,
      },

      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "bm-solutions",
        element: <BMSolutions />,
      },
      {
        path: "services/:slug",
        element: <ServiceDetails />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "privacy-policy",
        element: <Privacy />,
      },
      {
        path: "terms",
        element: <TermsAndConditions />,
      },

      // Dynamic Product Details Page
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);