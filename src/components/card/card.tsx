import React from 'react'
import { BoxCard, Cat } from './card.styles'
import type{Sections} from '../../utils/cardData.ts';

interface CardProps{
    section: Sections;
}

const Card = ({section}:CardProps) => {
  return (
    <BoxCard>
        <p>{section.title}</p>
        <Cat>
        {section.categories.map((cat) => (
            
                <div>
                <img src={cat.image} alt={cat.title}/>
                    <span>{cat.title}</span>
                </div>
        ))}
        </Cat>
        <a href={section.exploreLink}>{section.exploreLink}</a>
    </BoxCard>
  )
}

export default Card