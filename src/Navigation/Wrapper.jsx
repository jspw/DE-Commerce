import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import useFetch from "../hooks/useFetch";
import TopScroller from "../components/TopScroller/TopScroller";

export default function Wrapper() {
  useFetch();

  return (
    <BrowserRouter>
      <TopScroller />
      <div className="flex flex-col justify-between h-screen">
        <div>
          <NavBar />
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
