import React, { useState } from 'react'
import FormInput from './components/FormInput'

const Form1 = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  })

  const handleOnChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage:
      "Username should be 3-20 characters and shouldn't include any special character!",
      label: "username",
      // https://regex101.com/
      pattern: "^[A-Za-z0-9]{3,20}$",
      required: true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      pattern: "[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+",
      required: true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    }
  ]


  return (
    <form onSubmit={(e) => {
      e.preventDefault();
    }}>
      {
        inputs.map((input) => (
          <FormInput key={input.id} value={values[input.name]} handleOnChange={handleOnChange} {...input} />
        ))
      }
      <button>Submit</button>
    </form>
  )
}

export default Form1