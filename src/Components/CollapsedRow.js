import { useState } from "react";
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
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const CollapsedRow = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {item.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                fontWeight="bold"
              >
                Item Info
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography>Item ID</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Description</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Price</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Quantity</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{`$${item.price}`}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </div>
  );
};

export default CollapsedRow;
