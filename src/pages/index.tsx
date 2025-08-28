import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { EbookForm } from "../components/EbookForm";
import { StaticImage } from "gatsby-plugin-image"
import { AboutProduct } from "../components/AboutProduct";
import { Footer } from "../components/Footer";

const IndexPage: React.FC<PageProps> = () => {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <main className="bg-gray-950 min-h-screen">
      <header className="flex items-center h-[80vh]">
        <StaticImage
          src="../images/hero.jpg"
          alt="Mulher executiva loira com os braços cruzados em uma sala com outros profissionais ao fundo"
          placeholder="blurred"
          layout="fullWidth"
          className="inset-0 w-full h-full relative object-cover opacity-80"
        />

        <div className="absolute text-center px-6 md:ml-20">
          <h1 className="text-white rounded text-2xl bg-black md:text-4xl font-bold p-2">
            Conquiste sua próxima vaga
          </h1>
          <h3 className="text-white rounded text-lg bg-purple-700 md:text-2xl p-2">
            Descubra como otimizar seu currículo e brilhar nas entrevistas.
          </h3>
        </div>
      </header>

      <AboutProduct />
      
      <section className="py-10 bg-gray-200">
       <div className="text-center mb-8 px-6 md:px-2">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-900">
          Aprenda as melhores estratégias para conquistar sua próxima vaga
        </h2>
        <p className="text-gray-700 mt-2 text-sm md:text-lg">
          Estratégias práticas e rápidas para você aplicar hoje mesmo!
        </p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center px-4 md:px-20">
          {submitted ? (
            <div className="bg-green-100 p-4 rounded">
              <span className="text-green-800 font-semibold my-4">Formulário enviado! Em breve você receberá mais informações.</span>
            </div>
          ) : (
            <EbookForm onSuccess={() => setSubmitted(true)} />
          )}
          <StaticImage
            src="../images/woman.jpg"
            alt="Mulher sorridente de cabelos cacheados usando um laptop"
            placeholder="blurred"
            layout="fullWidth"
            className="w-full h-full rounded-lg opacity-80"
          />
        </div>
      </section>

      <Footer/>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Impulsione a sua carreira!</title>
    <meta
      name="description"
      content="Baixe seu e-book agora e aprenda como destacar seu currículo, LinkedIn e se preparar para entrevistas na área de tecnologia."
    />
  </>
);
