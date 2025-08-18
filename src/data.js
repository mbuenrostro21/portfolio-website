import { 
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiPostgresql,
    SiExpress,
    SiTypescript,
    SiTailwindcss,
    SiSvelte,
} from "react-icons/si";


export const projectsData = [
    {
      id: 1,
      name: "Svault",
      screenshot: "/images/svault.jpg",
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
      id: 2,
      name: "Debtless",
      screenshot: "/images/debtless.jpg",
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
      id: 3,
      name: "Weather Dashboard",
      screenshot: "/images/movie-selector.jpg",
      techStack: [
        {
          name: "React",
          icon: SiReact,
          color: "#61DAFB"
        },
        {
          name: "TypeScript",
          icon: SiTypescript,
          color: "#3178C6"
        },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          color: "#06B6D4"
        },
        {
          name: "OpenWeather API",
          icon: TiWeatherCloudy,
          color: "#FF8C00"
        }
      ],
      keyFeatures: [
        "Current weather conditions display",
        "5-day weather forecast",
        "Location-based weather search",
        "Interactive weather maps",
        "Weather alerts and warnings",
        "Favorite locations management",
        "Temperature unit conversion (°C/°F)"
      ],
      demoUrl: "https://demo-weather.example.com",
      githubUrl: "https://github.com/yourusername/weather-dashboard"
    },
    {
      id: 4,
      name: "Social Media Dashboard",
      screenshot: "/images/social-dashboard-screenshot.png",
      techStack: [
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "#000000"
        },
        {
          name: "Python",
          icon: SiPython,
          color: "#3776AB"
        },
        {
          name: "FastAPI",
          icon: SiFastapi,
          color: "#009688"
        },
        {
          name: "Redis",
          icon: SiRedis,
          color: "#DC382D"
        }
      ],
      keyFeatures: [
        "Multi-platform social media analytics",
        "Post scheduling and automation",
        "Engagement metrics tracking",
        "Audience insights and demographics",
        "Content performance analysis",
        "Custom reporting and exports",
        "Team collaboration tools"
      ],
      demoUrl: "https://demo-social-dashboard.example.com",
      githubUrl: "https://github.com/yourusername/social-media-dashboard"
    },
    {
      id: 5,
      name: "Recipe Finder",
      screenshot: "/images/recipe-finder-screenshot.png",
      techStack: [
        {
          name: "React Native",
          icon: SiReact,
          color: "#61DAFB"
        },
        {
          name: "Firebase",
          icon: SiFirebase,
          color: "#FFCA28"
        },
        {
          name: "Spoonacular API",
          icon: TiWeatherCloudy, // Using as placeholder - you might want a food/API icon
          color: "#4CAF50"
        },
        {
          name: "Redux",
          icon: SiRedux,
          color: "#764ABC"
        }
      ],
      keyFeatures: [
        "Search recipes by ingredients",
        "Dietary restriction filters",
        "Save favorite recipes",
        "Shopping list generation",
        "Nutritional information display",
        "Step-by-step cooking instructions",
        "Recipe sharing with friends"
      ],
      demoUrl: "https://demo-recipe-finder.example.com",
      githubUrl: "https://github.com/yourusername/recipe-finder"
    },
    {
      id: 6,
      name: "Expense Tracker",
      screenshot: "/images/expense-tracker-screenshot.png",
      techStack: [
        {
          name: "Angular",
          icon: SiAngular,
          color: "#DD0031"
        },
        {
          name: "Spring Boot",
          icon: SiSpring,
          color: "#6DB33F"
        },
        {
          name: "MySQL",
          icon: SiMysql,
          color: "#4479A1"
        },
        {
          name: "Chart.js",
          icon: SiChartdotjs,
          color: "#FF6384"
        }
      ],
      keyFeatures: [
        "Track income and expenses",
        "Category-based expense organization",
        "Budget planning and monitoring",
        "Visual charts and reports",
        "Monthly/yearly financial summaries",
        "Receipt photo uploads",
        "Export data to CSV/PDF"
      ],
      demoUrl: "https://demo-expense-tracker.example.com",
      githubUrl: "https://github.com/yourusername/expense-tracker"
    }
  ];
  