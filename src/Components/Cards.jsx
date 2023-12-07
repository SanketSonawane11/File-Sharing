import React, { useState } from 'react'
import { MdMenuBook } from "react-icons/md";
import { TiDownloadOutline } from "react-icons/ti";
import { CgClose } from "react-icons/cg";
// import ReactTooltip from 'react-tooltip';



function Cards({data}) {

    const [download, setDownload] = useState(data.downloading);
    const [progressBar, setProgressBar] = useState(data.tag.show);

    const changeState = () =>
    {
        setDownload(!download);
        if(download)    setProgressBar(true);
        else    setProgressBar(false);
    }

  return (

        <div className='card'>

            <MdMenuBook/>

            <p className='cardText'>

                {data.desc}

            </p>


            <footer className='cardFooter'>

                <div className='footerText'>

                    <h6 className='sizeText'> {data.fileSize} </h6>
                    <button className='downloadLogo' onClick={changeState}> 
                        {download ? <CgClose /> : <TiDownloadOutline size='1em'/>}
                    </button>
                    
                </div>

                <div className='pb'>

                    {progressBar && <div className='progressBar'> {data.tag.tagTitle} </div>}

                </div>


            </footer>

        </div>

  )
}

export default Cards