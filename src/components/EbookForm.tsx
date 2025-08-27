import React from "react"
import { Formik, Form, Field, ErrorMessage, FieldProps } from "formik"
import * as Yup from "yup"
import InputMask from 'react-input-mask'

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
        <ErrorMessage name="phone" component="span" />
      </label>
      <button type="submit">
        Quero meu e-book agora
      </button>
    </Form>
  </Formik>
)