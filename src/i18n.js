import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: { translation: { 
    name: "Hello, I'm Haukar",
    intro: `I'm a full-stack developer passionate about building modern, scalable, and responsive web applications. 
    I enjoy solving problems with clean and efficient code. Beyond technical skills, I am deeply committed to continuous learning, 
    always seeking to expand my knowledge and stay updated with the latest industry trends. My motivation drives me to tackle challenges head-on, 
    and I am determined not to give up until I find solutions. This resilience ensures that I consistently deliver high-quality results, even in the face of obstacles.`,
    knowledge: "Technical Skill Set",
    projects: "My Projects",
    portfolioText: "A personal portfolio website showcasing my skills and projects.",
    viewProject: "View Project"
  } },
  nl: { translation: {
    name: "Hallo, ik ben Haukar",
    intro: `Ik ben een full-stack ontwikkelaar met een passie voor het bouwen van moderne, schaalbare en responsieve webapplicaties. 
    Ik geniet ervan om problemen op te lossen met schone en efficiënte code. Buiten technische vaardigheden ben ik diep toegewijd aan continue leren, 
    altijd op zoek naar manieren om mijn kennis uit te breiden en op de hoogte te blijven van de laatste trends in de industrie. Mijn motivatie drijft me om 
    uitdagingen direct aan te pakken, en ik ben vastbesloten niet op te geven totdat ik oplossingen vind. Deze veerkracht zorgt ervoor dat ik consequent resultaten 
    van hoge kwaliteit lever, zelfs in het aangezicht van obstakels.`,
    knowledge: "Technische Vaardigheden",
    projects: "Mijn Projecten",
    portfolioText: "Mijn persoonlijke portfoliowebsite waarin ik mijn vaardigheden en gerealiseerde projecten presenteer.",
    viewProject: "Bekijk Project" 
  } },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});