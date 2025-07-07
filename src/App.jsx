import { useTranslation } from "react-i18next";
import MyPhoto from "./assets/Haukar.jpg";
import Gif from "./assets/giphy.gif";
import JS from "./assets/JavaScript.png";
import ReactIcon from "./assets/React.png";
import Python from "./assets/Python.png";
import Git from "./assets/Git.png";
import Azure from "./assets/Azure.png";
import Next from "./assets/Next.png";
import Net from "./assets/Net.png";
import Csharp from "./assets/Csharp.png";
import Node from "./assets/Node.png";
import Html from "./assets/Html.png";
import Css from "./assets/Css.png";
import Tailwind from "./assets/Tailwind.png";
import Portfolio from "./assets/Portfolio.png";

function App() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "nl" ? "en" : "nl";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="font-sans bg-[#F5E6F6] text-[#2C2C2C] min-h-screen px-6 py-12">
      {/* Hero/About Section */}
      <section className="relative flex flex-col md:flex-row gap-12 bg-white rounded-2xl shadow-lg p-8 mb-16 min-h-[400px] items-center">
        <img
          src={MyPhoto}
          alt="Haukar"
          className="w-36 h-36 md:w-48 md:h-48 rounded-full shadow-xl object-cover"
        />
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-5xl font-extrabold mb-4 text-[#9B4D96]">
            {t("name")}
          </h1>
          <p className="text-lg leading-relaxed text-[#2C2C2C]">{t("intro")}</p>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/3">
          <img
            src={Gif}
            alt="Animated Gif"
            className="w-full h-auto max-w-[220px] object-contain rounded-lg shadow-lg"
          />
        </div>
        <button
          onClick={toggleLang}
          className="absolute top-6 right-6 bg-[#9B4D96] hover:bg-[#7A3C7B] transition-colors text-white px-5 py-2 rounded-full font-semibold shadow-md"
        >
          {i18n.language === "nl" ? "English" : "Nederlands"}
        </button>
      </section>

      {/* Knowledge Section */}
      <section className="p-8 bg-white rounded-2xl shadow-lg mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center text-[#9B4D96]">
          {t("knowledge")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {[
            { src: JS, alt: "JavaScript", label: "JavaScript" },
            { src: ReactIcon, alt: "React.js", label: "React.js" },
            { src: Python, alt: "Python", label: "Python" },
            { src: Git, alt: "Git", label: "Git" },
            { src: Azure, alt: "Azure", label: "Azure" },
            { src: Next, alt: "Next.js", label: "Next.js" },
            { src: Net, alt: ".Net", label: ".Net" },
            { src: Csharp, alt: "Csharp", label: "C#" },
            { src: Node, alt: "Node.js", label: "Node.js" },
            { src: Html, alt: "Html", label: "HTML" },
            { src: Css, alt: "CSS", label: "CSS" },
            { src: Tailwind, alt: "Tailwind CSS", label: "Tailwind CSS" },
          ].map(({ src, alt, label }) => (
            <div
              key={alt}
              className="group relative flex flex-col justify-center items-center cursor-pointer"
            >
              <img
                src={src}
                alt={alt}
                className="w-24 h-24 object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="mt-2 text-[#9B4D96] font-medium text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center text-[#9B4D96]">
         {t("projects")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-[#9B4D96] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-bold text-[#9B4D96]">
                Portfolio Website
              </h3>
            </div>
            <img
                src={Portfolio}
                alt="Portfolio Logo"
                className="w-100 h-60 mr-4"
              />
            <p className="text-[#2C2C2C] text-sm mb-4">
              {t("portfolioText")}
            </p>
            <a
              href="https://Haukar.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#9B4D96] hover:text-[#6B8E23] font-semibold"
            >
              {t("viewProject")}
            </a>
          </div>
          {/* Other project cards */}
        </div>
      </section>
    </div>
  );
}

export default App;
