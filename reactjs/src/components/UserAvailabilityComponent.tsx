import type {VisitAvailability} from "../types/ContactForm-type.ts";
import closeIcon from "../assets/xmark-solid-full.svg";

const UserAvailabilityComponent = ({ day, hours, minutes }: VisitAvailability) => {
    return (
        <div className="userAvailability">
            <p>{ day } <span>à</span> { hours }h{ minutes }</p>
            <button>
                <img src={closeIcon} alt="Icone pour supprimer la dispo" />
            </button>
        </div>
    )
}

export default UserAvailabilityComponent;