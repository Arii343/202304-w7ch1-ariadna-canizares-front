import UserForm from "../../components/UserForm/UserForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled>
      <UserForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
