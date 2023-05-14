import RobotCardList from "../../components/RobotCardList/RobotCardList";
import { useAppSelector } from "../../store";

const RobotsPage = (): JSX.Element => {
  const robotsData = useAppSelector((state) => state.robots.robotsData);

  return <RobotCardList robotCards={robotsData} />;
};

export default RobotsPage;
