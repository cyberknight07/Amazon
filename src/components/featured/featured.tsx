import React from 'react'
import { Feature, Image, FeatureCard, Banner} from './featured.styles.ts';
import { data } from '../../utils/cardData.ts';
import Card from '../card/card.tsx';

const Featured : React.FC = () => {
  return (
    
    <Feature>
        <Banner>
          <svg xmlns="http://www.w3.org/2000/svg" className='arrow left' viewBox="0 0 24 24">
  <polyline points="15 18 9 12 15 6"></polyline>
</svg>
        <Image src='assets/banner.jpg'/>
        <svg xmlns="http://www.w3.org/2000/svg" className='arrow right' viewBox="0 0 24 24">
  <polyline points="9 18 15 12 9 6"></polyline>
</svg>
        </Banner>
<FeatureCard>
  {
    data.sections.map((card, index) => (
      <Card key= {index} section={card}/>
    ))
  }
</FeatureCard>

    </Feature>
  )
}

export default Featured;