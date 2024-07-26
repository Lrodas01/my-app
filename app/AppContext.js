import React, { createContext, useState } from 'react';

// Create a context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [cardsData, setCardsData] = useState([
    {
        category: "Computers",

        jobs: [
            {
                titleJob: "Computer Programming",
                descriptionJob: "Computer programming is the process of designing and writing instructions for computers to perform specific tasks or solve problems.",
                imageURIJob: require('../assets/images/icon.png'),
                imageURIcard: require("../assets/images/temporary2.png"),
                description: "Computer programming is the process of designing and writing instructions for computers to perform specific tasks or solve problems.",
                salaryRange: "79K - $140K",
                colleges: ["Colleges A", "Colleges B ", "Colleges C"],
            },
            {
                titleJob: "Another job",
                descriptionJob: "This is another description for a job",
                imageURIJob: require('../assets/images/icon.png'),
                description: "",
            },
            {
                titleJob: "Another Third job",
                descriptionJob: "This is another description for a job",
                imageURIJob: require('../assets/images/icon.png'),
                description: "",
            },
            {
                titleJob: "Another Fourth job",
                descriptionJob: "This is another description for a job",
                imageURIJob: require('../assets/images/icon.png'),
                description: "",
            },
        ],
        titleText: "Computers",
        descriptionText: "This is a description for computers",
        imageURI: require('../assets/images/computer.png'),
    },
    {
        category: "Medical",
        jobs: [
            {
                titleJob: "Medical job 1",
                descriptionJob: "This is a description for a medical job",
                imageURIJob: require('../assets/images/medical.webp'),
            },
            {
                titleJob: "Medical job 2",
                descriptionJob: "This is another description for a medical job",
                imageURIJob: require('../assets/images/medical.webp'),
            }
        ],
        titleText: "Medical",
        descriptionText: "This is a description for medical",
        imageURI: require('../assets/images/medical.webp'),
    },
    {
        category: "Finance",
        jobs: [
            {
                titleJob: "Finance job 1",
                descriptionJob: "This is a description for a finance job",
                imageURIJob: require('../assets/images/finance.jpg'),
            }
        ],
        titleText: "Finance",
        descriptionText: "This is a description for finance",
        imageURI: require('../assets/images/finance.jpg'),
    },
    {
        category: "Kinesiology",
        jobs: [
            {
                titleJob: "Kinesiology job 1",
                descriptionJob: "This is a description for a kinesiology job",
                imageURIJob: require('../assets/images/physical.webp'),
            }
        ],
        titleText: "Kinesiology",
        descriptionText: "This is a description for kinesiology",
        imageURI: require('../assets/images/physical.webp'),
    },
    { name: 'Liam Mitchel', time: '9:00AM' },
    { name: 'Emma Johnson', time: '10:00AM' },
    { name: 'Oliver Smith', time: '11:00AM' },
    { name: 'Ava Brown', time: '12:00PM' },
    
]);

  return (
    <AppContext.Provider value={{ cardsData, setCardsData }}>
      {children}
    </AppContext.Provider>
  );
};
