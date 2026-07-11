
-- Criar enum para tipos de serviços
CREATE TYPE service_type AS ENUM (
  'portas_vidro',
  'box_banheiro', 
  'guarda_corpo',
  'envidracamento_sacadas',
  'fachadas_vidro',
  'divisorias_vidro',
  'espelhos_decorativos',
  'esquadrias_aluminio',
  'manutencao_reparos'
);

-- Criar enum para status de orçamentos
CREATE TYPE quote_status AS ENUM (
  'pendente',
  'em_analise',
  'aprovado',
  'rejeitado',
  'concluido'
);

-- Criar enum para status de projetos
CREATE TYPE project_status AS ENUM (
  'planejamento',
  'em_andamento',
  'pausado',
  'concluido',
  'cancelado'
);

-- Tabela de perfis de usuários
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  phone TEXT,
  address TEXT,
  city TEXT,
  state TEXT DEFAULT 'Paraná',
  zip_code TEXT,
  is_admin BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Tabela de categorias de serviços
CREATE TABLE public.service_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  image_url TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Tabela de serviços
CREATE TABLE public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES public.service_categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  base_price DECIMAL(10,2),
  unit TEXT DEFAULT 'm²',
  features TEXT[],
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Tabela de solicitações de orçamento
CREATE TABLE public.quotes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  service_type service_type NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  dimensions TEXT,
  location TEXT,
  preferred_date DATE,
  budget_range TEXT,
  status quote_status DEFAULT 'pendente',
  admin_notes TEXT,
  estimated_price DECIMAL(10,2),
  final_price DECIMAL(10,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Tabela de projetos/obras
CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quote_id UUID REFERENCES public.quotes(id) ON DELETE SET NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  status project_status DEFAULT 'planejamento',
  start_date DATE,
  expected_end_date DATE,
  actual_end_date DATE,
  total_value DECIMAL(10,2),
  progress_percentage INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Tabela de portfólio/galeria
CREATE TABLE public.portfolio_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES public.projects(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  description TEXT,
  service_type service_type,
  location TEXT,
  completion_date DATE,
  is_featured BOOLEAN DEFAULT FALSE,
  is_public BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Tabela de imagens do portfólio
CREATE TABLE public.portfolio_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  portfolio_item_id UUID REFERENCES public.portfolio_items(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  caption TEXT,
  is_primary BOOLEAN DEFAULT FALSE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Tabela de depoimentos
CREATE TABLE public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  project_id UUID REFERENCES public.projects(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  is_approved BOOLEAN DEFAULT FALSE,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Tabela de contatos/mensagens
CREATE TABLE public.contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  response TEXT,
  responded_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Habilitar RLS em todas as tabelas
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Políticas RLS para service_categories (público para leitura)
CREATE POLICY "Anyone can view active service categories" ON public.service_categories
  FOR SELECT USING (is_active = TRUE);

-- Políticas RLS para services (público para leitura)
CREATE POLICY "Anyone can view active services" ON public.services
  FOR SELECT USING (is_active = TRUE);

-- Políticas RLS para quotes
CREATE POLICY "Users can view their own quotes" ON public.quotes
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own quotes" ON public.quotes
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own quotes" ON public.quotes
  FOR UPDATE USING (auth.uid() = user_id);

-- Políticas RLS para projects
CREATE POLICY "Users can view their own projects" ON public.projects
  FOR SELECT USING (auth.uid() = user_id);

-- Políticas RLS para portfolio_items (público para leitura se is_public = true)
CREATE POLICY "Anyone can view public portfolio items" ON public.portfolio_items
  FOR SELECT USING (is_public = TRUE);

-- Políticas RLS para portfolio_images (público através do portfolio_item)
CREATE POLICY "Anyone can view portfolio images" ON public.portfolio_images
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.portfolio_items 
      WHERE id = portfolio_item_id AND is_public = TRUE
    )
  );

-- Políticas RLS para testimonials (público para aprovados)
CREATE POLICY "Anyone can view approved testimonials" ON public.testimonials
  FOR SELECT USING (is_approved = TRUE);

CREATE POLICY "Users can create testimonials" ON public.testimonials
  FOR INSERT WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- Políticas RLS para contacts (público para inserção)
CREATE POLICY "Anyone can create contacts" ON public.contacts
  FOR INSERT WITH CHECK (TRUE);

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers para updated_at
CREATE TRIGGER update_profiles_updated_at 
  BEFORE UPDATE ON public.profiles 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_quotes_updated_at 
  BEFORE UPDATE ON public.quotes 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at 
  BEFORE UPDATE ON public.projects 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Função para criar perfil automaticamente quando usuário se registra
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$;

-- Trigger para criar perfil automaticamente
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Inserir categorias de serviços iniciais
INSERT INTO public.service_categories (name, slug, description) VALUES
('Portas de Vidro', 'portas-de-vidro', 'Portas de vidro temperado para residências e comércios'),
('Box para Banheiro', 'box-para-banheiro', 'Box de vidro temperado para banheiros'),
('Guarda-Corpo e Corrimão', 'guarda-corpo-corrimao', 'Guarda-corpos e corrimãos em vidro temperado'),
('Envidraçamento de Sacadas', 'envidracamento-sacadas', 'Fechamento de sacadas com vidro temperado'),
('Fachadas de Vidro', 'fachadas-de-vidro', 'Fachadas comerciais em vidro temperado'),
('Divisórias de Vidro', 'divisorias-de-vidro', 'Divisórias para ambientes residenciais e comerciais'),
('Espelhos Decorativos', 'espelhos-decorativos', 'Espelhos decorativos para ambientes'),
('Esquadrias de Alumínio', 'esquadrias-aluminio', 'Esquadrias de alumínio para portas e janelas'),
('Manutenção e Reparos', 'manutencao-reparos', 'Serviços de manutenção e reparo em vidros');
