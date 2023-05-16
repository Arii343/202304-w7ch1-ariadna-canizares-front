import { styled } from "styled-components";

const UserFromStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: rgb(60, 62, 68);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .user-form__section {
    padding-top: 30px;
  }

  .user-form__title {
    font-size: 25px;
    text-transform: uppercase;
  }

  .user-form__input {
    padding: 15px;
    border-radius: 10px;
  }

  .user-form__button {
    display: flex;
    background-color: orange;
    padding: 15px;
    border-radius: 10px;
    width: 100px;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    text-transform: capitalize;
  }
`;

export default UserFromStyled;
