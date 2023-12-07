import React, { useRef, useState } from 'react'
import Cards from './Cards'

function PlayArea() {

    const ref = useRef(null);

    const data = [
        {
          desc: 'Description for the first entry. Some unique text here.',
          fileSize: '0.1mb',
          downloading: true,
          tag: { show: false, tagTitle: 'Download Now!' }
        },
        {
          desc: 'The second entry has a specific description. Different content here.',
          fileSize: '0.2mb',
          downloading: false,
          tag: { show: true, tagTitle: 'Get it here!' }
        },
        {
          desc: 'Description for the third entry. Unique content for this entry.',
          fileSize: '0.3mb',
          downloading: false,
          tag: { show: false, tagTitle: 'Get it now!'}
        },
        {
          desc: 'Another entry with its distinct description. Specific content.',
          fileSize: '45mb',
          downloading: false,
          tag: { show: false, tagTitle: 'Download Now!' }
        },
        {
          desc: 'Description for the fifth entry. Different content for this entry.',
          fileSize: '1gb',
          downloading: false,
          tag: { show: true, tagTitle: 'Get it now!'}
        }
      ];
      

  return (
    <div className='playAreaMain'>
        
        <div ref={ref} className='content'>

            {data.map((item, index) =>
            (
                <Cards data = {item} referenceWindow = {ref}/>
            ))}

        </div>

    </div>
  )
}

export default PlayArea