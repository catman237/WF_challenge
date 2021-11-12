import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import {
  Box,
  Collapse,
  Table,
  TableBody,
  Typography,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CollapsedRow from "./CollapsedRow";

function Row({ item }) {
  const [open, setOpen] = useState(false);

  const formatAddress = (item) => {
    return `${item.customer_address.street}, ${item.customer_address.city}, ${item.customer_address.state} ${item.customer_address.zip} `;
  };
  const formatDate = (item) => {
    let date = new Date(item);
    return date.toUTCString().split(" ").splice(0, 4).join(" ");
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
        <TableCell align="right">{`$${item.order_amount}`}</TableCell>
        <TableCell align="right">{formatDate(item.order_date)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography fontWeight="bold">
                        Customer Address
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography fontWeight="bold">Ordered Items</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableCell>{formatAddress(item)}</TableCell>
                  {/* <TableCell>{item.order_items.map(item => {
                      <CollapsedRow item={item}/>
                  })}</TableCell> */}
                  <TableCell component="th" scope="row">
                    {item.order_items.map((item) => {
                      return <CollapsedRow item={item} />;
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
