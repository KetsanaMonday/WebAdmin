import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Layout from "./layouts/dashboard";
import DashboardPage from "./pages";
import OrdersPage from "./pages/orders";
import SignInPage from "./pages/signIn";
import AddressPage from "./pages/address";
import DistrictPage from "./pages/manage-data/address/district";
import ProvicePage from "./pages/manage-data/address/provice";
import VillagePage from "./pages/manage-data/address/village";
import { QueryClient,QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools';
const queryclient = new QueryClient();




const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: "/",
        Component: Layout,
        children: [
          {
            path: "/",
            Component: DashboardPage,
          },
          {
            path: "/orders",
            Component: OrdersPage,
          },
          {
            path: "/address",
            Component: AddressPage,
          
          }
          ,
          {
            path: "/manage-data/address/district",
            Component: DistrictPage,
    
          },
          {
            path: "/manage-data/address/village",
            Component: VillagePage,
    
          },
          {
            path: "/manage-data/address/provice",
            Component: ProvicePage,
    
          },
        ],
      },
      {
        path: "/sign-in",
        Component: SignInPage,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryclient}>
          <RouterProvider router={router} />
<ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  </React.StrictMode>
);
