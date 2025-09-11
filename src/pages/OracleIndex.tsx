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
  const [currentSection, setCurrentSection] = useState<'main' | 'music' | 'herbs' | 'incense' | 'hierarchy' | 'numbers' | 'tarot'>('main');
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