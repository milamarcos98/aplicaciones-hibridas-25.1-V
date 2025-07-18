import React from 'react'

const SignUpInfo = ({formData, setFormData}) => {
  return (
    <div className='sign-up-container'>
        <input type="text"
        placeholder='Email...'
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
         />
         <input type="password"
        placeholder='Password...'
        value={formData.password}
        onChange={(e) => setFormData({...formData, password: e.target.value})}
         />
         <input type="password"
        placeholder='confirmPassword...'
        value={formData.confirmPassword}
        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
         />
    </div>
  )
}

export default SignUpInfo