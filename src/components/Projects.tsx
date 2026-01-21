import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Book, Code, FileText, Mic, ScrollText, BookOpen, ChevronDown, ChevronUp } from "lucide-react";

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

  const projectCategories = [
    {
      title: "Foundational Content",
      description: "Product documentation and foundational content built from 0 to 1",
      icon: <Book className="w-5 h-5 text-foreground/80" />,
      links: [
        {
          title: "Voyage AI by MongoDB",
          url: "https://www.mongodb.com/docs/voyageai",
          description: "Docs for Voyage AI's state-of-the-art embedding and reranking models"
        },
        {
          title: "MongoDB MCP Server",
          url: "https://www.mongodb.com/docs/mcp-server/",
          description: "Docs for the MongoDB MCP Server"
        },
        {
          title: "AI Framework and Platform Integrations",
          url: "https://www.mongodb.com/docs/atlas/ai-integrations/",
          description: "Doc for MongoDB's AI integrations"
        },
        {
          title: "MongoDB Vector Search",
          url: "https://www.mongodb.com/docs/atlas/atlas-vector-search/vector-search-overview/",
          description: "Docs for MongoDB Vector Search"
        },
        {
          title: "Build AI Agents with MongoDB",
          url: "https://www.mongodb.com/docs/atlas/atlas-vector-search/ai-agents/",
          description: "Foundational page for implementing AI agents using MongoDB"
        },
        {
          title: "Natural Language to MongoDB",
          url: "https://www.mongodb.com/docs/manual/natural-language-to-mongodb/",
          description: "Guide for using LLMs to convert natural language to MongoDB queries"
        }
      ]
    },
    {
      title: "Tutorials",
      description: "Step-by-step guides and tutorials for AI developers",
      icon: <ScrollText className="w-5 h-5 text-foreground/80" />,
      links: [
        {
          title: "Semantic Search",
          url: "https://www.mongodb.com/docs/voyageai/tutorials/semantic-search",
          description: "Guide to implementing semantic search"
        },
        {
          title: "Retrieval-Augmented Generation (RAG)",
          url: "https://www.mongodb.com/docs/voyageai/tutorials/rag",
          description: "Guide to building RAG applications"
        },
        {
          title: "Get Started with the MongoDB MCP Server",
          url: "https://www.mongodb.com/docs/mcp-server/get-started/",
          description: "Quickstart tutorial for the MongoDB MCP Server"
        },
        {
          title: "Create Embeddings",
          url: "https://www.mongodb.com/docs/atlas/atlas-vector-search/crud-embeddings/create-embeddings-manual/",
          description: "Guide to creating embeddings for vector search"
        },
        {
          title: "LangChain Integration",
          url: "https://www.mongodb.com/docs/atlas/ai-integrations/langchain/",
          description: "Integration guide for LangChain"
        },
        {
          title: "LangGraph Integration",
          url: "https://www.mongodb.com/docs/atlas/ai-integrations/langgraph/",
          description: "Integration guide for LangGraph"
        },
      ]
    },
    {
      title: "Code",
      description: "Open source coding projects and tools",
      icon: <Code className="w-5 h-5 text-foreground/80" />, 
      links: [
        {
          title: "Prompt Saver MCP Server",
          url: "https://github.com/davidhou17/prompt-saver-mcp",
          description: "MCP server that saves successful LLM conversation threads as prompts that can be used for future tasks."
        },
        {
          title: "OpenAI to Azure OpenAI CLI Tool",
          url: "https://www.npmjs.com/package/openai-to-azure-openai-cli",
          description: "CLI tool to convert OpenAI code to Azure OpenAI compatible code (curl, Python, JS/TS)."
        },
        {
          title: "Jupyter Notebooks for AI Developers",
          url: "https://github.com/mongodb/docs-notebooks",
          description: "Collection of Jupyter notebooks for AI development"
        },
        {
          title: "MongoDB Education MCP Server",
          url: "https://github.com/mongodb/chatbot/tree/prompt_maxxing/packages/mcp",
          description: "Finalist for company hackathon (top 8% of submissions)"
        },
        {
          title: "LangGraph MongoDB Movie Agent",
          url: "https://github.com/davidhou17/langgraph-mongodb-movie-agent",
          description: "Conversational AI agent using LangGraph that uses MongoDB for agentic RAG and memory (short and long-term)"
        },
        {
          title: "Frameworkless MongoDB AI Agent",
          url: "https://github.com/davidhou17/mongodb-ai-agent",
          description: "Implementation of an AI agent using MongoDB without the abstractions"
        },
      ]
    },
    {
      title: "Public Speaking",
      description: "Conference talks and presentations",
      icon: <Mic className="w-5 h-5 text-foreground/80" />,
      links: [
        {
          title: "AI the Docs 2025",
          url: "https://pronovix.com/event/ai-the-docs-2025/david-hou",
          description: "\"Rethinking Docs as Code in the Age of Vibe Coding\""
        }
      ]
    },
    {
      title: "Narrative Storytelling",
      description: "Portfolio work and creative storytelling projects",
      icon: <BookOpen className="w-5 h-5 text-foreground/80" />,
      links: [
        {
          title: "Tsai CITY Portfolio",
          url: "https://city.yale.edu/people/david-hou",
          description: "Center for Innovative Thinking at Yale"
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
                <CardDescription className="text-sm mt-1">
                  {category.description}
                </CardDescription>
              </CardHeader>
              
              {isCardExpanded(index) && (
                <CardContent className="py-3 px-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                    {category.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="flex items-start">
                        <div className="mt-1 mr-2 text-teal">
                          <FileText size={14} />
                        </div>
                        <div>
                          <a 
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium hover:text-teal-dark transition-colors flex items-center gap-1"
                          >
                            {link.title}
                            <ExternalLink size={12} className="opacity-70" />
                          </a>
                          <p className="text-xs text-muted-foreground">{link.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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