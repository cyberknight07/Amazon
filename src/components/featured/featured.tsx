import React from 'react'
import { Feature, Image } from './featured.styles.ts';

const Featured : React.FC = () => {
  return (
    <Feature>
        <svg xmlns="http://www.w3.org/2000/svg" className='arrow left' viewBox="0 0 24 24">
  <polyline points="15 18 9 12 15 6"></polyline>
</svg>
        <Image src='assets/banner.jpg'/>
        <svg xmlns="http://www.w3.org/2000/svg" className='arrow right' viewBox="0 0 24 24">
  <polyline points="9 18 15 12 9 6"></polyline>
</svg>
    </Feature>
  )
}

export default Featured;