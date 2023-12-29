export default function Input ({name, type, value, placeholder, onchange}) {
    return (
        <>
            <label>{name}</label>
            <input type={type} value={value} placeholder={placeholder} onChange={onchange}/>
        </>
    )
}