import { useState } from "react";
import {
  Table,
  TableBody,
  Typography,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  TableContainer,
  TableFooter,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Row from "./Row";

export default function CollapsibleTable({ items }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value, 10);
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, items.length - page * rowsPerPage);

  return (
    <div className='mainContainer'>
      <TableContainer component={Paper} sx={{ width: '90%' }}>
        <Table aria-label="collapsible table" >
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>
                <Typography fontSize="large" fontWeight="bold">
                  Customer First Name
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography fontSize="large" fontWeight="bold">
                  Customer Last Name
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography fontSize="large" fontWeight="bold">
                  Customer ID
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography fontSize="large" fontWeight="bold">
                  Order ID
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography fontSize="large" fontWeight="bold">
                  Order Amount
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography fontSize="large" fontWeight="bold">
                  Order Date
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => {
                return <Row item={item} />;
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 74 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TableFooter>
          <TablePagination
            rowsPerPageOptions={[1, 5, items.length]}
            component="div"
            count={items.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableFooter>
      </TableContainer>
    </div>
  );
}
