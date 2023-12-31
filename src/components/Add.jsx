import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import VideoChatOutlinedIcon from "@mui/icons-material/VideoChatOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { DetailsTwoTone } from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%-25px)", md: 30 },
        }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={250}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Trevor Henderson"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtO6haCa9gbeFd-8iJ0cYGn4du21fu09o7XSdAsSLtRCb07zl0Yx2nZiE79E0c2DhXgO0&usqp=CAU"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              Sefa Yıldız
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsOutlinedIcon color="primary" />
            <VideoChatOutlinedIcon color="secondary" />
            <ImageOutlinedIcon color="success" />
            <PersonAddAlt1OutlinedIcon color="error" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
