import { React, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../data";
import { Link } from "react-router-dom";

export default function DataGridDemo() {
  const [data, setData] = useState(userRows);
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div
            className="cellAction"
            style={{ display: "flex", gap: "0.4rem" }}
          >
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              //   onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}
