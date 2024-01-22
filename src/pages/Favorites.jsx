import { useDispatch, useSelector } from "react-redux";
import {
  selectCars,
  selectFavorites,
  selectisLoading,
} from "../redux/cars/carRentSlice";
import { Box } from "@mui/material";
import { CatalogCard } from "../components/CatalogCard";
import { useEffect } from "react";
import { getFilteredCars } from "../redux/cars/carOperations";
import { Loader } from "../components/Loader/Loader";

export const Favorites = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectisLoading);
  const cars = useSelector(selectCars);
  const favorites = useSelector(selectFavorites);

  const favorCars = cars.filter((car) => favorites.includes(car.id));

  useEffect(() => {
    dispatch(getFilteredCars());
  }, [dispatch]);

  return (
    <>
      <Box
        autoComplete="off"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "18px",
          margin: "50px auto",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "50px 29px",
          flexBasis: "calc((100% - 29px) / 4)",
        }}
      >
        {favorCars.map((car) => (
          <CatalogCard key={car.id} car={car} />
        ))}
      </Box>
      {isLoading && <Loader />}
    </>
  );
};
