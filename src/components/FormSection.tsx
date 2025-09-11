import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Declare MauticSDK types
declare global {
  interface Window {
    MauticSDKLoaded?: boolean;
    MauticSDK?: any;
    MauticDomain?: string;
    MauticLang?: any;
  }
}

export function FormSection() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    // Load Mautic SDK
    if (typeof window.MauticSDKLoaded === 'undefined') {
      window.MauticSDKLoaded = true;
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://mkt.vivaacademy.co/media/js/mautic-form.js?v595b035a';
      script.onload = () => {
        if (window.MauticSDK) {
          window.MauticSDK.onLoad();
        }
      };
      document.head.appendChild(script);
      window.MauticDomain = 'https://mkt.vivaacademy.co';
      window.MauticLang = {
        'submittingMessage': "Por favor, aguarde..."
      };
    } else if (typeof window.MauticSDK !== 'undefined') {
      window.MauticSDK.onLoad();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate CPF format (basic validation)
    if (formData.cpf.replace(/\D/g, '').length !== 11) {
      toast({
        title: "CPF inválido",
        description: "Por favor, digite um CPF válido com 11 dígitos.",
        variant: "destructive"
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, digite um email válido.",
        variant: "destructive"
      });
      return;
    }

    // Submit to Mautic
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('mauticform[nome]', formData.nome);
      formDataToSend.append('mauticform[email]', formData.email);
      formDataToSend.append('mauticform[telefone]', formData.telefone);
      formDataToSend.append('mauticform[cpf]', formData.cpf);
      formDataToSend.append('mauticform[formId]', '1');
      formDataToSend.append('mauticform[return]', '');
      formDataToSend.append('mauticform[formName]', 'formcapturasorteio');
      formDataToSend.append('mauticform[submit]', '1');

      const response = await fetch('https://mkt.vivaacademy.co/form/submit?formId=1', {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors'
      });

      // Success toast
      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Você está participando do sorteio da passagem para Disney. Boa sorte!"
      });

      // Reset form
      setFormData({
        nome: "",
        cpf: "",
        email: "",
        telefone: ""
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar formulário",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive"
      });
    }
  };

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length === 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  };

  return (
    <section className="py-24 px-4">
      <div className="container max-w-2xl mx-auto">
        <Card className="shadow-divine border-primary/20">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Participe do Sorteio
            </CardTitle>
            <CardDescription className="text-lg">
              Preencha seus dados para concorrer à passagem para Orlando!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome Completo *</Label>
                <Input
                  id="nome"
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="border-primary/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cpf">CPF *</Label>
                <Input
                  id="cpf"
                  type="text"
                  required
                  maxLength={14}
                  value={formData.cpf}
                  onChange={(e) => {
                    const formatted = formatCPF(e.target.value);
                    setFormData({ ...formData, cpf: formatted });
                  }}
                  placeholder="000.000.000-00"
                  className="border-primary/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-primary/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone *</Label>
                <Input
                  id="telefone"
                  type="tel"
                  required
                  maxLength={15}
                  value={formData.telefone}
                  onChange={(e) => {
                    const formatted = formatPhone(e.target.value);
                    setFormData({ ...formData, telefone: formatted });
                  }}
                  placeholder="(11) 99999-9999"
                  className="border-primary/20 focus:border-primary"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                variant="divine"
                size="lg"
              >
                Quero participar do Sorteio!
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Ao se inscrever, você concorda com o regulamento do sorteio e autoriza o uso dos seus dados conforme a LGPD.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}