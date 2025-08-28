import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { EbookForm } from "../components/EbookForm";
import { StaticImage } from "gatsby-plugin-image"

const IndexPage: React.FC<PageProps> = () => {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <main className="bg-gray-950 min-h-screen">
      <header className="flex justify-center h-[90vh]">
        <StaticImage
          src="../images/hero.jpg"
          alt="Muitas pessoas em um evento de tecnologia"
          placeholder="blurred"
          layout="fullWidth"
          className="inset-0 w-full h-full relative object-cover opacity-60 grayscale-100"
        />
        
        <div className="absolute text-center mt-12 md:mt-28">
          <h1 className="text-white rounded text-2xl bg-black md:text-4xl font-bold p-2">
            Conquiste sua próxima vaga
          </h1>
          <h3 className="text-white rounded text-lg bg-purple-800 md:text-2xl p-2">
            Descubra como otimizar seu currículo e brilhar nas entrevistas.
          </h3>
        </div>
      </header>

      <section className="py-12 bg-purple-800">
        <h2 className="text-2xl font-semibold text-white text-center mb-4">O que você vai aprender com esse e-book?</h2>
        <div className="flex justify-center items-center gap-6 md:gap-16 flex-wrap">
          <StaticImage
            src="../images/ebook.jpg"
            alt="Imagem da capa do e-book preto com detalhes em roxo"
            placeholder="blurred"
            layout="fullWidth"
            className="w-60 h-auto rounded-lg"
          />
          <ul className="list-disc space-y-2 text-white text-lg">
            <li>Como montar um currículo atrativo que chame a atenção dos recrutadores</li>
            <li>Dicas práticas para destacar seu LinkedIn</li>
            <li>Estratégias de comunicação para se posicionar com confiança</li>
            <li>Como valorizar habilidades técnicas e comportamentais</li>
            <li>Preparação para entrevistas de emprego</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Garanta seu acesso exclusivo ao e-book</h2>
        {submitted ? (
          <div className="bg-green-100 p-4 rounded">
            Formulário enviado! Em breve você receberá mais informações.
          </div>
        ) : (
          <EbookForm onSuccess={() => setSubmitted(true)} />
        )}
      </section>

      <footer className="border-t pt-6 text-sm text-center text-gray-600">
        <h3 className="font-semibold mb-2">Contato</h3>
        <p>devgirlsofc@gmail.com</p>
        <p>Transformamos o setor tech e ampliamos oportunidades para todos!</p>
      </footer>
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
