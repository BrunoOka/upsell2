import CountdownTimer from "@/components/CountdownTimer";
import PrimaryCtaButton from "@/components/PrimaryCtaButton";
import DeclineButton from "@/components/DeclineButton";
import BenefitItem from "@/components/BenefitItem";
import CheckmarkItem from "@/components/CheckmarkItem";
import TrustBadge from "@/components/TrustBadge";
import ScarcityWarning from "@/components/ScarcityWarning";
import { Video, FileText, Smartphone, DollarSign, Zap, Lock, Clock } from "lucide-react";
import heroImage from "@assets/Captura de tela 2025-11-07 210037_1762560094001.png";

export default function FlashSale() {
  const handlePurchase = () => {
    window.location.href = "https://www.ggcheckout.com/checkout/v2/53RTh9KyFUdjNrBgzbtp";
  };

  const handleDecline = () => {
    window.location.href = "https://ultimachance3.vercel.app/";
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-8 space-y-4">
          <div className="inline-block bg-destructive/10 text-destructive px-4 py-2 rounded-md mb-2">
            <p className="font-bold text-sm md:text-base uppercase tracking-wide" data-testid="text-flash-offer">
              ⏰ OFERTA RELÂMPAGO — ÚLTIMA E ÚNICA CHANCE!
            </p>
          </div>
          
          <p className="text-muted-foreground text-sm md:text-base" data-testid="text-expires">
            Esta oportunidade expira em
          </p>
          
          <CountdownTimer initialMinutes={10} onExpire={() => console.log("Offer expired")} />
          
          <div className="mt-8 mb-8">
            <img 
              src={heroImage} 
              alt="Pack de Execuções Perfeitas" 
              className="w-full max-w-3xl mx-auto rounded-md"
              data-testid="img-hero"
            />
          </div>
        </div>

        <div className="text-center mb-12 space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight" data-testid="heading-main">
            Domine cada movimento com o Pack de Execuções Perfeitas
          </h1>
          
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto" data-testid="text-subheading">
            Decida evoluir. Treine com técnica, evite lesões e conquiste resultados reais.
          </p>
        </div>

        <div className="bg-card border border-card-border rounded-md p-6 md:p-8 mb-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
              <span className="text-2xl md:text-3xl text-muted-foreground line-through" data-testid="text-price-old">
                De R$49,00
              </span>
              <span className="text-4xl md:text-6xl font-bold text-neon-green" data-testid="text-price-new">
                por apenas R$8,99!
              </span>
            </div>
            <p className="text-destructive font-bold text-lg" data-testid="text-exclusive">
              💥 Oferta exclusiva — só disponível nesta página.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground text-center mb-6" data-testid="heading-what-you-get">
              📦 O que você vai receber imediatamente:
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <BenefitItem
                icon={Video}
                title="25 vídeos práticos"
                description="Mostrando a execução perfeita de cada exercício"
              />
              <BenefitItem
                icon={FileText}
                title="1 PDF guia"
                description="Com dicas, correções e checklist diário"
              />
              <BenefitItem
                icon={Smartphone}
                title="Acesso vitalício"
                description="Celular, tablet e computador"
              />
              <BenefitItem
                icon={DollarSign}
                title="Garantia de 7 dias"
                description="Risco zero"
              />
              <BenefitItem
                icon={Zap}
                title="Resultados rápidos"
                description="Treino mais eficiente"
              />
            </div>
          </div>

          <div className="bg-background/50 rounded-md p-6 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center" data-testid="heading-benefits">
              ✅ Benefícios imediatos:
            </h3>
            <div className="space-y-1 max-w-xl mx-auto">
              <CheckmarkItem text="Técnica correta e execução precisa" />
              <CheckmarkItem text="Zero desperdício de esforço" />
              <CheckmarkItem text="Prevenção de lesões e evolução mais rápida" />
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <PrimaryCtaButton onClick={handlePurchase}>
              💪 QUERO O PACK POR R$8,99 AGORA
            </PrimaryCtaButton>
            <DeclineButton onClick={handleDecline}>
              ❌ Não quero evoluir agora
            </DeclineButton>
          </div>

          <div className="mt-8">
            <ScarcityWarning />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-center">
          <TrustBadge icon={Lock} text="Pagamento 100% seguro" />
          <TrustBadge icon={Clock} text="Acesso imediato após o pagamento" />
        </div>
      </div>
    </div>
  );
}
