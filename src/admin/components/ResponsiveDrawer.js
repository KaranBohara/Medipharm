import * as React from 'react';
import {Link} from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Medilogo from "../assets/medicine.png";
import {Home,Category,LocalMall,Phonelink,Settings,Person} from '@material-ui/icons';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme,open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className='drawer'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className='logo-wrapper' >
            <div className='logo'><img src={Medilogo} alt="medilogo" height="30px"></img></div>
            <div className='logo-title'>Medipharm Admin Dashboard</div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader className='drawer'>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon className='dashboard-icons' /> : <MenuOpenIcon className='dashboard-icons'/>}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className='list-item'>
          <div className='list-box'>
            <ListItem button>
              <ListItemIcon>
              <Link to="/admin/dashboard"><Home className="dashboard-icons"/></Link>
              </ListItemIcon>
              <Link className="link-decoration" to="/admin/dashboard"><ListItemText primary="Home" /></Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
              <Link to="/admin/dashboard/products"><Phonelink className="dashboard-icons"/></Link>
              </ListItemIcon>
              <Link className="link-decoration" to="/admin/dashboard/products"><ListItemText primary="Products" /></Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
              <Link to="/admin/dashboard/users"><Person className="dashboard-icons"/></Link>
              </ListItemIcon>
              <Link className="link-decoration" to="/admin/dashboard/users"><ListItemText primary="Users" /></Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
              <Link to="/admin/dashboard/category"><Category className="dashboard-icons"/></Link>
              </ListItemIcon>
              <Link className="link-decoration" to="/admin/dashboard/category"><ListItemText primary="Category" /></Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
              <Link to="/admin/dashboard/orders"><LocalMall className="dashboard-icons"/></Link>
              </ListItemIcon>
              <Link className="link-decoration" to="/admin/dashboard/orders"><ListItemText primary="Orders" /></Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
              <Link to="/admin/dashboard/settings"><Settings className="dashboard-icons"/></Link>
              </ListItemIcon>
              <Link className="link-decoration" to="/admin/dashboard/settings"><ListItemText primary="Settings" /></Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
              <Link to="/admin/dashboard/logout"><LogoutIcon className="dashboard-icons"/></Link>
              </ListItemIcon>
              <Link className="link-decoration" to="/admin/dashboard/logout"><ListItemText primary="Logout" /></Link>
            </ListItem>
            </div>
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}