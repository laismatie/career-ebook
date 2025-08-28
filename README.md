# Career Ebook

Um projeto de landing page construído com **Gatsby**, **TypeScript** e **TailwindCSS**, cujo objetivo é oferecer um e-book para ajudar pessoas a impulsionarem suas carreiras na área de tecnologia. A página inclui formulário de captura, seção de vantagens e imagens otimizadas usando `gatsby-plugin-image`.

---

## 📦 Tecnologias e bibliotecas utilizadas

### **Gatsby**
- Framework React focado em **performance, SEO e geração de sites estáticos**.
- Plugins utilizados:
  - `gatsby-plugin-image`: otimização de imagens (Lazy Loading, responsive images).
  - `gatsby-plugin-sharp` e `gatsby-transformer-sharp`: processamento de imagens.
  - `gatsby-source-filesystem`: para ler arquivos do sistema, como imagens.
  - `gatsby-plugin-postcss`: integração do TailwindCSS com Gatsby.

### **React & TypeScript**
- `react` e `react-dom` para construir a UI de forma declarativa.
- `typescript` e `@types/*` para tipagem segura, evitando erros comuns.

### **Estilização**
- **TailwindCSS**: framework utilitário para estilização rápida e responsiva.
- **Autoprefixer**: adiciona prefixos CSS automaticamente para compatibilidade com navegadores.

### **Formulários**
- `formik`: gerenciamento de formulários com validação.
- `yup`: esquema de validação de dados do formulário.
- `react-input-mask`: máscara de entrada para campos como WhatsApp.

### **Ícones**
- `react-icons`: biblioteca de ícones (FontAwesome) para redes sociais e elementos visuais.

---

## ⚙️ Estrutura do projeto

```text
career-ebook/
│
├─ src/
│  ├─ components/      # Componentes reutilizáveis (EbookForm, AboutProduct Footer)
│  ├─ images/          # Imagens utilizadas no site
│  ├─ pages/           # Páginas (IndexPage)
│  └─ styles/          # Arquivos CSS globais (Tailwind)
│
├─ gatsby-config.js    # Configuração Gatsby + plugins
├─ postcss.config.js   # Configuração PostCSS/Tailwind
├─ tailwind.config.js  # Configuração Tailwind
└─ package.json        # Dependências e scripts
```


## 🚀 Scripts disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run develop` | Inicia o servidor de desenvolvimento com hot reload |
| `npm run start` | Alias para `develop` |
| `npm run build` | Gera a versão estática do site para produção |
| `npm run serve` | Serve a versão buildada localmente |
| `npm run clean` | Limpa o cache do Gatsby |
| `npm run typecheck` | Executa verificação de tipos TypeScript sem gerar arquivos |

---

## 📑 Funcionalidades

1. **Hero Section** com imagem de fundo e texto chamativo.
2. **Seção de vantagens** do e-book, mostrando os benefícios.
3. **Formulário de captura** com validação usando Formik + Yup.
4. **Imagens otimizadas** com `gatsby-plugin-image`.
5. **Footer** com contato, redes sociais e botão de CTA.
6. Layout responsivo **Mobile / Desktop** usando TailwindCSS.

---

## ⚡ Como rodar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/career-ebook.git
cd career-ebook
```
2. Instale as dependências:

```bash
npm install
```
3. Rode o servidor de desenvolvimento:

```bash
npm run develop
```
3. Abra no navegador: http://localhost:8000

## Landing Page Preview

![Landing page preview](assets/demo.gif)
