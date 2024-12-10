export const SKILLS = [
  {
    title: 'Frontend',
    icon: './assets/images/icons8-frontend-48.png',
    skills: [
      { skill: 'HTML5', percentage: '70%' },
      { skill: 'CSS', percentage: '60%' },
      { skill: 'JavaScript', percentage: '50%' },
      { skill: 'React.js', percentage: '60%' },
    ],
  },
  {
    title: 'Backend',
    icon: './assets/images/icons8-backend-development-48.png',
    skills: [{ skill: 'Python', percentage: '70%' }],
  },
  {
    title: 'Tools',
    icon: './assets/images/icons8-tools-32.png',
    skills: [
      { skill: 'Git & GitHub', percentage: '50%' },
      { skill: 'Visual Studio Code', percentage: '80%' },
      { skill: 'Responsive Design', percentage: '60%' },
    ],
  },
  {
    title: 'Soft Skill',
    icon: './assets/images/icons8-user-settings-48.png',
    skills: [
      { skill: 'Problem-Solving', percentage: '80%' },
      { skill: 'Collaboration', percentage: '80%' },
      { skill: 'Attention to Detail', percentage: '75%' },
    ],
  },
];

export const WORK_EXPERIENCE=[
  {
  title: "E-Commerce Website Development",
  date: "Python Django",
  responsibilities: [
    "Developed a full-fledged e-commerce website similar to Flipkart and Amazon using the Django framework.",
    "Implemented user authentication, product listings, shopping cart, order management, and payment gateway integration.",
    "Built a robust search and filter functionality to enhance user experience and product discoverability.",
    "Used Django ORM for database management and designed RESTful APIs for frontend-backend communication.",
    "Ensured code reliability through unit testing and maintained code quality with version control systems like Git.",
    "Collaborated with a team to meet deadlines and integrate new features to improve scalability."
  ]
},
  {
  title: "E-Book Reader Application",
  date: "React Native, Firebase",
  responsibilities: [
    "Developed a cross-platform e-book reader app with support for PDFs, ePub, and other file formats.",
    "Integrated text-to-speech functionality using 'react-native-tts' for reading books aloud.",
    "Implemented advanced search functionality to allow users to search across books and annotations.",
    "Used Firebase Authentication for secure login and Firebase Firestore for storing reading progress, bookmarks, and notes.",
    "Managed cloud storage using Firebase Storage to store and retrieve e-books.",
    "Enabled cross-device syncing through Firestore to maintain progress across multiple devices.",
    "Designed a fully customizable reading interface with theme options, font styles, and layout adjustments.",
    "Implemented offline mode using Firebase's local persistence capabilities to enable reading without an internet connection.",
    "Set up Firebase Analytics to track user interactions and progress."
  ]
},
  {
  title: "Saloon App",
  date: "React Native, Firebase",
  responsibilities: [
    "Built a user-friendly mobile app for salon service booking and management.",
    "Integrated React Native components for smooth navigation and UI, ensuring responsiveness across devices.",
    "Developed a service catalog with detailed profiles for stylists and services, leveraging Firebase Firestore for data storage.",
    "Implemented an appointment scheduling system with real-time updates using Firebase Realtime Database.",
    "Used Firebase Authentication to enable secure user logins and professional access.",
    "Integrated push notifications for booking reminders and updates using 'react-native-push-notifications'.",
    "Integrated payment gateway (Stripe or Razorpay) for secure online payments.",
    "Collaborated with a team to ensure efficient and clean code management using Git for version control."
  ]
},
{
  title: "Home Service App",
  date: "React Native, Firebase",
  responsibilities: [
    "Developed a mobile platform to connect users with professionals for home services such as plumbing, cleaning, and appliance repair.",
    "Implemented an on-demand booking system with Firebase Firestore for real-time data management.",
    "Developed user profiles and service catalogs with detailed information about available services and professionals.",
    "Integrated geolocation features using 'react-native-maps' for real-time tracking of service professionals.",
    "Created secure payment integration using Firebase extensions or third-party payment systems like Stripe.",
    "Developed subscription plans for regular service users, leveraging Firebase Cloud Functions to handle subscription logic.",
    "Enabled real-time notifications for users and professionals using Firebase Cloud Messaging.",
    "Used Firebase Authentication for user login and secure professional access.",
    "Ensured a smooth UX/UI with custom components for booking, payments, and service tracking."
  ]
}

]