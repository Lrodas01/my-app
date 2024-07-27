import React, { createContext, useState } from 'react';

// Create a context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [cardsData, setCardsData] = useState([
    {
        category: "Technology",

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
                colleges: ["Colleges d", "Colleges e ", "Colleges fC"],
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
        titleText: "Technology",
        descriptionText: "Code, software development, Python...",
        imageURI: require('../assets/icons-black/technology.png'),
        selectedImageURI: require('../assets/icons-white/technology.png')
    },
    {
        category: "Health",
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
        titleText: "Health",
        descriptionText: "Medical research, nursing, surgeon...",
        imageURI: require('../assets/icons-black/health.png'),
        selectedImageURI: require('../assets/icons-white/health.png'),
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
        descriptionText: "investment banking, financial analysis...",
        imageURI: require('../assets/icons-black/finance.png'),
        selectedImageURI: require('../assets/icons-white/finance.png'),
    },
    {
        category: "Creative Arts",
        jobs: [
            {
                titleJob: "Creative Arts job 1",
                descriptionJob: "This is a description for a Creative Arts job",
                imageURIJob: require('../assets/images/physical.webp'),
            }
        ],
        titleText: "Creative Arts",
        descriptionText: "UX/UI designer, filmmaking, painter...",
        imageURI: require('../assets/icons-black/creative.png'),
        selectedImageURI: require('../assets/icons-white/creative.png'),
    },
    {
      category: "Education",
      jobs: [
          {
              titleJob: "Education job 1",
              descriptionJob: "This is a description for a Education job",
              imageURIJob: require('../assets/images/physical.webp'),
          }
      ],
      titleText: "Education",
      descriptionText: "Teaching, educational administration...",
      imageURI: require('../assets/icons-black/education.png'),
      selectedImageURI: require('../assets/icons-white/education.png'),
  },
  {
    category: "Engineering",
    jobs: [
        {
            titleJob: "Engineering job 1",
            descriptionJob: "This is a description for a Engineeringjob",
            imageURIJob: require('../assets/images/physical.webp'),
        }
    ],
    titleText: "Engineering",
    descriptionText: "civil engineering, mechanical engineering...",
    imageURI: require('../assets/icons-black/engineer.png'),
    selectedImageURI: require('../assets/icons-white/engineer.png'),
},
{
  category: "Business",
  jobs: [
      {
          titleJob: "Business",
          descriptionJob: "This is a description for a Businessjob",
          imageURIJob: require('../assets/images/physical.webp'),
      }
  ],
  titleText: "Business",
  descriptionText: "entrepreneurship, marketing...",
  imageURI: require('../assets/icons-black/business.png'),
  selectedImageURI: require('../assets/icons-white/business.png'),
},
{
  category: "Outer Space",
  jobs: [
      {
          titleJob: "Outer Space job 1",
          descriptionJob: "This is a description for a Outer Space job",
          imageURIJob: require('../assets/images/physical.webp'),
      }
  ],
  titleText: "Outer Space",
  descriptionText: "Astronaut, Cosmologist...",
  imageURI: require('../assets/icons-black/space.png'),
  selectedImageURI: require('../assets/icons-white/space.png'),
},
{
  category: "Communications",
  jobs: [
      {
          titleJob: "Communications job 1",
          descriptionJob: "This is a description for a Communications job",
          imageURIJob: require('../assets/images/physical.webp'),
      }
  ],
  titleText: "Communications",
  descriptionText: "public relations, journalism...",
  imageURI: require('../assets/icons-black/communication.png'),
  selectedImageURI: require('../assets/icons-white/communication.png'),
},
{
  category: "Writing & Lit",
  jobs: [
      {
          titleJob: "Writing & Lit job 1",
          descriptionJob: "This is a description for a Writing & Lit job",
          imageURIJob: require('../assets/images/physical.webp'),
      }
  ],
  titleText: "Writing & Lit",
  descriptionText: "Writer, author, editor...",
  imageURI: require('../assets/icons-black/literature.png'),
  selectedImageURI: require('../assets/icons-white/book.png'),
},
]); 

  const [scheduleData, setScheduleData] = useState ([
    {
       name: 'Liam Mitchel', 
       time: '9:00AM',
       career: 'Software Programmer',
       profile: require('../assets/profilesa/profile1.png')
    },
    { 
      name: 'Emma Johnson', 
      time: '10:00AM',
      career: 'Financial Analyst',
      profile: require('../assets/profilesa/profile2.png')
    },
    { 
      name: 'Oliver Smith', 
      time: '11:00AM', 
      career: 'Graphic Designer',
      profile: require('../assets/profilesa/profile3.png')
    },
    { 
      name: 'Ava Brown', 
      time: '12:00PM',
      career: 'Marketing Manager',
      profile: require('../assets/profilesa/profile4.png')

    },
    { 
      name: 'Ethan Brooks', 
      time: '12:00PM',
      career: 'Chef',
      profile: require('../assets/profilesa/unc.png')

    },
  ])

  const [careerInterests, setCareerInterests] = useState([
    {
      name: 'Computer Programming',
      image: 'test2'
    },
    {
      name: 'Phsychology',
      image: 'test2'
    },
    {
      name: 'Health',
      image: 'test2'
    },

  ])

  const [recentJobs, setRecentJobs] = useState([]);

  const addRecentJob = (job) => {
    setRecentJobs((prevJobs) => {
      const updatedJobs = [job, ...prevJobs.filter((j) => j.titleJob !== job.titleJob)];
      return updatedJobs.slice(0, 5); // limit to last 5 jobs
    });
  };

  return (
    <AppContext.Provider 
    value={{ cardsData, setCardsData, scheduleData, setScheduleData, careerInterests, setCareerInterests, recentJobs, addRecentJob }}
    >
      {children}
    </AppContext.Provider>
  );
};
