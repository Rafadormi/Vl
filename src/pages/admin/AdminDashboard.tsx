import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data
const mockLeads = [
  { id: '1', name: 'João Silva', whatsapp: '(44) 99999-1111', service: 'Box para banheiro', status: 'Novo', date: '2023-10-25' },
  { id: '2', name: 'Maria Santos', whatsapp: '(44) 99999-2222', service: 'Portas e janelas', status: 'Orçamento Enviado', date: '2023-10-24' },
  { id: '3', name: 'Carlos Ferreira', whatsapp: '(44) 99999-3333', service: 'Fachadas comerciais', status: 'Em produção', date: '2023-10-20' },
  { id: '4', name: 'Ana Oliveira', whatsapp: '(44) 99999-4444', service: 'Manutenção e reparos', status: 'Instalado', date: '2023-10-15' },
];

const mockConversations = [
  { id: '1', customer: 'João Silva', lastMessage: 'Quero de vidro temperado', agent: 'IA', time: '10:30' },
  { id: '2', customer: 'Pedro Alves', lastMessage: 'Qual o valor do metro?', agent: 'Diego', time: '09:15' },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      <Header />
      <main className="flex-1 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-secondary">Painel Administrativo</h1>
              <p className="text-muted-foreground mt-2">Visão geral de orçamentos e atendimentos (Dados Simulados)</p>
            </div>

            <Tabs defaultValue="leads" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="leads">Orçamentos (Leads)</TabsTrigger>
                <TabsTrigger value="chat">Conversas / IA</TabsTrigger>
                <TabsTrigger value="metrics">Métricas</TabsTrigger>
              </TabsList>

              <TabsContent value="leads">
                <Card>
                  <CardHeader>
                    <CardTitle>Solicitações de Orçamento</CardTitle>
                    <CardDescription>Acompanhe e gerencie os pedidos recebidos pelo site.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Cliente</TableHead>
                          <TableHead>WhatsApp</TableHead>
                          <TableHead>Serviço</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Data</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockLeads.map((lead) => (
                          <TableRow key={lead.id}>
                            <TableCell className="font-medium">{lead.name}</TableCell>
                            <TableCell>{lead.whatsapp}</TableCell>
                            <TableCell>{lead.service}</TableCell>
                            <TableCell>
                              <Badge variant={lead.status === 'Novo' ? 'destructive' : lead.status === 'Instalado' ? 'default' : 'secondary'}>
                                {lead.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{lead.date}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="chat">
                <Card>
                  <CardHeader>
                    <CardTitle>Atendimentos Recentes</CardTitle>
                    <CardDescription>Histórico de conversas da IA e dos vendedores.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockConversations.map((conv) => (
                        <div key={conv.id} className="flex items-center justify-between p-4 border border-border rounded-lg bg-card">
                          <div>
                            <p className="font-medium text-secondary">{conv.customer}</p>
                            <p className="text-sm text-muted-foreground">{conv.lastMessage}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="mb-1">{conv.agent}</Badge>
                            <p className="text-xs text-muted-foreground">{conv.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="metrics">
                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Orçamentos no Mês</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">45</div>
                      <p className="text-xs text-muted-foreground">+20% em relação ao mês anterior</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">32%</div>
                      <p className="text-xs text-muted-foreground">Orçamentos que viraram vendas</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Atendimentos IA</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">128</div>
                      <p className="text-xs text-muted-foreground">Conversas triadas automaticamente</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
