// Single source of truth for site content.
// Rendered into the page (src/Home.tsx) and into llms.txt + JSON-LD at build time (scripts/prerender.mjs).

export type Item = {
  title: string;
  url?: string;
  description?: string;
  children?: Item[];
};

export type Section = {
  id: string;
  title: string;
  /** Organization, shown only in llms.txt (e.g. "Product Work (Decagon)"). */
  org?: string;
  subtitle?: string;
  items: Item[];
};

/** `subtle` links look like plain text until hovered. */
export type Paragraph = Array<string | { text: string; url: string; subtle?: boolean }>;

export const site = {
  url: "https://davidhou17.github.io/",
  name: "David Hou",
  title: "David Hou",
  tagline: "Product builder and operator working at the intersection of education and AI.",
  /** Third-person one-liner for structured data and social previews. */
  summary: "Builds AI products that help people learn. Writes and speaks about knowledge for AI agents.",
  description:
    "David Hou builds AI products that help people learn, at Decagon. Writes and speaks about knowledge for AI agents. Previously AI docs at MongoDB.",
  employer: { name: "Decagon", url: "https://decagon.ai" },
  location: "New York City",
  email: "dhou.david@gmail.com",
  image: "https://davidhou17.github.io/og.png",
  alumniOf: ["Yale University"],
  formerEmployers: ["MongoDB", "New Relic"],
  knowsAbout: [
    "Product management",
    "AI products",
    "Knowledge management",
    "AI agents",
    "Learning and education technology",
    "Developer documentation",
    "Model Context Protocol (MCP)",
    "Vector search",
    "Retrieval-augmented generation (RAG)",
    "Prompt engineering",
  ],
  links: [
    { label: "GitHub", url: "https://github.com/davidhou17" },
    { label: "LinkedIn", url: "https://linkedin.com/in/d-hou" },
    { label: "Email", url: "mailto:dhou.david@gmail.com" },
  ],
};

export const about: Paragraph[] = [
  [
    "I'm a product builder and operator working at the intersection of education and AI. I believe AI will change the way we learn, and I'm passionate about building the best interface for that shift.",
  ],
  [
    "I'm currently at ",
    { text: "Decagon", url: "https://decagon.ai" },
    ", building AI that helps our customers learn the platform and our internal teams work more effectively. On the customer side, I build interactive learning products, deploy tools and automations that automate content and curricula, and lead onsites with our biggest customers so I know what to build next. Internally, I'm on the team building Arc, our AI workspace and company brain, which helps everyone at Decagon ramp faster and be more productive, from learning the platform to building agents and running deployments.",
  ],
  [
    "Previously, I was at MongoDB, where I led documentation for our AI products (Voyage AI, Vector Search, MongoDB MCP Server) and served as my team's AI technologist, architecting the team's prompt library (before ",
    { text: "skills", url: "https://claude.com/skills", subtle: true },
    " existed). Before that, I did technical and UX writing at New Relic. In college, I was Co-Editor-in-Chief of the Yale Record, America's oldest humor magazine.",
  ],
  [
    "I currently live in NYC. Outside of work, I like to run, listen to podcasts, and think about food, and often all at once. Lately, I've been vibe coding, bird watching, and reminiscing about when I used to play the ",
    { text: "piano", url: "https://www.youtube.com/watch?v=IHRoIfBhORU" },
    " more often.",
  ],
];

export const sections: Section[] = [
  {
    id: "product-work",
    title: "Product Work",
    org: "Decagon",
    items: [
      {
        title: "Arc",
        description:
          "Internal AI workspace and productivity platform for every employee. I work across Arc in Slack, knowledge, and search & retrieval.",
      },
      {
        title: "Compass",
        description: "Agentic LMS/LXP that ramps every internal team onto Decagon.",
      },
      {
        title: "Decagon University",
        description: "Customer learning hub, from traditional e-learning to AI-led applied learning.",
        children: [
          {
            title: "AI Tutor",
            description: "Voice agent that walks customers through the platform live through a VM and computer use.",
          },
          {
            title: "Self-healing content",
            description: "Automations that update enablement content and curricula as the product ships.",
          },
        ],
      },
      {
        title: "Applied AI",
        children: [
          {
            title: "Claude Tag",
            description: "Deployed Claude Tag across Slack in collaboration with Anthropic.",
          },
          {
            title: "Devin Bots",
            description: "Internal agents built on Devin that automate team workflows.",
            children: [
              {
                title: "docs-bot",
                description:
                  "Gathers context, researches, and generates internal and external documentation. 95% of product docs updates are now automated, and 10+ teams have adopted it for maintaining internal knowledge.",
              },
              {
                title: "enablement-bot",
                description: "Helps deployment teams build tailored curricula and learning strategies for their customers.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "personal-projects",
    title: "Personal Projects",
    items: [
      {
        title: "Prompt Saver MCP Server",
        url: "https://github.com/davidhou17/prompt-saver-mcp",
        description:
          "Saves successful LLM conversation threads as reusable prompts your agent can pull up for future tasks, with your agent writing and maintaining them for you. Basically Agent Skills, built before Anthropic standardized it :)",
      },
      {
        title: "Local Docs Evals",
        url: "https://github.com/davidhou17/local-docs-eval",
        description: "A fully local evaluation suite for documentation repositories.",
      },
      {
        title: "MongoDB Education MCP Server",
        url: "https://github.com/mongodb/chatbot/tree/prompt_maxxing/packages/mcp",
        description: "Finalist in MongoDB's company hackathon (top 8% of submissions).",
      },
      {
        title: "LangGraph MongoDB Movie Agent",
        url: "https://github.com/davidhou17/langgraph-mongodb-movie-agent",
        description: "A conversational agent using MongoDB for agentic RAG and short- and long-term memory.",
      },
    ],
  },
  {
    id: "devex-content",
    title: "DevEx Content",
    subtitle: "Mostly from my time at MongoDB.",
    items: [
      {
        title: "Jupyter Notebooks for AI Developers",
        url: "https://github.com/mongodb/docs-notebooks",
        description: "Collection of Jupyter notebooks for AI development.",
      },
      {
        title: "Natural Language to MongoDB",
        url: "https://www.mongodb.com/docs/manual/natural-language-to-mongodb/",
        description: "Guide to using LLMs to convert natural language into MongoDB queries.",
      },
      {
        title: "Build AI Agents with MongoDB",
        url: "https://www.mongodb.com/docs/atlas/atlas-vector-search/ai-agents/",
        description: "Foundational guide to building AI agents with MongoDB.",
      },
      {
        title: "MongoDB MCP Server",
        url: "https://www.mongodb.com/docs/mcp-server/",
        description: "Docs for the MongoDB MCP Server.",
      },
      {
        title: "Voyage AI by MongoDB",
        url: "https://www.mongodb.com/docs/voyageai",
        description: "Docs for Voyage AI's embedding and reranking models.",
      },
      {
        title: "MongoDB Vector Search",
        url: "https://www.mongodb.com/docs/atlas/atlas-vector-search/vector-search-overview/",
        description: "Docs for MongoDB Vector Search.",
      },
      {
        title: "AI Framework and Platform Integrations",
        url: "https://www.mongodb.com/docs/atlas/ai-integrations/",
        description: "Docs for MongoDB's AI integrations.",
      },
    ],
  },
  {
    id: "thought-leadership",
    title: "Thought Leadership",
    subtitle: "On agent and company knowledge.",
    items: [
      {
        title: "State of Knowledge Report 2026",
        url: "https://www.mintlify.com/state-of-knowledge",
        description:
          "Featured alongside leaders from Anthropic and HubSpot.",
      },
      {
        title: "Decagon \u00d7 Mintlify case study",
        url: "https://www.mintlify.com/customers/decagon",
        description:
          "How Decagon automates knowledge and context management with Mintlify.",
      },
    ],
  },
  {
    id: "speaking",
    title: "Speaking",
    items: [
      {
        title: "AI the Docs 2025",
        url: "https://pronovix.com/event/ai-the-docs-2025/david-hou",
        description: "“Rethinking Docs as Code in the Age of Vibe Coding”",
      },
    ],
  },
];
