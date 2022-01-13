import React from "react";
import { ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Link } from "react-router-dom";

const SideBarAdmin = () => {
  return (
    <div>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText
          primary={<Link to="/dashboard/products">Products</Link>}
        />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary={<Link to="/dashboard/users">Users</Link>} />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary={<Link to="/dashboard/orders">Orders</Link>} />
      </ListItemButton>
    </div>
  );
};

export default SideBarAdmin;
