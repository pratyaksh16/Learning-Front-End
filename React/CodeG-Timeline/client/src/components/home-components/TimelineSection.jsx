import React from 'react'
import './TimelineSection.css'
import TypeOneComponent from 'components/home-components/timeline-components/TypeOneComponent'
import TypeTwoComponent from 'components/home-components/timeline-components/TypeTwoComponent'
import data from 'components/home-components/timeline-components/TimelineComponentsData'
import image1 from 'components/home-components/timeline-components/missionandvision-illustration.png'
import image3 from 'components/home-components/timeline-components/practice-illustration.png'

const timelineNavItems = [
    {title:"Our Misson",link:"https://www.google.com"},
    {title:"Online IDE",link:"https://www.google.com"},
    {title:"Practice",link:"https://www.google.com"},
    {title:"Clubs",link:"https://www.google.com"}
];
export const TimelineSection = () => {
  return (
    <>
        <nav className='timeline-nav-list'>
            {timelineNavItems.map((e) => {
                return (<li key={e.title} onClick={()=>{window.open(e.link)}}><div>{e.title}</div></li>);
            })}
        </nav>
        <div className="timeline-community-container">
            <h1>Explore our community</h1>
            <div className="community-components-containers">
                <TypeOneComponent 
                    heading={data[0].heading} 
                    description={data[0].description} 
                    link_title={data[0].link_title} 
                    image={image1}
                />
                <TypeTwoComponent 
                    heading={data[1].heading} 
                    description={data[1].description} 
                    link_title={data[1].link_title} 
                    image={image1}
                />
                <TypeOneComponent 
                    heading={data[2].heading} 
                    description={data[2].description} 
                    link_title={data[2].link_title} 
                    image={image3}
                />
            </div>
        </div>
        <div className="timeline-clubs-container">
            <div className="clubs-components-container">

            </div>
        </div>
    </>
  )
}
