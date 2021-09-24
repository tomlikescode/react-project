import React, { useState } from 'react';

const Year = ({ Year, Population, color, image, info, removeYear }) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <article className="single-year">
            {/* <img src="" alt="" /> */}
            <img src={image} alt={Year} />
            <footer>
                <div className="year-info">
                    <h4 className="year-number">{Year}</h4>
                    <h4 className="population">{Population.toLocaleString()}</h4>
                    <h4 className="color">{color}</h4>
                </div>
                    <p>
                        {readMore ? info : `${info.substring(0,50)}...`}
                    <button onClick={()=> setReadMore(!readMore)}>
                        {readMore ? 'show less' : ' read more'}
                    </button>
                    </p>
                    <button className="delete-btn" onClick={()=> removeYear(Year)}>
                        not interested
                    </button>
                    
            </footer>
        </article>
    )
    
}


export default Year;