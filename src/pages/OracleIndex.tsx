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
  const [currentSection, setCurrentSection] = useState<'main' | 'music' | 'herbs' | 'incense' | 'hierarchy' | 'numbers' | 'tarot' | 'abilities' | 'reiki' | 'messages' | 'wellness'>('main');
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
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
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
                      {/* Novos botões */}
                      <OracleButton
                        variant="sacred"
                        size="lg"
                        onClick={() => setCurrentSection('hierarchy')}
                        className="h-auto p-6 flex flex-col items-center justify-center space-y-2 text-center"
                      >
                        <span className="text-3xl">👼</span>
                        <span className="font-oracle-subtitle text-base">Jerarquía</span>
                        <span className="font-oracle-body text-xs opacity-75">Niveles y funciones</span>
                      </OracleButton>
                      <OracleButton
                        variant="sacred"
                        size="lg"
                        onClick={() => setCurrentSection('numbers')}
                        className="h-auto p-6 flex flex-col items-center justify-center space-y-2 text-center"
                      >
                        <span className="text-3xl">🔢</span>
                        <span className="font-oracle-subtitle text-base">Números</span>
                        <span className="font-oracle-body text-xs opacity-75">Significado espiritual</span>
                      </OracleButton>
                      <OracleButton
                        variant="sacred"
                        size="lg"
                        onClick={() => setCurrentSection('tarot')}
                        className="h-auto p-6 flex flex-col items-center justify-center space-y-2 text-center"
                      >
                        <span className="text-3xl">🃏</span>
                        <span className="font-oracle-subtitle text-base">Tarot de Ángeles</span>
                        <span className="font-oracle-body text-xs opacity-75">Guía básica</span>
                      </OracleButton>
                      {/* Novos 4 botões */}
                      <OracleButton
                        variant="sacred"
                        size="lg"
                        onClick={() => setCurrentSection('abilities')}
                        className="h-auto p-6 flex flex-col items-center justify-center space-y-2 text-center"
                      >
                        <span className="text-3xl">✨</span>
                        <span className="font-oracle-subtitle text-base">Habilidades Espirituales</span>
                        <span className="font-oracle-body text-xs opacity-75">Desbloquea tu potencial</span>
                      </OracleButton>
                      <OracleButton
                        variant="sacred"
                        size="lg"
                        onClick={() => setCurrentSection('reiki')}
                        className="h-auto p-6 flex flex-col items-center justify-center space-y-2 text-center"
                      >
                        <span className="text-3xl">🙌</span>
                        <span className="font-oracle-subtitle text-base">Reiki Angelical</span>
                        <span className="font-oracle-body text-xs opacity-75">Sanación divina</span>
                      </OracleButton>
                      <OracleButton
                        variant="sacred"
                        size="lg"
                        onClick={() => setCurrentSection('messages')}
                        className="h-auto p-6 flex flex-col items-center justify-center space-y-2 text-center"
                      >
                        <span className="text-3xl">📩</span>
                        <span className="font-oracle-subtitle text-base">Mensajes Angelicales</span>
                        <span className="font-oracle-body text-xs opacity-75">Reconoce las señales</span>
                      </OracleButton>
                      <OracleButton
                        variant="sacred"
                        size="lg"
                        onClick={() => setCurrentSection('wellness')}
                        className="h-auto p-6 flex flex-col items-center justify-center space-y-2 text-center"
                      >
                        <span className="text-3xl">🧘</span>
                        <span className="font-oracle-subtitle text-base">Bienestar Espiritual</span>
                        <span className="font-oracle-body text-xs opacity-75">Reduce estrés y elévate</span>
                      </OracleButton>
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

              {/* Conteúdo dos novos botões */}
              {currentSection === 'hierarchy' && (
                <div className="max-w-3xl mx-auto mt-16 mb-16">
                  <div className="bg-card border border-card-border rounded-xl p-8 backdrop-blur-sm golden-glow">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="font-oracle-title text-2xl md:text-3xl text-center flex-1">✦ Jerarquía de los Ángeles ✦</h3>
                      <OracleButton variant="mystical" size="sm" onClick={() => setCurrentSection('main')}>← Volver</OracleButton>
                    </div>
                    <p className="font-oracle-body text-center mb-8 opacity-90">Los ángeles se organizan en nueve coros celestiales, cada uno con funciones específicas para guiar y proteger a la humanidad:</p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🔥 Serafines</h4>
                          <p className="font-oracle-body text-sm opacity-75">Los más cercanos al trono divino. Purificadores de almas, transmiten amor incondicional y elevan la vibración espiritual. Invocarlos para limpieza energética profunda.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>✨</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">👁️ Querubines</h4>
                          <p className="font-oracle-body text-sm opacity-75">Guardianes de la sabiduría divina y el conocimiento celestial. Ayudan en estudios, decisiones importantes y el despertar de la consciencia superior.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>📚</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">⚖️ Tronos</h4>
                          <p className="font-oracle-body text-sm opacity-75">Portadores de la justicia divina y el equilibrio universal. Median en conflictos, restauran la armonía y traen paz a situaciones caóticas.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>⚖️</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">👑 Dominaciones</h4>
                          <p className="font-oracle-body text-sm opacity-75">Supervisan las misiones angelicales y mantienen el orden cósmico. Ayudan a desarrollar liderazgo espiritual y autocontrol emocional.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>👑</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">⭐ Virtudes</h4>
                          <p className="font-oracle-body text-sm opacity-75">Canalizan milagros y energías de sanación. Fortalecen la fe, conceden gracias especiales y facilitan curaciones físicas y emocionales.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>💫</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">⚔️ Poderes</h4>
                          <p className="font-oracle-body text-sm opacity-75">Guerreros celestiales que defienden contra energías negativas y protegen el mundo espiritual. Liberan de ataduras y rompen maldiciones.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>🛡️</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🌍 Principados</h4>
                          <p className="font-oracle-body text-sm opacity-75">Guían naciones, comunidades y grupos hacia la armonía. Protegen ciudades, organizaciones y movimientos espirituales colectivos.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>🏛️</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">👼 Arcángeles</h4>
                          <p className="font-oracle-body text-sm opacity-75">Mensajeros principales entre el cielo y la tierra. Miguel (protección), Gabriel (comunicación), Rafael (sanación), Uriel (sabiduría) y otros grandes emisarios divinos.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>�</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🪽 Ángeles</h4>
                          <p className="font-oracle-body text-sm opacity-75">Protectores personales y guías espirituales de cada individuo. Tu ángel guardián, compañeros de vida que susurran orientación y consuelo en momentos de necesidad.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>💝</OracleButton>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentSection === 'numbers' && (
                <div className="max-w-3xl mx-auto mt-16 mb-16">
                  <div className="bg-card border border-card-border rounded-xl p-8 backdrop-blur-sm golden-glow">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="font-oracle-title text-2xl md:text-3xl text-center flex-1">✦ Números Repetidos ✦</h3>
                      <OracleButton variant="mystical" size="sm" onClick={() => setCurrentSection('main')}>← Volver</OracleButton>
                    </div>
                    <p className="font-oracle-body text-center mb-8 opacity-90">Los ángeles se comunican a través de secuencias numéricas. Cuando veas estos números repetidamente, es una señal divina:</p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">111 - Portal de Manifestación</h4>
                          <p className="font-oracle-body text-sm opacity-75">Nuevos comienzos, pensamientos se vuelven realidad rápidamente. Mantén pensamientos positivos y enfócate en tus deseos más elevados. Es momento de sembrar intenciones.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>1️⃣</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">222 - Equilibrio y Fe</h4>
                          <p className="font-oracle-body text-sm opacity-75">Mantén la fe en el proceso divino. Busca equilibrio en todas las áreas de tu vida. Las relaciones y asociaciones están siendo bendecidas. Paciencia y diplomacia.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>2️⃣</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">333 - Maestros Ascendidos</h4>
                          <p className="font-oracle-body text-sm opacity-75">Los maestros ascendidos (Jesús, Buda, santos) están cerca. Momento de crecimiento espiritual acelerado. Expresa tu creatividad y enseña lo que has aprendido.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>3️⃣</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">444 - Protección Angelical</h4>
                          <p className="font-oracle-body text-sm opacity-75">Miles de ángeles te rodean. Estás completamente protegido y amado. Es seguro seguir tu camino actual. Tus oraciones han sido escuchadas y serán respondidas.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>4️⃣</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">555 - Cambio Divino</h4>
                          <p className="font-oracle-body text-sm opacity-75">Transformaciones importantes se acercan. Libérate de lo que ya no te sirve. Los cambios que vienen son para tu mayor bien espiritual. Abraza lo nuevo con confianza.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>5️⃣</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">666 - Reequilibrio Espiritual</h4>
                          <p className="font-oracle-body text-sm opacity-75">Momento de reevaluar prioridades. Equilibra lo material con lo espiritual. No temas, solo es una llamada a elevar tus pensamientos hacia el amor y la luz divina.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>6️⃣</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">777 - Milagros y Bendiciones</h4>
                          <p className="font-oracle-body text-sm opacity-75">¡Felicitaciones! Estás en sincronía perfecta con el universo. Milagros están manifestándose. Tu vida espiritual está floreciendo. Confía en tu intuición.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>7️⃣</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">888 - Abundancia Infinita</h4>
                          <p className="font-oracle-body text-sm opacity-75">La abundancia financiera y material está llegando. Un ciclo de logros se completa. Tu trabajo duro está siendo recompensado por el universo de manera extraordinaria.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>8️⃣</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">999 - Misión de Vida</h4>
                          <p className="font-oracle-body text-sm opacity-75">Culminación y servicio a los demás. Es hora de compartir tus dones con el mundo. Un capítulo importante termina para dar paso a tu verdadero propósito de vida.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>9️⃣</OracleButton>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentSection === 'tarot' && (
                <div className="max-w-3xl mx-auto mt-16 mb-16">
                  <div className="bg-card border border-card-border rounded-xl p-8 backdrop-blur-sm golden-glow">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="font-oracle-title text-2xl md:text-3xl text-center flex-1">✦ Tarot de los Ángeles ✦</h3>
                      <OracleButton variant="mystical" size="sm" onClick={() => setCurrentSection('main')}>← Volver</OracleButton>
                    </div>
                    <p className="font-oracle-body text-center mb-8 opacity-90">El tarot angelical es un puente sagrado entre tu alma y los mensajeros celestiales. Aprende los pasos fundamentales:</p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🕯️ Preparación Sagrada</h4>
                          <p className="font-oracle-body text-sm opacity-75">Purifica tu espacio con salvia o palo santo. Enciende una vela blanca. Crea un ambiente de paz y silencio. Lávate las manos como ritual de limpieza energética.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>✨</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🙏 Conexión Angelical</h4>
                          <p className="font-oracle-body text-sm opacity-75">Invoca a tus ángeles guardianes y al Arcángel Gabriel para claridad. Pide protección y orientación divina. Respira profundo y centra tu corazón en amor y gratitud.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>👼</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">💫 Formulación de Preguntas</h4>
                          <p className="font-oracle-body text-sm opacity-75">Haz preguntas claras y específicas. Evita preguntas de sí/no. Enfócate en "¿Cómo puedo...?" o "¿Qué necesito saber sobre...?". Mantén una mente abierta y receptiva.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>❓</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🃏 Selección Intuitiva</h4>
                          <p className="font-oracle-body text-sm opacity-75">Baraja las cartas mientras meditas en tu pregunta. Siente la energía de cada carta. Selecciona las cartas que te llamen la atención con el corazón, no con la mente.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>🎴</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🔮 Interpretación Sagrada</h4>
                          <p className="font-oracle-body text-sm opacity-75">Observa símbolos, colores y sensaciones. Lee primero con el corazón, luego con la mente. Nota qué emociones despiertan las imágenes. Confía en tu primera impresión intuitiva.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>👁️</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">📝 Reflexión y Registro</h4>
                          <p className="font-oracle-body text-sm opacity-75">Anota tus interpretaciones y sentimientos en un diario espiritual. Medita sobre cómo aplicar la orientación en tu vida diaria. Agradece a los ángeles por su guía amorosa.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>📖</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🌟 Práctica Regular</h4>
                          <p className="font-oracle-body text-sm opacity-75">La consistencia fortalece tu conexión angelical. Practica diariamente, aunque sea una sola carta. Con el tiempo desarrollarás un lenguaje único con tus guías celestiales.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>⭐</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">💖 Integración Espiritual</h4>
                          <p className="font-oracle-body text-sm opacity-75">Los mensajes angelicales requieren acción amorosa. Aplica la sabiduría recibida con compasión hacia ti y otros. Recuerda: los ángeles siempre guían hacia el amor y la luz.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>�</OracleButton>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Conteúdo das novas seções */}
              {currentSection === 'abilities' && (
                <div className="max-w-3xl mx-auto mt-16 mb-16">
                  <div className="bg-card border border-card-border rounded-xl p-8 backdrop-blur-sm golden-glow">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="font-oracle-title text-2xl md:text-3xl text-center flex-1">✦ Habilidades Espirituales ✦</h3>
                      <OracleButton variant="mystical" size="sm" onClick={() => setCurrentSection('main')}>← Volver</OracleButton>
                    </div>
                    <p className="font-oracle-body text-center mb-8 opacity-90">Todos nacemos con dones espirituales. Aprende a desbloquear y desarrollar tu potencial divino:</p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🔮 Intuición y Clarividencia</h4>
                          <p className="font-oracle-body text-sm opacity-75">Practica la meditación diaria para silenciar la mente racional. Presta atención a tus primeras impresiones sobre personas y situaciones. Lleva un diario de sueños y visiones.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>👁️</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">👂 Clariaudiencia</h4>
                          <p className="font-oracle-body text-sm opacity-75">Escucha en silencio profundo. Los mensajes pueden llegar como susurros, música o palabras espontáneas. Confía en las ideas que aparecen sin esfuerzo en tu mente.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>🎵</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">💝 Empatía Espiritual</h4>
                          <p className="font-oracle-body text-sm opacity-75">Aprende a proteger tu energía con visualizaciones de luz blanca. Distingue entre tus emociones y las de otros. Usa tu sensibilidad para sanar y ayudar.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>❤️</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🙌 Sanación Energética</h4>
                          <p className="font-oracle-body text-sm opacity-75">Coloca tus manos sobre plantas o animales y siente el flujo de energía. Practica enviando amor y luz a personas que necesiten sanación. Desarrolla la imposición de manos.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>✨</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🔗 Comunicación Angelical</h4>
                          <p className="font-oracle-body text-sm opacity-75">Invoca a tus ángeles diariamente. Haz preguntas específicas y observa las respuestas en forma de señales, números, sensaciones o inspiraciones súbitas que llegan a tu corazón.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>👼</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🌟 Manifestación Consciente</h4>
                          <p className="font-oracle-body text-sm opacity-75">Visualiza tus deseos con emoción positiva. Actúa como si ya hubieras recibido lo que pides. Mantén gratitud constante y suelta el control de los tiempos divinos.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>🎯</OracleButton>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentSection === 'reiki' && (
                <div className="max-w-3xl mx-auto mt-16 mb-16">
                  <div className="bg-card border border-card-border rounded-xl p-8 backdrop-blur-sm golden-glow">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="font-oracle-title text-2xl md:text-3xl text-center flex-1">✦ Reiki Angelical ✦</h3>
                      <OracleButton variant="mystical" size="sm" onClick={() => setCurrentSection('main')}>← Volver</OracleButton>
                    </div>
                    <p className="font-oracle-body text-center mb-8 opacity-90">Combina la energía universal del Reiki con la guía angelical para una sanación profunda y transformadora:</p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🕯️ Preparación del Espacio Sagrado</h4>
                          <p className="font-oracle-body text-sm opacity-75">Enciende velas blancas y incienso de sándalo. Invoca a los Arcángeles Rafael (sanación), Miguel (protección), Gabriel (comunicación) y Uriel (sabiduría) para asistir en la sesión.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>🕯️</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🙏 Invocación Angelical</h4>
                          <p className="font-oracle-body text-sm opacity-75">Antes de canalizar Reiki, pide a tus ángeles que dirijan la energía hacia donde sea más necesaria. Solicita que transmuten cualquier energía densa en luz pura y amor divino.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>👼</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">✋ Imposición de Manos Angelical</h4>
                          <p className="font-oracle-body text-sm opacity-75">Coloca tus manos sobre los chakras mientras visualizas ángeles colocando sus manos sobre las tuyas. Siente cómo la energía dorada fluye desde las dimensiones celestiales hacia la persona.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>🙌</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">💎 Símbolos Sagrados</h4>
                          <p className="font-oracle-body text-sm opacity-75">Combina los símbolos tradicionales de Reiki con símbolos angelicales que recibas intuitivamente. Visualiza alas de ángel abrazando a la persona durante la sanación.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>📜</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🌈 Sanación de Cuerpos Sutiles</h4>
                          <p className="font-oracle-body text-sm opacity-75">Trabaja no solo en el cuerpo físico, sino también en los cuerpos emocional, mental y espiritual. Los ángeles pueden mostrar bloqueos energéticos como sombras que necesitan luz.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>🔮</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">💝 Integración y Cierre</h4>
                          <p className="font-oracle-body text-sm opacity-75">Termina agradeciendo a los ángeles y sellando la sanación con amor incondicional. Pide que la persona integre la energía angelical gradualmente y con gracia divina.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>🙏</OracleButton>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentSection === 'messages' && (
                <div className="max-w-3xl mx-auto mt-16 mb-16">
                  <div className="bg-card border border-card-border rounded-xl p-8 backdrop-blur-sm golden-glow">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="font-oracle-title text-2xl md:text-3xl text-center flex-1">✦ Mensajes Angelicales ✦</h3>
                      <OracleButton variant="mystical" size="sm" onClick={() => setCurrentSection('main')}>← Volver</OracleButton>
                    </div>
                    <p className="font-oracle-body text-center mb-8 opacity-90">Los ángeles se comunican constantemente contigo. Aprende a reconocer y interpretar sus señales divinas:</p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🔢 Números Repetitivos</h4>
                          <p className="font-oracle-body text-sm opacity-75">Cuando veas 11:11, 333, 444 frecuentemente, son mensajes directos. Cada secuencia tiene un significado específico. Anota cuándo y dónde los ves para entender el contexto.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>🔢</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🪶 Plumas en el Camino</h4>
                          <p className="font-oracle-body text-sm opacity-75">Encontrar plumas, especialmente blancas, es una señal angelical clásica. Significa que estás protegido y que tus oraciones han sido escuchadas. Guárdalas como recordatorio del amor divino.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>🪶</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🦋 Animales Mensajeros</h4>
                          <p className="font-oracle-body text-sm opacity-75">Mariposas, libélulas, pájaros que aparecen repetidamente son mensajeros angelicales. Cada animal tiene un simbolismo único. Presta atención a su comportamiento y momento de aparición.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>🦋</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🎵 Sonidos y Música</h4>
                          <p className="font-oracle-body text-sm opacity-75">Escuchar campanas sin fuente aparente, música celestial o canciones que responden a tus preguntas son comunicaciones angelicales. Los ángeles usan la vibración sonora para transmitir amor.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>🎶</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">💡 Pensamientos Inspiradores</h4>
                          <p className="font-oracle-body text-sm opacity-75">Ideas brillantes que llegan de repente, especialmente soluciones a problemas, son inspiraciones angelicales. Estos pensamientos vienen con paz y claridad, nunca con miedo o prisa.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>💡</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🌈 Señales en el Cielo</h4>
                          <p className="font-oracle-body text-sm opacity-75">Arcoíris inesperados, nubes con formas significativas, destellos de luz sin explicación son señales celestiales de bendición y confirmación de que estás en el camino correcto.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>🌈</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">👥 Personas Ángel</h4>
                          <p className="font-oracle-body text-sm opacity-75">Extraños que aparecen en el momento exacto para ayudarte, con las palabras perfectas o la asistencia que necesitas, son ángeles en forma humana enviados para apoyarte en tu jornada.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>😇</OracleButton>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentSection === 'wellness' && (
                <div className="max-w-3xl mx-auto mt-16 mb-16">
                  <div className="bg-card border border-card-border rounded-xl p-8 backdrop-blur-sm golden-glow">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="font-oracle-title text-2xl md:text-3xl text-center flex-1">✦ Bienestar Espiritual ✦</h3>
                      <OracleButton variant="mystical" size="sm" onClick={() => setCurrentSection('main')}>← Volver</OracleButton>
                    </div>
                    <p className="font-oracle-body text-center mb-8 opacity-90">Técnicas sagradas para reducir el estrés, elevar tu vibración y encontrar paz interior duradera:</p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🧘 Meditación Angelical</h4>
                          <p className="font-oracle-body text-sm opacity-75">Siéntate en silencio, respira profundo y visualiza luz dorada llenando tu cuerpo. Invoca a tu ángel guardián y permanece receptivo. Incluso 10 minutos diarios transforman tu energía.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>🧘</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🌬️ Respiración Consciente</h4>
                          <p className="font-oracle-body text-sm opacity-75">Practica respiración 4-7-8: inhala por 4, mantén por 7, exhala por 8 tiempos. Con cada exhalación, libera estrés y tensión. Con cada inhalación, recibe paz divina.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>💨</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🙏 Oración de Gratitud</h4>
                          <p className="font-oracle-body text-sm opacity-75">Al despertar y antes de dormir, agradece tres cosas específicas. La gratitud sincera eleva instantáneamente tu vibración y atrae más bendiciones a tu vida.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>💝</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🛁 Baños de Luz</h4>
                          <p className="font-oracle-body text-sm opacity-75">Añade sal marina y aceites esenciales al agua. Visualiza luz violeta purificando tu aura. Pide a los ángeles que disuelvan cualquier energía que no te pertenezca o que ya no necesites.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>🛁</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🌿 Conexión con la Naturaleza</h4>
                          <p className="font-oracle-body text-sm opacity-75">Camina descalzo sobre tierra o césped. Abraza árboles y siente su energía sanadora. La naturaleza es el templo natural donde los ángeles se manifiestan más fácilmente.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>🌳</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">🎨 Expresión Creativa</h4>
                          <p className="font-oracle-body text-sm opacity-75">Dibuja, canta, baila o escribe desde el corazón. La creatividad es un canal directo para la energía angelical. No busques perfección, busca expresión auténtica de tu alma.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>🎨</OracleButton>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-card/50 border border-card-border/50 rounded-lg">
                        <div>
                          <h4 className="font-oracle-subtitle text-lg">💤 Sueño Sagrado</h4>
                          <p className="font-oracle-body text-sm opacity-75">Antes de dormir, pide a tus ángeles que te visiten en sueños con mensajes y sanación. Mantén un cuaderno junto a la cama para registrar las inspiraciones que recibas.</p>
                        </div>
                        <OracleButton variant="sacred" size="sm" disabled>🌙</OracleButton>
                      </div>
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