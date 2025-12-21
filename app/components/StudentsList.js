"use client";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useContext, useEffect, useRef, useState } from "react";
import { myTheme } from "../db/Db";
import styled from "@emotion/styled";
import { createTheme, ThemeProvider } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID" },
  {
    field: "username",
    headerName: "UserName",
    width: 150,

    editable: true,
  },
  {
    field: "email",
    headerName: "email",
    width: 150,
    editable: true,
  },
  {
    field: "pass",
    headerName: "password",
    type: "number",
    width: 110,
    editable: true,
  },
];

const DataGridCustom = styled(DataGrid)(({ isLight }) => ({
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: isLight ? "#f5f5f5" : "#000",
  },

  "& .MuiDataGrid-columnHeaderTitle": {
    color: isLight ? "#000" : "#fff",
    fontWeight: "bold",
  },

  "& .MuiDataGrid-cell": {
    color: isLight ? "#000" : "#fff",
  },

  "& .MuiDataGrid-footerContainer": {
    backgroundColor: isLight ? "#f5f5f5" : "#000",
    color: isLight ? "#000" : "#fff",
  },
}));

export default function StudentsList() {
  const gridData = useRef();
  const { theme, lang } = useContext(myTheme);
  const [loading, setLoading] = useState(true);

  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetch("https://6912e51452a60f10c8232605.mockapi.io/adminpanel", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((tasks) => {
        // Do something with the list of tasks
        setRows(tasks);
        setLoading(false);
      })
      .catch((error) => {
        // handle error
      });
  }, []);

  const themeMain = createTheme({
    palette: {
      mode: theme ? "light" : "dark",
    },
  });

  return (
    <ThemeProvider theme={themeMain}>
      <Box sx={{ height: 400 }}>
        <DataGridCustom
          ref={gridData}
          isLight={theme}
          rows={rows}
          columns={columns}
          headerHeight={56}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          loading={loading}
          slotProps={{
            loadingOverlay: {
              noRowsVariant: "skeleton",
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </ThemeProvider>
  );
}
