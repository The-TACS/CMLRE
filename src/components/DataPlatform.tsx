import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Database, 
  Brain, 
  Eye, 
  Shield, 
  Zap, 
  Network,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import dataPlatformImage from "@/assets/data-platform.jpg";

const DataPlatform = () => {
  const features = [
    {
      icon: Database,
      title: "Unified Data Integration",
      description: "Seamlessly integrate heterogeneous datasets from oceanography, taxonomy, and molecular biology into a single platform."
    },
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms for pattern recognition, species identification, and predictive modeling."
    },
    {
      icon: Eye,
      title: "Interactive Visualization",
      description: "Real-time data visualization tools for oceanographic trends, biodiversity patterns, and ecosystem health."
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with role-based access control and compliance with international data standards."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "High-performance computing infrastructure for real-time data processing and analysis."
    },
    {
      icon: Network,
      title: "API Integration",
      description: "RESTful APIs for seamless integration with external systems and collaborative research platforms."
    }
  ];

  const capabilities = [
    "Automated data ingestion and standardization",
    "Cross-disciplinary correlation analysis",
    "Otolith shape and morphometrics visualization",
    "Taxonomic classification and species identification",
    "Environmental DNA data storage and retrieval",
    "Interactive dashboard for real-time monitoring",
    "Advanced search and filtering capabilities",
    "Export tools for research publications"
  ];

  return (
    <section id="platform" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Intelligent Marine
              <span className="block bg-gradient-ocean bg-clip-text text-transparent">
                Data Platform
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our AI-enabled digital platform revolutionizes marine research by integrating 
              complex datasets into a unified system that empowers scientists with 
              unprecedented insights into ocean ecosystems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{capability}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-ocean hover:shadow-ocean transition-all duration-300 transform hover:scale-105"
              >
                Access Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="hover:bg-primary hover:text-white transition-all duration-300"
              >
                Request Demo
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-ocean">
              <img 
                src={dataPlatformImage} 
                alt="Data Platform Interface" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Platform Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-card hover:-translate-y-1 transition-all duration-300 bg-background border-border/50 hover:border-primary/30"
                >
                  <CardHeader className="pb-4">
                    <div className="mb-3 p-2 bg-gradient-ocean rounded-lg w-fit group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataPlatform;