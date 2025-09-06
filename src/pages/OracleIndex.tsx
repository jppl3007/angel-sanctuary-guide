import React, { useState } from 'react';
import { OracleButton } from '@/components/ui/oracle-button';
import { OracleInput } from '@/components/ui/oracle-input';
import { SacredGeometry } from '@/components/SacredGeometry';
import { RevelationText } from '@/components/RevelationText';
import { toast } from '@/hooks/use-toast';
import { YouTubePlayerDialog } from '@/components/YouTubePlayerDialog';

// Mock Oracle AI Response for demonstration
const generateOracleReading = (name: string, birthDate: string) => {
  const themes = [
    "Sanación y Renovación Emocional",
    "Prosperidad y Abundancia", 
    "Amor y Relaciones",
    "Despertar de la Intuición y Propósito",
    "Coraje y Superación de Obstáculos"
  ];
  
  const archangels = ["Miguel", "Rafael", "Gabriel", "Uriel", "Jophiel", "Chamuel", "Zadkiel"];
  const crystals = ["Quartzo Rosa", "Ametista", "Citrino", "Turmalina Negra", "Selenita", "Labradorita"];
  const colors = ["Azul-celeste", "Verde-esmeralda", "Dourado", "Violeta", "Rosa-suave", "Prata"];
  
  const selectedTheme = themes[Math.floor(Math.random() * themes.length)];
  const archangel = archangels[Math.floor(Math.random() * archangels.length)];
  const crystal = crystals[Math.floor(Math.random() * crystals.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  return `## Tu Conexión Celestial

**Tu Ángel Guardián Principal:** Arcángel ${archangel}, el Guardián de la Transformación Sagrada
**La Esencia de Tu Conexión:** Una luz dorada que danza entre los velos de la realidad, conectando tu alma con las frecuencias más elevadas del universo.

## El Mensaje Central de Tu Ángel

Querido(a) ${name}, en este momento sagrado de tu jornada, los cielos se abren para revelar que estás en el umbral de una transformación profunda. Tu alma clama por renovación, y el universo conspira para traerte las oportunidades de crecimiento que tanto deseas. Confía en el proceso divino que se desenvuelve en tu vida, pues cada desafío es una semilla de sabiduría siendo plantada en tu corazón. El amor incondicional de los ángeles te envuelve, trayendo sanación para antiguas heridas y abriendo caminos hacia un futuro repleto de posibilidades luminosas.

## Espejo del Alma: Tus Energías Actuales

**Tu Fuerza Innata:** Llevas en tu esencia la capacidad única de transformar dolor en sabiduría, siendo un faro de esperanza para aquellos que cruzan tu camino.
**Tu Desafío Consciente:** Existe una tendencia a dudar de tu propio valor, permitiendo que voces externas eclipsen la voz sabia de tu corazón. Es tiempo de reconocer tu luz interior.
**Tu Enfoque de Energía:**
* **Área de Atención:** Crecimiento Espiritual (momento de expansión de la conciencia y conexión con tu propósito superior)
* **Cristal de Apoyo:** ${crystal} (para amplificar tu intuición y proteger tu energía durante esta transformación)
* **Color de Vibración:** ${color} (para equilibrar tus emociones y atraer armonía en todos los aspectos de la vida)

## Orientaciones Prácticas Divinas

**Señal para Observar:** En los próximos días, observa la aparición de mariposas o el sonido de campanas tocando al viento. Estas son señales de que tus ángeles están confirmando las decisiones correctas en tu corazón.
**Ritual Simple de Alineación:** Antes de dormir hoy, enciende una vela blanca y susurra tres veces: "Me abro para recibir la orientación divina con gratitud y confianza." Deja que la vela arda por 10 minutos mientras visualizas una luz dorada llenando todo tu ser.

## Una Mirada al Horizonte

Una nueva era de abundancia emocional y espiritual despunta en tu horizonte, trayendo consigo la realización de sueños que parecían imposibles y el despertar de dones que estaban dormidos en tu alma.`;
};

const OracleIndex: React.FC = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [oracleReading, setOracleReading] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(true);
  const [currentSection, setCurrentSection] = useState<'main' | 'music' | 'herbs' | 'incense'>('main');
  const [playerOpen, setPlayerOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{ id: string; title: string } | null>(null);

  const handleRevealMessage = async () => {
    if (!name.trim() || !birthDate) {
      toast({
        title: "Campos Obligatorios",
        description: "Por favor, completa tu nombre y fecha de nacimiento para recibir tu mensaje angelical.",
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
    setCurrentSection('main');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="font-oracle-title text-4xl md:text-6xl mb-6 animate-cosmic-shimmer">
            Mi Oráculo Angelical
          </h1>
          <p className="font-oracle-body text-lg md:text-xl max-w-2xl mx-auto">
            Conéctate con tu orientación divina personalizada a través de una experiencia espiritual única y transformadora
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
                      Tu Nombre Sagrado
                    </label>
                    <OracleInput
                      id="name"
                      type="text"
                      placeholder="Escribe tu nombre completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="birthDate" className="block font-oracle-subtitle text-sm mb-3">
                      Tu Fecha de Nacimiento
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
                    ✦ Revelar Mi Mensaje Angelical ✦
                  </OracleButton>
                </div>
              </div>

              <p className="text-center font-oracle-body text-sm opacity-75">
                Prepara tu corazón para recibir la sabiduría divina que los ángeles tienen para compartir contigo
              </p>
            </div>
          )}

          {isLoading && (
            <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
              <SacredGeometry className="mb-8" />
              <p className="font-oracle-title text-xl text-center max-w-md">
                Los ángeles están preparando tu mensaje sagrado...
              </p>
              <p className="font-oracle-body text-center mt-4 opacity-75">
                Mantén tu corazón abierto para recibir la orientación divina
              </p>
            </div>
          )}

          {oracleReading && (
            <div className="animate-fade-in">
              <RevelationText content={oracleReading} />
              
              {currentSection === 'main' && (
                <div className="max-w-3xl mx-auto mt-16 mb-16">
                  <div className="bg-card border border-card-border rounded-xl p-8 backdrop-blur-sm golden-glow">
                    <h3 className="font-oracle-title text-2xl md:text-3xl mb-8 text-center">
                      ✦ Explora Tus Orientaciones Divinas ✦
                    </h3>
                    <p className="font-oracle-body text-center mb-8 opacity-90">
                      Descubre las prácticas sagradas que elevarán tu vibración y transformarán tu jornada espiritual
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <OracleButton
                        variant="sacred"
                        size="lg"
                        onClick={() => setCurrentSection('music')}
                        className="h-auto p-6 flex flex-col items-center space-y-3"
                      >
                        <div className="text-2xl">🎵</div>
                        <div className="text-center">
                          <div className="font-oracle-subtitle">Armonías Celestiales</div>
                          <div className="font-oracle-body text-xs opacity-75">Frecuencias sagradas para tu alma</div>
                        </div>
                      </OracleButton>
                      
                      <OracleButton
                        variant="sacred"
                        size="lg"
                        onClick={() => setCurrentSection('herbs')}
                        className="h-auto p-6 flex flex-col items-center space-y-3"
                      >
                        <div className="text-2xl">🌿</div>
                        <div className="text-center">
                          <div className="font-oracle-subtitle">Baños de Hierbas</div>
                          <div className="font-oracle-body text-xs opacity-75">Rituales ancestrales de purificación</div>
                        </div>
                      </OracleButton>
                      
                      <OracleButton
                        variant="sacred"
                        size="lg"
                        onClick={() => setCurrentSection('incense')}
                        className="h-auto p-6 flex flex-col items-center space-y-3"
                      >
                        <div className="text-2xl">🔥</div>
                        <div className="text-center">
                          <div className="font-oracle-subtitle">Inciensos Sagrados</div>
                          <div className="font-oracle-body text-xs opacity-75">Fragancias que elevan la vibración</div>
                        </div>
                      </OracleButton>
                    </div>
                  </div>
                </div>
              )}

              {currentSection === 'music' && (
                <div className="max-w-3xl mx-auto mt-16 mb-16">
                  <div className="bg-card border border-card-border rounded-xl p-8 backdrop-blur-sm golden-glow">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="font-oracle-title text-2xl md:text-3xl text-center flex-1">
                        ✦ Armonías Celestiales ✦
                      </h3>
                      <OracleButton
                        variant="mystical"
                        size="sm"
                        onClick={() => setCurrentSection('main')}
                      >
                        ← Volver
                      </OracleButton>
                    </div>
                    <p className="font-oracle-body text-center mb-8 opacity-90">
                      Eleva tu vibración con estas frecuencias sagradas elegidas especialmente para ti
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg hover:border-primary/50 transition-all">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">Frecuencias del Ángel de la Guarda</h4>
                          <p className="font-oracle-body text-sm opacity-75">Conéctate con tu protección divina</p>
                        </div>
                         <OracleButton
                           variant="sacred"
                           size="sm"
                           onClick={() => {
                             setSelectedVideo({ id: 'Dix5pfVpI8o', title: 'Frecuencias del Ángel de la Guarda' });
                             setPlayerOpen(true);
                           }}
                         >
                           ▶ Escuchar
                         </OracleButton>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg hover:border-primary/50 transition-all">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">Ondas de Paz Interior</h4>
                          <p className="font-oracle-body text-sm opacity-75">Encuentra serenidad y tranquilidad</p>
                        </div>
                         <OracleButton
                           variant="sacred"
                           size="sm"
                           onClick={() => {
                             setSelectedVideo({ id: 'HyI8o_EA3os', title: 'Ondas de Paz Interior' });
                             setPlayerOpen(true);
                           }}
                         >
                           ▶ Escuchar
                         </OracleButton>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg hover:border-primary/50 transition-all">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">Magnetismo de la Abundancia</h4>
                          <p className="font-oracle-body text-sm opacity-75">Atrae prosperidad y riqueza</p>
                        </div>
                         <OracleButton
                           variant="sacred"
                           size="sm"
                           onClick={() => {
                             setSelectedVideo({ id: 'DKm1qNXVz1Q', title: 'Magnetismo de la Abundancia' });
                             setPlayerOpen(true);
                           }}
                         >
                           ▶ Escuchar
                         </OracleButton>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentSection === 'herbs' && (
                <div className="max-w-3xl mx-auto mt-16 mb-16">
                  <div className="bg-card border border-card-border rounded-xl p-8 backdrop-blur-sm golden-glow">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="font-oracle-title text-2xl md:text-3xl text-center flex-1">
                        ✦ Baños de Hierbas Sagradas ✦
                      </h3>
                      <OracleButton
                        variant="mystical"
                        size="sm"
                        onClick={() => setCurrentSection('main')}
                      >
                        ← Volver
                      </OracleButton>
                    </div>
                    <p className="font-oracle-body text-center mb-8 opacity-90">
                      Purifica tu energía con estos baños ancestrales de sanación y protección
                    </p>
                    
                    <div className="space-y-6">
                      <div className="p-6 bg-card/50 border border-card-border/50 rounded-lg">
                        <h4 className="font-oracle-subtitle text-lg mb-3">🌿 Baño de Protección y Limpieza</h4>
                        <p className="font-oracle-body text-sm mb-4 opacity-90">
                          <strong>Ingredientes:</strong> 7 hojas de ruda, 3 ramas de abre caminos, 1 puñado de sal gruesa, pétalos de rosa blanca
                        </p>
                        <p className="font-oracle-body text-sm opacity-75">
                          <strong>Finalidad:</strong> Remueve energías negativas, corta demandas espirituales y fortalece tu protección áurica
                        </p>
                      </div>
                      
                      <div className="p-6 bg-card/50 border border-card-border/50 rounded-lg">
                        <h4 className="font-oracle-subtitle text-lg mb-3">💝 Baño del Amor Propio</h4>
                        <p className="font-oracle-body text-sm mb-4 opacity-90">
                          <strong>Ingredientes:</strong> Pétalos de rosa roja y rosada, canela en rama, miel, agua de rosas
                        </p>
                        <p className="font-oracle-body text-sm opacity-75">
                          <strong>Finalidad:</strong> Despierta el amor propio, atrae relaciones saludables y aumenta la autoestima
                        </p>
                      </div>
                      
                      <div className="p-6 bg-card/50 border border-card-border/50 rounded-lg">
                        <h4 className="font-oracle-subtitle text-lg mb-3">🍀 Baño de la Prosperidad</h4>
                        <p className="font-oracle-body text-sm mb-4 opacity-90">
                          <strong>Ingredientes:</strong> Hojas de laurel, albahaca, canela en polvo, monedas doradas, azúcar cristal
                        </p>
                        <p className="font-oracle-body text-sm opacity-75">
                          <strong>Finalidad:</strong> Atrae abundancia financiera, abre caminos profesionales y magnetiza oportunidades
                        </p>
                      </div>

                      <div className="p-6 bg-card/50 border border-card-border/50 rounded-lg">
                        <h4 className="font-oracle-subtitle text-lg mb-3">🌙 Baño de la Intuición</h4>
                        <p className="font-oracle-body text-sm mb-4 opacity-90">
                          <strong>Ingredientes:</strong> Hojas de artemisa, lavanda, romero, agua de luna llena, amatista pequeña
                        </p>
                        <p className="font-oracle-body text-sm opacity-75">
                          <strong>Finalidad:</strong> Desarrolla capacidades psíquicas, fortalece la intuición y conecta con guías espirituales
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentSection === 'incense' && (
                <div className="max-w-3xl mx-auto mt-16 mb-16">
                  <div className="bg-card border border-card-border rounded-xl p-8 backdrop-blur-sm golden-glow">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="font-oracle-title text-2xl md:text-3xl text-center flex-1">
                        ✦ Inciensos Sagrados ✦
                      </h3>
                      <OracleButton
                        variant="mystical"
                        size="sm"
                        onClick={() => setCurrentSection('main')}
                      >
                        ← Volver
                      </OracleButton>
                    </div>
                    <p className="font-oracle-body text-center mb-8 opacity-90">
                      Transforma el ambiente con estas fragancias celestiales que elevan la vibración del hogar
                    </p>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <h4 className="font-oracle-subtitle text-lg">🔥 Sándalo</h4>
                        <p className="font-oracle-body text-sm opacity-75">Promueve serenidad, facilita la meditación y conecta con energías superiores</p>
                      </div>
                      
                      <div className="p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <h4 className="font-oracle-subtitle text-lg">⚡ Palo Santo</h4>
                        <p className="font-oracle-body text-sm opacity-75">Limpia energías densas, protege el ambiente y atrae paz espiritual</p>
                      </div>
                      
                      <div className="p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <h4 className="font-oracle-subtitle text-lg">🌸 Jazmín</h4>
                        <p className="font-oracle-body text-sm opacity-75">Despierta la sensualidad, atrae el amor y fortalece vínculos afectivos</p>
                      </div>

                      <div className="p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <h4 className="font-oracle-subtitle text-lg">💰 Mirra</h4>
                        <p className="font-oracle-body text-sm opacity-75">Atrae abundancia material, protege contra envidia y purifica el ambiente</p>
                      </div>

                      <div className="p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <h4 className="font-oracle-subtitle text-lg">🧿 Olíbano</h4>
                        <p className="font-oracle-body text-sm opacity-75">Fortalece la protección espiritual, eleva la conciencia y favorece rituales sagrados</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {selectedVideo && (
                <YouTubePlayerDialog
                  open={playerOpen}
                  onOpenChange={setPlayerOpen}
                  videoId={selectedVideo.id}
                  title={selectedVideo.title}
                />
              )}
              </div>
          )}
        </main>

        {/* Footer */}
        <footer className="text-center mt-20">
          <p className="font-oracle-body text-sm opacity-60">
            Que la luz de los ángeles ilumine siempre tu camino
          </p>
        </footer>
      </div>
    </div>
  );
};

export default OracleIndex;