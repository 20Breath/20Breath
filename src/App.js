import React from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence } from "./motion.js?v=20260628-visual-polish3";
import { h } from "./utils.js?v=20260628-visual-polish3";
import { About } from "./components/About.js?v=20260628-visual-polish3";
import { Contact } from "./components/Contact.js?v=20260628-visual-polish3";
import { Footer } from "./components/Footer.js?v=20260628-visual-polish3";
import { Home } from "./components/Home.js?v=20260628-visual-polish3";
import { Join } from "./components/Join.js?v=20260628-visual-polish3";
import { Navbar } from "./components/Navbar.js?v=20260628-visual-polish3";
import { SocialLinks } from "./components/SocialLinks.js?v=20260628-visual-polish3";

const routes = {
  home: Home,
  about: About,
  join: Join,
  contact: Contact,
  socials: SocialLinks
};

function App() {
  const [route, setRoute] = React.useState(() => window.location.hash.replace("#", "") || "home");

  React.useEffect(() => {
    const handleHash = () => setRoute(window.location.hash.replace("#", "") || "home");
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const CurrentPage = routes[route] || Home;

  return h(
    "div",
    { className: "site-shell" },
    h(Navbar, { route }),
    h(AnimatePresence, { mode: "wait" }, h(CurrentPage, { key: route })),
    h(Footer)
  );
}

createRoot(document.getElementById("root")).render(h(App));
