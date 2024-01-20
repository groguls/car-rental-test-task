import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { mainButtonStyle } from "../styles/styles";
import { MainButton } from "./buttons/MainButton";
import { FavorHeart } from "./icons/FavorHeart";

export const CatalogCard = (props) => {
  return (
    <Card sx={{ maxWidth: 274, borderRadius: "14px", position: "relative" }}>
      <CardMedia
        component="img"
        alt={"description"}
        height="268"
        image={"../img/volvo.png"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "0" }}>
        <IconButton
          sx={{ position: "absolute", top: "14px", right: "14px" }}
          aria-label="add to favorites"
        >
          <FavorHeart style={{ stroke: "red" }} />
        </IconButton>
        <MainButton sx={{ ...mainButtonStyle, padding: "12px 99px" }}>
          Learn more
        </MainButton>
      </CardActions>
    </Card>
  );
};

// sx={{ position: "absolute" }}
