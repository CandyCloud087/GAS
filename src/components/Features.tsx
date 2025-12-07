import { Eye, Bell, Shield, Battery, Wifi, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Eye,
    title: "Monitoramento Ocular",
    description: "Tecnologia avançada de rastreamento ocular detecta padrões de sonolência em tempo real."
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description: "Sistema de alertas progressivos mantém o motorista consciente e seguro."
  },
  {
    icon: Shield,
    title: "Segurança Garantida",
    description: "Certificado para uso em rodovias e aprovado por empresas de logística."
  },
  {
    icon: Battery,
    title: "Bateria de Longa Duração",
    description: "Até 48 horas de uso contínuo com uma única carga."
  },
  {
    icon: Wifi,
    title: "Conectividade 4G",
    description: "Dados em tempo real e relatórios detalhados via aplicativo móvel."
  },
  {
    icon: Clock,
    title: "Histórico Completo",
    description: "Registro de todas as viagens e eventos de sonolência para análise."
  }
];

const Features = () => {
  return (
    <section id="produto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tecnologia de Ponta para sua Segurança
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O BlinkWatch combina sensores avançados, inteligência artificial e design ergonômico 
            para oferecer a melhor experiência em monitoramento de sonolência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
