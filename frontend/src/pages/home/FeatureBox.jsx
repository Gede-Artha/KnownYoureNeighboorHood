import React from 'react'

function FeatureBox(props) {
  return (
    <div className='a-box'>
      <div className='a-b-img'>
        <img src={props.image} alt='not found'/>
      </div>
      <div className='s-b-text'>
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur perferendis voluptatum quibusdam eius perspiciatis. Dolores corrupti amet illum quisquam minus omnis voluptas sapiente molestias culpa, atque vitae voluptate asperiores nobis.</p>
      </div>
    </div>
  )
}

export default FeatureBox;