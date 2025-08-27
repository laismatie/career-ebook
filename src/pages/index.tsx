import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { EbookForm } from "../components/EbookForm";

const IndexPage: React.FC<PageProps> = () => {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">
          Conquiste sua próxima vaga de emprego em tecnologia
        </h1>
        <p className="text-lg mb-6">
          Descubra os segredos para montar um currículo atrativo, se destacar no LinkedIn e brilhar em entrevistas.
        </p>
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          aria-label="Solicitar o e-book gratuito"
        >
          Quero meu e-book agora
        </button>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">O que você vai aprender com esse e-book?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Como montar um currículo atrativo que chame a atenção dos recrutadores</li>
          <li>Dicas práticas para destacar seu LinkedIn</li>
          <li>Estratégias de comunicação para se posicionar com confiança</li>
          <li>Como valorizar habilidades técnicas e comportamentais</li>
          <li>Preparação para entrevistas de emprego</li>
        </ul>
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
