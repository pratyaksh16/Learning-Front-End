import React from 'react'
import './TypeTwoComponent.css'
export default function TypeTwoComponent({heading, description, link_title, image}) {
  return (
      <div className="type-two-container">
          <div>{heading}{description}{link_title}{image}</div>
      </div>
    
  )
}