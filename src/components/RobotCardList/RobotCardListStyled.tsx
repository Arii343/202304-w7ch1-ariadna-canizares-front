import styled from "styled-components";

const RobotCardListStyled = styled.section`
  .robot-card-list__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding-block: 25px;
  }

  @media only screen and (min-width: 600px) {
    .robot-card-list__container {
      flex-direction: row;
      flex-wrap: wrap;
      padding-top: 50px;
    }
  }
`;

export default RobotCardListStyled;
