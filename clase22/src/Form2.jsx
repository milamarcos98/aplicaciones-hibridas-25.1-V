import React, { useState } from 'react'
import SignUpInfo from "./components/SignUpInfo.jsx"
import PersonalInfo from "./components/PersonalInfo.jsx"
import OtherInfo from "./components/OtherInfo.jsx"

const Form2 = () => {
    const [page, setPage] = useState(0)
    const [formData, setFormData] = useState({
        // sign up
        email: "",
        password: "",
        confirmPassword: "",
        // personal info
        firstName: "",
        lastName: "",
        username: "",
        // other info
        nationality: "",
        other: ""
    })

    console.log(formData)

    const FormTitles = ["Sign Up", "Personal Info", "Other"]

    const PageDisplay = () => {
        if(page === 0){
            return <SignUpInfo formData={formData} setFormData={setFormData} />
        }else if(page === 1){
            return <PersonalInfo formData={formData} setFormData={setFormData} />
        }else{
            return <OtherInfo formData={formData} setFormData={setFormData} />
        }
    }
  return (
    <div className='form'>
        <div className="form-container">
            <div className="header">
                <h1>{FormTitles[page]}</h1>
            </div>
            <div className='body'>
                {PageDisplay()}
            </div>
            <div className="footer">
                <button disabled={page == 0} onClick={() => setPage((currPage) => currPage - 1)}>Prev</button>
                <button onClick={() => {
                    if(page === FormTitles.length - 1){
                        alert("form submitted")
                    }else{
                        setPage((currPage) => currPage + 1)
                    }
                }}>{page === FormTitles.length - 1 ? "Submit" : "Next"} </button>
            </div>
        </div>
    </div>
  )
}

export default Form2