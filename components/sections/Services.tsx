import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Database,
  TrendingUp,
  Search,
  Megaphone,
  BarChart3,
  Globe,
  Zap,
  Users,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Database,
      title: "CRM & ERP Solutions",
      description:
        "Comprehensive business management software including our flagship AnQuest CRM, available on a flexible rental basis to streamline your operations.",
      features: ["Customer Management", "Sales Pipeline", "Inventory Control", "Financial Management"],
    },
    {
      icon: Globe,
      title: "SaaS Platform Development",
      description:
        "Custom software-as-a-service solutions tailored to your business needs, with scalable architecture and subscription-based models.",
      features: ["Multi-tenant Architecture", "API Integration", "Cloud Infrastructure", "Automated Billing"],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Advanced search engine optimization strategies to boost your online visibility, drive organic traffic, and improve rankings.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Content Strategy"],
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description:
        "Comprehensive marketing campaigns across all digital channels to maximize your brand reach and ROI.",
      features: ["Google Ads", "Meta Ads", "Campaign Management", "Performance Analytics"],
    },
    {
      icon: TrendingUp,
      title: "Social Media Marketing",
      description:
        "Strategic social media campaigns that engage your audience, build brand awareness, and drive conversions.",
      features: ["Content Creation", "Community Management", "Influencer Marketing", "Social Analytics"],
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Data-driven insights and comprehensive reporting to track performance, measure ROI, and optimize strategies.",
      features: ["Custom Dashboards", "Real-time Tracking", "Conversion Analysis", "ROI Reporting"],
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description:
        "Automate your marketing workflows, nurture leads, and personalize customer journeys at scale.",
      features: ["Email Automation", "Lead Scoring", "Drip Campaigns", "Workflow Builder"],
    },
    {
      icon: Users,
      title: "Custom Digital Solutions",
      description:
        "Bespoke digital services designed specifically for your unique business requirements and customer needs.",
      features: ["Web Development", "Mobile Apps", "E-commerce", "Integration Services"],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive digital solutions designed to elevate your business and drive growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
