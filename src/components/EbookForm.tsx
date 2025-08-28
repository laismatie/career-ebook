import React from "react"
import { Formik, Form, Field, ErrorMessage, FieldProps } from "formik"
import * as Yup from "yup"
import InputMask from "react-input-mask"

const validationSchema = Yup.object({
  name: Yup.string().required("Nome obrigatório"),
  email: Yup.string().email("Email inválido").required("Email obrigatório"),
  phone: Yup.string().required("WhatsApp obrigatório"),
})

export const EbookForm: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => (
  <Formik
    initialValues={{ name: "", email: "", phone: "" }}
    validationSchema={validationSchema}
    onSubmit={(values, { resetForm }) => {
      onSuccess()
      resetForm()
    }}
    validateOnChange={false}
  >
    {({ isSubmitting }) => (
      <Form className="flex flex-col gap-5 max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-8">
        
        <div className="text-center mb-2">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-900">
            Baixe seu e-book!
          </h2>
          <p className="text-gray-700 mt-1 text-sm md:text-base">
            Preencha seus dados e receba as melhores dicas para turbinar sua carreira.
          </p>
        </div>

        <label className="flex flex-col font-semibold text-lg">
          Nome:
          <Field
            className="border-2 border-purple-400 rounded-lg p-3 outline-none bg-white 
            focus:ring-2 focus:ring-purple-500 transition"
            type="text"
            name="name"
            id="name"
            placeholder="Seu nome completo"
          />
          <ErrorMessage className="text-red-400 text-sm" name="name" component="span" />
        </label>

        <label className="flex flex-col font-semibold text-lg">
          Email:
          <Field
            className="border-2 border-purple-400 rounded-lg p-3 outline-none bg-white 
            focus:ring-2 focus:ring-purple-500 transition"
            type="email"
            name="email"
            id="email"
            placeholder="exemplo@email.com"
          />
          <ErrorMessage className="text-red-400 text-sm" name="email" component="span" />
        </label>

        <label className="flex flex-col font-semibold text-lg">
          WhatsApp:
          <Field name="phone">
            {({ field }: FieldProps) => (
              <InputMask
                {...field}
                mask="(99) 99999-9999"
                placeholder="(99) 99999-9999"
                id="phone"
                type="text"
                className="border-2 border-purple-400 rounded-lg p-3 outline-none bg-white 
                focus:ring-2 focus:ring-purple-500 transition"
              />
            )}
          </Field>
          <ErrorMessage className="text-red-400 text-sm" name="phone" component="span" />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-gradient-to-r from-purple-800 to-purple-600 text-white font-bold 
          text-lg md:text-xl py-3 rounded-lg hover:scale-105 transform 
          transition-all duration-300 shadow-md disabled:opacity-70"
        >
          {isSubmitting ? "Enviando..." : "Quero meu e-book gratuito"}
        </button>

        <p className="text-xs text-gray-500 text-center mt-1">
          Ao inserir meus dados, concordo com o envio das informações por e-mail.
        </p>
      </Form>
    )}
  </Formik>
)
