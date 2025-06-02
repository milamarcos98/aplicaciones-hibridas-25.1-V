import React from 'react'

const PersonalInfo = ({formData, setFormData}) => {
  return (
    <div className='personal-info-container'>
        <input type="text"
        placeholder='firstName...'
        value={formData.firstName}
        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
         />
         <input type="text"
        placeholder='lastName...'
        value={formData.lastName}
        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
         />
         <input type="text"
        placeholder='username...'
        value={formData.username}
        onChange={(e) => setFormData({...formData, username: e.target.value})}
         />
    </div>
  )
}

export default PersonalInfo