import styled from '@emotion/styled';
import { Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';
import {Avatar, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import '../App.css';

const StyledModal = styled(Modal)(({theme})=> ({
    display : "flex",
    alignItems : 'center',
    justifyContent : 'center',
  }))


const Userbox = styled(Box)(({theme})=> ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
  }))


function FloatingActionButton({mode ,setMode}) {
    const [open, setOpen] = useState(false)
  return (
  <div>
  <Tooltip 
  onClick={e => setOpen(true)}
  sx={{position: 'fixed' , bottom: 20 ,left: 20}} 
  title="Add"

  >
      <Fab aria-label='Add' color='primary'>
          <Add/>
      </Fab>
  </Tooltip>
  <StyledModal
  open={open}
  onClose={e => setOpen(false)}
  >
      <Box 
      width={500} 
      p={3}
      borderRadius={5}
      bgcolor={mode === 'light' ? 'white' : 'black'}
      color={mode === 'dark' ? 'white' : 'black'}
      >
        <Typography fontWeight="bold" color="gray" textAlign="center">
            Create Post
        </Typography>
        <Userbox>
            <Avatar
            src="https://www.abilitychannel.tv/wp-content/uploads/2021/05/gary-coleman.jpg"
            sx={{width: 30 , height: 30}}
            />
            <Typography fontWeight="bold">
                Aymen L
            </Typography>
        </Userbox>
        <TextField
        rows={4}
        multiline
        placeholder="What's on your mind"
        sx={{width: "100%"}}
        >
        </TextField>
        <Stack direction="row" gap={1} mt={2} mb={3} >
            <EmojiEmotions color="primary"/>
            <Image color="secondary"/>
            <VideoCameraBack color="success"/>
            <PersonAdd color="error"/>
        </Stack>
        <ButtonGroup
        fullWidth
        variant="contained"
        >
        <Button>Post</Button>
        <Button>
            <DateRange/>
        </Button>
        </ButtonGroup>
      </Box>
  </StyledModal>
  </div>
  );
}

export default FloatingActionButton;
