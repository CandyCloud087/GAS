import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PricingSection = () => {
  const { toast } = useToast();

  const handleBuyClick = () => {
    toast({
      title: "Obrigado pelo interesse!",
      description: "Em breve você será redirecionado para finalizar sua compra.",
    });
  };

  return (
    <section id="comprar" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Adquira seu BlinkWatch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Investimento acessível em segurança para você ou sua frota.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="border-2 border-primary shadow-xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl mb-2">BlinkWatch Individual</CardTitle>
              <CardDescription>Para motoristas e profissionais</CardDescription>
              <div className="mt-4">
                <span className="text-5xl font-bold">R$ 269,99</span>
                <span className="text-muted-foreground">/unidade</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Dispositivo BlinkWatch completo</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Carregador USB-C</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Aplicativo mobile gratuito</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>6 meses de garantia</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Suporte técnico via WhatsApp</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Frete grátis para todo Brasil</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg" onClick={handleBuyClick}>
                Comprar Agora
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
