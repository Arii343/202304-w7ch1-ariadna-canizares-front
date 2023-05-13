export interface RobotCardProps {
  name: string;
  imageUrl: string;
  speed: number;
  resistence: number;
  dateOfCreation: string;
}

const RobotCard = ({
  name,
  imageUrl,
  speed,
  resistence,
  dateOfCreation,
}: RobotCardProps): JSX.Element => {
  return (
    <article className="robot-card">
      <img
        className="robot-card__img"
        src={imageUrl}
        alt={`Robot portait ${name}`}
      />
      <div className="robot-card__info">
        <h3 className="robot-card__title">{name}</h3>
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
          <span className="robot-card__text robot-card__text--dark">
            {resistence}
          </span>
        </section>
        <section className="robot-card__section">
          <span className="robot-card__text robot-card__text--dark">
            Date of creation:
          </span>
          <span className="robot-card__text">{dateOfCreation}</span>
        </section>
      </div>
    </article>
  );
};

export default RobotCard;
