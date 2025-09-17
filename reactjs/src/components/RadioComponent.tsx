type RadioComponentProps = {
    label: string,
    inputName: string,
    inputId: string,
    value: string,
    onChange: any,
    required: boolean
}

export default function RadioComponent({ label, inputName, inputId, value, onChange, required }: RadioComponentProps) {
    return (
        <div className="radioComponent">
            <input type="radio"
                   name={inputName}
                   id={inputId}
                   value={value}
                   onChange={onChange}
                   required={required} />
            <label htmlFor="">{ label }</label>
        </div>
    )
}