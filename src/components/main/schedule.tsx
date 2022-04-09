import { Container } from "../WrapperElements";
import styled, { css } from "styled-components";
import { useState } from "react";
import { educations14, educations17 } from "../interfaces/educations";

const allDatas = [
  {
    week: "v.14",
    weeklyEducations: educations14,
  },
  {
    week: "v.17",
    weeklyEducations: educations17,
  },
];

function Scedule2() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabs = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Container mainPadding>
      <Root>
        <h2 id="schedule">KOMMANDE UTBILDNINGAR</h2>
        <NavWithTabs>
          {allDatas.map((data, index) => (
            <Tab
              key={index}
              onClick={() => handleTabs(index)}
              active={activeTab === index}
            >
              {data.week}
            </Tab>
          ))}
        </NavWithTabs>
        <Table>
          <thead>
            <tr>
              <TH align="left">UTBILDNING</TH>
              <TH align="left">DAG</TH>
              <TH align="left">DATUM</TH>
              <TH align="left">TID</TH>
              <TH align="left">PLATS</TH>
            </tr>
          </thead>

          {allDatas.map((data, index) => (
            <tbody key={index}>
              {data.weeklyEducations.map((education, i) => (
                <TR key={i} active={activeTab === index}>
                  <TD>{education.service} </TD>
                  <TD align="left">{education.day}</TD>
                  <TD align="left">{education.date}</TD>
                  <TD align="left">{education.time}</TD>
                  <TD align="left">{education.location}</TD>
                </TR>
              ))}
            </tbody>
          ))}
        </Table>
      </Root>
    </Container>
  );
}
export default Scedule2;

const Root = styled.div`
  border-radius: 5px;
  box-shadow: 1px 3px 4px #959aa1;
`;

const NavWithTabs = styled.nav`
  display: flex;
  align-items: flex-end;
  margin: 0 1rem;
  box-shadow: 0 0.5px 0 #959aa1;
`;

const Tab: any = styled.span`
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  ${(p: any) =>
    p.active &&
    css`
      background: white;
      color: var(--primary-clr);
      box-shadow: 0 2px 0 var(--primary-clr);
    `};
`;

const Table = styled.table`
  width: 100%;
  padding: 1rem;
`;

const TR: any = styled.tr`
  display: none;
  box-shadow: 0 -0.5px 0 #959aa1;

  ${(p: any) =>
    p.active &&
    css`
      display: table-row;
    `}
`;

const TD = styled.td`
  padding: 0.6rem 0;
`;
const TH = styled(TD)``;

// https://styled-components.com/docs/api about TS and styled-components
