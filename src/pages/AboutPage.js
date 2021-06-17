import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Image from '../images/image4.png';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    content: {
        textAlign: "justify",
        paddingRight: "5px",
        paddingLeft: "5px",
        borderRadius: "30px",
    }, media: {
        height: "40vh",
        width: 250,
        borderRadius: '100px',
    },
}));

function AboutPage() {
    const classes = useStyles();
    return (
        <div className="about">
            <div className="about-info">
            <Card className={classes.content} >
                <CardContent style={{height:660, width:700}}>
                <CardMedia className={classes.media} image={Image} title="MyImage" />
                <Typography component="h4" variant="h4" style={{color:"rgb(67, 95, 112)"}}>About Me</Typography>

                <Typography component="body1" variant="textprimary">

                <p> Software Developer | Open to job opportunities | JavaScript | ReactJS | C#.Net | Mongo DB</p>
                <p > I hold an Australian permanent residency and I am actively looking for a Frontend Developer role. I am a Computer Science
                            graduate keen to work on new technologies and especially continue learning programming languages. </p>
                <p>To achieve my goal of becoming a professional Software Developer, I have pursued bachelors in
                Computer Science and to further enhance my knowledge in security I studied masters in Information Security.
                I also completed the Software Engineering Immersive course through General Assembly to gain exposure to more software languages.
                Through my studies I have gained knowledge of JavaScript, ReactJS, HTML5, CSS3, GitHub, DOM manipulation, Responsive design, Agile, Bootstrap,
                             JQuery, Node.JS, Express.JS, AJAX, API's and more!</p>
                <p> I am always enthusiastic to learn new things, especially emerging technologies because
                            I think this is a really exciting area to be working in. </p>
                            </Typography>
            {/* <Grid container className={classes.content}>
                <Grid item xs={3}>
                    <CardMedia className={classes.media} image={Image} title="MyImage" />
                </Grid>
                <Grid item xs={9}>
                    <Typography component="h4" variant="h4">About me:</Typography>

                    <p><Typography component="h6" variant="h6">
                        Software Developer | Open to job opportunities | React | JavaScript | HTML | CSS | C# | SQL | Mongo DB </Typography>
                        <br />
                        <Typography variant="body1" color="textSecondary">
                            I hold an Australian permanent residency and I am actively looking for a Frontend Developer role. I am a Computer Science
                            graduate keen to work on new technologies and especially continue learning programming languages.
                </Typography><br />
                        <Typography variant="body1" color="textSecondary">
                            To achieve my goal of becoming a professional Software Developer, I have pursued bachelors in
                            Computer Science and to further enhance my knowledge in security I studied masters in Information Security. 
                            I also completed the Software Engineering Immersive course through General Assembly to gain exposure to more software languages.
                            Through my studies I have gained knowledge of Java Script, React.JS, HTML5, CSS3, Github, DOM manipulation, Responsive design, Agile, Bootstrap,
                             JQuery, Node.JS, Express.JS, AJAX, API's and more!
                </Typography><br />
                        <Typography variant="body1" color="textSecondary">
                            I am always enthusiastic to learn new things, especially emerging technologies because
                            I think this is a really exciting area to be working in. 
                </Typography></p>
                </Grid>
            </Grid> */}
            </CardContent>
            </Card>
            </div>
        </div>
    );
}

export { AboutPage };