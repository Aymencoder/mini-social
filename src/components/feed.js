import { Box } from '@mui/material';
import '../App.css';
import Post from '../widgets/post';
function Feed({mode}) {
  return (
    <Box
    bgcolor={mode === 'light' ? '#f4f4f4' : '#0b0b0b'}
    flex={4}
    p={2}
    >
      <Post img="https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2002%2F11%2F22%2F0886_192302_DuPree_MR_13276-2000.jpg"/>
      <Post img="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"/>
    </Box>
  );
}

export default Feed;
