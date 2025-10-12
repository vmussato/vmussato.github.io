import React from 'react';

interface FlagProps {
  className?: string;
  size?: number;
}

// Bandeira do Brasil
export const BrazilFlag: React.FC<FlagProps> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size * 0.7}
    viewBox="0 0 60 42"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Fundo verde */}
    <rect width="60" height="42" fill="#009739"/>
    {/* Losango amarelo */}
    <path
      d="M30 6L50 21L30 36L10 21L30 6Z"
      fill="#FEDD00"
    />
    {/* Círculo azul */}
    <circle
      cx="30"
      cy="21"
      r="8"
      fill="#002776"
    />
    {/* Faixa branca */}
    <path
      d="M22 18C22 18 26 21 30 19.5C34 21 38 18 38 18"
      stroke="white"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

// Bandeira dos Estados Unidos
export const USAFlag: React.FC<FlagProps> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size * 0.7}
    viewBox="0 0 60 42"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Fundo branco */}
    <rect width="60" height="42" fill="white"/>
    {/* Listras vermelhas */}
    <rect width="60" height="3.23" y="0" fill="#B22234"/>
    <rect width="60" height="3.23" y="6.46" fill="#B22234"/>
    <rect width="60" height="3.23" y="12.92" fill="#B22234"/>
    <rect width="60" height="3.23" y="19.38" fill="#B22234"/>
    <rect width="60" height="3.23" y="25.84" fill="#B22234"/>
    <rect width="60" height="3.23" y="32.3" fill="#B22234"/>
    <rect width="60" height="3.23" y="38.76" fill="#B22234"/>
    {/* Quadrado azul */}
    <rect width="24" height="22" fill="#3C3B6E"/>
    {/* Estrelas (simplificadas como pontos) */}
    <circle cx="4" cy="3" r="0.8" fill="white"/>
    <circle cx="8" cy="3" r="0.8" fill="white"/>
    <circle cx="12" cy="3" r="0.8" fill="white"/>
    <circle cx="16" cy="3" r="0.8" fill="white"/>
    <circle cx="20" cy="3" r="0.8" fill="white"/>
    <circle cx="6" cy="6" r="0.8" fill="white"/>
    <circle cx="10" cy="6" r="0.8" fill="white"/>
    <circle cx="14" cy="6" r="0.8" fill="white"/>
    <circle cx="18" cy="6" r="0.8" fill="white"/>
  </svg>
);

// Bandeira da Espanha
export const SpainFlag: React.FC<FlagProps> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size * 0.7}
    viewBox="0 0 60 42"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Faixa vermelha superior */}
    <rect width="60" height="10.5" y="0" fill="#AA151B"/>
    {/* Faixa amarela central */}
    <rect width="60" height="21" y="10.5" fill="#F1BF00"/>
    {/* Faixa vermelha inferior */}
    <rect width="60" height="10.5" y="31.5" fill="#AA151B"/>
    {/* Escudo (simplificado) */}
    <rect x="18" y="16" width="8" height="10" fill="#F1BF00" stroke="#AA151B" strokeWidth="0.5"/>
  </svg>
);