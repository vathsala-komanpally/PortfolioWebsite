import React from 'react'

const Education=(props)=> {
    return (
        <div>
            <h3>Education:</h3>
            <ul>
            {props.education.map((Element) =>
            (<div key={Element.institution}><h3>{Element.course}</h3>
                <p className="info">{Element.institution} <em className="date">({Element.startYear}-{Element.endYear})</em></p>
                </div>
            )
            )}
            </ul>
        </div>

    )
}

export { Education };
{/* <div key={Element.institution}><h3>{Element.institution}</h3>
<p className="info">{Element.course} <span>&bull;</span><em className="date">{Element.startYear}-{Element.endYear}</em></p>
</div> */}
{/* <li>{Element.startYear}-{Element.endYear}   {Element.course}<p>
                {Element.institution}</p></li> */}