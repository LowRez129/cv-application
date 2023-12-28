export default function Input ({name, type, value, onchange}) {
    return (
        <>
            <label>{name}</label>
            <input type={type} value={value} onChange={onchange}/>
        </>
    )
}