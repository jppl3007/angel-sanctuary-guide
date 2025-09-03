import React, { useState } from 'react';
import { OracleButton } from '@/components/ui/oracle-button';
import { OracleInput } from '@/components/ui/oracle-input';
import { SacredGeometry } from '@/components/SacredGeometry';
import { RevelationText } from '@/components/RevelationText';
import { toast } from '@/hooks/use-toast';

// Mock Oracle AI Response for demonstration
const generateOracleReading = (name: string, birthDate: string) => {
  const themes = [
    "Cura e Renovação Emocional",
    "Prosperidade e Abundância", 
    "Amor e Relacionamentos",
    "Despertar da Intuição e Propósito",
    "Coragem e Superação de Obstáculos"
  ];
  
  const archangels = ["Miguel", "Rafael", "Gabriel", "Uriel", "Jophiel", "Chamuel", "Zadkiel"];
  const crystals = ["Quartzo Rosa", "Ametista", "Citrino", "Turmalina Negra", "Selenita", "Labradorita"];
  const colors = ["Azul-celeste", "Verde-esmeralda", "Dourado", "Violeta", "Rosa-suave", "Prata"];
  
  const selectedTheme = themes[Math.floor(Math.random() * themes.length)];
  const archangel = archangels[Math.floor(Math.random() * archangels.length)];
  const crystal = crystals[Math.floor(Math.random() * crystals.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  return `## Sua Conexão Celestial

**Seu Anjo Guardião Principal:** Arcanjo ${archangel}, o Guardião da Transformação Sagrada
**A Essência da Sua Ligação:** Uma luz dourada que dança entre os véus da realidade, conectando sua alma às frequências mais elevadas do universo.

## A Mensagem Central do Seu Anjo

Querido(a) ${name}, neste momento sagrado de sua jornada, os céus se abrem para revelar que você está no limiar de uma transformação profunda. Sua alma clama por renovação, e o universo conspira para trazer-lhe as oportunidades de crescimento que tanto deseja. Confie no processo divino que se desenrola em sua vida, pois cada desafio é uma semente de sabedoria sendo plantada em seu coração. O amor incondicional dos anjos o(a) envolve, trazendo cura para antigas feridas e abrindo caminhos para um futuro repleto de possibilidades luminosas.

## Espelho da Alma: Suas Energias Atuais

**Sua Força Inata:** Você carrega em sua essência a capacidade única de transformar dor em sabedoria, sendo um farol de esperança para aqueles que cruzam seu caminho.
**Seu Desafio Consciente:** Há uma tendência a duvidar de seu próprio valor, permitindo que vozes externas eclipsem a voz sábia de seu coração. É tempo de reconhecer sua luz interior.
**Seu Foco de Energia:**
* **Área para Atenção:** Crescimento Espiritual (momento de expansão da consciência e conexão com seu propósito superior)
* **Cristal de Apoio:** ${crystal} (para amplificar sua intuição e proteger sua energia durante esta transformação)
* **Cor de Vibração:** ${color} (para equilibrar suas emoções e atrair harmonia em todos os aspectos da vida)

## Orientações Práticas Divinas

**Sinal para Observar:** Nos próximos dias, observe a aparição de borboletas ou o som de sinos tocando ao vento. Estes são sinais de que seus anjos estão confirmando as decisões certas em seu coração.
**Ritual Simples de Alinhamento:** Antes de dormir hoje, acenda uma vela branca e sussurre três vezes: "Eu me abro para receber a orientação divina com gratidão e confiança." Deixe a vela queimar por 10 minutos enquanto visualiza uma luz dourada preenchendo todo seu ser.

## Um Olhar no Horizonte

Uma nova era de abundância emocional e espiritual desponta em seu horizonte, trazendo consigo a realização de sonhos que pareciam impossíveis e o despertar de dons que estavam adormecidos em sua alma.`;
};

const OracleIndex: React.FC = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [oracleReading, setOracleReading] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(true);

  const handleRevealMessage = async () => {
    if (!name.trim() || !birthDate) {
      toast({
        title: "Campos Obrigatórios",
        description: "Por favor, preencha seu nome e data de nascimento para receber sua mensagem angelical.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    setShowForm(false);

    // Simulate AI processing time
    setTimeout(() => {
      const reading = generateOracleReading(name, birthDate);
      setOracleReading(reading);
      setIsLoading(false);
    }, 3000);
  };

  const resetReading = () => {
    setOracleReading(null);
    setShowForm(true);
    setName('');
    setBirthDate('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="font-oracle-title text-4xl md:text-6xl mb-6 animate-cosmic-shimmer">
            Meu Oráculo Angelical
          </h1>
          <p className="font-oracle-body text-lg md:text-xl max-w-2xl mx-auto">
            Conecte-se com sua orientação divina personalizada através de uma experiência espiritual única e transformadora
          </p>
        </header>

        {/* Main Content */}
        <main className="relative">
          {showForm && (
            <div className="max-w-md mx-auto space-y-8 animate-fade-in">
              <div className="bg-card border border-card-border rounded-xl p-8 backdrop-blur-sm golden-glow">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-oracle-subtitle text-sm mb-3">
                      Seu Nome Sagrado
                    </label>
                    <OracleInput
                      id="name"
                      type="text"
                      placeholder="Digite seu nome completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="birthDate" className="block font-oracle-subtitle text-sm mb-3">
                      Sua Data de Nascimento
                    </label>
                    <OracleInput
                      id="birthDate"
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                    />
                  </div>

                  <OracleButton
                    variant="default"
                    size="lg"
                    onClick={handleRevealMessage}
                    className="w-full font-oracle-subtitle"
                    disabled={isLoading}
                  >
                    ✦ Revelar Minha Mensagem Angelical ✦
                  </OracleButton>
                </div>
              </div>

              <p className="text-center font-oracle-body text-sm opacity-75">
                Prepare seu coração para receber a sabedoria divina que os anjos têm para compartilhar com você
              </p>
            </div>
          )}

          {isLoading && (
            <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
              <SacredGeometry className="mb-8" />
              <p className="font-oracle-title text-xl text-center max-w-md">
                Os anjos estão preparando sua mensagem sagrada...
              </p>
              <p className="font-oracle-body text-center mt-4 opacity-75">
                Mantenha seu coração aberto para receber a orientação divina
              </p>
            </div>
          )}

          {oracleReading && (
            <div className="animate-fade-in">
              <RevelationText content={oracleReading} />
              
              {/* Music Section */}
              <div className="max-w-3xl mx-auto mt-16 mb-16">
                <div className="bg-card border border-card-border rounded-xl p-8 backdrop-blur-sm golden-glow">
                  <h3 className="font-oracle-title text-2xl md:text-3xl mb-8 text-center">
                    ✦ Harmonias Celestiais ✦
                  </h3>
                  <p className="font-oracle-body text-center mb-8 opacity-90">
                    Eleve sua vibração com estas frequências sagradas escolhidas especialmente para você
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg hover:border-primary/50 transition-all">
                      <div>
                        <h4 className="font-oracle-subtitle text-lg">Frequências do Anjo da Guarda</h4>
                        <p className="font-oracle-body text-sm opacity-75">Conecte-se com sua proteção divina</p>
                      </div>
                      <OracleButton
                        variant="sacred"
                        size="sm"
                        onClick={() => window.open('https://www.youtube.com/watch?v=Dix5pfVpI8o&list=RDDix5pfVpI8o&start_radio=1', '_blank')}
                      >
                        ▶ Escutar
                      </OracleButton>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg hover:border-primary/50 transition-all">
                      <div>
                        <h4 className="font-oracle-subtitle text-lg">Ondas de Paz Interior</h4>
                        <p className="font-oracle-body text-sm opacity-75">Encontre serenidade e tranquilidade</p>
                      </div>
                      <OracleButton
                        variant="sacred"
                        size="sm"
                        onClick={() => window.open('https://www.youtube.com/watch?v=HyI8o_EA3os&list=RDHyI8o_EA3os&start_radio=1', '_blank')}
                      >
                        ▶ Escutar
                      </OracleButton>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg hover:border-primary/50 transition-all">
                      <div>
                        <h4 className="font-oracle-subtitle text-lg">Magnetismo da Abundância</h4>
                        <p className="font-oracle-body text-sm opacity-75">Atraia prosperidade e riqueza</p>
                      </div>
                      <OracleButton
                        variant="sacred"
                        size="sm"
                        onClick={() => window.open('https://www.youtube.com/watch?v=DKm1qNXVz1Q&list=RDDKm1qNXVz1Q&start_radio=1', '_blank')}
                      >
                        ▶ Escutar
                      </OracleButton>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-16">
                <OracleButton
                  variant="mystical"
                  onClick={resetReading}
                  className="font-oracle-subtitle"
                >
                  ✦ Nova Consulta Angelical ✦
                </OracleButton>
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="text-center mt-20">
          <p className="font-oracle-body text-sm opacity-60">
            Que a luz dos anjos ilumine sempre seu caminho
          </p>
        </footer>
      </div>
    </div>
  );
};

export default OracleIndex;