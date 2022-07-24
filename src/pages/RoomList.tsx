import Typography from '@mui/material/Typography';

import RoomCards from '../components/RoomCards';
import BannerArt from '../components/3Ds/BannerArt';
import RoomsTitle from '../components/RoomsTitle';

export default function RoomList() {
  // TODO: Replace mock
  const rooms = [{
    id: '1',
    title: "sample1",
    description: "This is an example description",
    imageUrl: "https://dummyimage.com/600x400/000/fff",
  },{
    id: '2',
    title: "sample2",
    description: "This is an example description",
    imageUrl: "https://dummyimage.com/600x400/000/fff",
  },{
    id: '3',
    title: "sample3",
    description: "This is an example description",
    imageUrl: "https://dummyimage.com/600x400/000/fff",
  },{
    id: '4',
    title: "sample4",
    description: "This is an example description",
    imageUrl: "https://dummyimage.com/600x400/000/fff",
  },{
    id: '5',
    title: "sample5",
    description: "This is an example description",
    imageUrl: "https://dummyimage.com/600x400/000/fff",
  },{
    id: '6',
    title: "sample6",
    description: "This is an example description",
    imageUrl: "https://dummyimage.com/600x400/000/fff",
  },{
    id: '7',
    title: "sample7",
    description: "This is an example description",
    imageUrl: "https://dummyimage.com/600x400/000/fff",
  }]
  return (
    <>
      <BannerArt
        top='64px'
        opacity='0.75'
      />
      <div style={{marginTop: '64px'}} />
      <RoomsTitle title="My rooms" />
      <RoomCards
        items={[...rooms]}
      />
      <RoomsTitle title="Reccomended rooms" />
      <RoomCards
        items={[...rooms]}
      />
      <RoomsTitle title="Popular rooms" />
      <RoomCards
        items={[...rooms]}
      />
    </>
   );
}
