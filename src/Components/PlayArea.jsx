import React, { useState } from 'react'
import Cards from './Cards'

function PlayArea() {

    const data = [
        {
          desc: 'Description for the first entry. Some unique text here.',
          fileSize: '0.1mb',
          downloading: true,
          tag: { show: false, tagTitle: 'Download Now!', tagColor: 'blue' }
        },
        {
          desc: 'The second entry has a specific description. Different content here.',
          fileSize: '0.2mb',
          downloading: false,
          tag: { show: true, tagTitle: 'Get it here!', tagColor: 'green' }
        },
        {
          desc: 'Description for the third entry. Unique content for this entry.',
          fileSize: '0.3mb',
          downloading: false,
          tag: { show: false, tagTitle: 'Get it now!', tagColor: 'orange' }
        },
        {
          desc: 'Another entry with its distinct description. Specific content.',
          fileSize: '45mb',
          downloading: true,
          tag: { show: false, tagTitle: 'Download Now!', tagColor: 'red' }
        },
        {
          desc: 'Description for the fifth entry. Different content for this entry.',
          fileSize: '1gb',
          downloading: false,
          tag: { show: true, tagTitle: 'Get it now!', tagColor: 'purple' }
        }
      ];
      

  return (
    <div className='playAreaMain'>
        
        <div className='content'>

            {data.map((item, index) =>
            (
                <Cards data = {item}/>
            ))}

        </div>

    </div>
  )
}

export default PlayArea