import React from "react";
import { styled } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';
import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
// import IconButton from '@mui/material/IconButton';


// const SearchBox = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor:"white",
//     left: '1%',
//     width:'23% !important',
   
//   }));


  const Input = styled('input')(({ theme }) => ({
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: '5px',
    width: '93% !important',

  }));



  const StyledButton = styled(Button)(({ theme }) => ({
   position: "absolute",
   backgroundColor: '#019a5d !important',
   right: '-0.9rem',
   padding: '5.8px 0px',
   borderRadius: '0.2 rem',
   cursor: 'pointer',

  }));

  const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
 color: 'white'
 
   }));
  

export function Search(){
    return(
            <div>  
         <Input placeholder="Search for Tests & Health Checkups"></Input>
         <StyledButton ><StyledSearchIcon /></StyledButton>
         </div> 
          
           
        
      
    )
}
export default Search;