import { Card, CardActionArea, CardMedia , CardContent, CardActions} from "@mui/material"
import styled from "styled-components"
import {mobile} from "../responsive"
import { makeStyles} from '@material-ui/core'
import { Typography } from "@mui/material"
import { sizing } from '@material-ui/system'

const useStyles = makeStyles((theme) => ({
  card: {
      marginBottom: theme.spacing(5),
      marginRight: theme.spacing(5),
      margin: "3px",
      display: "inline-block"
  },
  image: {
    height: "30vh",
  }
}));

const CategoryItem = ({item}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} sx={{ width: 1/4 }}>
      <CardActionArea>
        <CardMedia 
        component="img"
        image={item.img}
        className={classes.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CategoryItem