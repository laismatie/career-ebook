import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FaInstagram, FaLinkedin } from "react-icons/fa"

export const Footer = () => (
    <footer className="bg-black text-gray-200 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <h3 className="font-bold text-lg mb-2 text-white">Sobre</h3>
                <p className="text-sm">
                    Transformamos o setor tech e ampliamos oportunidades para todos!
                    Junte-se a nós e conquiste sua próxima oportunidade na tecnologia.
                </p>
            </div>

            <div>
                <h3 className="font-bold text-lg mb-2 text-white">Contato</h3>
                <p className="text-sm">devgirlsofc@gmail.com</p>
                <p className="text-sm">+55 (xx) xxxx-xxxx</p>
            </div>

            <div>
                <h3 className="font-bold text-lg mb-2 text-white">Siga-nos</h3>
                <div className="flex gap-4 mt-2">
                    <a href="https://www.instagram.com/developergirls_/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://www.linkedin.com/company/developer-girls/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>

            <StaticImage
                src="../images/dev.jpg"
                alt="Logo Developer Girls"
                placeholder="blurred"
                layout="fullWidth"
                className="w-40 h-40 rounded-full"
            />
        </div>

        <div className="mt-10 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Developer Girls. Todos os direitos reservados.
        </div>
    </footer>
)