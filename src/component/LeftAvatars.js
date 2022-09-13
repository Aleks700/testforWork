import React from 'react'
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { deepOrange, deepPurple } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';



export default function LeftAvatars({avatar}) {




  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',

        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
      // '&::before': {
      //   position: 'absolute',
      //   color: "black",
      //   width: '100%',
      //   height: '100%',
      //   borderRadius: '50%',
      //   animation: 'ripple 1.2s infinite ease-in-out',
      //   border: '1px solid currentColor',
      //   content: '"3"',
      // },
      '@keyframes ripple': {
        '0%': {
          transform: 'scale(.8)',
          opacity: 1,
        },
        '100%': {
          transform: 'scale(1.3)',
          opacity: 0,
        },
      },
    }}));




  return (
    <>
      <Stack direction="column" spacing={2} sx={{ display:'flex',flexDirection:'column',justifyContent:'center', alignItems: 'center',my:1}} >
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
