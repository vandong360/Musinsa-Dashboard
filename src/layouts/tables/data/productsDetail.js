import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ProductDetail = ({ product }) => {
  return (
    <Grid container spacing={3} pr={1} pl={1}>
      <Grid item xs={12} sm={6} md={6}>
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
            <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: "black" }}>
              {Number(product.price.origin).toLocaleString("en-US")} 원
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
