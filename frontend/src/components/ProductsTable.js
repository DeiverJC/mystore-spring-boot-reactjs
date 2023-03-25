import { formatNumber } from "@/libs/helpers";
import { Add, Delete, Edit } from "@mui/icons-material";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

export default function ProductsTable({ products }) {
  const router = useRouter();
  const columns = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        alignContent: "center",
        width: 80,
      },
      { field: "name", headerName: "Nombre", width: 400 },
      {
        field: "price",
        headerName: "Precio",
        type: "number",
        minWidth: 150,
        valueGetter: (params) => formatNumber(params.row.price),
      },
      {
        field: "stock",
        headerName: "Stock",
        type: "number",
        minWidth: 150,
      },
      {
        field: "actions",
        headerName: "Acciones",
        type: "number",
        minWidth: 150,
        sortable: false,
        renderCell: (params) => (
          <>
            <IconButton
              aria-label="Actualizar"
              onClick={() => router.push(`/edit/${params.id}`)}
            >
              <Edit />
            </IconButton>
            <IconButton
              aria-label="Eliminar"
              onClick={() => console.log(params.id)}
              color="error"
            >
              <Delete />
            </IconButton>
          </>
        ),
      },
    ],
    []
  );

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Productos
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          startIcon={<Add />}
          onClick={() => router.push("/create")}
        >
          Nuevo
        </Button>
      </Grid>

      <DataGrid
        columns={columns}
        rows={products}
        pageSize={5}
        rowsPerPageOptions={[5]}
        autoHeight
        autoW
      />
    </>
  );
}
