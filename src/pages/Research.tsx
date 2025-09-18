import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Waves, 
  Fish, 
  Dna, 
  BarChart3, 
  Microscope, 
  Globe,
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  TrendingUp
} from "lucide-react";

const Research = () => {
  const researchProjects = [
    {
      icon: Waves,
      title: "Ocean Environmental Conditions Monitoring",
      status: "Active",
      location: "Arabian Sea & Bay of Bengal",
      duration: "2023-2025",
      team: 12,
      description: "Comprehensive real-time monitoring of ocean parameters including temperature, salinity, pH levels, and current patterns across India's EEZ.",
      data: {
        "Temperature Range": "26-32°C",
        "Salinity Levels": "33-37 PSU",
        "pH Monitoring": "7.8-8.2",
        "Current Speed": "0.2-1.5 m/s"
      },
      outcomes: [
        "Real-time environmental data dashboard",
        "Climate change impact assessment",
        "Ocean warming trend analysis",
        "Acidification monitoring protocols"
      ]
    },
    {
      icon: Fish,
      title: "SDG 14.1 Marine Pollution Monitoring",
      status: "Ongoing",
      location: "Coastal Waters - Kerala, Karnataka, Goa",
      duration: "2022-2024",
      team: 8,
      description: "Systematic monitoring of marine pollution indicators to support UN Sustainable Development Goal 14.1 - preventing and reducing marine pollution.",
      data: {
        "Plastic Debris": "2.3 items/m²",
        "Chemical Pollutants": "15 compounds tracked",
        "Oil Contamination": "<0.05 mg/L",
        "Microplastic Density": "4.2 particles/m³"
      },
      outcomes: [
        "Pollution hotspot identification",
        "Policy recommendations for waste management",
        "Marine debris tracking system",
        "Coastal cleanup impact assessment"
      ]
    },
    {
      icon: Dna,
      title: "AI Species Identification - Random Forest + eDNA",
      status: "Breakthrough",
      location: "Indian Ocean Region",
      duration: "2023-2026",
      team: 15,
      description: "Advanced machine learning approach combining Random Forest algorithms with environmental DNA analysis for rapid and accurate marine species identification.",
      data: {
        "Species Identified": "347 unique species",
        "Accuracy Rate": "94.7%",
        "eDNA Samples": "2,840 processed",
        "Processing Time": "15 minutes average"
      },
      outcomes: [
        "Automated taxonomic classification",
        "Biodiversity assessment protocols",
        "Invasive species early detection",
        "Conservation priority mapping"
      ]
    },
    {
      icon: BarChart3,
      title: "Integrated Ecosystem Data Analytics",
      status: "Phase 2",
      location: "Exclusive Economic Zone",
      duration: "2024-2027",
      team: 20,
      description: "Cross-disciplinary data integration platform combining physical oceanography, biodiversity data, and socio-economic indicators.",
      data: {
        "Datasets Integrated": "12 major databases",
        "Data Points": "2.1M records",
        "Analysis Models": "8 predictive models",
        "Update Frequency": "Real-time"
      },
      outcomes: [
        "Ecosystem health indicators",
        "Fisheries stock assessments",
        "Climate vulnerability mapping",
        "Blue economy impact analysis"
      ]
    }
  ];

  const researchStats = [
    { label: "Active Projects", value: "24", icon: Globe },
    { label: "Research Papers", value: "127", icon: BarChart3 },
    { label: "Species Catalogued", value: "2,847", icon: Fish },
    { label: "Data Points", value: "15.2M", icon: Microscope }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-primary/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Marine Research
                <span className="block bg-gradient-ocean bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Pioneering multidisciplinary research integrating cutting-edge technology with traditional marine science 
                to deliver comprehensive insights into India's marine ecosystems and support sustainable blue economy initiatives.
              </p>
            </div>

            {/* Research Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {researchStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-ocean transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="mb-4 p-3 bg-gradient-ocean rounded-lg w-fit mx-auto">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Research Projects */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Current Research
                <span className="block bg-gradient-ocean bg-clip-text text-transparent">
                  Initiatives
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our flagship research projects addressing critical marine challenges through innovative 
                methodologies and international collaborations.
              </p>
            </div>

            <div className="space-y-12">
              {researchProjects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <Card key={index} className="overflow-hidden hover:shadow-ocean transition-all duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      {/* Project Info */}
                      <div className="lg:col-span-2 p-8">
                        <CardHeader className="p-0 mb-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-4">
                              <div className="p-3 bg-gradient-ocean rounded-lg">
                                <IconComponent className="h-6 w-6 text-white" />
                              </div>
                              <div>
                                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                                <Badge variant={project.status === "Active" ? "default" : project.status === "Breakthrough" ? "destructive" : "secondary"}>
                                  {project.status}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {project.location}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {project.duration}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {project.team} researchers
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="p-0">
                          <CardDescription className="text-base mb-6 leading-relaxed">
                            {project.description}
                          </CardDescription>

                          <div className="mb-6">
                            <h4 className="font-semibold text-foreground mb-3">Key Outcomes:</h4>
                            <ul className="space-y-2">
                              {project.outcomes.map((outcome, outcomeIndex) => (
                                <li key={outcomeIndex} className="flex items-center text-sm text-muted-foreground">
                                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                                  {outcome}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Button variant="outline" className="hover:bg-primary hover:text-white transition-all duration-300">
                            View Detailed Report
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </div>

                      {/* Data Panel */}
                      <div className="bg-muted/50 p-8 border-l">
                        <h4 className="font-semibold text-foreground mb-4 flex items-center">
                          <TrendingUp className="h-4 w-4 mr-2" />
                          Live Data Metrics
                        </h4>
                        <div className="space-y-4">
                          {Object.entries(project.data).map(([key, value], dataIndex) => (
                            <div key={dataIndex} className="border-b border-border/50 pb-3 last:border-b-0">
                              <div className="text-sm text-muted-foreground mb-1">{key}</div>
                              <div className="text-lg font-semibold text-foreground">{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Research;