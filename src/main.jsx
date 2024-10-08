import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className="w-[80%] mx-auto">
            <RouterProvider router={router} />
            <Toaster />
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
