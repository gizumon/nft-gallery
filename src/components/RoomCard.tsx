import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Room } from '../types/interfaces';

interface Props {
  item: Room;
}

const RoomCard = ({item: {id, title, description, imageUrl}}: Props) => {
  const navigate = useNavigate();
  // const onClickHandler = () => navigate(`/rooms/${id}`);
  const onClickHandler = () => {};
  return (
    <Card sx={{
        minWidth: '350px',
        margin: 3,
        overflow: 'auto',
      }}
      onClick={onClickHandler}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={`${title}'s room`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Favorite
        </Button>
      </CardActions> */}
    </Card>
  );
}

export default RoomCard