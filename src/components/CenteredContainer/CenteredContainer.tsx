import { PropsWithChildren } from "react";
import CenteredContainerStyled from "./CenteredContainerStyled";

const CenteredContainer = ({ children }: PropsWithChildren): JSX.Element => {
  return <CenteredContainerStyled>{children}</CenteredContainerStyled>;
};

export default CenteredContainer;
