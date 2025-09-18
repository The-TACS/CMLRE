import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Brain, 
  Eye, 
  Shield, 
  Zap, 
  Network,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Users,
  Globe,
  Clock,
  Download,
  Search,
  Filter,
  Microscope,
  Fish
} from "lucide-react";
import dataPlatformImage from "@/assets/data-platform.jpg";

const Platform = () => {
  const userPersonas = [
    {
      icon: Users,
      title: "Policy Makers",
      description: "Government officials and decision makers requiring evidence-based insights for marine policy development.",
      needs: [
        "Comprehensive ecosystem health reports",
        "SDG 14 compliance monitoring",
        "Pollution impact assessments",
        "Economic impact analysis"
      ],
      features: [
        "Executive dashboards with key indicators",
        "Automated report generation",
        "Policy recommendation engine",
        "Compliance tracking systems"
      ]
    },
    {
      icon: Microscope,
      title: "Marine Researchers",
      description: "Scientists and academics conducting advanced marine research requiring detailed data access and analysis tools.",
      needs: [
        "Raw and processed dataset access",
        "Advanced analytical tools",
        "Cross-domain data correlation",
        "Publication-ready visualizations"
      ],
      features: [
        "API access for custom analysis",
        "Advanced statistical tools",
        "Data export in multiple formats",
        "Collaborative research spaces"
      ]
    },
    {
      icon: Fish,
      title: "Fisheries Managers",
      description: "Industry professionals and resource managers focused on sustainable fisheries management and operations.",
      needs: [
        "Stock assessment data",
        "Species distribution maps",
        "Environmental condition alerts",
        "Catch quota recommendations"
      ],
      features: [
        "Real-time fish stock indicators",
        "Fishing zone recommendations",
        "Weather and ocean alerts",
        "Sustainability scoring"
      ]
    }
  ];

  const platformFeatures = [
    {
      icon: Database,
      title: "Unified Data Repository",
      description: "Centralized storage of heterogeneous marine datasets with automated standardization and metadata tagging.",
      metrics: {
        "Total Datasets": "847",
        "Data Points": "15.2M+",
        "Update Frequency": "Real-time",
        "Storage Capacity": "2.5 TB"
      }
    },
    {
      icon: Brain,
      title: "AI-Powered Analytics Engine",
      description: "Advanced machine learning algorithms for pattern recognition, species identification, and predictive modeling.",
      metrics: {
        "ML Models": "12 Active",
        "Accuracy Rate": "94.7%",
        "Processing Speed": "15 min avg",
        "Species Recognized": "2,847"
      }
    },
    {
      icon: Eye,
      title: "Interactive Visualization Suite",
      description: "Real-time data visualization tools for oceanographic trends, biodiversity patterns, and ecosystem health.",
      metrics: {
        "Dashboard Views": "47 Types",
        "Map Layers": "23 Available",
        "Chart Types": "15 Options",
        "Export Formats": "8 Supported"
      }
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with role-based access control and compliance with international data standards.",
      metrics: {
        "Security Level": "ISO 27001",
        "Data Encryption": "AES-256",
        "User Roles": "12 Types",
        "Compliance": "GDPR, SOC2"
      }
    }
  ];

  const accessFeatures = [
    {
      icon: Search,
      title: "Advanced Search & Discovery",
      description: "Powerful search capabilities across all datasets with smart filtering and recommendation systems."
    },
    {
      icon: Filter,
      title: "Dynamic Data Filtering",
      description: "Real-time filtering by location, time period, species, environmental parameters, and research domains."
    },
    {
      icon: Download,
      title: "Multi-format Export",
      description: "Export data in various formats including CSV, JSON, NetCDF, and specialized marine data formats."
    },
    {
      icon: Network,
      title: "API Integration",
      description: "RESTful APIs for seamless integration with external systems and collaborative research platforms."
    },
    {
      icon: BarChart3,
      title: "Custom Analytics",
      description: "Build custom analytical workflows and share insights with the marine research community."
    },
    {
      icon: Globe,
      title: "Global Collaboration",
      description: "Connect with international marine research networks and contribute to global ocean data initiatives."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-muted/30">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                  Marine Data
                  <span className="block bg-gradient-ocean bg-clip-text text-transparent">
                    Platform Access
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Access India's most comprehensive marine data platform. Integrate, analyze, and visualize 
                  complex oceanographic datasets through our AI-enabled intelligent system.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    size="lg" 
                    className="bg-gradient-ocean hover:shadow-ocean transition-all duration-300 transform hover:scale-105"
                  >
                    Request Platform Access
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Schedule Demo
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">24/7</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">847</div>
                    <div className="text-sm text-muted-foreground">Datasets</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">15.2M</div>
                    <div className="text-sm text-muted-foreground">Data Points</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">94.7%</div>
                    <div className="text-sm text-muted-foreground">Accuracy</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-ocean">
                  <img 
                    src={dataPlatformImage} 
                    alt="Marine Data Platform Interface" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Personas */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Designed for
                <span className="block bg-gradient-ocean bg-clip-text text-transparent">
                  Marine Professionals
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our platform serves diverse user communities with specialized tools and interfaces 
                tailored to their unique research and operational needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {userPersonas.map((persona, index) => {
                const IconComponent = persona.icon;
                return (
                  <Card key={index} className="group hover:shadow-ocean hover:-translate-y-2 transition-all duration-500">
                    <CardHeader>
                      <div className="mb-4 p-3 bg-gradient-ocean rounded-lg w-fit group-hover:shadow-glow transition-all duration-300">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {persona.title}
                      </CardTitle>
                      <CardDescription>
                        {persona.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <h4 className="font-semibold text-foreground mb-2">Key Requirements:</h4>
                        <ul className="space-y-1">
                          {persona.needs.map((need, needIndex) => (
                            <li key={needIndex} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                              {need}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Platform Features:</h4>
                        <ul className="space-y-1">
                          {persona.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Platform
                <span className="block bg-gradient-ocean bg-clip-text text-transparent">
                  Capabilities
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advanced features powered by cutting-edge technology to handle the complexity 
                and scale of marine data integration and analysis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {platformFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="hover:shadow-ocean transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-gradient-ocean rounded-lg">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <Badge variant="secondary">Live</Badge>
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(feature.metrics).map(([key, value], metricIndex) => (
                          <div key={metricIndex} className="text-center p-3 bg-muted/50 rounded-lg">
                            <div className="text-lg font-bold text-foreground">{value}</div>
                            <div className="text-xs text-muted-foreground">{key}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Access Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accessFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                    <CardHeader>
                      <div className="mb-3 p-2 bg-gradient-ocean rounded-lg w-fit">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Access CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-muted/30">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Access the Platform?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join the marine research community and start exploring India's most comprehensive 
              ocean data platform today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-ocean hover:shadow-ocean transition-all duration-300"
              >
                Request Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="hover:bg-primary hover:text-white transition-all duration-300"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Platform;