import React from 'react'
import "./Card"
interface Props  {
    companyName : string
    ticker : string
    price : number
}

const Card: React.FC<Props> = ({companyName, ticker,price}: Props) : JSX.Element => {
  return (
    <div className='card'>
        <img src='/apple.jpg' alt='Apple company logo' style={{ width: '400px', height: '400px' }} />
        <div className='details'>
            <h2>{companyName} ({ticker}) </h2>
            <p>{price}</p>
        </div>
        <p className='infon' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, ipsam.</p>
    </div>
    

  )
}

export default Card