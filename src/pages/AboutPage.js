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
       alignItems:"center",
    }, media: {
        height: 250,
        width: 200,
        borderRadius: '50px',
    },
}));

function AboutPage() {
    const classes = useStyles();
    return (
        <div className="about">
        <Grid container className={classes.content}>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={9}>
                <Typography component="h4" variant="h4">About me:</Typography>
            </Grid>
            <Grid item xs={3}>
                <CardMedia className={classes.media} image={Image} title="Contemplative Reptile" />
            </Grid> 
            <Grid item xs={9}>
            <Typography component="h6" variant="h6">
                    Software Developer | Open to job opportunities | React | JavaScript | HTML | CSS | C# | SQL | Mongo DB </Typography>
                <br/>
                <Typography variant="body1" color="textSecondary">
                I hold an Australian permanent residency and I am actively looking for a frontend developer role. I am a computer science 
                graduate keen to work on new technologies and especially continue learning programming languages.
                </Typography><br/>
                <Typography variant="body1" color="textSecondary">
                To achieve my goal of becoming a professional software developer, I have completed a Masters of Information Security and a Bachelors of 
                Computer Science. I also completed the General Assembly's Software Engineering Flex Immersive to gain exposure to more software languages. 
                Through my studies I have gained knowledge of Java Script, React.JS, C#, HTML5, CSS3, Bootstrap, NodeJS and REST API. I have also used GitHub 
                and BitBucket. 
                </Typography><br/>
                <Typography variant="body1" color="textSecondary">
                I am ready to work immediately and ready to relocate anywhere. I am always enthusiastic to learn new things, especially emerging technologies because 
                I think this is a really exciting area to be working in. More than this, I bring across a skill set honed through working in child care. This means I can handle any pressure, a variety of stakeholders, 
                work collaboratively, quickly and patiently and am accustomed to working hard.
                </Typography>
            </Grid>
        </Grid>
        </div>
    );
}

export { AboutPage };