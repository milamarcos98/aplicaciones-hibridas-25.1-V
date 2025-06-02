import React from 'react'

const OtherInfo = ({formData, setFormData}) => {
  return (
    <div className='other-info-container'>
        <input type="text"
        placeholder='nationality...'
        value={formData.nationality}
        onChange={(e) => setFormData({...formData, nationality: e.target.value})}
         />
         <input type="text"
        placeholder='other...'
        value={formData.other}
        onChange={(e) => setFormData({...formData, other: e.target.value})}
         />
    </div>
  )
}

export default OtherInfo