import ButtonModule from './Button.module.css'
interface ButtonProp{
    img?: string
    text?: string
    onClick1?: ()=>void
    width: string
}

const Button: React.FC<ButtonProp> = ({img, text, onClick1, width}) => {
    return(
        <button onClick={onClick1} className={ButtonModule.style} style={{width: width}}>
            {img && (<img src={img} alt={img} />)} 
            {text && (<span>{text}</span>) }
        </button>
    )
}

export default Button