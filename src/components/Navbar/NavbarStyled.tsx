import styled from "styled-components";

const NavbarStyled = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: 32px;

  .navbar-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    font-size: 20px;
  }

  .active {
    border-bottom: 5px solid #02c4c3;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;

    .navbar-info__logo {
      width: 100px;
    }
  }
`;

export default NavbarStyled;
