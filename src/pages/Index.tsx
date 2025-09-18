import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Globe, Users, BarChart3, Microscope } from "lucide-react";

const Index = () => {
  const highlights = [
    {
      icon: Globe,
      title: "Ocean Monitoring",
      description: "Real-time environmental data across India's marine territories",
      link: "/aqualink"
    },
    {
      icon: BarChart3,
      title: "AI Analytics Platform",
      description: "Advanced machine learning for marine data integration",
      link: "/platform"
    },
    {
      icon: Microscope,
      title: "Species Research",
      description: "Comprehensive biodiversity and taxonomy studies",
      link: "https://www.mbari.org/news/mbaris-advanced-underwater-technology-reveals-a-new-species-of-deep-sea-snailfish/"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Leading marine scientists and researchers",
      link: "/about"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        {/* Quick Access Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Explore Our
                <span className="block bg-gradient-ocean bg-clip-text text-transparent">
                  Research Domains
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover comprehensive marine research initiatives and access our advanced data platform
                for sustainable ocean management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <Card key={index} className="group hover:shadow-ocean hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                    <CardHeader className="text-center">
                      <div className="mb-4 p-3 bg-gradient-ocean rounded-lg w-fit mx-auto group-hover:shadow-glow transition-all duration-300">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                        {highlight.title}
                      </CardTitle>
                      <CardDescription>{highlight.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button 
                        variant="ghost" 
                        className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                        onClick={() => window.location.href = highlight.link}
                      >
                        Explore
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-ocean hover:shadow-ocean transition-all duration-300"
                  onClick={() => window.location.href = '/research'}
                >
                  View All Research
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="hover:bg-primary hover:text-white transition-all duration-300"
                  onClick={() => window.location.href = '/platform'}
                >
                  Access Platform
                </Button>
              </div>
            </div>
          </div>
        </section>

        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
