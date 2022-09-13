import React from 'react'
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { deepOrange, deepPurple } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
    // '&::after': {
    //   position: 'absolute',
    //   top: -2,
    //   left: -1.8,
    //   width: '100%',
    //   height: '100%',
    //   borderRadius: '50%',
    //   border: '2px solid currentColor',
    //   content: '""',
    //   // animation: 'ripple 1.2s infinite ease-in-out',
    // },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(1.2)',
      opacity: 0,
    },
  },
}));

export default function LeftAvatars({avatar}) {
  return (
    <>
      <Stack direction="column" spacing={2}  >
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
           <Avatar sx={{ bgcolor: deepPurple[500] }}><SearchIcon></SearchIcon></Avatar>
      </StyledBadge>
        <Avatar>H</Avatar>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}><AddIcon></AddIcon></Avatar>
     
    </Stack>
   </>

  )
}
