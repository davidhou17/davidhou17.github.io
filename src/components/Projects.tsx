import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Book, Code, FileText, Mic, Rocket, ChevronDown, ChevronUp } from "lucide-react";

type ProjectLink = {
  title: string;
  url?: string;
  description: string;
  children?: ProjectLink[];
};

type ProjectGroup = {
  title?: string;
  bullets?: boolean;
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
      title: "Product Work",
      icon: <Rocket className="w-5 h-5 text-foreground/80" />,
      groups: [
        {
          bullets: true,
          links: [
            {
              title: "Arc",
              description: "Internal AI workspace and productivity platform for every employee. Product surfaces include Arc in Slack, knowledge, and search & retrieval."
            },
            {
              title: "Compass",
              description: "Agentic LMS/LXP that ramps every internal team onto Decagon. In development."
            },
            {
              title: "Decagon University",
              description: "Customer learning hub, from traditional e-learning to AI-led applied learning. Product highlights:",
              children: [
                {
                  title: "AI Tutor",
                  description: "Voice agent that walks customers through the platform live through a VM and computer use."
                },
                {
                  title: "Self-healing content",
                  description: "Automations that update enablement content and curricula as the product ships."
                }
              ]
            },
            {
              title: "Internal AI Tools",
              description: "",
              children: [
                {
                  title: "Claude Tag",
                  description: "Deployed Claude Tag across Slack in collaboration with Anthropic."
                },
                {
                  title: "Docs bot",
                  description: "Internal agent that gathers context, researches, and generates internal and external documentation. 95% of product docs updates are now automated, and 10+ teams have adopted it for maintaining internal knowledge. Powered by Devin."
                }
              ]
            }
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
        <h2 className="text-3xl md:text-4xl font-medium mb-8 text-center">
          Work & Recent Projects
        </h2>

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
                      {group.bullets ? (
                        <ul className="list-disc pl-5 space-y-2 text-sm marker:text-teal">
                          {group.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <span className="font-medium">{link.title}{link.description && ":"}</span>{" "}
                              <span className="text-muted-foreground">{link.description}</span>
                              {link.children && (
                                <ul className="list-[circle] pl-5 mt-1 space-y-1">
                                  {link.children.map((child, childIndex) => (
                                    <li key={childIndex}>
                                      <span className="font-medium">{child.title}:</span>{" "}
                                      <span className="text-muted-foreground">{child.description}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      ) : (
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
                      )}
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
