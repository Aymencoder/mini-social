import { Box, Stack } from '@mui/material';
import '../App.css';
import Feed from '../components/feed';
import Rightbar from '../components/rightbar';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar'
import FloatingActionButton from '../widgets/floatingActionButton';

function Home({mode , setMode}) {

  return (
        <Box
        bgcolor={mode === 'light' ? 'white' : 'black'}
        color={mode === 'dark' ? 'white' : 'black'}
        >
          <Navbar mode={mode} />
          <div className="space"></div>
          <Stack direction="row" spacing={2} justifyContent="space-between">
              <Sidebar setMode={setMode} mode={mode}/>
              <Feed mode={mode}/>
              <Rightbar/>
          </Stack>
          <FloatingActionButton setMode={setMode} mode={mode}/>
        </Box>
  );
}

export default Home;
