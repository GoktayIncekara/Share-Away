import { Card, CardActionArea, CardMedia , CardContent} from "@mui/material"
import { makeStyles} from '@material-ui/core'
import { Typography } from "@mui/material"
import React from 'react';
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  card: {
      marginBottom: theme.spacing(5),
      marginRight: theme.spacing(5),
      margin: "3px",
      display: "inline-block",

     [theme.breakpoints.up("sm")]: {
        width: "25%"
    }  
  },
  image: {
    height: "30vh",
  }
}));

const CategoryItem = ({item}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Link style={{textDecoration: 'none', textAlign: 'center'}} to={`/category/${item.title}`}>
        <CardActionArea>
          <CardMedia 
          component="img"
          image={item.img}
          className={classes.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" color="common.black" component="div">
              {item.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default CategoryItem