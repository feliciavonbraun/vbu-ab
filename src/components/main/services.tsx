import HotWork from "../../assets/aman-jakhar.jpg";
import styled from "styled-components";
import { services1, services2 } from "../interfaces/serviceArray";
import { Container } from "../WrapperElements";

const Services = () => {
  services1.sort((a, b) => a.item.localeCompare(b.item));

  return (
    <Container>
      <StyledH2>TJÄNSTER</StyledH2>
      <StyledOurServices>
        <StyledOneService>
          <img src={HotWork} width="100%" alt="" />
          <h2>Utbildningar</h2>
          <div>
            <ul>
              {services1.map((service, index) => (
                <li key={index}>{service.item}</li>
              ))}
            </ul>
          </div>
        </StyledOneService>

        <StyledOneService>
          <img src={HotWork} width="100%" alt="" />
          <h2>Utbildningar</h2>
          <div>
            <ul>
              {services2.map((service, index) => (
                <li key={index}>{service.item}</li>
              ))}
            </ul>
          </div>
        </StyledOneService>
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
  justify-content: space-evenly;
  padding: 20px;
`;

const StyledOneService = styled.div`
  /* background: blue; */
  display: flex;
  flex-direction: column;
  width: 45%;
  line-height: 35px;
`;
