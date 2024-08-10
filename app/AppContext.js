import React, { createContext, useState } from 'react';

// Creates a context
export const AppContext = createContext();

// Creates a provider component
export const AppProvider = ({ children }) => {
  const [cardsData, setCardsData] = useState([
    {
        category: "Technology",

        jobs: [
            {
                titleJob: "Computer Programming",
                descriptionJob: "Computer programming is the process of designing and writing instructions for computers to perform specific tasks or solve problems.",
                imageURIJob: require('../assets/icons-black/computer.png'),
                imageURIcard: require("../assets/images/temporary2.png"),
                colleges: [
                  {
                    collegeName: "Stanford",
                    collegeImage: require('../assets/collegeImages/stanford.png')
                  },
                  {
                    collegeName: "UC Berkley",
                    collegeImage: require ('../assets/collegeImages/calState.png')
                  },
                  {
                    collegeName: "CalTech",
                    collegeImage: require('../assets/collegeImages/caltech.png')
                  }
                ],
                benefits: [
                  {
                    title: "79K - 140K",
                    descripition: "How much would you make? ",
                    image: ''
                  },
                  {
                    title: "Oppertunities",
                    descripition: "Higher chance for a Job",
                    image: ''
                  },
                  {
                    title: "Remote Work",
                    descripition: "Better chance to work from home.",
                    image: ''
                  },
                ],
                websites:[
                  {
                    title: 'CodeAcademy.com',
                    image: require('../assets/websites/code.png')
                  },
                  {
                    title: 'FreeCodeCamp.org',
                    image:  require('../assets/websites/camp.png')
                  },
              ],
                internships: [
                  {
                    name: 'Roit Games Intership',
                    image: require('../assets/interships/riot.png')
                },
                {
                    name: 'Engineer Intern',
                    image: require('../assets/interships/caltech.png')
                },
                {
                    name: 'Urban TXT',
                    image: require('../assets/interships/txt.png'),
                    description: 'Urban TXT (Teens Exploring Technology) is a non-profit organization dedicated to empowering young men of color from low-income communities in Los Angeles through technology, leadership, and entrepreneurship education.',
                    email: 'info@urbantxt.com',
                    web: 'urbantxt.org',
                    address: '3655 South Grand Ave.  Los Angeles, CA 90007 Ste. 220',
                    imageCard: require('../assets/images/duck.webp')
                },
                ]
            },
            {
                titleJob: "Information Security Analyst",
                descriptionJob: "Protects an organization's computer systems from cyber attacks and data breaches",
                imageURIJob: require('../assets/images/icon.png'),
                imageURIcard: require("../assets/images/temporary2.png"),
                salaryRange: "89K - 96K",
                colleges: [
                  {
                    collegeName: "Stanford",
                    collegeImage: require('../assets/collegeImages/stanford.png')
                  },
                  {
                    collegeName: "University of California",
                    collegeImage: require ('../assets/collegeImages/calState.png')
                  },
                  {
                    collegeName: "Boston University",
                    collegeImage: require('../assets/collegeImages/boston.png')
                  }
                ],
                benefits: [
                  {
                    title: "85K - 125K",
                    descripition: "How much would you make?",
                    image: ''
                  },
                  {
                    title: "Flexibility",
                    descripition: "Work from home, flexible schedule.",
                    image: ''
                  },
                  {
                    title: "Impact",
                    descripition: "Keeps information safe.",
                    image: ''
                  },
                ],
                websites:[
                  {
                    title: 'cybrary.it',
                    image: require('../assets/websites/cybrary.png')
                  },
                  {
                    title: 'sans.org',
                    image:  require('../assets/websites/sans.png')
                  },
              ],
                internships: [
                  {
                    name: 'IBM Cybersecurity Internship',
                    image: ''
                },
                {
                    name: 'Deloitte Cyber Risk Internship',
                    image: ''
                },
                {
                    name: 'NSA Cybersecurity Internship',
                    image: '',
                    description: 'no data',
                    email: 'no data',
                    web: 'no data',
                    address: 'no data',
                    imageCard: '',
                },
                ]
            },
            {
                titleJob: "Video Game Designer",
                descriptionJob: "A software professional who creates applications for mobile devices, such as smartphones and tablets",
                imageURIJob: require('../assets/icons-black/game.png'),
                salaryRange: "79K - $140K",
                colleges: [
                  {
                    collegeName: "Stanford",
                    collegeImage: require('../assets/collegeImages/stanford.png')
                  },
                  {
                    collegeName: "University of California",
                    collegeImage: require ('../assets/collegeImages/calState.png')
                  },
                  {
                    collegeName: "Boston University",
                    collegeImage: require('../assets/collegeImages/boston.png')
                  }
                ],            },
            {
                titleJob: "AI Engineer",
                descriptionJob: "Responsible for developing, programming and training the complex networks of algorithms that make up AI so that they can function like a human brain",
                imageURIJob: require('../assets/images/icon.png'),
                salaryRange: "79K - $140K",
                colleges: [
                  {
                    collegeName: "Stanford",
                    collegeImage: require('../assets/collegeImages/stanford.png')
                  },
                  {
                    collegeName: "UC Berkley",
                    collegeImage: require ('../assets/collegeImages/calState.png')
                  },
                  {
                    collegeName: "Boston University",
                    collegeImage: require('../assets/collegeImages/boston.png')
                  }
                ],
            },
        ],
        titleText: "Technology",
        descriptionText: "Code, software development, Python...",
        imageURI: require('../assets/icons-white/technology.png'),
        jobCardURI: require('../assets/selection/technology.png'),
        selectedImageURI: require('../assets/icons-white/technology.png'),

    },
    {
        category: "Health",
        jobs: [
            {
                titleJob: "Medical Physicist",
                descriptionJob: "Work in health care and apply their knowledge of physics to the development and use of medical radiation treatments, devices, and technologies‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ",
                imageURIJob: require('../assets/images/icon.png'),
                salaryRange: "79K - $140K",
                colleges: [
                  {
                    collegeName: "Stanford",
                    collegeImage: require('../assets/collegeImages/stanford.png')
                  },
                  {
                    collegeName: "University of California",
                    collegeImage: require ('../assets/collegeImages/calState.png')
                  },
                  {
                    collegeName: "Boston University",
                    collegeImage: require('../assets/collegeImages/boston.png')
                  }
                ],            },
            {
                titleJob: "Physician",
                descriptionJob: "Diagnoses and treats illnesses, performs physical exams, prescribes medication, and provides patient care.",
                imageURIJob: require('../assets/images/icon.png'),
                salaryRange: "79K - $140K",
                colleges: [
                  {
                    collegeName: "Stanford",
                    collegeImage: require('../assets/collegeImages/stanford.png')
                  },
                  {
                    collegeName: "University of California",
                    collegeImage: require ('../assets/collegeImages/calState.png')
                  },
                  {
                    collegeName: "Boston University",
                    collegeImage: require('../assets/collegeImages/boston.png')
                  }
                ],            }
        ],
        titleText: "Health",
        descriptionText: "Medical research, nursing, surgeon...",
        imageURI: require('../assets/icons-white/health.png'),
        jobCardURI: require('../assets/selection/health.png'),
        selectedImageURI: require('../assets/icons-white/health.png'),
    },
    {
        category: "Finance",
        jobs: [
            {
                titleJob: "Finance job 1",
                descriptionJob: "This is a description for a finance job",
                imageURIJob: require('../assets/images/finance.jpg'),
                salaryRange: "79K - $140K",
                colleges: [
                  {
                    collegeName: "Stanford",
                    collegeImage: require('../assets/collegeImages/stanford.png')
                  },
                  {
                    collegeName: "University of California",
                    collegeImage: require ('../assets/collegeImages/calState.png')
                  },
                  {
                    collegeName: "Boston University",
                    collegeImage: require('../assets/collegeImages/boston.png')
                  }
                ],            }
        ],
        titleText: "Finance",
        descriptionText: "investment banking, financial analysis...",
        imageURI: require('../assets/icons-white/finance.png'),
        jobCardURI: require('../assets/selection/finance.png'),
        selectedImageURI: require('../assets/icons-white/finance.png'),
    },
    {
        category: "Creative Arts",
        jobs: [
            {
                titleJob: "Creative Arts job 1",
                descriptionJob: "This is a description for a Creative Arts job",
                imageURIJob: require('../assets/images/physical.webp'),
                salaryRange: "79K - $140K",
                colleges: [
                  {
                    collegeName: "Stanford",
                    collegeImage: require('../assets/collegeImages/stanford.png')
                  },
                  {
                    collegeName: "University of California",
                    collegeImage: require ('../assets/collegeImages/calState.png')
                  },
                  {
                    collegeName: "Boston University",
                    collegeImage: require('../assets/collegeImages/boston.png')
                  }
                ],            }
        ],
        titleText: "Creative Arts",
        descriptionText: "UX/UI designer, filmmaking, painter...",
        imageURI: require('../assets/icons-white/creative.png'),
        jobCardURI: require('../assets/selection/art.png'),
        selectedImageURI: require('../assets/icons-white/creative.png'),
    },
    {
      category: "Education",
      jobs: [
          {
              titleJob: "Education job 1",
              descriptionJob: "This is a description for a Education job",
              imageURIJob: require('../assets/images/physical.webp'),
              salaryRange: "79K - $140K",
              colleges: [
                {
                  collegeName: "Stanford",
                  collegeImage: require('../assets/collegeImages/stanford.png')
                },
                {
                  collegeName: "University of California",
                  collegeImage: require ('../assets/collegeImages/calState.png')
                },
                {
                  collegeName: "Boston University",
                  collegeImage: require('../assets/collegeImages/boston.png')
                }
              ],          }
      ],
      titleText: "Education",
      descriptionText: "Teaching, educational administration...",
      imageURI: require('../assets/icons-white/education.png'),
      jobCardURI: require('../assets/selection/education.png'),
      selectedImageURI: require('../assets/icons-white/education.png'),
  },
  {
    category: "Engineering",
    jobs: [
        {
            titleJob: "Mechanical Engineer",
            descriptionJob: "Designs, develops, and tests mechanical systems and products like engines, machines, and tools. Works in industries such as automotive, aerospace, and manufacturing.",
            imageURIJob: require('../assets/images/icon.png'),
            salaryRange: "79K - $140K",
            colleges: [
              {
                collegeName: "Stanford",
                collegeImage: require('../assets/collegeImages/stanford.png')
              },
              {
                collegeName: "MIT",
                collegeImage: require ('../assets/collegeImages/mit.png')
              },
              {
                collegeName: "CalTech",
                collegeImage: require('../assets/collegeImages/caltech.png')
              }
            ],      
          }
    ],
    titleText: "Engineering",
    descriptionText: "civil engineering, mechanical engineering...",
    imageURI: require('../assets/icons-white/engineer.png'),
    jobCardURI: require('../assets/selection/engineer.png'),
    selectedImageURI: require('../assets/icons-white/engineer.png'),
},
{
  category: "Business",
  jobs: [
      {
          titleJob: "Business",
          descriptionJob: "This is a description for a Businessjob",
          imageURIJob: require('../assets/images/physical.webp'),
          salaryRange: "79K - $140K",
          colleges: [
            {
              collegeName: "Stanford",
              collegeImage: require('../assets/collegeImages/stanford.png')
            },
            {
              collegeName: "University of California",
              collegeImage: require ('../assets/collegeImages/calState.png')
            },
            {
              collegeName: "Boston University",
              collegeImage: require('../assets/collegeImages/boston.png')
            }
          ],      }
  ],
  titleText: "Business",
  descriptionText: "entrepreneurship, marketing...",
  imageURI: require('../assets/icons-white/business.png'),
  jobCardURI: require('../assets/selection/business.png'),
  selectedImageURI: require('../assets/icons-white/business.png'),
},
{
  category: "Outer Space",
  jobs: [
      {
          titleJob: "Outer Space job 1",
          descriptionJob: "This is a description for a Outer Space job",
          imageURIJob: require('../assets/images/physical.webp'),
          salaryRange: "79K - $140K",
          colleges: [
            {
              collegeName: "Stanford",
              collegeImage: require('../assets/collegeImages/stanford.png')
            },
            {
              collegeName: "University of California",
              collegeImage: require ('../assets/collegeImages/calState.png')
            },
            {
              collegeName: "Boston University",
              collegeImage: require('../assets/collegeImages/boston.png')
            }
          ],      }
  ],
  titleText: "Outer Space",
  descriptionText: "Astronaut, Cosmologist...",
  imageURI: require('../assets/icons-white/space.png'),
  jobCardURI: require('../assets/selection/space.png'),
  selectedImageURI: require('../assets/icons-white/space.png'),
},
{
  category: "Communications",
  jobs: [
      {
          titleJob: "Communications job 1",
          descriptionJob: "This is a description for a Communications job",
          imageURIJob: require('../assets/images/physical.webp'),
          salaryRange: "79K - $140K",
          colleges: [
            {
              collegeName: "Stanford",
              collegeImage: require('../assets/collegeImages/stanford.png')
            },
            {
              collegeName: "University of California",
              collegeImage: require ('../assets/collegeImages/calState.png')
            },
            {
              collegeName: "Boston University",
              collegeImage: require('../assets/collegeImages/boston.png')
            }
          ],      }
  ],
  titleText: "Communications",
  descriptionText: "public relations, journalism...",
  imageURI: require('../assets/icons-white/communication.png'),
  jobCardURI: require('../assets/selection/communication.png'),
  selectedImageURI: require('../assets/icons-white/communication.png'),
},
{
  category: "Writing & Lit",
  jobs: [
      {
          titleJob: "Writing & Lit job 1",
          descriptionJob: "This is a description for a Writing & Lit job",
          imageURIJob: require('../assets/images/physical.webp'),
          salaryRange: "79K - 140K",
          colleges: [
            {
              collegeName: "Stanford",
              collegeImage: require('../assets/collegeImages/stanford.png')
            },
            {
              collegeName: "University of California",
              collegeImage: require ('../assets/collegeImages/calState.png')
            },
            {
              collegeName: "Boston University",
              collegeImage: require('../assets/collegeImages/boston.png')
            }
          ],
}
  ],
  titleText: "Writing & Lit",
  descriptionText: "Writer, author, editor...",
  imageURI: require('../assets/icons-white/book.png'),
  jobCardURI: require('../assets/selection/literature.png'),
  selectedImageURI: require('../assets/icons-white/book.png'),
},
]); 

const [jobData, setJobData] = useState([
    {
      titleJob: "Computer Programming",
      descriptionJob: "Computer programming is the process of designing and writing instructions for computers to perform specific tasks or solve problems.",
      imageURIJob: require('../assets/images/icon.png'),
      imageURIcard: require("../assets/images/temporary2.png"),
      salaryRange: "10K - 30K"
  },
  {
      titleJob: "Information Security Analyst",
      descriptionJob: "Protects an organization's computer systems from cyber attacks and data breaches",
      imageURIJob: require('../assets/images/icon.png'),
      imageURIcard: require("../assets/images/temporary2.png"),
      salaryRange: "89K - 96K",

  },
  {
      titleJob: "Another Third job",
      descriptionJob: "This is another description for a job",
      imageURIJob: require('../assets/images/icon.png'),
      description: "",
      salaryRange: "79K - $140K",
  },
  {
      titleJob: "Another Fourth job",
      descriptionJob: "This is another description for a job",
      imageURIJob: require('../assets/images/icon.png'),
      description: "",
      salaryRange: "79K - $140K",
  },

  ])

  const [scheduleData, setScheduleData] = useState ([
    {
       name: 'Liam Mitchel', 
       time: '9:00AM',
       career: 'Software Programmer',
       profile: require('../assets/profilesa/profile1.png'),
       monthShort: 'Aug',
       month: 'August',
       day: '13',
       dayth: '13th',
       description: 'I am a very determined person who wants to help out with technology',
       funFact1: 'Knows HTML,CSS, and JS',
       funFact2: 'Learning Python'
    },
    { 
      name: 'Emma Johnson', 
      time: '10:00AM',
      career: 'Financial Analyst',
      profile: require('../assets/profilesa/profile2.png'),
      monthShort: 'Aug',
      month: 'August',
      day: '13',
      dayth: '13th',
      description: 'I am a very determined person who wants to help out with technology',
      funFact1: 'Knows HTML,CSS, and JS',
      funFact2: 'Learning Python'
    },
    { 
      name: 'Oliver Smith', 
      time: '11:00AM', 
      career: 'Graphic Designer',
      profile: require('../assets/profilesa/profile3.png'),
      monthShort: 'Aug',
      month: 'August',
      day: '13',
      dayth: '13th',
      description: 'I am a very determined person who wants to help out with technology',
      funFact1: 'Knows HTML,CSS, and JS',
      funFact2: 'Learning Python'
    },
    { 
      name: 'Ava Brown', 
      time: '12:00PM',
      career: 'Marketing Manager',
      profile: require('../assets/profilesa/profile4.png'),
      monthShort: 'Aug',
      month: 'August',
      day: '13',
      dayth: '13th',
      description: 'I am a very determined person who wants to help out with technology',
      funFact1: 'Knows HTML,CSS, and JS',
      funFact2: 'Learning Python'

    },
    { 
      name: 'Ethan Brooks', 
      time: '12:00PM',
      career: 'Chef',
      profile: require('../assets/profilesa/unc.png'),
      monthShort: 'Aug',
      month: 'August',
      day: '13',
      dayth: '13th',
      description: 'I am a very determined person who wants to help out with technology',
      funFact1: 'Knows HTML,CSS, and JS',
      funFact2: 'Learning Python',
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

  const [selectedCategories, setSelectedCategories] = useState([]);

  const addRecentJob = (job) => {
    setRecentJobs((prevJobs) => {
      const updatedJobs = [job, ...prevJobs.filter((j) => j.titleJob !== job.titleJob)];
      return updatedJobs.slice(0, 5); // limit to last 5 jobs
    });
  };


  // Function to add a selected category to the list of selected. Currently it does not update correctly, we can fix this later
  const addSelectedCategory = (category) => {
    setSelectedCategories((prevCategory) => {
      const updatedCategories = [category, ...prevCategory.filter((c) => c !== category)];
      return updatedCategories;
    });
  }


  return (
    <AppContext.Provider 
    value={{ cardsData, setCardsData, scheduleData, setScheduleData, careerInterests, setCareerInterests, recentJobs, addRecentJob, jobData, setJobData, addSelectedCategory, selectedCategories }}
    >
      {children}
    </AppContext.Provider>
  );
};
