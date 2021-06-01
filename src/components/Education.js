import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Education=(props)=> {
    return (
        <div>
             <Card >
                <CardContent >
            <h3>Education:</h3>
            <ul>
            {props.education.map((Element) =>
            (<div key={Element.institution}><h3>{Element.course}</h3>
                <p className="info">{Element.institution} <em className="date">({Element.startYear}-{Element.endYear})</em></p>
                </div>
            )
            )}
            </ul><br/>
            <h5>Publication:</h5>
            <Typography variant="subtitle1">
            Patrick Bours & Vathsala Komanpally, “Performance of Keystroke Dynamics when Allowing Typing Corrections"; <br/>
            Proceedings of the 2nd International Workshop on Biometrics and Forensics (IWBF), 2014.
          </Typography>
          </CardContent>
          </Card>
        </div>

    )
}

export { Education };
{/* <div key={Element.institution}><h3>{Element.institution}</h3>
<p className="info">{Element.course} <span>&bull;</span><em className="date">{Element.startYear}-{Element.endYear}</em></p>
</div> */}
{/* <li>{Element.startYear}-{Element.endYear}   {Element.course}<p>
                {Element.institution}</p></li> */}