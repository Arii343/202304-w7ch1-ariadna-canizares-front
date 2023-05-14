import { RobotStructure } from "../../types";
import RobotCard from "../RobotCard/RobotCard";
import RobotCardListStyled from "./RobotCardListStyled";

interface RobotCardListProps {
  robotCards: RobotStructure[];
}

const RobotCardList = ({ robotCards }: RobotCardListProps): JSX.Element => {
  return (
    <RobotCardListStyled className="robot-card-list">
      <ul className="robot-card-list__container">
        {robotCards.map((robot) => (
          <li key={robot._id}>
            <RobotCard card={robot} />
          </li>
        ))}
      </ul>
    </RobotCardListStyled>
  );
};

export default RobotCardList;
