type RadioComponentProps = {
    label: string,
    inputNameAndId: string,
    value: string,
    required: boolean
}

export default function RadioComponent({ label, inputNameAndId, value, required }: RadioComponentProps) {
    return (
        <div className="radioComponent">
            <input type="radio"
                   name={inputNameAndId}
                   id={inputNameAndId}
                   value={value}
                   required={required} />
            <label htmlFor="">{ label }</label>
        </div>
    )
}