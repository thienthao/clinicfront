import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CommingTable from "../tableList/comingTable";
import WaitingTable from "../tableList/waitingTable";
import DoingTable from "../tableList/doingTable";
import FinishTable from "../tableList/finishTable";
import CanceledTable from "../tableList/canceledTable";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: ""
    // theme.palette.background.paper
  }
}));

export default function Schedule() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      className={classes.root}
      style={{
        marginLeft: 100,
        marginTop: 20,
        marginRight: 20,
        zIndex: 0
      }}
    >
      <AppBar position="static">
        <Tabs
          value={value}
          indicatorColor="primary"
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Khách Đặt Lịch" {...a11yProps(0)} />
          <Tab label="Khách Đang Chờ" {...a11yProps(1)} />
          <Tab label="Khách Đang Khám" {...a11yProps(2)} />
          <Tab label="Hoàn Thành" {...a11yProps(2)} />
          <Tab label="Khách Hủy Lịch " {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CommingTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WaitingTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DoingTable />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <FinishTable />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CanceledTable />
      </TabPanel>
    </div>
  );
}
