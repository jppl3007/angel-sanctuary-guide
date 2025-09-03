import React, { useState, useEffect } from 'react';

interface RevelationTextProps {
  content: string;
  onComplete?: () => void;
}

export const RevelationText: React.FC<RevelationTextProps> = ({ content, onComplete }) => {
  const [visibleSections, setVisibleSections] = useState<number>(0);
  const sections = content.split(/(?=##)/g).filter(section => section.trim());

  useEffect(() => {
    if (sections.length === 0) return;

    const timer = setInterval(() => {
      setVisibleSections(prev => {
        if (prev < sections.length) {
          return prev + 1;
        } else {
          clearInterval(timer);
          onComplete?.();
          return prev;
        }
      });
    }, 1500); // 1.5s delay between sections

    return () => clearInterval(timer);
  }, [sections.length, onComplete]);

  const formatText = (text: string) => {
    return text
      .replace(/##\s*([^#\n]+)/g, '<h2 class="font-oracle-title text-2xl md:text-3xl mb-6 text-center">$1</h2>')
      .replace(/\*\*([^*]+):\*\*/g, '<p class="font-oracle-subtitle text-lg mb-3">$1:</p>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-oracle-subtitle">$1</strong>')
      .replace(/\* \*\*([^*]+):\*\* ([^\n]+)/g, '<div class="ml-4 mb-2"><span class="font-oracle-subtitle text-primary">$1:</span> <span class="font-oracle-body">$2</span></div>')
      .replace(/\n\n/g, '</p><p class="font-oracle-body mb-4">')
      .replace(/^\s*([^<])/gm, '<p class="font-oracle-body mb-4">$1')
      .replace(/([^>])\s*$/gm, '$1</p>');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {sections.slice(0, visibleSections).map((section, index) => (
        <div
          key={index}
          className="revelation-text"
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          <div 
            dangerouslySetInnerHTML={{ __html: formatText(section) }}
            className="space-y-4"
          />
          {index < sections.length - 1 && <div className="sacred-divider" />}
        </div>
      ))}
    </div>
  );
};