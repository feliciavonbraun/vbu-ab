// import styled from "styled-components";
// import { Container } from "../WrapperElements";
// // import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// // import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// const Schema = () => {
//   return (
//     <Container fullWidth>
//       {/* {ArrowForwardIosIcon} */}
//       <h2>FAST SCHEMA v.41</h2>
//       {/* {ArrowBackIosNewIcon}{" "} */}
//       <StyledTable>
//         <StyledTR>
//           <StyledTH>DAG</StyledTH>
//           <StyledTH>DATUM</StyledTH>
//           <StyledTH>TID</StyledTH>
//           <StyledTH>UTBILDNING</StyledTH>
//           <StyledTH>PLAST</StyledTH>
//         </StyledTR>
//         <StyledTR>
//           <StyledTH>Måndag</StyledTH>
//           <StyledTH>8/11-21</StyledTH>
//           <StyledTH>08.00 - ca 15.00</StyledTH>
//           <StyledTH>Allmän Ställningsutbildning </StyledTH>
//         </StyledTR>
//         <StyledTR>
//           <StyledTH>Tisdag</StyledTH>
//           <StyledTH>9/11-21</StyledTH>
//           <StyledTH> 08.00 - ca 15.00 </StyledTH>
//           <StyledTH>Heta Arbeten</StyledTH>
//         </StyledTR>
//         <StyledTR>
//           <StyledTH>Onsdag</StyledTH>
//           <StyledTH>10/11-21</StyledTH>
//           <StyledTH>08.00 - ca 15.00 </StyledTH>
//           <StyledTH>Sax & Bomlift utbildning </StyledTH>
//         </StyledTR>
//         <StyledTR>
//           <StyledTH>Torsdag</StyledTH>
//           <StyledTH>11/11-21</StyledTH>
//           <StyledTH> 08.00 - ca 12.00</StyledTH>
//           <StyledTH>Fallskyddsutbildning gr.</StyledTH>
//         </StyledTR>
//         <StyledTR>
//           <StyledTH>Torsdag</StyledTH>
//           <StyledTH>11/11-21</StyledTH>
//           <StyledTH>12.30 - ca 16.00</StyledTH>
//           <StyledTH>Säkra lyft / Traversutbildning</StyledTH>
//         </StyledTR>
//       </StyledTable>
//     </Container>
//   );
// };
// export default Schema;

// const StyledTable = styled.div`
//   border-collapse: collapse;
//   width: 100%;
//   background: green;
//   text-align: left;
// `;

// const StyledTR = styled.tr`
//   /* border: 1px solid #ddd; */
//   width: 100%;
// `;
// const StyledTH = styled.th`
//   border: 1px solid #ddd;
//   padding: 10px;
//   width: 25%;
// `;

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Container, FlexContainer } from "../WrapperElements";

function createData(
  day: string,
  date: string,
  time: string,
  service: string,
  location: string
) {
  return { day, date, time, service, location };
}

const rows = [
  createData(
    "Måndag",
    "8 / 11 - 21",
    "08.00 - ca 15.00",
    "Allmän Ställningsutbildning",
    "Göteborg"
  ),
  createData(
    "Tisdag",
    "9 / 11 - 21",
    "08.00 - ca 15.00",
    "Heta Arbeten",
    "Göteborg"
  ),
  createData(
    "Onsdag",
    "10 / 11 - 21",
    "08.00 - ca 15.00",
    "Sax & Bomlift utbildning",
    "Göteborg"
  ),
  createData(
    "Torsdag",
    "11 / 11 - 21",
    "08.00 - ca 12.00",
    "Fallskyddsutbildning gr.",
    "Göteborg"
  ),
  createData(
    "Torsdag",
    "11 / 11 - 21",
    "12.30 - ca 16.00",
    "Säkra lyft / Traversutbildning",
    "Göteborg"
  ),
];

export default function BasicTable() {
  return (
    <Container mainPadding>
      <TableContainer component={Paper}>
        <FlexContainer centered>
          {/* <ArrowBackIosNewIcon /> */}
          <h2>SCHEMA v.45</h2>
          {/* <ArrowForwardIosIcon /> */}
        </FlexContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>DAG</TableCell>
              <TableCell align="left">DATUM</TableCell>
              <TableCell align="left">TID</TableCell>
              <TableCell align="left">UTBILDNING</TableCell>
              <TableCell align="left">PLAST</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.day}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.day}
                </TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.time}</TableCell>
                <TableCell align="left">{row.service}</TableCell>
                <TableCell align="left">{row.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
