import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users, 
  Target, 
  Lightbulb,
  ArrowRight,
  Building,
  Globe2,
  BookOpen
} from "lucide-react";
import researchImage from "@/assets/research-equipment.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To advance marine science through innovative research, sustainable resource management, and cutting-edge technology for India's blue economy."
    },
    {
      icon: Lightbulb,
      title: "Vision",
      description: "To be India's leading marine research institution, pioneering sustainable ocean development and ecosystem conservation."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards of scientific research, data integrity, and technological innovation in marine sciences."
    }
  ];

  const stats = [
    { icon: Building, value: "15+", label: "Research Centers" },
    { icon: Users, value: "200+", label: "Scientists & Researchers" },
    { icon: Globe2, value: "50+", label: "Collaborative Projects" },
    { icon: BookOpen, value: "500+", label: "Research Publications" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="bg-gradient-ocean bg-clip-text text-transparent">CMLRE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Centre for Marine Living Resources and Ecology, established under the Ministry of Earth Sciences, 
            is India's premier institution for marine research and sustainable ocean development.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Pioneering Ocean Science for India's Future
            </h3>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                With India's vast coastline of 500 kilometers and rich marine biodiversity, 
                CMLRE plays a crucial role in understanding and protecting our ocean ecosystems. 
                Our multidisciplinary approach combines traditional marine science with 
                cutting-edge technology to deliver actionable insights.
              </p>
              <p>
                Our research spans physical and chemical oceanography, marine biodiversity 
                assessment, molecular biology, and advanced data analytics. We focus on 
                ecosystem-based research and monitoring to support sustainable utilization 
                of marine resources through scientific surveys and environmental studies.
              </p>
              <p>
                Through our innovative AI-enabled data platform, we're revolutionizing how 
                marine research is conducted, making complex datasets accessible and 
                enabling breakthrough discoveries in ocean science.
              </p>
            </div>
            <Button 
              size="lg" 
              className="mt-8 bg-gradient-ocean hover:shadow-ocean transition-all duration-300"
            >
              Our Research Impact
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-ocean">
              <img 
                src={researchImage} 
                alt="Marine Research Equipment" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card 
                key={index} 
                className="text-center group hover:shadow-card hover:-translate-y-2 transition-all duration-500 bg-gradient-card border-border/50"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-gradient-ocean rounded-xl w-fit group-hover:shadow-glow transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-ocean rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-12">
            Our Impact in Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-white">
                  <IconComponent className="h-8 w-8 mx-auto mb-4 text-white/80" />
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;