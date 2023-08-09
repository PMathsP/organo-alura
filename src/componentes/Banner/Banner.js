import "./Banner.css";

export const Banner = () => {
  return (
    <header className="banner">
      <img
        src="/imagens/banner.png"
        alt="O banner principal da página do Organo"
      />
    </header>
  );
};

// JSX a forma que o react faz a leitura do código e transforma isso como elementos do DOM (parece HTML mas não é)
