import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import RobotCardStyle from "./RobotCardStyle";
import { RobotStructure } from "../../types";

export interface RobotCardProps {
  card: RobotStructure;
}

const RobotCard = ({
  card: { dateOfCreation, imageUrl, name, resistence, speed },
}: RobotCardProps): JSX.Element => {
  return (
    <RobotCardStyle className="robot-card">
      <img
        className="robot-card__img"
        src={imageUrl}
        alt={`Robot portait ${name}`}
      />
      <div className="robot-card__info">
        <section className="robot-card__header">
          <h3 className="robot-card__title">{name}</h3>
          <div className="robot-card__actions">
            <button className="robot-card__action-button robot-card__action-button--edit">
              <FontAwesomeIcon icon={faPen} className="robot-card__icon" />
            </button>
            <button className="robot-card__action-button robot-card__action-button--delete">
              <FontAwesomeIcon icon={faTrash} className="robot-card__icon" />
            </button>
          </div>
        </section>
        <section className="robot-card__section">
          <span className="robot-card__text robot-card__text--dark">
            Speed:
          </span>
          <span className="robot-card__text">{speed}</span>
        </section>
        <section className="robot-card__section">
          <span className="robot-card__text robot-card__text--dark">
            Resistence:
          </span>
          <span className="robot-card__text">{resistence}</span>
        </section>
        <section className="robot-card__section">
          <span className="robot-card__text robot-card__text--dark">
            Date of creation:
          </span>
          <span className="robot-card__text">{dateOfCreation}</span>
        </section>
      </div>
    </RobotCardStyle>
  );
};

export default RobotCard;
