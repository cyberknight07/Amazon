import React from 'react'
import { SubHeading } from './SubHeader.styles';

const SubHeader = () => {

  const list : string[] = [
    "Amazon Haul"
,"Medical Care"
,"Amazon Basics"
,"Best Sellers"
,"Books"
,"Prime"
,"Registry"
,"Gift Cards"
,"Smart Home"
,"New Releases"
,"Groceries"
,"Today's Deals"
,"Customer Service"
,"Pharmacy"
,"Music"
,"Amazon Home"
,"Fashion"
,"Kindle Books"
,"Toys & Games"
,"Automotive"
,"Home Improvement"
,"Sports & Outdoors"
,"Baby"
,"Sell"
  ];

  return (
    <SubHeading>
      <div className='all'>
        <span>ic </span> All
      </div>
      <div className='list'>
        {list.map((item, index) => (
          <div className='list-item' key={index}>{item}</div>
        ))}
      </div>
    </SubHeading>
  )
}

export default SubHeader