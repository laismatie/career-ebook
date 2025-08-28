import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export const AboutProduct = () => (
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
                        <li className="flex items-start gap-2 md:gap-3">
                            <span className="flex items-center justify-center w-10 md:w-6 h-6 bg-white rounded-full text-purple-900 font-bold">
                                ✓
                            </span>
                            <p>Aprenda a criar um currículo que se destaca em meio a centenas de candidatos.</p>
                        </li>
                        <li className="flex items-start gap-2 md:gap-3">
                            <span className="flex items-center justify-center w-10 md:w-6 h-6 bg-white rounded-full text-purple-900 font-bold">
                                ✓
                            </span>
                            <p>Melhore seu LinkedIn para atrair recrutadores de empresas que você admira.</p>
                        </li>
                        <li className="flex items-start gap-2 md:gap-3">
                            <span className="flex items-center justify-center w-10 md:w-6 h-6 bg-white rounded-full text-purple-900 font-bold">
                                ✓
                            </span>
                            <p>Ganhe confiança para se sair bem nas entrevistas e negociações salariais.</p>
                        </li>
                        <li className="flex items-start gap-2 md:gap-3">
                            <span className="flex items-center justify-center w-10 md:w-6 h-6 bg-white rounded-full text-purple-900 font-bold">
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
)