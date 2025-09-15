import UserAvailabilityComponent from "./components/UserAvailabilityComponent.tsx";
import RadioComponent from "./components/RadioComponent.tsx";

export function App() {
    let days: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
    let hours: number = 8;

    return (
        <div className="contactPage">
            <h1>Contactez l'agence</h1>

            <form action="">
                <div className="contactDetails">
                    <h2>Vos coordonnées</h2>

                    <ul>
                        <li>
                            <RadioComponent label={'Mme'} inputNameAndId={'madameRadio'} value={'madame'}
                                            required={false}/>
                            <RadioComponent label={'M'} inputNameAndId={'monsieurRadio'} value={'monsieur'}
                                            required={false}/>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <input type="text" name="lastname" id="lastname" placeholder="Nom"/>
                        </li>
                        <li>
                            <input type="text" name="firstname" id="firstname" placeholder="Prénom"/>
                        </li>
                    </ul>

                    <input type="email" name="email" id="email" placeholder="Adresse mail"/>
                    <input type="tel" name="phone" id="phone" placeholder="Téléphone" pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"/>
                </div>

                <div className="userMessage">
                    <h2>Votre message</h2>

                    <ul>
                        <li>
                            <RadioComponent label={'Demande de visite'} inputNameAndId={'visitRequest'}
                                            value={'Demande de visite'} required={false}/>
                        </li>
                        <li>
                            <RadioComponent label={'Être rappelé.e'} inputNameAndId={'toBeReminded'}
                                            value={'Être rappelé.e'} required={false}/>
                        </li>
                        <li>
                            <RadioComponent label={'Plus de photos'} inputNameAndId={'visitRequest'}
                                            value={'Plus de photos'} required={false}/>
                        </li>
                    </ul>

                    <textarea name="userMessageText" id="" rows={5} placeholder="Votre message"></textarea>
                </div>

                <div className="visiteAvailability">
                    <h2>Disponibilités pour une visite</h2>

                    <div className="selectContainer">
                        <select name="availabilityDays" id="availabilityDays">
                            <option value="">Ex : Lundi</option>
                            {
                                days.map((day: string) => (
                                    <option value={day}>{day}</option>
                                ))
                            }
                        </select>

                        <select name="availabilityHours" id="availabilityHours">
                            <option value="">8h</option>
                            {Array.from({length: 11}).map((_: any, index: number) => (
                                <option value={hours + index}>{hours + index}h</option>
                            ))}
                        </select>

                        <select name="availabilityMinutes" id="availabilityMinutes">
                            <option value="">00m</option>
                            {Array.from({length: 4}, (_: any, i: number) => {
                                const minute: number = i * 15;
                                return (
                                    <option key={minute} value={minute}>
                                        {minute < 15 ? '00' : minute}m
                                    </option>
                                );
                            })}
                        </select>

                        <button className="addDispo">Ajouter</button>
                    </div>

                    <UserAvailabilityComponent day={'Lundi'} hours={9} minutes={45}/>
                    <UserAvailabilityComponent day={'Lundi'} hours={9} minutes={45}/>
                </div>

                <button
                    type="button"
                    className="bg-fuchsia-900 submitContactForm">
                    Envoyer
                </button>
            </form>
        </div>
    )
}
