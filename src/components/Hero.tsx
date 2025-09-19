import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Microscope, Globe } from "lucide-react";
import heroImage from "@/assets/hero-ocean.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Ocean research" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/70 to-accent/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Centre for Marine Living
            <span className="block bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
              Resources & Ecology
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            India's premier marine research institute under the Ministry of Earth Sciences, 
            pioneering sustainable ocean development through integrated data science and ecosystem research.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Database className="h-8 w-8 mx-auto mb-3 text-accent" />
              <div className="text-2xl font-bold">10MB+</div>
              <div className="text-sm text-white/80">Marine Data</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Microscope className="h-8 w-8 mx-auto mb-3 text-accent" />
              <div className="text-2xl font-bold">100+</div>
              <div className="text-sm text-white/80">Species Catalogued</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Globe className="h-8 w-8 mx-auto mb-3 text-accent" />
              <div className="text-2xl font-bold">500 km</div>
              <div className="text-sm text-white/80">Coastline Coverage</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all duration-300 transform hover:scale-105"
               onClick={() => window.open("map/index.html", "_blank")}
            >
              Explore Data Platform
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
<Button 
  size="lg" 
  variant="outline" 
  className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
  onClick={() => window.open("https://3d.wildflow.ai/C0r4Lm7", "_blank")}
>
  Visualization
</Button>


          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;