import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Database, 
  Users, 
  FileText, 
  Download, 
  Upload, 
  BarChart3, 
  Settings,
  Lock,
  Key,
  UserCheck
} from "lucide-react";

const PortalAccess = () => {
  const userTypes = [
    {
      type: "Policy Maker",
      icon: Shield,
      description: "Government officials and policy decision makers",
      access: ["Executive dashboards", "Policy impact reports", "Regulatory compliance data"],
      color: "bg-blue-500"
    },
    {
      type: "Marine Researcher",
      icon: Database,
      description: "Scientists and academic researchers",
      access: ["Raw datasets", "Analysis tools", "Research collaboration platform"],
      color: "bg-green-500"
    },
    {
      type: "Fisheries Manager",
      icon: Users,
      description: "Fisheries department officials and managers",
      access: ["Stock assessments", "Fishing quotas", "Vessel monitoring data"],
      color: "bg-orange-500"
    }
  ];

  const accessLevels = [
    {
      level: "Public Access",
      description: "General marine data and publications",
      features: ["Basic oceanographic data", "Public research reports", "Educational resources"],
      requirements: "No registration required"
    },
    {
      level: "Registered User",
      description: "Enhanced data access with registration",
      features: ["Historical data downloads", "Interactive visualizations", "Newsletter updates"],
      requirements: "Email registration required"
    },
    {
      level: "Institutional Access",
      description: "Full data access for institutions",
      features: ["Complete datasets", "API access", "Collaboration tools", "Priority support"],
      requirements: "Institutional verification required"
    },
    {
      level: "Research Collaboration",
      description: "Partnership-level access",
      features: ["Raw data access", "Computing resources", "Joint project management"],
      requirements: "Research partnership agreement"
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
                  <Lock className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Portal
                <span className="block bg-gradient-ocean bg-clip-text text-transparent">
                  Access
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Secure access to CMLRE's marine research data platform. Request access based on your role 
                and research requirements.
              </p>
            </div>
          </div>
        </section>

        {/* User Types */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your User Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {userTypes.map((user, index) => {
                const IconComponent = user.icon;
                return (
                  <Card key={index} className="hover:shadow-ocean hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                    <CardHeader className="text-center">
                      <div className={`mb-4 p-4 ${user.color} rounded-2xl w-fit mx-auto`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{user.type}</CardTitle>
                      <CardDescription>{user.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="font-medium text-sm">Access Includes:</p>
                        {user.access.map((item, accessIndex) => (
                          <div key={accessIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full mt-4 bg-gradient-ocean">
                        Request {user.type} Access
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Access Levels */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Access Levels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accessLevels.map((level, index) => (
                <Card key={index} className="hover:shadow-ocean hover:-translate-y-2 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{level.level}</CardTitle>
                      <Badge variant={index === 0 ? "secondary" : index === accessLevels.length - 1 ? "default" : "outline"}>
                        {index === 0 ? "Free" : index === accessLevels.length - 1 ? "Premium" : "Standard"}
                      </Badge>
                    </div>
                    <CardDescription>{level.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      {level.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-xs text-muted-foreground">
                        <strong>Requirements:</strong> {level.requirements}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Access Request Form */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Request Portal Access</h2>
              <p className="text-muted-foreground">
                Fill out the form below to request access to CMLRE's data platform
              </p>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  Access Request Form
                </CardTitle>
                <CardDescription>
                  Please provide accurate information for access verification
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">Organization *</Label>
                  <Input id="organization" placeholder="Enter your organization name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="userType">User Type *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your user type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="policy-maker">Policy Maker</SelectItem>
                      <SelectItem value="marine-researcher">Marine Researcher</SelectItem>
                      <SelectItem value="fisheries-manager">Fisheries Manager</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accessLevel">Requested Access Level *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select access level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="registered">Registered User</SelectItem>
                      <SelectItem value="institutional">Institutional Access</SelectItem>
                      <SelectItem value="research">Research Collaboration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="purpose">Purpose of Access *</Label>
                  <Textarea 
                    id="purpose" 
                    placeholder="Describe how you plan to use the marine data platform..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dataInterest">Data Areas of Interest</Label>
                  <Textarea 
                    id="dataInterest" 
                    placeholder="Specify particular datasets or research areas you're interested in..."
                    rows={3}
                  />
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1 bg-gradient-ocean hover:shadow-ocean transition-all duration-300">
                    <UserCheck className="mr-2 h-4 w-4" />
                    Submit Access Request
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Save as Draft
                  </Button>
                </div>

                <div className="text-xs text-muted-foreground text-center pt-4 border-t">
                  <p>
                    By submitting this form, you agree to CMLRE's data usage terms and conditions. 
                    Access requests are typically processed within 3-5 business days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

       
      </main>
      <Footer />
    </div>
  );
};

export default PortalAccess;