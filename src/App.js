import React from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence } from "./motion.js";
import { h } from "./utils.js";
import { About } from "./components/About.js";
import { Footer } from "./components/Footer.js";
import { Home } from "./components/Home.js";
import { Join } from "./components/Join.js";
import { Navbar } from "./components/Navbar.js";
import { SocialLinks } from "./components/SocialLinks.js";

const routes = {
  home: Home,
  about: About,
  join: Join,
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
