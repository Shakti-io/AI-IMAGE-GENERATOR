import React, { useRef,useState } from 'react'
import './ImageGenertor.css'
import default_image from '../Assets/default_image.png'
export const ImageGenertor = () => {

    const [image_url,setImage_url] = useState("/");
    let inputRef = useRef(null);

    const ImageGenertor = async () => {
        if(inputRef.current.value===""){
            return 0;
        }
        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:
                    "Bearer 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",
                    "User-Agent":"Chrome",
                },
                body:JSON.stringify({
                    prompt:'${inputRef.current.value}',
                    n:1,
                    size:"512x512",
                }),
            }
        );
    }



  return (
    <div className='ai-image-genertor'>
        <div className="header">Ai Image <span>Genertor</span></div>
        <div className="img-loading">
            <div className="image"><img src={image_url==="/"?default_image:image_url} alt=""/></div>

        </div>
        <div className="search-box">
            <input type="text" ref={inputRef} className='search-input' placeholder='Describe what you want to see..' />
            <div className="generate-btn" onClick={()=>{ImageGenertor()}}>Generate</div>
        </div>

    </div>
  )
}
export default ImageGenertor