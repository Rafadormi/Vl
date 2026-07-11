import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { waLink } from '../lib/contact';
import { Camera, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Orcamento = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    city: '',
    serviceType: '',
    measurements: '',
    deadline: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelect = (value: string, name: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `*Novo Pedido de Orçamento*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*WhatsApp:* ${formData.whatsapp}\n` +
      `*Cidade/Bairro:* ${formData.city}\n` +
      `*Serviço:* ${formData.serviceType}\n` +
      `*Medidas:* ${formData.measurements || 'Não informadas'}\n` +
      `*Prazo desejado:* ${formData.deadline || 'Não informado'}\n` +
      `*Observações:* ${formData.notes || 'Nenhuma'}\n`;
    
    // Open WhatsApp
    window.open(waLink(message), '_blank');
    
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-20">
        <div className="container mx-auto max-w-2xl px-4">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">Solicitar Orçamento</h1>
            <p className="text-muted-foreground text-lg">
              Preencha os dados abaixo para receber um orçamento personalizado de forma rápida.
            </p>
          </div>

          {submitted ? (
            <div className="bg-primary/10 border border-primary/20 p-8 rounded-2xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-secondary mb-4">Orçamento Enviado!</h2>
              <p className="text-muted-foreground mb-8">
                Recebemos suas informações. Você foi redirecionado para o WhatsApp para continuarmos o atendimento por lá.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline">
                Enviar outro orçamento
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card p-6 md:p-8 rounded-2xl shadow-card border border-border space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo *</Label>
                  <Input id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp *</Label>
                  <Input id="whatsapp" name="whatsapp" required value={formData.whatsapp} onChange={handleChange} placeholder="(00) 00000-0000" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">Cidade e Bairro *</Label>
                <Input id="city" name="city" required value={formData.city} onChange={handleChange} placeholder="Ex: Centro, Umuarama" />
              </div>

              <div className="space-y-2">
                <Label>Tipo de serviço *</Label>
                <Select required onValueChange={(val) => handleSelect(val, 'serviceType')}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Box para banheiro">Box para banheiro</SelectItem>
                    <SelectItem value="Portas e janelas de alumínio">Portas e janelas de alumínio</SelectItem>
                    <SelectItem value="Vidro temperado">Vidro temperado</SelectItem>
                    <SelectItem value="Fachadas comerciais">Fachadas comerciais</SelectItem>
                    <SelectItem value="Guarda-corpo de vidro">Guarda-corpo de vidro</SelectItem>
                    <SelectItem value="Espelhos sob medida">Espelhos sob medida</SelectItem>
                    <SelectItem value="Coberturas de vidro">Coberturas de vidro</SelectItem>
                    <SelectItem value="Manutenção e reparos">Manutenção e reparos</SelectItem>
                    <SelectItem value="Outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="measurements">Medidas aproximadas</Label>
                  <Input id="measurements" name="measurements" value={formData.measurements} onChange={handleChange} placeholder="Ex: 1,5m x 2,0m" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deadline">Prazo desejado</Label>
                  <Input id="deadline" name="deadline" value={formData.deadline} onChange={handleChange} placeholder="Ex: Para este mês" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Foto do local (Opcional)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center text-muted-foreground hover:bg-muted/50 transition-colors cursor-pointer">
                  <Camera className="w-8 h-8 mb-2" />
                  <span className="text-sm">Clique para enviar uma foto (no WhatsApp)</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Observações</Label>
                <Textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} placeholder="Detalhes adicionais sobre o projeto..." rows={4} />
              </div>

              <Button type="submit" className="w-full text-lg h-12">
                <Send className="w-5 h-5 mr-2" />
                Enviar Orçamento para WhatsApp
              </Button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Orcamento;
