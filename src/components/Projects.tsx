import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Book, Code, FileText, Mic, Rocket, ChevronDown, ChevronUp } from "lucide-react";

type ProjectLink = {
  title: string;
  url?: string;
  description: string;
};

type ProjectGroup = {
  title?: string;
  links: ProjectLink[];
};

type ProjectCategory = {
  title: string;
  icon: JSX.Element;
  groups: ProjectGroup[];
};

const Projects = () => {
  // State to track which cards are expanded
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  // Toggle function for expanding/collapsing a card
  const toggleCard = (index: number) => {
    setExpandedCards(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Check if a card is expanded
  const isCardExpanded = (index: number) => expandedCards.includes(index);

  const projectCategories: ProjectCategory[] = [
    {
      title: "Personal Projects",
      icon: <Code className="w-5 h-5 text-foreground/80" />,
      groups: [
        {
          links: [
            {
              title: "Prompt Saver MCP Server",
              url: "https://github.com/davidhou17/prompt-saver-mcp",
              description: "Saves successful LLM conversation threads as reusable prompts for future tasks."
            },
            {
              title: "Local Docs Evals",
              url: "https://github.com/davidhou17/local-docs-eval",
              description: "A fully local evaluation suite for documentation repositories."
            },
            {
              title: "MongoDB Education MCP Server",
              url: "https://github.com/mongodb/chatbot/tree/prompt_maxxing/packages/mcp",
              description: "Finalist in MongoDB's company hackathon (top 8% of submissions)."
            },
            {
              title: "LangGraph MongoDB Movie Agent",
              url: "https://github.com/davidhou17/langgraph-mongodb-movie-agent",
              description: "A conversational agent using MongoDB for agentic RAG and short- and long-term memory."
            },
          ]
        }
      ]
    },
    {
      title: "0 to 1 Product Initiatives",
      icon: <Rocket className="w-5 h-5 text-foreground/80" />,
      groups: [
        {
          title: "Arc",
          links: [
            {
              title: "Arc in Slack",
              description: "Puts the company brain where every team already works. Ask questions across company knowledge, take action in your connected tools, and keep sensitive results private."
            },
            {
              title: "Arc Search & Retrieval",
              description: "Makes institutional knowledge findable across teams, so people get grounded answers instead of digging through Slack, docs, and Notion."
            },
            {
              title: "Compass",
              description: "An agentic LMS that ramps all of Decagon's internal teams. In development."
            },
          ]
        },
        {
          title: "Decagon University",
          links: [
            {
              title: "AI Tutor",
              description: "A multimodal voice agent that runs product education live, using the browser to walk customers through the platform and answer questions in real time."
            },
            {
              title: "Labs",
              description: "Hands-on labs where customers complete real workflows with Duet inside the product, instead of practicing in a sandbox."
            },
            {
              title: "Curricula",
              description: "Decagon's flagship customer learning program, from Fundamentals to Deep Dives, built to make customer teams confident building on the platform."
            },
          ]
        },
        {
          title: "Internal AI tools",
          links: [
            {
              title: "Claude Tag",
              description: "Brought Claude into the customer team's daily workflow in partnership with Anthropic: instant answers, bug triage, and request intake across team channels."
            },
            {
              title: "Self-healing docs agent",
              description: "Docs that keep pace with the product. 95% of doc updates are now automated, 200% more PRs are merged per month, and 10+ teams across the company have adopted it."
            },
            {
              title: "Self-healing slides",
              description: "A single source of truth for enablement decks that stays accurate as the product ships, so field teams always present current material."
            },
          ]
        }
      ]
    },
    {
      title: "Speaking",
      icon: <Mic className="w-5 h-5 text-foreground/80" />,
      groups: [
        {
          links: [
            {
              title: "AI the Docs 2025",
              url: "https://pronovix.com/event/ai-the-docs-2025/david-hou",
              description: "\"Rethinking Docs as Code in the Age of Vibe Coding\""
            }
          ]
        }
      ]
    },
    {
      title: "DevEx Content",
      icon: <Book className="w-5 h-5 text-foreground/80" />,
      groups: [
        {
          links: [
            {
              title: "Jupyter Notebooks for AI Developers",
              url: "https://github.com/mongodb/docs-notebooks",
              description: "Collection of Jupyter notebooks for AI development."
            },
            {
              title: "Natural Language to MongoDB",
              url: "https://www.mongodb.com/docs/manual/natural-language-to-mongodb/",
              description: "Guide to using LLMs to convert natural language into MongoDB queries."
            },
            {
              title: "Build AI Agents with MongoDB",
              url: "https://www.mongodb.com/docs/atlas/atlas-vector-search/ai-agents/",
              description: "Foundational guide to building AI agents with MongoDB."
            },
            {
              title: "MongoDB MCP Server",
              url: "https://www.mongodb.com/docs/mcp-server/",
              description: "Docs for the MongoDB MCP Server."
            },
            {
              title: "Voyage AI by MongoDB",
              url: "https://www.mongodb.com/docs/voyageai",
              description: "Docs for Voyage AI's embedding and reranking models."
            },
            {
              title: "MongoDB Vector Search",
              url: "https://www.mongodb.com/docs/atlas/atlas-vector-search/vector-search-overview/",
              description: "Docs for MongoDB Vector Search."
            },
            {
              title: "AI Framework and Platform Integrations",
              url: "https://www.mongodb.com/docs/atlas/ai-integrations/",
              description: "Docs for MongoDB's AI integrations."
            }
          ]
        }
      ]
    }
  ];

  return (
    <section id="projects" className="section-spacing">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-medium mb-4 text-center">
          Work & Recent Projects
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Products, tools, and ideas I've worked on across AI and education.
        </p>

        <div className="flex flex-col gap-6">
          {projectCategories.map((category, index) => (
            <Card key={index} className="group transition-all duration-300 border-0 shadow-md overflow-hidden">
              <CardHeader
                className="bg-secondary/20 py-3 px-5 cursor-pointer"
                onClick={() => toggleCard(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <CardTitle className="text-lg md:text-xl">
                      {category.title}
                    </CardTitle>
                  </div>
                  <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
                    {isCardExpanded(index) ?
                      <ChevronUp className="h-5 w-5" /> :
                      <ChevronDown className="h-5 w-5" />
                    }
                  </Button>
                </div>
              </CardHeader>

              {isCardExpanded(index) && (
                <CardContent className="py-3 px-5 space-y-5">
                  {category.groups.map((group, groupIndex) => (
                    <div key={groupIndex}>
                      {group.title && (
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/70 mb-2">
                          {group.title}
                        </h3>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                        {group.links.map((link, linkIndex) => (
                          <div key={linkIndex} className="flex items-start">
                            <div className="mt-1 mr-2 text-teal">
                              <FileText size={14} />
                            </div>
                            <div>
                              {link.url ? (
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm font-medium hover:text-teal-dark transition-colors flex items-center gap-1"
                                >
                                  {link.title}
                                  <ExternalLink size={12} className="opacity-70" />
                                </a>
                              ) : (
                                <span className="text-sm font-medium">{link.title}</span>
                              )}
                              <p className="text-xs text-muted-foreground">{link.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
