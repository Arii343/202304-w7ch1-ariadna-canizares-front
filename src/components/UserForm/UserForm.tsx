import { useState } from "react";
import UserFromStyled from "./UserFormStyled";

const UserForm = (): JSX.Element => {
  interface UserLogin {
    username: string;
    password: string;
  }
  const [userState, setUserState] = useState<UserLogin>({
    username: "",
    password: "",
  });

  const onChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserState({
      ...userState,
      username: event.target.value,
    });
  };

  const onChangeUserPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserState({
      ...userState,
      password: event.target.value,
    });
  };

  return (
    <>
      <UserFromStyled className="user-form">
        <section className="user-form__section">
          <h2 className="user-form__title">login</h2>
        </section>

        <label className="user-form__label" htmlFor="username">
          Username:
        </label>
        <input
          className="user-form__input"
          type="text"
          id="username"
          onChange={onChangeUserName}
          placeholder="example: antonio"
        />
        <label className="user-form__label" htmlFor="password">
          Password:
        </label>
        <input
          className="user-form__input"
          type="password"
          id="password"
          onChange={onChangeUserPassword}
          placeholder="example: antonio343"
        />
        <button className="user-form__button" type="submit">
          login
        </button>
      </UserFromStyled>
    </>
  );
};

export default UserForm;
