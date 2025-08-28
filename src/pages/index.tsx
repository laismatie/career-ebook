import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { EbookForm } from "../components/EbookForm";
import { StaticImage } from "gatsby-plugin-image"

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

        <div className="absolute text-center ml-10 md:ml-20">
          <h1 className="text-white rounded text-2xl bg-black md:text-4xl font-bold p-2">
            Conquiste sua próxima vaga
          </h1>
          <h3 className="text-white rounded text-lg bg-purple-700 md:text-2xl p-2">
            Descubra como otimizar seu currículo e brilhar nas entrevistas.
          </h3>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-b from-purple-800 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-6">
            Transforme sua carreira com este e-book
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Descubra as estratégias que recrutadores realmente valorizam e conquiste as melhores oportunidades na área de tecnologia.
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <StaticImage
              src="../images/ebook.jpg"
              alt="Capa do e-book preto com detalhes em roxo"
              placeholder="blurred"
              layout="constrained"
              className="w-64 h-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform"
            />

            <div className="flex-1 space-y-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-7 h-7 bg-white rounded-full text-purple-900 font-bold">
                    ✓
                  </span>
                  <p>Aprenda a criar um currículo que se destaca em meio a centenas de candidatos.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-7 h-7 bg-white rounded-full text-purple-900 font-bold">
                    ✓
                  </span>
                  <p>Melhore seu LinkedIn para atrair recrutadores de empresas que você admira.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-7 h-7 bg-white rounded-full text-purple-900 font-bold">
                    ✓
                  </span>
                  <p>Ganhe confiança para se sair bem nas entrevistas e negociações salariais.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-7 h-7 bg-white rounded-full text-purple-900 font-bold">
                    ✓
                  </span>
                  <p>Descubra os erros que estão te impedindo de avançar na sua carreira.</p>
                </li>
              </ul>

              <div className="bg-purple-700 rounded-xl p-6 mt-6">
                <h3 className="text-2xl font-semibold mb-4">Este e-book é para você que:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Quer mais entrevistas e respostas positivas dos recrutadores.</li>
                  <li>Está cansada(o) de enviar currículos sem retorno.</li>
                  <li>Busca clareza e direcionamento para sua carreira em tecnologia.</li>
                </ul>
              </div>

              <button className="mt-8 bg-white text-purple-900 font-bold py-3 px-6 rounded-lg hover:bg-purple-100 transition shadow-lg text-lg">
                Baixe agora e comece sua transformação
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-200">
       <div className="text-center mb-8">
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
