import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Image from '../images/image4.png';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    content: {
        alignItems: "center",
        textAlign: "justify",
        paddingRight: "100px",
    }, media: {
        height: 380,
        width: 250,
        borderRadius: '20px',
    },
}));

function AboutPage() {
    const classes = useStyles();
    return (
        <div className="about">
            {/* <div className={classes.wrap}>
            <img style={{float: "right", margin: "0px 0px 15px 15px", width:100 }} src={Image}  />
            <hr className={classes.hr}></hr>
            <p> To achieve my goal of becoming a professional software developer, I have completed a Masters of Information Security and a Bachelors of 
                Computer Science. I also completed the General Assembly's Software Engineering Flex Immersive to gain exposure to more software languages. 
                Through my studies I have gained knowledge of Java Script, React.JS, C#, HTML5, CSS3, Bootstrap, NodeJS and REST API. I have also used GitHub 
                and BitBucket. </p>
            </div> */}
            <Grid container className={classes.content}>
                <Grid item xs={3}>
                    <CardMedia className={classes.media} image={Image} title="MyImage" />
                </Grid>
                <Grid item xs={9}>
                    <Typography component="h4" variant="h4">About me:</Typography>

                    <p><Typography component="h6" variant="h6">
                        Software Developer | Open to job opportunities | React | JavaScript | HTML | CSS | C# | SQL | Mongo DB </Typography>
                        <br />
                        <Typography variant="body1" color="textSecondary">
                            I hold an Australian permanent residency and I am actively looking for a frontend developer role. I am a computer science
                            graduate keen to work on new technologies and especially continue learning programming languages.
                </Typography><br />
                        <Typography variant="body1" color="textSecondary">
                            To achieve my goal of becoming a professional software developer, I have pursued bachelors in
                            Computer Science and to further enhance my knowledge in security I studied masters in Information Security. 
                            I also completed the Software Engineering Immersive course through General Assembly to gain exposure to more software languages.
                            Through my studies I have gained knowledge of Java Script, React.JS, HTML5, CSS3, Github, DOM manipulation, Responsive design, Agile, Bootstrap,
                             JQuery, Node.JS, Express.JS, AJAX, API's and more!
                </Typography><br />
                        <Typography variant="body1" color="textSecondary">
                            I am always enthusiastic to learn new things, especially emerging technologies because
                            I think this is a really exciting area to be working in. More than this, I bring across a skill set honed through working in child care. This means I can handle any pressure, a variety of stakeholders,
                            work collaboratively, quickly and patiently and am accustomed to working hard.
                </Typography></p>
                </Grid>
            </Grid>
        </div>
    );
}

export { AboutPage };