import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Container, FlexContainer } from "../WrapperElements";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { educations1, educations2 } from "../interfaces/educations";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Schedule() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container mainPadding>
      <TableContainer component={Paper}>
        <FlexContainer centeredAlign centeredJusitify>
          <h2>KOMMANDE UTBILDNINGAR</h2>
        </FlexContainer>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="v.49" {...a11yProps(0)} />
              <Tab label="v.51" {...a11yProps(1)} />
              {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>UTBILDNING</TableCell>
                  <TableCell align="left">DAG</TableCell>
                  <TableCell align="left">DATUM</TableCell>
                  <TableCell align="left">TID</TableCell>
                  <TableCell align="left">PLATS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {educations1.map((education) => (
                  <TableRow
                    key={education.day}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {education.service}{" "}
                    </TableCell>
                    <TableCell align="left">{education.day}</TableCell>
                    <TableCell align="left">{education.date}</TableCell>
                    <TableCell align="left">{education.time}</TableCell>
                    <TableCell align="left">{education.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>UTBILDNING</TableCell>
                  <TableCell align="left">DAG</TableCell>
                  <TableCell align="left">DATUM</TableCell>
                  <TableCell align="left">TID</TableCell>
                  <TableCell align="left">PLATS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {educations2.map((education) => (
                  <TableRow
                    key={education.day}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {education.service}{" "}
                    </TableCell>
                    <TableCell align="left">{education.day}</TableCell>
                    <TableCell align="left">{education.date}</TableCell>
                    <TableCell align="left">{education.time}</TableCell>
                    <TableCell align="left">{education.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabPanel>
          {/* <TabPanel value={value} index={2}>
            Item Three
          </TabPanel> */}
        </Box>
      </TableContainer>
    </Container>
  );
}
export default Schedule;
