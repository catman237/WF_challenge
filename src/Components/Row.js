import { useState } from "react";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CollapsedRow from "./CollapsedRow";

function Row({ item }) {
  console.log(item);
  const [open, setOpen] = useState(false);

  const formattAddress = (item) => {
    return `${item.customer_address.street}, ${item.customer_address.city}, ${item.customer_address.state} ${item.customer_address.zip} `;
  };

  const showOrders = (item) => {
    item.order_items.map((order) => {});
  };

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{item.customer_first_name}</TableCell>
        <TableCell align="right">{item.customer_last_name}</TableCell>
        <TableCell align="right">{item.customer_id}</TableCell>
        <TableCell align="right">{item.order_id}</TableCell>
        <TableCell align="right">{item.order_amount}</TableCell>
        <TableCell align="right">{item.order_date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Customer Address</TableCell>
                    <TableCell>Ordered Items</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableCell>{formattAddress(item)}</TableCell>
                  {/* <TableCell>{item.order_items.map(item => {
                      <CollapsedRow item={item}/>
                  })}</TableCell> */}
                  <TableCell component="th" scope="row">
                    {item.order_items.map((item) => {
                      return item.name;
                    })}
                  </TableCell>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default Row;