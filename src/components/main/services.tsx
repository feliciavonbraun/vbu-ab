import HotWork from "../../assets/aman-jakhar.jpg";
import styled from "styled-components";
import { services } from "../interfaces/serviceArray";
import { Container, FlexContainer } from "../WrapperElements";

const Services = () => {
  services.sort((a, b) => a.item.localeCompare(b.item));

  return (
    <Container mainPadding>
      <StyledH2>TJÄNSTER</StyledH2>
      <StyledOurServices>
        <FlexContainer>
          <img
            src={HotWork}
            width="50%"
            alt=""
            style={{ paddingRight: "10px" }}
          />
          <img
            src={HotWork}
            width="50%"
            alt=""
            style={{ paddingLeft: "10px" }}
          />
        </FlexContainer>
        <h3>Utbildningar</h3>
        <div style={{ columns: "2" }}>
          <ul data-columns="2">
            {services.map((service, index) => (
              <li key={index}>{service.item}</li>
            ))}
          </ul>
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
    </Container>
  );
};
export default Services;

const StyledH2 = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: green; */
  height: 100px;
`;

const StyledOurServices = styled.div`
  /* background: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  line-height: 35px;
`;
