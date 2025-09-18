import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Brain, Database, FileSearch, MessageSquare, Search, Send } from "lucide-react";
import { useState } from "react";

const AIAssistant = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "assistant",
      content: "Hello! I'm CMLRE's AI Research Assistant. I can help you find information about our marine research data, oceanographic studies, species identification, and more. What would you like to know?"
    }
  ]);

  const knowledgeAreas = [
    {
      icon: Database,
      title: "Oceanographic Data",
      description: "Temperature, salinity, pH levels, dissolved oxygen across Indian EEZ",
      queries: ["Show me temperature trends", "Latest pH measurements", "Oxygen depletion zones"]
    },
    {
      icon: FileSearch,
      title: "Species Information",
      description: "Fish taxonomy, biodiversity assessments, eDNA analysis results",
      queries: ["Identify this species", "Biodiversity hotspots", "Endangered species status"]
    },
    {
      icon: Brain,
      title: "AI Models & Analytics",
      description: "Random Forest predictions, species classification, environmental modeling",
      queries: ["Prediction accuracy", "Model performance", "Classification results"]
    },
    {
      icon: Search,
      title: "Research Publications",
      description: "Scientific papers, reports, methodology documentation",
      queries: ["Latest research findings", "Methodology papers", "Data collection protocols"]
    }
  ];

  const handleSendMessage = () => {
    if (!query.trim()) return;
    
    setMessages(prev => [...prev, 
      { type: "user", content: query },
      { type: "assistant", content: "I'm processing your query about marine research data. Based on our latest datasets, here's what I found..." }
    ]);
    setQuery("");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-ocean rounded-2xl shadow-glow">
                  <Bot className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                AI Research
                <span className="block bg-gradient-ocean bg-clip-text text-transparent">
                  Assistant
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get instant access to CMLRE's comprehensive marine research database. 
                Ask questions about oceanographic data, species information, AI models, and research findings.
              </p>
            </div>
          </div>
        </section>

        {/* Knowledge Areas */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">What I Can Help You With</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {knowledgeAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <Card key={index} className="hover:shadow-ocean hover:-translate-y-2 transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="mb-4 p-3 bg-gradient-ocean rounded-lg w-fit mx-auto">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{area.title}</CardTitle>
                      <CardDescription>{area.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Example queries:</p>
                        {area.queries.map((query, qIndex) => (
                          <Button
                            key={qIndex}
                            variant="outline"
                            size="sm"
                            className="w-full text-left justify-start text-xs"
                            onClick={() => setQuery(query)}
                          >
                            "{query}"
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Chat Interface */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6 max-w-4xl">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Research Chat Assistant
                </CardTitle>
                <CardDescription>
                  Ask me anything about CMLRE's marine research data and findings
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Messages */}
                <div className="h-96 overflow-y-auto mb-4 space-y-4 p-4 bg-muted/30 rounded-lg">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-3 rounded-lg ${
                        message.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-background border'
                      }`}>
                        {message.content}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask about oceanographic data, species, research findings..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} className="bg-gradient-ocean">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>

                {/* Quick Actions */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" onClick={() => setQuery("Show me latest temperature data")}>
                    Latest Temperature Data
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setQuery("Species identification results")}>
                    Species ID Results
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setQuery("SDG 14.1 monitoring status")}>
                    SDG 14.1 Status
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research Data Categories */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Available Research Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Ocean Environmental Data</CardTitle>
                  <CardDescription>Real-time monitoring across Indian EEZ</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Temperature & Salinity Profiles</li>
                    <li>• pH and Ocean Acidification</li>
                    <li>• Dissolved Oxygen Levels</li>
                    <li>• Current Patterns & Circulation</li>
                    <li>• Chlorophyll-a Concentrations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI Species Classification</CardTitle>
                  <CardDescription>Random Forest + eDNA Analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Automated Fish Identification</li>
                    <li>• Biodiversity Assessments</li>
                    <li>• eDNA Species Detection</li>
                    <li>• Taxonomic Classifications</li>
                    <li>• Conservation Status Updates</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SDG 14.1 Monitoring</CardTitle>
                  <CardDescription>Marine pollution tracking</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Plastic Pollution Index</li>
                    <li>• Chemical Contaminants</li>
                    <li>• Nutrient Pollution Levels</li>
                    <li>• Coastal Eutrophication</li>
                    <li>• Marine Debris Tracking</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIAssistant;