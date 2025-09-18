import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Waves, 
  Fish, 
  Dna, 
  BarChart3, 
  Microscope, 
  Globe,
  ArrowRight
} from "lucide-react";

const ResearchAreas = () => {
  const areas = [
    {
      icon: Waves,
      title: "Physical & Chemical Oceanography",
      description: "Comprehensive monitoring of ocean parameters including temperature, salinity, currents, and chemical composition across India's marine territories.",
      features: ["Temperature & Salinity Mapping", "Current Pattern Analysis", "Chemical Composition Studies", "Climate Change Impact Assessment"]
    },
    {
      icon: Fish,
      title: "Marine Biodiversity & Taxonomy",
      description: "Advanced species identification, cataloguing, and ecosystem studies supporting sustainable fisheries management and conservation.",
      features: ["Species Classification", "Biodiversity Assessment", "Fish Abundance Studies", "Ecosystem Health Monitoring"]
    },
    {
      icon: Dna,
      title: "Molecular Biology & eDNA",
      description: "Cutting-edge molecular techniques and environmental DNA analysis for species detection and genetic diversity assessment.",
      features: ["Environmental DNA Analysis", "Genetic Diversity Studies", "Species Detection", "Molecular Marker Development"]
    },
    {
      icon: BarChart3,
      title: "Data Integration & Analytics",
      description: "AI-powered platform for integrating heterogeneous marine datasets and enabling cross-disciplinary research insights.",
      features: ["Data Standardization", "Cross-domain Analysis", "Predictive Modeling", "Real-time Visualization"]
    },
    {
      icon: Microscope,
      title: "Otolith Morphometry",
      description: "Advanced morphological analysis of fish otoliths for age determination, stock assessment, and species identification.",
      features: ["Shape Analysis", "Age Determination", "Stock Assessment", "Species Identification"]
    },
    {
      icon: Globe,
      title: "Ecosystem Modeling",
      description: "Comprehensive ecosystem models integrating physical, biological, and chemical data for sustainable resource management.",
      features: ["Ecosystem Dynamics", "Resource Assessment", "Conservation Planning", "Blue Economy Support"]
    }
  ];

  return (
    <section id="research" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Research <span className="bg-gradient-ocean bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our multidisciplinary approach integrates cutting-edge technology with traditional marine science 
            to deliver comprehensive insights into India's marine ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-ocean hover:-translate-y-2 transition-all duration-500 bg-gradient-card border-border/50 hover:border-primary/30"
              >
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 bg-gradient-ocean rounded-lg w-fit group-hover:shadow-glow transition-all duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {area.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {area.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;