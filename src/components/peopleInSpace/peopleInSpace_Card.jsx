import "./peopleInSpace.css";
import img from "./no_avatar.png";

const PeopleInSpaceCard = (props) => {
  let divs = props.team.map((elem, id) => {
    return (
      <div key={id} className="peopleInSpace_container-item">
        <div className="peopleInSpace_container-img">
          <img src={img} alt="no_avatav" width="32" height="32"></img>
        </div>
        <div className="peopleInSpace_container-fullName">{elem}</div>
      </div>
    );
  });

  return <div>{divs}</div>;
};

export default PeopleInSpaceCard;
