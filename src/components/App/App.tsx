import { useEffect } from "react";
import Layout from "../Layout/Layout";
import AppStyled from "./AppStyled";
import useApi from "../../hooks/useApi";
import { useAppDispatch } from "../../store";
import { loadRobotsActionCreator } from "../../store/robots/robotsSlice";

const App = (): JSX.Element => {
  const { getRobots } = useApi();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const robots = await getRobots();
      dispatch(loadRobotsActionCreator(robots));
    })();
  }, [dispatch, getRobots]);

  return (
    <AppStyled>
      <Layout />
    </AppStyled>
  );
};

export default App;
