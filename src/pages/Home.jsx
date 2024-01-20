import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { MainButton } from "../components/buttons/MainButton";
import { mainButtonStyle } from "../styles/styles";
import background from "../img/car-parking.jpg";
import CarRentalIcon from "@mui/icons-material/CarRental";
import { weOfferText, whyChooseText } from "./homeText";

const imageURL =
  "https://pixabay.com/photos/womans-legs-high-heels-vintage-car-887286";

export const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            flexBasis: "calc((100% - 24px) / 2)",
            height: "640px",
            backgroundImage: `url(https://pixabay.com/photos/womans-legs-high-heels-vintage-car-887286)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <MainButton sx={{ ...mainButtonStyle, padding: "12px 99px" }}>
            View our catalog
          </MainButton>
        </Box>
        <Box sx={{ flexBasis: "calc((100% - 24px) / 2)" }}>
          <Typography variant="h4" gutterBottom>
            Welcome to CurrentCarRent
          </Typography>
          <Typography variant="body1" gutterBottom>
            At CurrentCarRent, we are dedicated to providing you with a seamless
            and enjoyable car rental experience. Whether you're a local
            exploring the city or a traveler discovering new destinations, we've
            got the perfect ride for you.
          </Typography>
          <Typography variant="h5" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" gutterBottom>
            CurrentCarRent is a leading car rental company committed to
            delivering top-notch service and a diverse fleet of vehicles. Our
            mission is to make your journey as smooth as possible by offering
            reliable and well-maintained cars.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Why Choose CurrentCarRent?
          </Typography>
          <List component={"ul"}>
            {whyChooseText.map(({ feature, description }) => (
              <ListItem key={feature}>
                <ListItemIcon>
                  <CarRentalIcon />
                </ListItemIcon>
                <ListItemText>
                  <b>{feature}</b> {description}
                </ListItemText>
              </ListItem>
            ))}
          </List>
          <Typography variant="h5" gutterBottom>
            Services We Offer
          </Typography>
          <List component={"ul"}>
            {weOfferText.map(({ feature, description }) => (
              <ListItem key={feature}>
                <ListItemIcon>
                  <CarRentalIcon />
                </ListItemIcon>
                <ListItemText>
                  <b>{feature}</b> {description}
                </ListItemText>
              </ListItem>
            ))}
          </List>
          <Typography variant="h5" gutterBottom>
            How to Book
          </Typography>
          <Typography variant="body1" gutterBottom>
            Booking with CurrentCarRent is simple: It's that easy! Experience
            the freedom of the road with CurrentCarRent. Contact us today to
            book your next adventure!
          </Typography>
          <List component={"ol"}>
            <ListItemText key={1}>Visit our website.</ListItemText>
            <ListItemText key={2}>Select your rental dates.</ListItemText>
            <ListItemText key={3}>Choose your preferred vehicle.</ListItemText>
            <ListItemText key={4}>Confirm your reservation.</ListItemText>
          </List>
          <Typography variant="body1" gutterBottom>
            It's that easy! Experience the freedom of the road with
            CurrentCarRent. <br /> Contact us today to book your next adventure!
          </Typography>
        </Box>
      </Box>
    </>
  );
};
