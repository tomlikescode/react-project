import React from 'react'
import Year from './Year'

const Years = ({ years, removeYear }) => {
    return (
        <section>
            <div className="title">
                <h2>US population per year</h2>
                <div className="underline"></div>
            </div>
            <div>
                {years.map((year) => {
                return <Year key={year.Year} {...year} removeYear={removeYear}/>;
            })}
            </div>
            
        </section>
    )

}


export default Years;
