type RadioComponentProps = {
    label: string,
    inputName: string,
    inputId: string,
    value: string,
    required: boolean
}

export default function RadioComponent({ label, inputName, inputId, value, required }: RadioComponentProps) {
    return (
        <div className="radioComponent">
            <input type="radio"
                   name={inputName}
                   id={inputId}
                   value={value}
                   required={required} />
            <label htmlFor="">{ label }</label>
        </div>
    )
}