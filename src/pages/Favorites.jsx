import { useDispatch, useSelector } from "react-redux";
import {
  selectCars,
  selectFavorites,
  selectisLoading,
} from "../redux/cars/carRentSlice";
import { Box } from "@mui/material";
import { MainInput } from "../components/inputs/MainInput";
import { CatalogCard } from "../components/CatalogCard";
import { mainButtonStyle } from "../styles/styles";
import { MainButton } from "../components/buttons/MainButton";
import { useEffect, useState } from "react";
import { getFilteredCars } from "../redux/cars/carOperations";
import { Loader } from "../components/Loader/Loader";

export const Favorites = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectisLoading);
  const cars = useSelector(selectCars);
  const favorites = useSelector(selectFavorites);
  const [filter, setFilter] = useState(null);

  const favorCars = cars.filter((car) => favorites.includes(car.id));

  const carMakes = [];
  for (const favor of favorites) {
    const carMake = favor.make;
    if (carMake) {
      carMakes.push(carMake);
    }
  }

  const filteredCars = favorCars.filter((car) => car.make === filter);

  useEffect(() => {
    dispatch(getFilteredCars());
  }, [dispatch]);

  const handleSubmitSearch = (evt) => {
    evt.preventDefault();
    setFilter(evt.target.cars.value);
    return null;
  };

  return (
    <>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmitSearch}
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "18px",
          margin: "150px auto 50px",
        }}
      >
        <MainInput opts={[...new Set(carMakes)]} />
        <MainButton
          type={"submit"}
          sx={{ ...mainButtonStyle, padding: "14px 44px" }}
        >
          Search
        </MainButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "50px 29px",
          flexBasis: "calc((100% - 29px) / 4)",
        }}
      >
        {filter
          ? filteredCars.map((car) => <CatalogCard key={car.id} car={car} />)
          : favorCars.map((car) => <CatalogCard key={car.id} car={car} />)}
      </Box>
      {isLoading && <Loader />}
    </>
  );
};
