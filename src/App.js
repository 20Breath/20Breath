import React from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence } from "./motion.js?v=20260610-registration-connected";
import { h } from "./utils.js";
import { About } from "./components/About.js?v=20260610-registration-connected";
import { Contact } from "./components/Contact.js?v=20260610-registration-connected";
import { Footer } from "./components/Footer.js?v=20260610-registration-connected";
import { Home } from "./components/Home.js?v=20260610-registration-connected";
import { Join } from "./components/Join.js?v=20260610-registration-connected";
import { Navbar } from "./components/Navbar.js?v=20260610-registration-connected";
import { SocialLinks } from "./components/SocialLinks.js?v=20260610-registration-connected";

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
