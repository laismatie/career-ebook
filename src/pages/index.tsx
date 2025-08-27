import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Formik, Form, Field, ErrorMessage, FieldProps } from "formik"
import * as Yup from "yup"
import InputMask from "react-input-mask"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const doclistStyles = {
  paddingLeft: 0,
}
const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const buttonStyles = {
  marginBottom: 48,
}

const validationSchema = Yup.object({
  name: Yup.string().required("Nome obrigatório"),
  email: Yup.string().email("Email inválido").required("Email obrigatório"),
  phone: Yup.string().required("WhatsApp obrigatório"),
})

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <div>
        <h1 style={headingStyles}>
          Conquiste sua próxima vaga de emprego em tecnologia
        </h1>
        <h3 style={headingAccentStyles}>Descubra os segredos para montar um currículo atrativo, se destacar no LinkedIn e brilhar em entrevistas.</h3>
        <button style={buttonStyles}>
          Quero meu e-book agora
        </button>
      </div>

      <div>
        <h2>Por que este e-book é para você?</h2>
        <ul style={doclistStyles}>
            <li  style={docLinkStyle}>
              Como montar um currículo atrativo que chame a atenção dos recrutadores
            </li>
            <li  style={docLinkStyle}>
              Dicas práticas para destacar seu LinkedIn
            </li>
            <li  style={docLinkStyle}>
              Estratégias de comunicação para se posicionar com confiança
            </li>
            <li  style={docLinkStyle}>
              Como valorizar habilidades técnicas e comportamentais
            </li>
            <li  style={docLinkStyle}>
              Preparação para entrevistas de emprego
            </li>
        </ul>
      </div>

      <div>
        <h1>Garanta seu acesso exclusivo ao e-book</h1>
       <Formik
          initialValues={{ name: "", email: "", phone: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // handle form submission here
            alert(JSON.stringify(values, null, 2))
          }}
          validateOnChange={false}
        >
          <Form>
            <label>
              Name
              <Field type="text" name="name" id="name" />
              <ErrorMessage name="name" component="span" />
            </label>
            <label>
              Email
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email" component="span" />
            </label>
            <label>
              WhatsApp
              <Field name="phone">
                {({ field }: FieldProps) => (
                  <InputMask
                    {...field}
                    mask="(99) 99999-9999"
                    placeholder="(99) 99999-9999"
                    id="phone"
                    type="text"
                  />
                )}
              </Field>
            </label>
            <button style={buttonStyles} type="submit">
              Quero meu e-book agora
            </button>
          </Form>
        </Formik>
        
      </div>

      <div>
        <h3>Contato</h3>
        <p>devgirlsofc@gmail.com</p>
        <p>Transformamos o setor tech e ampliamos oportunidades para todos!</p>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Impulsione a sua carreira!</title>
