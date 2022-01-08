import React, { useState } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";

const SideBarAdmin = () => {
  const [openProduct, setOpenProduct] = useState(true);
  const [openUser, setOpenUser] = useState(true);
  const [openOrder, setOpenOrder] = useState(true);

  const productHandleClick = () => {
    setOpenProduct(!openProduct);
  };

  const userHandleClick = () => {
    setOpenUser(!openUser);
  };

  const orderHandleClick = () => {
    setOpenOrder(!openOrder);
  };
  return (
    <div>
      <ListItemButton onClick={productHandleClick}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
        {openProduct ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openProduct} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="List" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Create" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={userHandleClick}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="User" />
        {openUser ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openUser} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="List" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Create" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={orderHandleClick}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
        {openOrder ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openOrder} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="List" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Create" />
          </ListItemButton>
        </List>
      </Collapse>
    </div>
  );
};

export default SideBarAdmin;
