import webDesignOne from "@/public/portfolioGallery/web design 1.png";
import webDesignTwo from "@/public/portfolioGallery/web design 2.png";
import webDesignThree from "@/public/portfolioGallery/web design 3.png";
import dashboardOne from "@/public/portfolioGallery/dashboardone.png";
import dashboardTwo from "@/public/portfolioGallery/dashboardTwo.png";
import dashboardThree from "@/public/portfolioGallery/dashboardThree.png";
import dashboardFour from "@/public/portfolioGallery/dashboardFour.png";
import hotelOne from "@/public/portfolioGallery/hotelOne.png";
import hotelTwo from "@/public/portfolioGallery/hotelTwo.png";
import hotelThree from "@/public/portfolioGallery/hotelThree.png";
import appOne from "@/public/portfolioGallery/agency one.jpeg";
import appTwo from "@/public/portfolioGallery/agency three.jpeg";
import appThree from "@/public/portfolioGallery/app two.jpeg";

export const projects = [
  {
    id: 0,
    title: "Adopted Life Style (Video platform)",
    subtitle: "Crafting intuitive user experiences.",
    describe:
      "A professional, responsive business website built with a focus on usability, branding consistency, and seamless cross-device performance.",
    clientName: "Michael Anderson",
    date: "2025-03-15",
    link: "https://adaptable-life-style.vercel.app/",
    dateLabel: "15 March 2025",
    service: "UI/UX Design",
    budget: 850,
    currency: "USD",
    images: [webDesignOne, webDesignTwo, webDesignThree],
    paragraphOne:
      "This project aimed to create a visually appealing and user-friendly business website for Michael Anderson, ensuring that the digital presence effectively communicates brand values while maintaining simplicity and clarity.",
    paragraphTwo:
      "The design process began with a deep understanding of the target audience and brand tone. Wireframes and mockups were developed to define the layout, color palette, and typography. Every design decision was guided by the goal of improving user experience and engagement.",
    paragraphThree:
      "Responsiveness was a top priority—each section of the site was optimized to look and perform flawlessly across desktops, tablets, and smartphones. The use of grid-based layouts and flexible media queries ensured a consistent experience everywhere.",
    paragraphFour:
      "Michael Anderson was actively involved during each stage of the project, providing valuable feedback that helped refine both the aesthetics and functionality of the website.",
    paragraphFive:
      "With a budget of $850, the project successfully delivered a clean, modern, and conversion-focused business website that strengthens credibility and enhances user trust.",
    paragraphSix:
      "The final delivery included a full design package—UI components, layout specifications, and responsive prototypes—ready for smooth handoff to development. This project represents the perfect blend of design thinking, accessibility, and visual harmony.",
  },
  {
    id: 1,
    title: "Frontend Prototype (Admin Dashboard)",
    subtitle: "Designing responsive and interactive dashboards.",
    describe:
      "A modern, responsive admin dashboard prototype focused on analytics, management, and user interaction, designed to provide a clean and efficient workspace.",
    clientName: "Jennifer Lee",
    date: "2025-05-01",
    link: "https://alibi-admin-dashboard.vercel.app/",
    dateLabel: "01 May 2025",
    service: "Web Design & Frontend Prototype",
    budget: 1250,
    currency: "USD",
    images: [dashboardOne, dashboardTwo, dashboardThree, dashboardFour],
    paragraphOne:
      "The goal of this project was to design a powerful and responsive admin dashboard prototype for Jennifer Lee, providing a seamless experience for managing data, users, and analytics.",
    paragraphTwo:
      "The design emphasizes clarity and usability—every chart, table, and widget was carefully structured to present information intuitively. The layout adapts perfectly to various screen sizes, ensuring a consistent and professional look on desktops, tablets, and mobile devices.",
    paragraphThree:
      "Key focus areas included navigation design, data visualization, and real-time UI components. Interactive cards, modals, and filter systems were integrated to create a user-friendly administrative environment.",
    paragraphFour:
      "Performance and accessibility were critical. The interface design maintained WCAG standards, ensuring that all dashboard components were easy to navigate and interpret. The system was also optimized for speed and minimal visual clutter.",
    paragraphFive:
      "With a total budget of $1,250, this project delivered a functional and visually refined frontend prototype that can easily be extended into a full-fledged admin dashboard application.",
    paragraphSix:
      "The final result includes component-based layouts, detailed style guidelines, and a responsive prototype—ready for seamless developer implementation. This dashboard sets a strong foundation for data-driven decision-making and administrative efficiency.",
  },
  {
    id: 2,
    title: "Full Stack (Hotel Management System)",
    subtitle: "Creating seamless and intelligent management experiences.",
    describe:
      "A full-stack hotel management system designed for efficient booking, staff coordination, and room management—combining functionality with a clean, modern UI.",
    clientName: "Christopher Davis",
    date: "2025-05-24",
    link: "https://hotel-management-system-ochre.vercel.app/",
    dateLabel: "24 May 2025",
    service: "Full Stack Web Application",
    budget: 1896,
    currency: "USD",
    images: [hotelThree, hotelTwo, hotelOne],
    paragraphOne:
      "This project focused on building a full-stack hotel management system for Christopher Davis that streamlines room booking, customer management, billing, and reporting within a single unified platform.",
    paragraphTwo:
      "The frontend was developed to offer a smooth and interactive user experience, while the backend ensured secure data management and real-time updates. Features such as booking calendars, payment tracking, and user roles were implemented to support different administrative levels.",
    paragraphThree:
      "The design prioritized clarity and accessibility—staff could easily navigate between reservations, room details, and financial reports without friction. Data visualization tools provided actionable insights into occupancy rates and performance metrics.",
    paragraphFour:
      "Close collaboration with Christopher Davis allowed for continuous feedback, ensuring that every feature met the real-world needs of hotel operations. Agile sprints enabled incremental improvements throughout the project lifecycle.",
    paragraphFive:
      "With a total budget of $1,896, the system was designed to deliver both reliability and scalability, making it suitable for future expansion such as API integration and mobile app connectivity.",
    paragraphSix:
      "The final product delivered a complete, production-ready web application combining a robust backend with an intuitive frontend interface—simplifying hotel management and improving operational efficiency.",
  },
  {
    id: 3,
    title: "Mobile App (Health Management)",
    subtitle:
      "Creating seamless and intelligent health management experiences.",
    describe:
      "A full-stack health management system designed for patient coordination, and health tracking combining functionality with a clean, modern UI.",
    clientName: "Christopher Davis",
    date: "2025-05-24",
    link: "",
    dateLabel: "24 May 2025",
    service: "Full Stack mobile application",
    budget: 1500,
    currency: "USD",
    images: [appTwo, appOne, appThree],
    paragraphOne:
      "This project focused on building a full-stack health management system for Christopher Davis that streamlines appointment booking, patient management, medical records, and billing within a single unified platform.",
    paragraphTwo:
      "The frontend was developed to offer a smooth and interactive user experience, while the backend ensured secure data management and real-time updates. Features such as authentication, in-app messaging, add-to-cart for services, and user profile management were implemented to support both patients and medical staff.",
    paragraphThree:
      "The design prioritized clarity and accessibility—users could easily navigate between appointments, health records, prescriptions, and billing information without friction. Data visualization tools provided actionable insights into patient visits and treatment outcomes.",
    paragraphFour:
      "Close collaboration with Christopher Davis allowed for continuous feedback, ensuring that every feature met the real-world needs of healthcare operations. Agile sprints enabled incremental improvements throughout the project lifecycle.",
    paragraphFive:
      "With a total budget of $1,896, the system was designed to deliver both reliability and scalability, making it suitable for future expansion such as API integration and mobile app connectivity.",
    paragraphSix:
      "The final product delivered a complete, production-ready web application combining a robust backend with an intuitive frontend interface—simplifying health management and improving operational efficiency.",
  },
];
