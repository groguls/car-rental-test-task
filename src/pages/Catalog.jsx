import { Box } from "@mui/material";
import { CatalogCard } from "../components/CatalogCard";
import { TextButton } from "../components/buttons/TextButton";
import { MainButton } from "../components/buttons/MainButton";
import { MainInput } from "../components/inputs/MainInput";
import { mainButtonStyle } from "../styles/styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectisLoading } from "../redux/cars/carRentSlice";
import { getAllCars } from "../redux/cars/carOperations";
import { Loader } from "../components/Loader/Loader";

export const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectisLoading);
  const [filter, setFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const carMakes = [];
  for (const car of cars) {
    const carMake = car.make;
    if (carMake) {
      carMakes.push(carMake);
    }
  }

  const filteredCars = cars.filter((car) => car.make === filter);

  useEffect(() => {
    dispatch(getAllCars({ page: currentPage }));
  }, [currentPage, dispatch]);

  const handleSubmitSearch = (evt) => {
    evt.preventDefault();
    setFilter(evt.target.cars.value);
    return null;
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
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
        {/* {carMakes.length > 0 && <MainInput opts={[...new Set(carMakes)]} />} */}
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
          : cars.map((car) => <CatalogCard key={car.id} car={car} />)}
      </Box>
      <TextButton
        onClick={handleLoadMore}
        disabled={isLoading}
        sx={{ display: "block", margin: "100px auto 150px" }}
      >
        {isLoading ? "Loading..." : "Load more"}
      </TextButton>
      {isLoading && <Loader />}
    </>
  );
};
