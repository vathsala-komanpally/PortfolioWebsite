import React from 'react';
import project5 from '../Vedios/Screen Recording 2021-05-08 at 2.18.03 pm.mov';
import project4 from '../Vedios/Screen Recording 2021-05-06 at 5.38.44 pm.mov';
import portfolio from '../Vedios/Screen Recording 2021-05-08 at 2.37.58 pm.mov';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
        height: 520,
        width: 600,
    },
    cover: {
        width: 151,
    }
}));

function RecentProjects() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Card style={{ backgroundColor: "rgb(228, 211, 217)" }}>
            <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    Grocery Market
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    A full-stack web application separated into two parts, one for admin to perform CRUD operations by
                    signing-in and another one is Groceries website with Cart and CheckOut options.
          </Typography>
                <Typography variant="subtitle2">
                    TechStack: FrontEnd-React.js and BackEnd-MongoDB
          </Typography>
                <Button variant="outlined" color="secondary">
                    <a href="https://github.com/vathsala-komanpally/Project5" target="_blank" rel="noopener noreferrer" className="project-code">VIEW MY CODE</a>
                </Button>
                <video width="600" height="350" controls autoPlay playsInline muted src={project5} />
            </CardContent>

            <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    Restaurant Website
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    This is a Restaurant web application, which has view menu, bookNow and
                    Dine-In-Now options for customers to select from.
          </Typography>
                <Typography variant="subtitle2">
                    TechStack: FrontEnd-React.js and BackEnd-SQL using RubyonRails
          </Typography>
                <Button variant="outlined" color="secondary">
                    <a href="https://github.com/vathsala-komanpally/React-Rails" target="_blank" rel="noopener noreferrer" className="project-code">VIEW MY CODE</a>
                </Button>
                <video width="600" height="350" controls src={project4} />
            </CardContent>
            <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    My Portfolio Website
          </Typography>
                <Typography variant="subtitle2">
                    TechStack: React.js
          </Typography>
                <Button variant="outlined" color="secondary">
                    <a href="https://github.com/vathsala-komanpally/PortfolioWebsite" target="_blank" rel="noopener noreferrer" className="project-code">VIEW MY CODE</a>
                </Button>
                <video width="600" height="350" controls autoPlay playsInline muted src={portfolio} />
            </CardContent>

        </Card>
    )
}

export { RecentProjects };