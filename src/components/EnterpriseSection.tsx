import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Users, TrendingDown, Award } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import driverImage from "@/assets/driver-using-device.jpg";

const EnterpriseSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    empresa: "",
    responsavel: "",
    email: "",
    telefone: "",
    quantidade: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Orçamento Solicitado!",
      description: "Nossa equipe entrará em contato em até 24 horas.",
    });
    setFormData({
      empresa: "",
      responsavel: "",
      email: "",
      telefone: "",
      quantidade: "",
      mensagem: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="empresas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluções para Empresas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reduza custos com acidentes e aumente a segurança da sua frota com o BlinkWatch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardContent className="pt-6 text-center">
              <Building2 className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Gestão Centralizada</h3>
              <p className="text-sm text-muted-foreground">
                Dashboard completo para monitorar toda sua frota
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Users className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Treinamento Incluído</h3>
              <p className="text-sm text-muted-foreground">
                Capacitação para motoristas e gestores
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <TrendingDown className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Redução de Custos</h3>
              <p className="text-sm text-muted-foreground">
                Até 70% menos acidentes relacionados à sonolência
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Award className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Certificação</h3>
              <p className="text-sm text-muted-foreground">
                Conformidade com normas de segurança
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={driverImage}
              alt="Motorista profissional usando BlinkWatch"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6">Solicite um Orçamento</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="empresa">Nome da Empresa</Label>
                  <Input
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="responsavel">Nome do Responsável</Label>
                  <Input
                    id="responsavel"
                    name="responsavel"
                    value={formData.responsavel}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail Corporativo</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantidade">Quantidade de Dispositivos</Label>
                  <Input
                    id="quantidade"
                    name="quantidade"
                    type="number"
                    min="1"
                    value={formData.quantidade}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem (opcional)</Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Solicitar Orçamento
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
