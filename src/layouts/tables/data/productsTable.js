import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

// import { useProductsStore } from "../../../stores/product/index";
import { useProducts } from "../../../hooks/product";

const LightTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#63ba67",
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    // fontSize: 11,
  },
}));

const ProductsList = () => {
  const { data, fetchNextPage, isLoading, error } = useProducts();
  const [page, setPage] = useState(1);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handlePageChange = (event, value) => {
    setPage(value);
    fetchNextPage({ pageParam: value - 1 });
  };

  return (
    <>
      <Grid container spacing={3} pr={1} pl={1}>
        {!data.pages[page - 1] ? (
          <div>Loading...</div>
        ) : (
          data.pages[page - 1].data.map((product, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card
                sx={{
                  backgroundColor: "#f8f9fa",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <CardMedia
                    component="img"
                    alt={product.name}
                    style={{ width: "100%", objectFit: "contain", aspectRatio: 4 / 3 }}
                    image={product.images[0]}
                  />
                </Box>
                <CardContent>
                  <LightTooltip title={product.name} placement="right">
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {product.name}
                    </Typography>
                  </LightTooltip>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: "black" }}>
                    {Number(product.price.origin).toLocaleString("en-US")} 원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>

      <Grid item xs={12}>
        <Pagination count={data.pages[0].totalPage} page={page} onChange={handlePageChange} />
      </Grid>
    </>
  );
};

export default ProductsList;

// const { products } = useProductsStore();
