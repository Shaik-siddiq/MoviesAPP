import React from 'react'
import {Typography,Grid,ImageListItemBar,ImageListItem,IconButton,Card} from "@material-ui/core"
import { makeStyles } from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import data from "./Movieslist.json"

const CreateStyles = makeStyles({
    image:{
        width: "36%",
        height: "auto",
        transform:"translateX(33%)"
    },
    card:{
        backgroundColor: "#fff",
        padding: "6rem",
        position: "absolute",
        maxHeight: "70%",
        width:"50%",
        overflow: "auto",
        left: 0,
        bottom: 0,
        right: 0,
        transform: "translate(90%)",
        transition: "transform 0.3s ease-in"
    }
})
const MovieSingle = ({match}) => {
   const styles = CreateStyles()
    return (
       <>
      
       {data.map((item)=>{
           return(
           item.id==match.params.id?<Grid container>
               <Grid item sx={4}>
                <ImageListItem key={item.id} >
            <img className={styles.image} src={`https://image.tmdb.org/t/p/w1280${item.poster_path}`} alt="poster" />
            <ImageListItemBar
            title={item.original_title} 
            position="top"
            actionIcon={
                <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                 <Link to={`/`}><ArrowBack /></Link>
                  </IconButton>
            } />
              </ImageListItem>
              </Grid>
              <Grid className={styles.card} item sx={4}>
                  <Typography variant="h4">Title:{item.original_title}</Typography>
                  <Typography variant="h6">Overview:{item.overview}</Typography>
                  <Typography variant="h6">ReleaseDate:{item.release_date}</Typography>
                  <Typography variant="h6">Rating:{item.vote_average}</Typography>
                  <Typography variant="h6">No of Voters:{item.vote_count}</Typography>
                  <Typography variant="h6">Language:{item.original_language}</Typography>
              </Grid>
               </Grid>:null
           )
       })}
       
       </>
    )
}

export default MovieSingle
