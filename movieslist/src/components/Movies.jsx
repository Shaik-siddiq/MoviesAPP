import React,{useState} from 'react'
import {Grid,ImageList,ImageListItem,ImageListItemBar,IconButton,InputBase} from '@material-ui/core'
import { Info,Search } from '@material-ui/icons';
import {Link} from 'react-router-dom'

import data from './Movieslist.json'
const Movies = () => {
    const [search, setSearch]=useState(" ")
    return (
       <Grid container>
           {{/* Search Bar */}}
            <InputBase
            style={{width:"80%"}}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Movies"
        inputProps={{ 'aria-label': 'search Movies' }}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" >
        <Search />
      </IconButton>
              {/* Movie cards */}
           <ImageList sx={{ width: 500, height: 500 }} gap={8} cols={4}>
               {/* filter method is used to filter a particular movie while searching */}
           {data.filter((val)=>{
               if(search == ""){
                   return val
                }
               else if(val.original_title.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                   return val
               }
           }).map((item)=>{
           return(
           
              <ImageListItem key={item.id} sx={{ width: 200, height: 200 }}  >
            <img style={{height:"auto",width:"100%"}} src={`https://image.tmdb.org/t/p/w1280${item.poster_path}`} alt="poster" />
            <ImageListItemBar
            title={item.original_title} 
            actionIcon={
                <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                 <Link to={`/movie/${item.id}`}><Info /></Link>
                  </IconButton>
            } />
              </ImageListItem>
           )})}
            </ImageList> 
           
       </Grid>
    )
}

export default Movies
