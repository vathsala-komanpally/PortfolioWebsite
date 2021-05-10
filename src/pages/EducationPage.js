import React from 'react'
import {Education} from "../components/Education";

function EducationPage() {
    const education=[
        {startYear:"2020", endYear:"2021", institution:"General Assembly, Sydney, Australia", course:"Software Engineering Immersive Course"},
    {startYear:"2007", endYear:"2011", institution:"JNTU, Hyderabad, India", course:"Bachelor's in Computer Science"},
    {startYear:"2012", endYear:"2014", institution:"NTNU Gjøvik, Norway", course:"Master's in Information Security"}];
    return (
        <div className="education">
            <Education education={education}/>
        </div>
    )
}

export {EducationPage};
