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
    lastname: string,
    firstname: string,
    email: string,
    phone: string,

    visitAvailability: VisitAvailability[],
    messageForm: MessageForm
}