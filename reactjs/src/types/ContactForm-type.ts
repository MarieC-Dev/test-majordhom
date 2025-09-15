export type VisitAvailability = {
    day: string,
    hours: number,
    minutes: number
}

type MessageForm = {
    typeRequest: string,
    message: string
}

export type ContactFormType = {
    gender: string,
    lastName: string,
    firstName: string,
    email: string,
    phone: string,

    visiteAvailability: VisitAvailability[],
    messageForm: MessageForm
}