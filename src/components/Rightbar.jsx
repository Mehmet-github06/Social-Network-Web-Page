import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';



const Rightbar = () => {
  return (
    <Box
      
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } ,mr:"5px"}}

    >
      <Box position={"fixed"} width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://fotolifeakademi.com/uploads/2021/01/insan-fotograflari.webp"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/5506141/pexels-photo-5506141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://imgrosetta.mynet.com.tr/file/12542603/640xauto.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://c1.staticflickr.com/1/417/18309621173_bc671cce79_z.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://st2.depositphotos.com/1743476/11581/i/450/depositphotos_115812380-stock-photo-cool-african-man.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuYVKh6uq89ac6FXDuNaA5rCBXqzAQPaqZOGoKJ7LHom1JBm8eL-Wzwgg2E7k1as2SsKw&usqp=CAU"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://img-s1.onedio.com/id-649af8c4d4b1c66192a6a25d/rev-0/w-600/h-651/f-jpg/s-f219146f7ff78a74a32bcbc08e684360b4527040.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://www.sitiincontri.org/wp-content/uploads/2017/10/essere-single-a-40-anni.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://media.istockphoto.com/id/1277873802/tr/foto%C4%9Fraf/kamera-k%C3%BC%C3%A7%C3%BCk-bir-g%C3%BCl%C3%BCmseme-ile-olgun-bir-adam-portresi-resmin-sa%C4%9F-taraf%C4%B1nda.jpg?s=612x612&w=0&k=20&c=158fzLUE3SLle-_f6ow8h20Jq-MzjQ9pbRuU8f1VrOw="
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.bursadabugun.com/galeriler/2016/01/13/25186-cilli-insanlarin-aciklanamaz-guzelligine-dair-12-fotograf-5696143fe2269.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Lates Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem >
            <img
              
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem >
            <img
              
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem >
            <img
              
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Lates Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.bursadabugun.com/galeriler/2016/01/13/25186-cilli-insanlarin-aciklanamaz-guzelligine-dair-12-fotograf-5696143fe2269.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://media.istockphoto.com/id/1277873802/tr/foto%C4%9Fraf/kamera-k%C3%BC%C3%A7%C3%BCk-bir-g%C3%BCl%C3%BCmseme-ile-olgun-bir-adam-portresi-resmin-sa%C4%9F-taraf%C4%B1nda.jpg?s=612x612&w=0&k=20&c=158fzLUE3SLle-_f6ow8h20Jq-MzjQ9pbRuU8f1VrOw=" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://www.sitiincontri.org/wp-content/uploads/2017/10/essere-single-a-40-anni.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
