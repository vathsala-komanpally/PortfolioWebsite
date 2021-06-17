import React from 'react'
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SkillsLogo from '../images/StickerBanner_WebDev.png';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


function Skills() {
    const skillSet = [
        { skill: "Web Technologies GUI", languages: "HTML5, CSS3, Bootstrap" },
        { skill: "User Interactivity", languages: "JavaScript(ES6 Standard), React.js, JQuery" },
        { skill: "Editor", languages: "Visual Studio Code" },
        { skill: "Programming languages", languages: "C, C++, C#.net, Ruby" },
        { skill: "Database", languages: "MS SQL, Mongo DB, PostgreSQL" },
        { skill: "Server side framework", languages: " Express. js, Node. js, Ruby on Rails" },
        { skill: "Operating systems", languages: "Windows 7/8/10, Mac OS" },
        { skill: "Project Management", languages: "Jira , Confluence." },
        { skill: "Version Control", languages: "GitHub ,Bitbuket." }
    ]
    return (
        <div className="skills">
            <div className="skills-info">
            <Card style={{borderRadius:"30px"}}>
                <CardContent>
                    <Typography variant="h4" style={{color:"rgb(67, 95, 112)"}}>Skills:</Typography>
                    <CardMedia style={{height:100, width:500}} image={SkillsLogo} title="skill logo" />
                    <TableContainer component={Paper} style={{ width: 500 }}>
                        <Table aria-label="simple table">
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
                </CardContent>
            </Card>
            </div>
        </div>
    )
}

export { Skills };


