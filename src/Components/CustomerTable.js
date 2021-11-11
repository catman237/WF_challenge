import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Row from "./Row";

export default function CollapsibleTable({ items }) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Curstomer First Name</TableCell>
              <TableCell align="right">Customer Last Name</TableCell>
              <TableCell align="right">Customer ID</TableCell>
              <TableCell align="right">Order ID</TableCell>
              <TableCell align="right">Order Amount</TableCell>
              <TableCell align="right">Order Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => {
              return <Row item={item} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
