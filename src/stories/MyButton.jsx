import './mybutton.css'

export function MyButton(props) {
    return (
        <button className={"btn " + props.className} disabled={props.disabled} style={{...props.style}}>
            {props.label}
            </button>
    )
}