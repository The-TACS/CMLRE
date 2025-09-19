import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Target, Eye, Heart, Award, MapPin, Phone, Mail, Calendar } from "lucide-react";

const About = () => {
  const leadership = [
    {
      name: "Sakshi Chilkoti",
      position: "Team Leader",
      expertise: "Marine Fisheries Science, Molecular Biology",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Ayush Tiwari",
      position: "Developer",
      expertise: "Phytoplankton Ecology, Marine Environment",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Vishvanshu Chauhan",
      position: "Developer",
      expertise: "Fish Taxonomy, Biodiversity Assessment",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Yashi Gupta",
      position: "Principal Scientist",
      expertise: "Fisheries Stock Assessment, Marine Ecology",
      image: "/api/placeholder/150/150"
    }
  ];

  const achievements = [
    { year: "2020", milestone: "Established AI-enabled marine data platform" },
    { year: "2019", milestone: "Launched eDNA monitoring program across Indian EEZ" },
    { year: "2018", milestone: "Implemented real-time oceanographic monitoring network" },
    { year: "2017", milestone: "Started comprehensive fish taxonomy digitization" },
    { year: "2016", milestone: "Initiated collaborative research with international institutions" }
  ];

  const facilities = [
    {
      name: "Marine Biodiversity Museum",
      description: "Comprehensive collection of marine specimens from Indian waters",
      location: "CMLRE Campus, Kochi"
    },
    {
      name: "Molecular Biology Laboratory",
      description: "Advanced eDNA analysis and genetic sequencing facilities",
      location: "CMLRE Campus, Kochi"
    },
    {
      name: "Oceanographic Data Center",
      description: "Central repository for marine environmental data",
      location: "CMLRE Campus, Kochi"
    },
    {
      name: "Research Vessels",
      description: "Fleet of vessels for deep-sea and coastal research",
      location: "Various Indian ports"
    }
  ];

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
                  <Building2 className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                About
                <span className="block bg-gradient-ocean bg-clip-text text-transparent">
                  CMLRE
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Centre for Marine Living Resources and Ecology - Leading India's marine research 
                initiatives under the Ministry of Earth Sciences since 2008.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center hover:shadow-ocean hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 p-3 bg-gradient-ocean rounded-lg w-fit mx-auto">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To conduct comprehensive research on marine living resources and ecosystems 
                    in the Indian Exclusive Economic Zone, promoting sustainable utilization 
                    through scientific innovation and data-driven solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-ocean hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 p-3 bg-gradient-ocean rounded-lg w-fit mx-auto">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To be the premier institution for marine ecosystem research in the Indian Ocean, 
                    contributing to global marine science and supporting India's blue economy 
                    through excellence in research and innovation.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-ocean hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 p-3 bg-gradient-ocean rounded-lg w-fit mx-auto">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Scientific integrity, collaborative research, environmental stewardship, 
                    innovation in marine technology, and commitment to sustainable development 
                    of marine resources for future generations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Development Team */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Development Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-ocean hover:-translate-y-2 transition-all duration-300">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gradient-ocean rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="font-medium text-primary">
                      {member.position}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.expertise}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Research Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facilities.map((facility, index) => (
                <Card key={index} className="hover:shadow-ocean hover:-translate-y-2 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-ocean rounded-lg">
                        <Building2 className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{facility.name}</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" />
                          {facility.location}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Timeline */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Key Achievements</h2>
            <div className="max-w-3xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-4 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="p-2 bg-gradient-ocean rounded-full">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    {index < achievements.length - 1 && (
                      <div className="w-px h-16 bg-border mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-bold text-primary">{achievement.year}</span>
                    </div>
                    <p className="text-muted-foreground">{achievement.milestone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground">Get in touch with our team</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <div className="p-3 bg-gradient-ocean rounded-lg w-fit mx-auto mb-2">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Centre for Marine Living Resources and Ecology<br />
                    Ministry of Earth Sciences<br />
                    Kochi, Kerala 682508<br />
                    India
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="p-3 bg-gradient-ocean rounded-lg w-fit mx-auto mb-2">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    +91-9369483256<br />
                    +91-7906286301<br />
                    
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="p-3 bg-gradient-ocean rounded-lg w-fit mx-auto mb-2">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    director@cmlre.gov.in<br />
                    sakshichilkotibusiness@gmail.com<br />
                    ayushtiwari2195@gmail.com
                  </p>
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

export default About;