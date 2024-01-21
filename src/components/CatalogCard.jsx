import {
  Box,
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
import { Divider } from "./icons/Divider";
import { ModalWindow } from "./Modal/ModalWindow";
import { ModalInfoCard } from "./ModalInfoCard";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, deleteFavorite } from "../redux/cars/carRentSlice";

const nameTextStyle = {
  color: "#121417",
  fontFamily: "Manrope",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "24px",
};

const supportingTextStyle = {
  color: "rgba(18, 20, 23, 0.50)",
  fontFamily: "Manrope",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "18px",
  wordWrap: "unset",
  overflow: "hidden",
  textOverflow: "clip",
};

export const CatalogCard = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    engineSize,
    rentalPrice,
    rentalCompany,
    address,
  } = car;
  const dispatch = useDispatch();
  const isInFavorites = useSelector((state) =>
    state.cars.favorites.includes(id)
  );
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal((prevState) => !prevState);

  const handleButtonClick = (evt) => {
    toggleModal();
  };

  const handleFavoriteClick = (evt) => {
    if (isInFavorites) {
      dispatch(deleteFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
    // evt.target.style.fill = "#3470FF";
    // evt.target.style.stroke = "#3470FF";
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: 0,
          maxWidth: 274,
          borderRadius: "14px",
          position: "relative",
        }}
      >
        <CardMedia
          sx={{ borderRadius: "14px", marginBottom: "14px" }}
          component="img"
          alt={"car image"}
          height="268"
          image={img}
        />
        <CardContent sx={{ padding: "0" }}>
          <Box
            sx={{
              ...nameTextStyle,
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <Typography sx={nameTextStyle}>
              {make} <span style={{ color: "#3470FF" }}>{model}</span>, 2019
            </Typography>
            <Typography sx={nameTextStyle}>{rentalPrice}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              marginBottom: "28px",
            }}
          >
            <Box
              sx={{
                ...supportingTextStyle,
                display: "flex",
                gap: "6px",
                overflow: "hidden",
                textOverflow: "clip",
                wordWrap: "unset",
              }}
            >
              <Typography aria-label="City" sx={supportingTextStyle}>
                {address.split(", ")[1]}
              </Typography>
              <Divider />
              <Typography aria-label="Contry" sx={supportingTextStyle}>
                {address.split(", ")[2]}
              </Typography>
              <Divider />
              <Typography aria-label="Rental Company" sx={supportingTextStyle}>
                {rentalCompany}
              </Typography>
            </Box>
            <Box
              sx={{
                ...supportingTextStyle,
                display: "flex",
                gap: "6px",
                overflow: "hidden",
                textOverflow: "clip",
              }}
            >
              <Typography aria-label="ID" sx={supportingTextStyle}>
                {id}
              </Typography>
              <Divider />
              <Typography aria-label="Car type" sx={supportingTextStyle}>
                {type}
              </Typography>
              <Divider />
              <Typography aria-label="Model Year" sx={supportingTextStyle}>
                {year}
              </Typography>
              <Divider />
              <Typography aria-label="Engine size" sx={supportingTextStyle}>
                {engineSize}
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <CardActions disableSpacing={true} sx={{ padding: "0" }}>
          <IconButton
            onClick={handleFavoriteClick}
            sx={{
              position: "absolute",
              top: "6px",
              right: "6px",
            }}
            aria-label="add to favorites"
          >
            <FavorHeart isInFavorites={isInFavorites} />
          </IconButton>
          <MainButton
            onClick={handleButtonClick}
            sx={{ ...mainButtonStyle, padding: "12px 99px" }}
          >
            Learn more
          </MainButton>
        </CardActions>
      </Card>

      <ModalWindow isOpen={openModal} handleClose={handleButtonClick}>
        <ModalInfoCard onClose={handleButtonClick} car={car} />
      </ModalWindow>
    </>
  );
};
