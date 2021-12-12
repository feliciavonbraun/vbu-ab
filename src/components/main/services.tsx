import HotWork from "../../assets/danial-abdullah.jpg";
import Forklift from "../../assets/justus-menke.jpg";
import styled from "styled-components";
import { services } from "../interfaces/serviceArray";
import { FlexContainer } from "../WrapperElements";

import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

// Photo by <a href="https://unsplash.com/@justusmenke?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Justus Menke</a> on <a href="https://unsplash.com/s/photos/forklift?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

const Services = () => {
  services.sort((a, b) => a.item.localeCompare(b.item));

  return (
    <FlexContainer mainPadding centeredJusitify>
      <StyledOurServices>
        <FlexContainer>
          <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title="Foto av Danial Abdullah"
          >
            <img
              src={HotWork}
              width="50%"
              alt="By Danial Abdullah från Pexels"
              style={{ paddingRight: "10px" }}
            />
          </Tooltip>
          <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title="Foto av Justus Menke"
          >
            <img
              src={Forklift}
              width="50%"
              alt="By Justus Menke on Unsplash"
              style={{ paddingLeft: "10px" }}
            />
          </Tooltip>
        </FlexContainer>
        <h2>UTBILDNINGAR</h2>
        <div style={{ columns: "2" }}>
          <StyledUL>
            {services.map((service, index) => (
              <li key={index}>{service.item}</li>
            ))}
          </StyledUL>
        </div>

        <p>
          <i>
            Alla utbildare är ackrediterade för att registrera på ID06
            kompetensdatabas. Enligt de krav som ställs under 2021.
            <br />
            Vi håller öppna utbildningar på olika platser i Sverige. Lärarledda
            webbutbildningar och repetitionsutbildningar, även internutbildning
            på plats hos kund. Begär offert för mer information.
          </i>
        </p>
        <p></p>
      </StyledOurServices>
    </FlexContainer>
  );
};
export default Services;

const StyledOurServices = styled.div`
  /* background: red; */
  display: flex;
  flex-direction: column;
  line-height: 35px;
`;

const StyledUL = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
