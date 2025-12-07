import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Manutenção Básica",
    price: "R$ 49,90",
    period: "/mês",
    description: "Ideal para frotas pequenas",
    features: [
      "Atualizações de software",
      "Suporte técnico via e-mail",
      "Garantia estendida",
      "Relatórios mensais"
    ]
  },
  {
    title: "Manutenção Avançada",
    price: "R$ 89,90",
    period: "/mês",
    description: "Para frotas médias e grandes",
    features: [
      "Tudo do plano Básico",
      "Suporte prioritário 24/7",
      "Manutenção preventiva trimestral",
      "Substituição rápida em caso de defeito",
      "Dashboard avançado",
      "Relatórios personalizados"
    ],
    highlight: true
  },
  {
    title: "Manutenção Premium",
    price: "Sob consulta",
    period: "",
    description: "Solução completa empresarial",
    features: [
      "Tudo do plano Avançado",
      "Gestor de conta dedicado",
      "Treinamento anual presencial",
      "Integração com sistemas próprios",
      "SLA garantido",
      "Análise preditiva de riscos"
    ]
  }
];

const SubscriptionSection = () => {
  return (
    <section id="assinaturas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos de Manutenção
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mantenha seus dispositivos sempre atualizados e funcionando perfeitamente com nossos planos de manutenção.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={plan.highlight ? "border-2 border-primary shadow-xl relative" : ""}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <strong>Nota:</strong> Os planos de manutenção são opcionais e disponíveis apenas para clientes empresariais que já adquiriram dispositivos BlinkWatch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
