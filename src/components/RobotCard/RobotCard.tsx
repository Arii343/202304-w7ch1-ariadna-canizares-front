import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { RobotCardStructure } from "../../types";
import RobotCardStyled from "./RobotCardStyled";

export interface RobotCardProps {
  card: RobotCardStructure;
}

const RobotCard = ({
  card: { dateOfCreation, imageUrl, name, resistence, speed },
}: RobotCardProps): JSX.Element => {
  return (
    <RobotCardStyled className="robot-card">
      <img
        className="robot-card__img"
        src={imageUrl}
        alt={`Robot portait ${name}`}
      />
      <div className="robot-card__info">
        <div className="robot-card__header">
          <h2 className="robot-card__title">{name}</h2>
          <div className="robot-card__actions">
            <button
              className="robot-card__action-button robot-card__action-button--edit"
              aria-label="Edit"
            >
              <FontAwesomeIcon icon={faPen} className="robot-card__icon" />
            </button>
            <button
              className="robot-card__action-button robot-card__action-button--delete"
              aria-label="Delete"
            >
              <FontAwesomeIcon icon={faTrash} className="robot-card__icon" />
            </button>
          </div>
        </div>
        <div className="robot-card__section">
          <span className="robot-card__text robot-card__text--dark">
            Speed:
          </span>
          <span className="robot-card__text">{speed}</span>
        </div>
        <div className="robot-card__section">
          <span className="robot-card__text robot-card__text--dark">
            Resistence:
          </span>
          <span className="robot-card__text">{resistence}</span>
        </div>
        <div className="robot-card__section">
          <span className="robot-card__text robot-card__text--dark">
            Date of creation:
          </span>
          <span className="robot-card__text">{dateOfCreation}</span>
        </div>
      </div>
    </RobotCardStyled>
  );
};

export default RobotCard;
