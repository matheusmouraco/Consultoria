import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Target, MessageSquare, Search, Award, Smartphone, Zap, XCircle, Star, Mic, Presentation, Users, Calendar, ShieldCheck } from 'lucide-react';
import { Toaster } from "@/components/ui/toaster";

export default function Home() {

  const whatsappLink = "https://wa.me/5511992644010?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mati%20Studio%20e%20quero%20um%20or%C3%A7amento%20para%20meu%20site%20de%20consultor/palestrante.";

  const portfolioCases = [
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/96abc8e20_portfolio-1-a-50-Prancheta-8-1.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/921b8917b_portfolio-1-a-50-Prancheta-16.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/943385295_portfolio-1-a-50-Prancheta-28-1.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/62f846307_portfolio-1-a-50-Prancheta-29.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/baad92fe0_portfolio-51-a-100-Prancheta-46-1.png"
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Toaster />
      <style>{`
        body {
            font-family: 'Inter', sans-serif;
        }
        .hero-bg {
          background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .final-cta-bg {
           background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop');
           background-size: cover;
           background-position: center;
        }
      `}</style>
      
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm shadow-md z-40 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1dd374859_Group-1171276258.png" alt="Mati Studio Logo" className="h-10" />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full group px-6">
                Fale com um Especialista
                <MessageSquare className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="bg-black text-zinc-200 pt-[68px]">
        {/* Hero Section */}
        <section className="hero-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-36">
            <motion.div variants={fadeIn} initial="hidden" animate="visible">
              <Mic className="w-16 h-16 text-[#FF004D] mx-auto mb-4"/>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Você já impacta pessoas com sua fala. Agora seu site precisa fazer o mesmo.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
                Autoridade não se constrói só no palco — mas também no digital. Quando te encontram, sua presença online transmite tudo o que você entrega ao vivo?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Chegou a hora de transformar seu conhecimento em posicionamento digital</h2>
             <p className="text-xl text-zinc-300 mt-6">Na Mati Studio, criamos sites profissionais para quem vive de compartilhar conhecimento — seu palco digital sempre ativo, sempre vendendo.</p>
          </div>
        </section>

        {/* Daily searches */}
        <section className="py-20 bg-black">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Todos os dias, empresas e pessoas buscam por especialistas como você:</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        "Palestrante motivacional para evento",
                        "Consultoria empresarial especializada",
                        "Mentor para desenvolvimento pessoal",
                        "Workshop de liderança e gestão",
                    ].map(item => (
                         <div key={item} className="flex items-start gap-4 bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                            <Search className="w-6 h-6 text-[#FF004D] shrink-0 mt-1"/>
                            <p className="text-lg text-zinc-300">"{item}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* What we deliver */}
        <section className="py-20 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">O que entregamos para você</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-black border-zinc-800 text-white p-8">
                        <div className="flex items-start gap-4 mb-4">
                            <Presentation className="w-10 h-10 text-[#FF004D] shrink-0"/>
                            <h3 className="text-2xl font-bold">Site profissional completo</h3>
                        </div>
                        <ul className="space-y-3 text-zinc-300">
                           {[
                               "Página inicial com posicionamento e diferenciais",
                               "Página 'Sobre' com trajetória e missão",
                               "Seção de serviços (consultoria, palestra, mentoria)",
                               "Área de conteúdos e materiais",
                               "Integração com WhatsApp e formulários",
                               "SEO técnico para ser encontrado no Google",
                           ].map(item => (
                               <li key={item} className="flex items-start gap-3">
                                   <CheckCircle className="w-5 h-5 text-[#FF004D] shrink-0 mt-1"/>
                                   <span>{item}</span>
                               </li>
                           ))}
                        </ul>
                    </Card>

                    <Card className="bg-black border-zinc-800 text-white p-8">
                        <div className="flex items-start gap-4 mb-4">
                            <Target className="w-10 h-10 text-[#FF004D] shrink-0"/>
                            <h3 className="text-2xl font-bold">Landing Page estratégica</h3>
                        </div>
                        <p className="text-zinc-400 mb-6">Ideal para promover:</p>
                        <ul className="space-y-3 text-zinc-300">
                           {[
                               "Palestras específicas ou campanhas",
                               "Workshops e eventos presenciais",
                               "Lançamentos de mentorias",
                               "Captação de leads qualificados",
                               "Programas de desenvolvimento",
                           ].map(item => (
                               <li key={item} className="flex items-start gap-3">
                                   <CheckCircle className="w-5 h-5 text-[#FF004D] shrink-0 mt-1"/>
                                   <span>{item}</span>
                               </li>
                           ))}
                        </ul>
                    </Card>
                </div>
            </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">O que seu novo site vai fazer por você</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { icon: Award, title: "Posicionar Autoridade", description: "Mostre seu valor com clareza e impacto" },
                    { icon: Users, title: "Conquistar Confiança", description: "Transmita credibilidade desde o primeiro clique" },
                    { icon: Target, title: "Gerar Oportunidades", description: "Convites e contratos com consistência" },
                    { icon: Calendar, title: "Trabalhar 24h", description: "Seu palco digital sempre ativo" },
                ].map(item => (
                     <div key={item.title} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                        <item.icon className="w-8 h-8 text-[#FF004D] mx-auto mb-3"/>
                        <h3 className="font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-zinc-400 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Nosso Portfólio</h2>
              <p className="text-zinc-400 mt-4">Sites profissionais que já criamos</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioCases.map((src, i) => (
                <motion.div 
                  key={i} 
                  className="rounded-lg overflow-hidden shadow-lg border border-zinc-700/50 bg-white"
                  variants={fadeIn} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{delay: i * 0.1}}
                >
                  <img src={src} alt={`Exemplo de site ${i + 1}`} className="w-full h-auto"/>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Site comum vs. Site da Mati Studio</h2>
            <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8">
                        <h3 className="font-bold text-xl text-red-500 mb-4 flex items-center gap-2"><XCircle/> Problemas comuns</h3>
                        <ul className="space-y-2 text-zinc-400">
                            <li>Site sem estratégia de conversão</li>
                            <li>Visual genérico e ultrapassado</li>
                            <li>Textos genéricos e frios</li>
                            <li>Dificuldade em mostrar autoridade</li>
                        </ul>
                    </div>
                    <div className="p-8 bg-zinc-800/50">
                        <h3 className="font-bold text-xl text-green-400 mb-4 flex items-center gap-2"><CheckCircle/> Soluções da Mati Studio</h3>
                         <ul className="space-y-2 text-zinc-300">
                            <li>Estrutura com CTAs claros e jornadas pensadas</li>
                            <li>Design moderno, autoral e com personalidade</li>
                            <li>Copywriting persuasivo e linguagem humanizada</li>
                            <li>Narrativa que valoriza sua história e expertise</li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta-bg">
          <div className="py-24 text-center bg-black/80">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Mic className="w-16 h-16 text-[#FF004D] mx-auto mb-6"/>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Você já tem o conteúdo. Agora precisa de um palco digital à altura da transformação que oferece.</h2>
                <p className="text-lg text-zinc-300 max-w-3xl mx-auto mb-10">Sites profissionais para palestrantes, consultores e mentores que querem ser lembrados, contratados e valorizados no digital tanto quanto são no presencial.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Quero meu site profissional agora
                    </Button>
                  </a>
                </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-zinc-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Mati Studio | Sites para consultores e palestrantes.</p>
        </div>
      </footer>
    </>
  );
}