import React from 'react'
import './SectionTwo.scss'
import Anvara from '../../assets/imgs/Das.png'
import dasturlash from '../../assets/imgs/dasturlash.svg'
import ui from '../../assets/imgs/ui.png'
import dizatn from '../../assets/imgs/Dizayn.svg'
import log from '../../assets/imgs/log.png'
import logstika from '../../assets/imgs/Logstika i.svg'
import mark from '../../assets/imgs/mark.png'
import marketing from '../../assets/imgs/Marketing.svg'
import video from '../../assets/imgs/Video.svg'
import vid from '../../assets/imgs/vid.png'
import frnt from '../../assets/imgs/frnt.png'
import backend from '../../assets/imgs/backend.png'


const SectionTwo = () => {
    const data = [
        {
            id:1,
            img: Anvara,
            name:"Alisherova Anvara",
            position:"Dasturlash ustozi",
            icon: dasturlash
        },
        {
            id:2,
            img:ui,
            name:"Antota Nargiza",
            position:"UX/UI ustozi",
            icon: dizatn
        },
        {
            id:3,
            img:log,
            name:"Logistika",
            position:"Logistika ustozi",
            icon: logstika
        },
        {
            id:4,
            img:mark,
            name:"Mamaraimov Grichka",
            position:"Marketing ustozi",
            icon: marketing
        },
        {
            id:5,
            img:vid,
            name:"Malikov",
            position:"Videomontaj  ustozi",
            icon: video
        }
        ,{
            id:6,
            img:frnt,
            name:"Anvara Xoliqova",
            position:"Dasturlash ustozi",
            icon: dasturlash
        }
        ,
        {
            id:7,
            img:backend,
            name:"Alisherova Anvara",
            position:"Dasturlash ustozi",
            icon: dasturlash
        }
    ]

    const renderdata = data?.map((el)=>(
        <div className='user' key={el.id}>
           <img src={el.img} alt="" />
            <h3>{el.name}</h3>
            <div className="icon_wrapper">
                <img src={el.icon} alt="" />
                <p>{el.position}</p>
            </div>
        </div>
    ))
  return (
    <>
      <section id='Bizningustozlarimiz'>
        <div className="container">
            <h2 className='title_section_one'>Bizning ustozlarimiz</h2>
            <div className="user_wrapper">
                {renderdata}
            </div>
        </div>
      </section>
    </>
  )
}

export default SectionTwo