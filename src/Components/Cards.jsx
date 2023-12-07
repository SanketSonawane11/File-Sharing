import React, { useEffect, useState } from 'react'
import { MdMenuBook } from "react-icons/md";
import { BsDownload } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { motion } from 'framer-motion'



function Cards({data, referenceWindow}) {

    const [download, setDownload] = useState(data.downloading);
    const [progressBar, setProgressBar] = useState(data.tag.show);

    // setProgressBar(download);

    // const changeState = () =>
    // {
    //     setDownload(!download);
    //     setProgressBar(!download);
    // }

    const changeState = () => {

        setDownload(prevDownload => !prevDownload);
    }
    
    useEffect(() => {

        setProgressBar(!download);
    }, [download]);
    

    useEffect(() => {
        setProgressBar(!download);
    }, []);
    

  return (

        <motion.div drag dragConstraints={referenceWindow} className='card'>

            <MdMenuBook/>

            <p className='cardText'>

                {data.desc}

            </p>


            <footer className='cardFooter'>

                <div className='footerText'>

                    <h6 className='sizeText'> {data.fileSize} </h6>
                    <button className='downloadLogo' onClick={changeState}> 
                        {download ? <CgClose /> : <BsDownload size='1em'/>}
                    </button>
                    
                </div>

                <div className='pb'>

                    {progressBar ? <div className='progressBar'> {data.tag.tagTitle} </div> : <div className='progressBar hidden'> Progress Bar appears here </div>}

                </div>


            </footer>

        </motion.div>

  )
}

export default Cards