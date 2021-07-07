import React from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Avatar,
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  Category,
  ChevronLeft,
  ChevronRight,
  Menu,
  People,
  // DnsSharpIcon,
  // RateReviewIcon,
} from "@material-ui/icons";
import DnsSharpIcon from '@material-ui/icons/DnsSharp';
import RateReviewIcon from '@material-ui/icons/RateReview';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#2F80ED",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
  },
  activeItem: {
    backgroundColor: "#2196F3",
    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
    color: "#fff",
  },
}));
const menuList = [
  {
    name: "Khách hàng",
    icon: <People />,
    path: "/customer",
  },
  {
    name: "Loại sản phẩm",
    icon: <Category />,
    path: "/type-product",
  },
  {
    name:"Sản phẩm",
    icon:<DnsSharpIcon/>,
    path:"/product",
  },
  {
    name:"Đánh giá",
    icon:<RateReviewIcon/>,
    path:"/danhgia",
  }
];
export default function LayoutPage({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const History = useHistory();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  console.log(History);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <Menu />
          </IconButton>
          {!open && (
            <Typography variant="h6" noWrap>
              <b>Trang quản lý</b>
            </Typography>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {open && (
            <ListItem>
              <Avatar alt="" src="/icon-home.png" />

              <Typography variant="h6">
                <b>Trang quản lý</b>
              </Typography>
            </ListItem>
          )}
          {menuList.map((item, index) => (
            <ListItem
              className={`${
                History.location.pathname === item.path
                  ? classes.activeItem
                  : ""
              }`}
              onClick={() => History.replace(item.path)}
              button
              key={index}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={<b>{item.name}</b>} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Box px={3} py={2}>
          {children}
        </Box>
      </main>
    </div>
  );
}
