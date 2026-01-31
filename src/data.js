import { 
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiPostgresql,
    SiExpress,
    SiTypescript,
    SiTailwindcss,
    SiSvelte,
    SiJavascript,
    SiNextdotjs
} from "react-icons/si";


export const projectsData = [
    {
        id: 1,
        name: "Delet",
        screenshot: "/delet.png",
        summary: "Delet is the smart access and automation platform that delivers accelerated leasing, security, and greater operational efficiency.",
        techStack: [
          {
            name: "React",
            icon: SiReact,
            color: "#4FC08D"
          },
          {
            name: "Node.js",
            icon: SiNodedotjs,
            color: "#339933"
          },
          {
            name: "MongoDb",
            icon: SiMongodb,
            color: "#FF8C00"
          },
          {
            name: "JavaScript",
            icon: SiJavascript,
            color: "#3178C6"
          },
          {
            name: "Express.js",
            icon: SiExpress,
            color: "#000000"
          },
          {
            name: "Tailwind CSS",
            icon: SiTailwindcss,
            color: "#009688"
          }
        ],
        keyFeatures: [
          "Centralized Analytics Dashboard",
          "Integrated Lead Management",
          "Intuitive Property Onboarding",
          "Secure OTP Access Control",
          "Interactive Showings Calendar",
        ],
        demoUrl: "https://app.delet.com",
        githubUrl: "https://github.com/yourusername/ecommerce-platform"
      },
    {
      id: 2,
      name: "Svault",
      screenshot: "/svault.jpg",
      summary: "Svault is an authentication and authorization library for developers who use SvelteKit. This library makes it extremely easy for the developer to implement OAuth 2.0, Authorization, Cookies, and Sessions in your Login and Signup forms.",
      techStack: [
        {
          name: "Svelte",
          icon: SiSvelte,
          color: "#61DAFB"
        },
        {
          name: "Node.js",
          icon: SiNodedotjs,
          color: "#339933"
        },
        {
          name: "PostgreSql",
          icon: SiPostgresql,
          color: "#47A248"
        },
        {
          name: "TypeScript",
          icon: SiTypescript,
          color: "#635BFF"
        }
      ],
      keyFeatures: [
        "OAuth 2.0",
        "Native Auth",
        "Database Plugins",
        "Cookies and Sessions",
        "Developer Library",
      ],
      demoUrl: "https://demo-ecommerce.example.com",
      githubUrl: "https://github.com/yourusername/ecommerce-platform"
    },
    {
      id: 3,
      name: "Debtless",
      screenshot: "/debtless.jpg",
      summary: "This application focuses on making personal finance more approachable. By visualizing savings goals in a simple and engaging way, it empowers users to budget effectively and stay motivated.",
      techStack: [
        {
          name: "React",
          icon: SiReact,
          color: "#4FC08D"
        },
        {
          name: "Express.js",
          icon: SiExpress,
          color: "#000000"
        },
        {
          name: "PostgreSQL",
          icon: SiPostgresql,
          color: "#336791"
        },
        {
          name: "Node.js",
          icon: SiNodedotjs,
          color: "#010101"
        }
      ],
      keyFeatures: [
        "Create, edit, and delete new expenses",
        "Dashboard of all your monthly spendings",
        "Project categorization and filtering",
        "Progress tracking and analytics of your savings",
      ],
      demoUrl: "https://demo-taskmanager.example.com",
      githubUrl: "https://github.com/yourusername/task-manager"
    },
    {
      id: 4,
      name: "Movie Selector",
      screenshot: "/movie-selector.jpg",
      summary: "As a movie enthusiast, I built this movie recommendation app to make film discovery more fun and effortless. By selecting a genre and release year, users receive curated suggestions that match their interests, taking the hassle out of movie night.",
      techStack: [
        {
          name: "React",
          icon: SiReact,
          color: "#61DAFB"
        },
        {
          name: "JavaScript",
          icon: SiJavascript,
          color: "#3178C6"
        },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          color: "#06B6D4"
        },
        {
          name: "MongoDb",
          icon: SiMongodb,
          color: "#FF8C00"
        }
      ],
      keyFeatures: [
        "Filter by movie genre",
        "Save movies to a watchlist",
      ],
      demoUrl: "https://demo-weather.example.com",
      githubUrl: "https://github.com/yourusername/weather-dashboard"
    },
    {
      id: 5,
      name: "Domolo Labs",
      screenshot: "/domolo-labs.png",
      summary: "This project is a website designed to highlight Domo’s musical talent and creative vision. With a clean layout and intuitive design, it provides visitors with an easy way to explore his artistry and connect with his work",
      techStack: [
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "#000000"
        },
        {
          name: "React",
          icon: SiReact,
          color: "#3776AB"
        },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          color: "#009688"
        },
        {
          name: "JavaScript",
          icon: SiJavascript,
          color: "#DC382D"
        }
      ],
      keyFeatures: [
        "Listen to Domolos lates music drops",
        "View upcoming projects",
        "Inquire about collabs or partnerships",
      ],
      demoUrl: "https://demo-social-dashboard.example.com",
      githubUrl: "https://github.com/yourusername/social-media-dashboard"
    },
  ];
  