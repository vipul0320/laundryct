// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { Box, CardActionArea } from '@mui/material';


import {Link} from "react-router-dom"
export default function BlogCard({src, heading, content, footercontent,link}:any) {

  return(
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
<img className="w-full h-52"  src={src} alt="Sunset in the mountains"/>
<div className="px-6 py-4">
 <div className="font-bold text-xl mb-2">{heading}</div>
 <p className="text-gray-700 text-base">
{content}
 </p>
</div>
<div className="px-6 pt-4 pb-2">
 {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{footercontent}</span> */}
 <Link to={link}>{footercontent}</Link>
 
</div>
</div>
</>
  ) 
}
   
   
   
   
   
   
   
   
   
 
  
     {/* <Box sx={{ maxWidth: 400, maxHeight:500 }}>
       <Box width={400} height={500}>
       <Box width={400} height={300} sx={{objectFit:"contain"}} >
        <img src={src} height="100%"  width="100%"  alt="" />
         <Box>
           <Typography gutterBottom variant="h5" component="div">
         {heading}
           </Typography>
           <Typography variant="body2" color="text.secondary">
             {content}
           </Typography>
         </Box>
       B</Box>
       </Box>
       <CardActions>
         <Button size="small" color="primary" endIcon={<ArrowForwardIcon/>}>
           {footercontent}
         </Button>
       </CardActions>
     </Box>  */}

