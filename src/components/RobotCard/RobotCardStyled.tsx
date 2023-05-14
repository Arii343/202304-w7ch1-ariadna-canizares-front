import styled from "styled-components";

const RobotCardStyled = styled.article`
  background-color: rgb(60, 62, 68);
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: rgb(245, 245, 245);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;

  .robot-card__img {
    width: 100%;
    border-radius: 10px 10px 0 0;
    height: 200px;
    object-fit: cover;
    object-position: top center;
  }

  .robot-card__info {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .robot-card__title {
    font-weight: 800;
    font-size: 26px;
    color: rgb(255, 152, 0);
  }

  .robot-card__section {
    display: flex;
    gap: 10px;
  }

  .robot-card__text {
    color: rgb(245, 245, 245);
  }

  .robot-card__text--dark {
    color: rgb(158, 158, 158);
  }

  .robot-card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .robot-card__actions {
    align-self: center;
    display: flex;
    gap: 20px;
  }

  .robot-card__action-button {
    border-radius: 3px;
    padding: 5px;
    width: 40px;
    height: 40px;
    background: rgb(245, 245, 245);
  }

  .robot-card__icon {
    path {
      fill: rgb(39, 43, 51);
    }
  }

  .robot-card__action-button--edit:hover {
    background: rgb(85, 204, 68);
  }

  .robot-card__action-button--delete:hover {
    background: #e84057;
  }

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    border-radius: 10px;
    width: 475px;
    height: 200px;
    .robot-card__img {
      max-width: 200px;
      border-radius: 10px 0 0 10px;
    }

    .robot-card__title {
      font-size: 22px;
    }
    .robot-card__info {
      width: 100%;
    }
  }
`;

export default RobotCardStyled;
