// Configuration for subjects and available years
const appConfig = {
  subjects: [
    {
      id: "HCI",
      name: "Human Computer Interactions",
      shortName: "HCI",
      icon: "💻",
      folder: "HCI",
      years: [
        { year: 2025, file: "data2025.js" },
        { year: 2024, file: "data2024.js" },
        { year: 2023, file: "data2023.js" },
      ],
    },
    {
      id: "IIOT",
      name: "Industrial IOT",
      shortName: "IIOT",
      icon: "🔧",
      folder: "IIOT",
      years: [
        // Will be added when IIOT data is available
        // { year: 2025, file: 'data2025.js' },
        // { year: 2024, file: 'data2024.js' }
      ],
    },
  ],
};
