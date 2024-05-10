import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SpeedIcon from '@mui/icons-material/Speed';
import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
const AdminMenu = () => {
  const [openAcademics, setOpenAcademics] = React.useState(false);
  const [openEmployee, setOpenEmployee] = React.useState(false);
  const [openAttendance,setAttendance]= React.useState(false)
  const [currentPage, setCurrent]=React.useState("");
  const handleAcademicsClick = () => {
    setOpenAcademics(!openAcademics);
    setOpenEmployee(false);
    setAttendance(false)
  };

  const handleEmployeeClick = () => {
    setOpenEmployee(!openEmployee);
    setOpenAcademics(false);
    setAttendance(false)
  };

  const handleAttendanceClick = () =>{
    setAttendance(!openAttendance);
    setOpenAcademics(false)
    setOpenEmployee(false)
  }
  const CurrentChange = (val) =>{
    setCurrent(val)
    console.log(currentPage)
  }
  return (
    <div id='admin-menu'>
      <List
        className='admin-menu-list'
        sx={{ width: '100%', maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton>
          <ListItemIcon>
            <SpeedIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton onClick={handleAcademicsClick}>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Academics" />
          {openAcademics ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openAcademics} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} >
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText primary="Add Student" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} >
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText primary="Students List" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} >
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText primary="Students House" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleEmployeeClick}>
          <ListItemIcon>
            <PeopleIcon></PeopleIcon>
          </ListItemIcon>
          <ListItemText primary="Manage Employee" />
          {openEmployee ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openEmployee} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} >
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText primary="Add Department" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} >
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText primary="Add Employee" />
            </ListItemButton>
          </List>
        </Collapse>


        <ListItemButton onClick={handleAttendanceClick}>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Attendance" />
          {openAttendance ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openAttendance} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton onClick={()=>{currentPage('Attendance')}} sx={{ pl: 4 }} >
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText primary="Add Attendance" />
            </ListItemButton>
          </List>
        </Collapse>

      </List>
    </div>
  );
}

export default AdminMenu;
