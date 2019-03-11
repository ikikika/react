import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import posts from "./dummy-posts.json";

const mediaStyle = { height: "140px" };

const styles = theme => ({
  container: {
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "20",
    padding: "30",

    // Full width for (xs, extra-small: 0px or larger) and (sm, small: 600px or larger)
    [theme.breakpoints.up("md")]: {
      // medium: 960px or larger
      width: 920
    },
    [theme.breakpoints.up("lg")]: {
      // large: 1280px or larger
      width: 1170
    },
    [theme.breakpoints.up("xl")]: {
      // extra-large: 1920px or larger
      width: 1366
    }
  }
});

function Posts(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Grid container spacing={40} justify="center">
        {posts.map(post => (
          <Grid item key={post.title} md={3} sm={6} xs={12}>
            <Card>
              <CardActionArea>
                <CardMedia
                  style={mediaStyle}
                  componnt="img"
                  alt="alt"
                  image="{post.image}"
                  title="title of img"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography component="p">{post.excerpt}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default withStyles(styles)(Posts);
