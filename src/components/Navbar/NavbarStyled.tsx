import styled from "styled-components";

const NavbarStyled = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: 32px;

  .navbar-info {
    display: flex;
    align-items: center;
    gap: 30px;

    &__title {
      font-size: 2rem;
      font-weight: 700;
    }

    &__logo {
      width: 60px;
    }
  }

  .navbar__links {
    padding-block: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    font-size: 20px;
  }

  .navbar__link {
    width: 100%;
  }

  .navbar__link > a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(60, 62, 68);
    padding: 10px;
    border-radius: 10px;
  }

  .navbar__link > .active {
    background-color: white;
    color: rgb(60, 62, 68);
  }

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;

    .navbar-info__logo {
      width: 100px;
    }

    .navbar__links {
      gap: 20px;
      flex-direction: row;
    }

    .navbar__link > a {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: inherit;
      padding: 0;
      border-radius: 0;
    }

    .navbar__link > .active {
      color: white;
      background-color: inherit;
      border-bottom: 5px solid rgb(2, 196, 195);
    }
  }
`;

export default NavbarStyled;
