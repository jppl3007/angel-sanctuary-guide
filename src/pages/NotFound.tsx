import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="font-oracle-title text-6xl mb-4 text-primary">✦</div>
        <h1 className="font-oracle-title text-4xl mb-4">Caminho Não Encontrado</h1>
        <p className="font-oracle-body text-xl mb-6">Esta página não existe no plano astral digital</p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 font-oracle-subtitle text-primary hover:text-primary-glow transition-colors"
        >
          ← Retornar ao Oráculo
        </a>
      </div>
    </div>
  );
};

export default NotFound;
