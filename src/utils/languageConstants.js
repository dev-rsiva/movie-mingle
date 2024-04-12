const lang = {
  en: {
    search: "Search",
    gptSearchPlaceholder: "what would you like to watch",
  },

  hindi: {
    search: "खोज",
    gptSearchPlaceholder: "आप क्या देखना पसंद करेंगे",
  },

  spanish: {
    search: "Buscar",
    gptSearchPlaceholder: "¿Qué te gustaría ver?",
  },
};

export default lang;

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "hindi" },
  { identifier: "spanish", name: "spanish" },
];
