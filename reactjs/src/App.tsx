import UserAvailabilityComponent from "./components/UserAvailabilityComponent.tsx";
import RadioComponent from "./components/RadioComponent.tsx";
import type {ContactFormType, VisitAvailability} from "./types/ContactForm-type.ts";
import {ContactContext, ContactDispatchContext} from "./contexts/ContactContext.ts";
import {useReducer} from "react";
import * as React from "react";

const initialDataAvailability: VisitAvailability = {
    day: '',
    hours: 0,
    minutes: 0
}

const initialData: ContactFormType = {
    gender: '',
    lastname: '',
    firstname: '',
    email: '',
    phone: '',
    visitAvailability: [initialDataAvailability],
    messageForm: {
        typeRequest: '',
        message: ''
    }
};

function dataReducer(data: any, action: any) {
    switch (action.type) {
        case 'SET_DATA_FIELD': {
            return {
                ...data,
                [action.field]: action.value,
            }
        }
        case 'RESET_DATA': {
            return initialData;
        }
        case 'SET_VISIT_FIELD': {
            return {
                ...data,
                visitAvailability: {
                    ...data.visitAvailability,
                    [action.field]: action.value
                }
            }
        }
        case 'SET_MESSAGE_FILED': {
            return {
                ...data,
                messageForm: {
                    ...data.messageForm,
                    [action.field]: action.value,
                },
            }
        }
        case 'REMOVE_VISIT_FIELD': {
            return {
                ...data,
                visiteAvailability: data.visitAvailability.filter(
                    (_, index) => index !== action.index
                ),
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export function App() {
    const days: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
    const hours: number = 8;
    let nextId: number = 0;
    const [data, dispatch] = useReducer(dataReducer, initialData);

    function handleChange( event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> ) {
        dispatch({
            type: 'SET_DATA_FIELD',
            id: nextId++,
            field: event.target?.name,
            value: event.target?.value
        })
    }

    function handleAddMessage( event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> ) {
        dispatch({
            type: 'SET_MESSAGE_FILED',
            field: event.target?.name,
            value: event.target?.value
        })
    }

    function handleAddVisit( event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> ) {
        dispatch({
            type: 'SET_VISIT_FIELD',
            field: event.target?.name,
            value: event.target?.value
        })
    }

    console.log(data);

    return (
        <ContactContext.Provider value={data}>
            <ContactDispatchContext.Provider value={dispatch}>
                <div className="contactPage">
                    <h1>Contactez l'agence</h1>

                    <form action="">
                        {/* Infos user */}
                        <div className="contactDetails">
                            <h2>Vos coordonnées</h2>

                            <ul>
                                <li>
                                    <RadioComponent label={'Mme'}
                                                    inputName={'gender'}
                                                    inputId={'madame'}
                                                    value={'madame'}
                                                    onChange={handleChange}
                                                    required={false}/>
                                    <RadioComponent label={'M'}
                                                    inputName={'gender'}
                                                    inputId={'monsieur'}
                                                    value={'monsieur'}
                                                    onChange={handleChange}
                                                    required={false}/>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <input type="text" name="lastname" id="lastname" placeholder="Nom" onChange={handleChange}/>
                                </li>
                                <li>
                                    <input type="text" name="firstname" id="firstname" placeholder="Prénom" onChange={handleChange}/>
                                </li>
                            </ul>

                            <input type="email" name="email" id="email" placeholder="Adresse mail"/>
                            <input type="tel" name="phone" id="phone" placeholder="Téléphone" pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"/>
                        </div>

                        {/* Message */}
                        <div className="userMessage">
                            <h2>Votre message</h2>

                            <ul>
                                <li>
                                    <RadioComponent label={'Demande de visite'}
                                                    inputName={'typeRequest'}
                                                    inputId={'visitRequest'}
                                                    value={'Demande de visite'}
                                                    onChange={handleAddMessage}
                                                    required={false}/>
                                </li>
                                <li>
                                    <RadioComponent label={'Être rappelé.e'}
                                                    inputName={'typeRequest'}
                                                    inputId={'beReminded'}
                                                    value={'Être rappelé.e'}
                                                    onChange={handleAddMessage}
                                                    required={false}/>
                                </li>
                                <li>
                                    <RadioComponent label={'Plus de photos'}
                                                    inputName={'typeRequest'}
                                                    inputId={'morePhotos'}
                                                    value={'Plus de photos'}
                                                    onChange={handleAddMessage}
                                                    required={false}/>
                                </li>
                            </ul>

                            <textarea
                                name="message"
                                id="userMessageText" rows={5}
                                placeholder="Votre message"
                                onChange={handleAddMessage}
                            ></textarea>
                        </div>

                        {/* Disponibilités pour une visite */}
                        <div className="visiteAvailability">
                            <h2>Disponibilités pour une visite</h2>

                            <div className="selectContainer">
                                <select name="day" id="availabilityDays" onChange={handleAddVisit}>
                                    <option value="">Ex : Lundi</option>
                                    {
                                        days.map((day: string, index: number) => (
                                            <option key={index} value={day}>{day}</option>
                                        ))
                                    }
                                </select>

                                <select name="hours" id="availabilityHours" onChange={handleAddVisit}>
                                    <option value="">8h</option>
                                    {Array.from({length: 11}).map((_, index: number) => (
                                        <option key={index} value={hours + index}>{hours + index}h</option>
                                    ))}
                                </select>

                                <select name="minutes" id="availabilityMinutes" onChange={handleAddVisit}>
                                    <option value="">00m</option>
                                    {Array.from({length: 4}, (_, index: number) => {
                                        const minute: number = index * 15;
                                        return (
                                            <option key={index} value={minute}>
                                                {minute < 15 ? '00' : minute}m
                                            </option>
                                        );
                                    })}
                                </select>

                                <button className="addDispo">Ajouter</button>
                            </div>

                            {/*<UserAvailabilityComponent day={'Lundi'} hours={9} minutes={45}/>
                            <UserAvailabilityComponent day={'Lundi'} hours={9} minutes={45}/>*/}
                        </div>

                        <button
                            type="button"
                            className="bg-fuchsia-900 submitContactForm">
                            Envoyer
                        </button>
                    </form>
                </div>
            </ContactDispatchContext.Provider>
        </ContactContext.Provider>
    )
}
