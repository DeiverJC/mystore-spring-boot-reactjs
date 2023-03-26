"use client";

import { useProducts } from "@/context/ProductsContext";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function page() {
  const [isSending, setIsSending] = useState(false);
  const { createProduct } = useProducts();
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSending(true);
    try {
      const response = await createProduct(data);
      if (response) {
        setIsSending(false);
        reset();
      }
    } catch (error) {
      console.log(error);
      setIsSending(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Crear producto
          </Typography>
          <Button size="small" onClick={() => router.push("/")}>
            Volver
          </Button>
        </Grid>
        <Grid
          container
          spacing={3}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid item xs={12}>
            <TextField
              required
              id="name"
              fullWidth
              name="name"
              label="Nombre"
              variant="outlined"
              autoComplete="nombre-producto"
              error={errors?.name && true}
              helperText={errors?.name && errors.name.message}
              {...register("name", {
                required: { value: true, message: "Requerido" },
              })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="price"
              fullWidth
              name="price"
              type="number"
              label="Precio"
              variant="outlined"
              autoComplete="precio-producto"
              error={errors?.price && true}
              helperText={errors?.price && errors.price.message}
              {...register("price", {
                required: { value: true, message: "Requerido" },
                min: { value: 1, message: "El valor minimo es 1" },
              })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="stock"
              fullWidth
              name="stock"
              label="Stock"
              type="number"
              variant="outlined"
              autoComplete="stock-producto"
              error={errors?.stock && true}
              helperText={errors?.stock && errors.stock.message}
              {...register("stock", {
                required: { value: true, message: "Requerido" },
                min: { value: 1, message: "El valor minimo es 1" },
              })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LoadingButton
              loading={isSending}
              size="small"
              variant="contained"
              type="submit"
            >
              Guardar
            </LoadingButton>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
