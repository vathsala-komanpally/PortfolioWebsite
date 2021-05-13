import React from 'react';
import project5 from '../Vedios/Screen Recording 2021-05-08 at 2.18.03 pm.mov';
import project4 from '../Vedios/Screen Recording 2021-05-06 at 5.38.44 pm.mov';
import portfolio from '../Vedios/Screen Recording 2021-05-08 at 2.37.58 pm.mov';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GA from '../images/GA.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import CSSIcon from '../images/cssIcon.png';
import ReactIcon from '../images/reactIcon.png';
import PostgreSQLIcon from '../images/postgresicon.png';
import RRIcon from '../images/rubyonrailsIcon.png';
import MongoDBIcon from '../images/mongoDBIcon.png';
import ExpressIcon from '../images/expressIcon.png';
import NodeIcon from '../images/nodeIcon.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        height: 700,
        width: 600,
        textAlign: "justify",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "black",
    },
    cover: {
        width: 151,
    }
}));

function RecentProjects() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            <Card className={classes.content}>
                <CardContent >
                    <Typography component="h4" variant="h4">
                        Grocery Market </Typography>
                    <Typography variant="subtitle1">
                        <img src={GA} style={{ height: "20px", width: "20px" }} /> General Assembly * April-May 2021 *
                    <a href="https://github.com/vathsala-komanpally/Project5" target="_blank" rel="noopener noreferrer" className="project-code">
                            <GitHubIcon style={{ color: "black" }} />
                        </a>
                    </Typography> <br/>
                    <Typography variant="subtitle1">
                        A full-stack web application separated into two parts, one for admin to perform CRUD operations by
                        signing-in and another one is Groceries ecommerce store built with the MERN stack (MongoDB, Express, 
                        React & Node), material-UI components are used for web page designing. The greatest challenge of 
                        this project were managing state of Cart, ensuring the shopping cart clears and adds products effectively.
                        There is an option for checkout as well where user can review products to shop again and proceed further. 
                        </Typography> <br/>
                    <img src={ReactIcon} style={{ height: "40px", width: "50px", paddingRight:"10px" }} />
                    <img src={CSSIcon} style={{ height: "40px", width: "50px", paddingRight:"10px" }} />
                    <img src={NodeIcon} style={{ height: "40px", width: "50px", paddingRight:"10px" }} />
                    <img src={ExpressIcon} style={{ height: "50px", width: "50px", paddingRight:"10px" }} />
                    <img src={MongoDBIcon} style={{ height: "40px", width: "40px"}} />  <br/> <br/>
                    <video width="560" height="300" controls autoPlay playsInline muted src={project5} />
                </CardContent>
            </Card>

            <br />
            <Card className={classes.content}>
                <CardContent>
                    <Typography component="h5" variant="h5">
                        Restaurant Website </Typography>
                    <Typography variant="subtitle1">
                        <img src={GA} style={{ height: "20px", width: "20px" }} /> General Assembly * March 2021 *
                    <a href="https://github.com/vathsala-komanpally/React-Rails" target="_blank" rel="noopener noreferrer" className="project-code">
                            <GitHubIcon style={{ color: "black" }} />
                        </a> </Typography> <br/>
                    <Typography variant="subtitle1">
                        This is a Restaurant web application, which has view menu, bookNow and
                        Dine-In-Now options for customers to select from. The application was 
                        built with Ruby on Rails and PostgresSQL for a database and has full CRUD 
                        functionality.
                        </Typography> <br/>
                    <img src={ReactIcon} style={{ height: "50px", width: "50px", paddingRight:"10px" }} />
                    <img src={RRIcon} style={{ height: "50px", width: "50px", paddingRight:"10px" }} />
                    <img src={PostgreSQLIcon} style={{ height: "40px", width: "40px" }} /> <br/>
                    <video width="560" height="380" controls src={project4} />
                </CardContent>
            </Card> <br />

            <Card className={classes.content}>
                <CardContent>
                    <Typography component="h5" variant="h5">
                        My Portfolio Website </Typography>
                    <Typography variant="subtitle1">
                        <img src={GA} style={{ height: "20px", width: "20px" }} /> General Assembly * May 2021 *
                    <a href="https://github.com/vathsala-komanpally/PortfolioWebsit" target="_blank" rel="noopener noreferrer" className="project-code">
                            <GitHubIcon style={{ color: "black" }} />
                        </a> </Typography> <br/>

                    <img src={ReactIcon} style={{ height: "40px", width: "50px", paddingRight:"10px" }} />
                    <img src={CSSIcon} style={{ height: "40px", width: "40px" }} />
                    <br/> <br/>
                    <video width="560" height="450" controls autoPlay playsInline muted src={portfolio} />
                </CardContent>

            </Card>
        </div>
    )
}

export { RecentProjects };