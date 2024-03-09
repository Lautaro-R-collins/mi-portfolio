import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import "./App.css";
import { ThemeContext } from "./Context/theme";
import { About } from "./Components/About/About";
import Aos from "aos";
import "aos/dist/aos.css";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

export default function App() {
  const [{ themename }] = React.useContext(ThemeContext);

  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<div>Loading...</div>}>
          <div id="top" className={`${themename} app`}>
            <section id="home">
              <Header />
            </section>
            <main>
              <About />
              <section id="projects">
                <Projects />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </Suspense>
      </I18nextProvider>
    </Router>
  );
}
