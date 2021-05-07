import React from 'react';
import project5 from '../Vedios/Screen Recording 2021-05-07 at 4.21.07 pm.mov';
import project4 from '../Vedios/Screen Recording 2021-05-06 at 5.38.44 pm.mov';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
        height:700,
        width: 600,
    },
    cover: {
        width: 151,
    }
}));

function RecentWorkPage() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Card className="recentwork">
            <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    Grocery Market
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    This web application has two parts, one for admin to perform CRUD operations by<br/>
                   signing-in and another one is Groceries web page with Cart and CheckOut options <br/>  
          </Typography>
          <Typography variant="subtitle2">
                    TechStack: FrontEnd-React.js and BackEnd-MongoDB
          </Typography>
                <video width="600" height="350" controls autoPlay playsInline muted src={project5} />
            </CardContent>

            <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    Restaurant Webpage
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                This is a Restaurant web application, which has a view menu, bookNow and 
                Dine-In Now options for customers to select from.
          </Typography>
          <Typography variant="subtitle2">
                    TechStack: FrontEnd-React.js and BackEnd-SQL using RubyonRails
          </Typography>
                <video width="600" height="350" controls src={project4} />
            </CardContent>
    </Card>
    )
}

export {RecentWorkPage};
  // <iframe
        //   id="video"
        //   width="230"
        //   heigh="154"
        //   src={project5}
        //   allowFullScreen
        //>
        // <video width="320" height="240" controls>
        //         <source src="movie.mp4" type="video/mp4"/>
        //             <source src="movie.ogg" type="video/ogg"/>
        //                 Your browser does not support the video tag.
        //                 </video>