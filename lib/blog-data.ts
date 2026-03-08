export interface BlogSection {
  id: string;
  title: string;
  content: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  mainImage: string;
  sections: BlogSection[];
}

export const BLOGS: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Digital Transformation in 2026",
    description:
      "As we navigate through the mid-2020s, digital transformation has evolved from a buzzword to a fundamental necessity for survival. Explore how AI and automated workflows are reshaping industries.",
    mainImage: "/mechanism.jpg",
    sections: [
      {
        id: "ai-revolution",
        title: "The AI Revolution",
        content:
          "Artificial Intelligence is no longer just a tool for optimization; it's becoming the core engine of business logic. From generative AI creating marketing content to agentic workflows handling complex customer support, the boundaries are expanding daily.",
      },
      {
        id: "hyper-automation",
        title: "Hyper-automation Strategies",
        content:
          "Organizations are now moving towards hyper-automation—the practice of automating everything that can be automated. This involves a coordinated use of multiple technological tools, including AI, low-code platforms, and RPA.",
      },
      {
        id: "data-privacy",
        title: "The Data Privacy Challenge",
        content:
          "With great power comes great responsibility. As businesses collect more data to fuel their AI models, the importance of robust security and ethical data handling has never been higher.",
      },
    ],
  },
  {
    id: "2",
    title: "Building Scalable Web Applications with Modern Frameworks",
    description:
      "Learn the best practices for building robust, scalable applications that can handle millions of users using the latest web technologies.",
    mainImage: "/hero.jpg",
    sections: [
      {
        id: "architecture",
        title: "Foundational Architecture",
        content:
          "Choosing the right architecture is the first step towards scalability. We discuss micro-services versus monolithic structures in the modern era.",
      },
      {
        id: "frontend-optimization",
        title: "Frontend Performance",
        content:
          "Every millisecond counts. Discover how server components and edge rendering are changing the way we think about user experience.",
      },
    ],
  },
  {
    id: "3",
    title: "Sustainable Business Practices in the Tech World",
    description:
      "How tech companies are leading the charge in environmental sustainability through green coding and energy-efficient data centers.",
    mainImage: "/join.jpg",
    sections: [
      {
        id: "green-energy",
        title: "Renewable Energy in Data Centers",
        content:
          "Major tech hubs are transitioning to 100% renewable energy sources to power the internet's backbone.",
      },
    ],
  },
  {
    id: "4",
    title: "The Rise of Remote Work Culture",
    description:
      "A deep dive into how remote work has permanently changed our perspective on productivity and work-life balance.",
    mainImage: "/competencies.png",
    sections: [
      {
        id: "productivity",
        title: "New Productivity Metrics",
        content:
          "Moving away from 'time at desk' to 'output-based' evaluation has empowered employees worldwide.",
      },
    ],
  },
];
