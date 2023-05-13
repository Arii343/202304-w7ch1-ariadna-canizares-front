import { Outlet } from "react-router-dom";
import CenteredContainer from "../CenteredContainer/CenteredContainer";

const App = (): JSX.Element => {
  return (
    <CenteredContainer>
      <p>A cool robots app!</p>
      <Outlet />
    </CenteredContainer>
  );
};

export default App;
