import { Outlet } from "react-router-dom";
import CenteredContainer from "../CenteredContainer/CenteredContainer";
import Navbar from "../Navbar/Navbar";

const App = (): JSX.Element => {
  return (
    <CenteredContainer>
      <Navbar />
      <p>A cool robots app!</p>
      <Outlet />
    </CenteredContainer>
  );
};

export default App;
