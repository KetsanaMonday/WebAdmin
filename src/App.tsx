import * as React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppProvider } from "@toolpad/core/react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import type { Navigation, Session } from "@toolpad/core";
import { SessionContext } from "./SessionContext";
import FolderIcon from '@mui/icons-material/Folder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },
  {
    segment: "address",
    title: "Address",
    icon: <FolderIcon />,
  },
  
  {
    segment: "manage-data",
    title: "Manage data",
    icon: <FolderIcon />,
    children: [
      {
        segment: "address",
        title: "Address",
        icon: <HomeIcon />,
        children: [
          {
            segment: "provice",
            title: "Province",
          },
          {
            segment: "district",
            title: "District",
          },
          {
            segment: "village",
            title: "Village",
          },
        ],
      },
      {
        segment: "education",
        title: "Education",
        icon: <SchoolIcon />,
        children: [
          {
            segment: "education",
            title: "Education",
          },
          {
            segment: "education-level",
            title: "Educational level ",
          },
          {
            segment: "education-level-detail",
            title: "Educational level detail",
          },
          {
            segment: "learner-type",
            title: "Learner type",
          },
          {
            segment: "learner",
            title: "Learner",
          },
        ],
      },
      {
        segment: "user",
        title: "User",
        icon: <AccountCircleIcon />,
        children: [
          {
            segment: "user-type",
            title: "User Type",
            icon: <ShoppingCartIcon />,
          },
          {
            segment: "user",
            title: "User ",
            icon: <ShoppingCartIcon />,
          },
        ],
      },  
      {
        segment: "person",
        title: "Person",
        icon: <PersonIcon />,
        children: [
          {
            segment: "document-type",
            title: "Document type",
          },
          {
            segment: "document",
            title: "Document",
          },
          {
            segment: "person",
            title: "Person",
          },
        ],
      },
    ],
  },
  {
    segment: "manage-data",
    title: "Reports",
    icon: <DescriptionIcon />,
    children: [
      {
        segment: "address",
        title: "Address",
        icon: <ShoppingCartIcon />,
        children: [
          {
            segment: "provice",
            title: "Province",
            icon: <ShoppingCartIcon />,
          },
          {
            segment: "district",
            title: "District",
            icon: <ShoppingCartIcon />,
          },
          {
            segment: "village",
            title: "Village",
            icon: <ShoppingCartIcon />,
          },
        ],
      },
      {
        segment: "harry-potter",
        title: "",
        icon: <ShoppingCartIcon />,
      },
    ],
  },
  
  
];

const BRANDING = {
  title: "Monday Teach Company Limited",
};

export default function App() {
  const [session, setSession] = React.useState<Session | null>(null);
  const navigate = useNavigate();

  const signIn = React.useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  const signOut = React.useCallback(() => {
    setSession(null);
    navigate("/sign-in");
  }, [navigate]);

  const sessionContextValue = React.useMemo(
    () => ({ session, setSession }),
    [session, setSession]
  );

  // Remove this const when copying and pasting into your project.

  return (
    <SessionContext.Provider value={sessionContextValue}>
      <AppProvider
        navigation={NAVIGATION}
        branding={{
          logo:      <img src="./src/assets/LogoMonday.jpeg" width="50"/>,
          title: "Monday Teach Company Limited",
          homeUrl: "./assets/LogoMonday.jpeg",
        }}
        session={session}
        authentication={{ signIn, signOut }}
  
      >
        <Outlet />
      </AppProvider>
    </SessionContext.Provider>
  );
}
