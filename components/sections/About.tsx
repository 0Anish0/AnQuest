import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Users, Lightbulb } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower businesses with innovative digital solutions that drive growth, efficiency, and sustainable success.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We stay ahead of the curve by continuously adopting cutting-edge technologies and industry best practices.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Your success is our priority. We build lasting partnerships by delivering exceptional value and support.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in everything we do, from software development to customer service.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">AnQuest Media</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            AnQuest Media is your trusted partner for comprehensive digital transformation. We
            specialize in delivering enterprise-grade CRM & ERP solutions, cutting-edge SaaS
            platforms, and full-spectrum digital marketing services that help businesses thrive in
            the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="text-center border-border hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-secondary/50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">What We Offer</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Enterprise-grade CRM & ERP software solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Custom SaaS platform development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Comprehensive SEO optimization services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Full-spectrum digital marketing (Google Ads, Meta Ads & more)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Flexible rental-based software licensing</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Us</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Proven track record with 500+ successful projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Expert team of certified professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Customized solutions tailored to your needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>24/7 dedicated support and maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Competitive pricing with flexible payment options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
