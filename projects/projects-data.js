export const PROJECTS = [
  {
    title: "Full-Stack Blog Platform",
    description:
      "A secure blog application with JWT authentication. Logged-in users can create, read, update, and delete their own posts and comments, while guests have read-only access.",
    type: "Full-Stack Web Application",
    coreStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    additionalTools: ["Express", "Prisma", "TanStack Query", "Zustand", "Vite"],
    link: "https://github.com/RGPin/top-blog-api",
    liveDemo: "https://blog-client.pinosanrg.workers.dev",
    backend: "https://top-blog-api-dgjh.onrender.com/api/ping",
  },

  {
    title: "Secure File Hosting Platform",
    description:
      "A robust, full-stack file management application enabling users to safely upload, store, and retrieve digital assets. Features secure email and password authentication with industry-standard encryption, ensuring strict data privacy and isolated access control for all user files.",
    type: "Full-Stack Web Application",
    coreStack: ["React", "JavaScript", "Node.js", "PostgreSQL", "Supabase"],
    additionalTools: ["Express", "Zustand"],
    link: "https://github.com/RGPin/top-file-uploader",
    liveDemo: "https://top-file-uploader.pinosanrg.workers.dev",
    backend: "https://top-file-uploader-6oxo.onrender.com/api/ping",
  },

  {
    title: "Members-Only Community Platform",
    description:
      "A secure, server-side rendered (SSR) web application featuring role-based access control. Guest users can browse anonymized community content, while authenticated members gain full privileges to publish, manage, and delete their own posts. Built with a robust Node.js backend and EJS templating for fast, SEO-friendly page loads and seamless data rendering.",
    type: "Full-Stack Web Application",
    coreStack: ["HTML", "CSS", "JavaScript", "Node.js", "PostgreSQL"],
    additionalTools: ["Express", "EJS"],
    link: "https://github.com/RGPin/top-members-only",
    liveDemo: "https://top-members-only-ynk9.onrender.com",
    backend: "https://top-members-only-ynk9.onrender.com/api/ping",
  },

  {
    title: "PC Component Inventory Dashboard",
    description:
      "A streamlined, full-stack inventory management system designed for tracking computer hardware. Features comprehensive CRUD (Create, Read, Update, Delete) operations, enabling efficient categorization, detailed part viewing, and real-time updates to stock levels and pricing. Built with a focus on data integrity and administrative efficiency using a robust Node.js and PostgreSQL backend.",
    type: "Full-Stack Web Application",
    coreStack: ["HTML", "CSS", "JavaScript", "Node.js", "PostgreSQL"],
    additionalTools: ["Express", "EJS"],
    link: "https://github.com/RGPin/top-inventory",
    liveDemo: "https://top-inventory.onrender.com",
    backend: "https://top-inventory.onrender.com/api/ping",
  },
  /*FROM QWEN:
  "This project was designed specifically as a streamlined internal administration dashboard. 
  My primary focus was on optimizing the CRUD operations, database relationships, and UI efficiency 
  for rapid data entry and inventory tracking, rather than over-engineering it with user roles for a 
  single-admin use case." */
];
