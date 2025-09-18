import { useState } from "react";
import emailjs from "emailjs-com";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  Card, CardContent, CardDescription, CardHeader, CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { 
  MapPin, Phone, Mail, Clock, Send, MessageSquare,
  Users, Building2, Navigation
} from "lucide-react";

const Contact = () => {
  // 🔹 Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // 🔹 Form handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSelect = (value) => {
    setFormData({ ...formData, subject: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_1a5695q",   // ⬅️ Replace with your EmailJS Service ID
        "template_vpd584b",  // ⬅️ Replace with your EmailJS Template ID
        {
          to_email: "chauhanvishvanshu@gmail.com", // Your email
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          organization: formData.organization,
          subject: formData.subject,
          message: formData.message,
        },
        "6bAkw1r0s8XMf6Aig"    // ⬅️ Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            organization: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send message. Try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  // 🔹 Contact Info, Departments, Quick Contacts
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Centre for Marine Living Resources and Ecology",
        "Ministry of Earth Sciences, Government of India",
        "Kochi, Kerala 682508, India"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "Main: +91-9369483256",
        "Alt: +91-47906286301",
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "General: mridul@gmail.com",
        "Director: sakshichilkotinusiness@gmail.com", 
        "Research: ayushtiwari2195@gmail.com"
      ]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:30 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const departments = [
    {
      name: "Marine Ecology Division",
      head: "Dr. P. Kaladharan",
      email: "ecology@cmlre.gov.in",
      phone: "+91-484-2381741"
    },
    {
      name: "Fish Taxonomy Division", 
      head: "Dr. Grinson George",
      email: "taxonomy@cmlre.gov.in",
      phone: "+91-484-2381742"
    },
    {
      name: "Molecular Biology Division",
      head: "Dr. Sandhya Sukumaran",
      email: "molbio@cmlre.gov.in", 
      phone: "+91-484-2381743"
    },
    {
      name: "Data Platform Division",
      head: "Dr. K.S. Mohamed",
      email: "dataplatform@cmlre.gov.in",
      phone: "+91-484-2381744"
    }
  ];

  const quickContacts = [
    { type: "Data Access Support", email: "datasupport@cmlre.gov.in" },
    { type: "Research Collaboration", email: "collaboration@cmlre.gov.in" },
    { type: "Media Inquiries", email: "media@cmlre.gov.in" },
    { type: "Technical Support", email: "techsupport@cmlre.gov.in" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-ocean rounded-2xl shadow-glow">
                <MessageSquare className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Contact
              <span className="block bg-gradient-ocean bg-clip-text text-transparent">
                CMLRE
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our marine research experts. We're here to support your research needs 
              and answer questions about our data platform and services.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="text-center hover:shadow-ocean hover:-translate-y-2 transition-all duration-300">
                  <CardHeader>
                    <div className="p-3 bg-gradient-ocean rounded-lg w-fit mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Contact Form & Departments */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 🔹 Contact Form with EmailJS */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" value={formData.firstName} onChange={handleChange} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" value={formData.lastName} onChange={handleChange} required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input id="organization" value={formData.organization} onChange={handleChange} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select onValueChange={handleSelect} value={formData.subject}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Data Access Request">Data Access Request</SelectItem>
                          <SelectItem value="Research Collaboration">Research Collaboration</SelectItem>
                          <SelectItem value="Technical Support">Technical Support</SelectItem>
                          <SelectItem value="Media Inquiry">Media Inquiry</SelectItem>
                          <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" value={formData.message} onChange={handleChange} rows={6} required />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-ocean hover:shadow-ocean" disabled={loading}>
                      <Send className="mr-2 h-4 w-4" />
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* 🔹 Departments & Quick Contacts */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Department Contacts</h3>
                <div className="space-y-4">
                  {departments.map((dept, i) => (
                    <Card key={i} className="hover:shadow-ocean hover:-translate-y-1 transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-gradient-ocean rounded-lg">
                            <Users className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{dept.name}</CardTitle>
                            <CardDescription>Head: {dept.head}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 text-sm">
                        <p className="flex items-center gap-2"><Mail className="h-3 w-3" />{dept.email}</p>
                        <p className="flex items-center gap-2"><Phone className="h-3 w-3" />{dept.phone}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Quick Contacts</h3>
                <div className="space-y-3">
                  {quickContacts.map((c, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-background rounded-lg border hover:shadow-md transition-all duration-300">
                      <Mail className="h-4 w-4 text-primary" />
                      <div>
                        <p className="font-medium text-sm">{c.type}</p>
                        <p className="text-xs text-muted-foreground">{c.email}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Directions (unchanged) */}
        {/* ... keep your location section here ... */}

      </main>
      <Footer />
    </div>
  );
};

export default Contact;
