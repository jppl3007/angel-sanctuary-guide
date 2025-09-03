import React from 'react';

interface SacredGeometryProps {
  className?: string;
}

export const SacredGeometry: React.FC<SacredGeometryProps> = ({ className }) => {
  return (
    <div className={`sacred-geometry ${className || ''}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-primary text-2xl animate-sacred-pulse">✦</div>
      </div>
    </div>
  );
};