import React from 'react'
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function Skills() {
    const skillSet = [
        { skill: "Web Technologies GUI", languages: "HTML5, CSS3, Bootstrap" },
        { skill: "User Interactivity", languages: "JavaScript(ES6 Standard), React.js, JQuery" },
        { skill: "Editor", languages: "Visual Studio Code" },
        { skill: "Programming languages", languages: "C, C++, C#.net, MatLab" },
        { skill: "Database", languages: "MS SQL, Mongo DB" },
        { skill: "Server side framework", languages: "Express JS, NodeJS, Ruby on Rails" },
        { skill: "Operating systems", languages: "Windows 7/8/10, Mac OS" },
        { skill: "Project Management", languages: "Jira , Confluence." },
        { skill: "Version Control", languages: "GitHub ,Bitbuket." }
    ]
    return (
        <div className="skills">
            <TableContainer component={Paper} style={
                {width: 700}
            }>
      <Table aria-label="simple table">
    
    <Typography variant="h3">Skills:</Typography>
        <TableBody>
          {skillSet.map((skill) => (
            <TableRow key={skill.skill}>
              <TableCell component="th" scope="row">
                {skill.skill}
              </TableCell>
              <TableCell align="right">{skill.languages}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export { Skills };
{/* <div className="row education">
<div className="three columns header-col">
    <h1><span>Education</span></h1>
</div>

<div className="nine columns main-col">
    <div className="row item">
        <div className="twelve columns">
          .....Education
        </div>
    </div>
</div>

<div className="row skill">

    <div className="three columns header-col">
        <h1><span>Skills</span></h1>
    </div>

    <div className="nine columns main-col">
        <div className="bars">
            <ul className="skills">
                ...Skills
            </ul>
        </div>
    </div>
</div>

<div className="row work">

    <div className="three columns header-col">
        <h1><span>Projects</span></h1>
    </div>
    .....Projects

</div>
</div> */}


