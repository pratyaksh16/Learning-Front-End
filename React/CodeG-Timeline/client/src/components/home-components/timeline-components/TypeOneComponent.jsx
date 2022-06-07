import React from 'react'
import './TypeOneComponent.css'

export default function TypeOneComponent({heading, description, link_title, image}) {
  return (
    <div className="type-one-container">
      <div className="type-one-container-content">
        <div className="type-one-container-heading">{heading}</div>
        <div className="type-one-container-description">{description}</div>
        <div className="type-one-container-link">{link_title}</div>
      </div>
      <div className="type-one-container-illustration"><img src={image} alt="Illustrations" /></div>
    </div>
  )
}
