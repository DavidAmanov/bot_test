import CardModule from './Card.module.css'

interface CardProp{
    item: {
        title: string
        text: string
    }
}

const Card: React.FC<CardProp> = ({item}) => {
    return(
        <div className={CardModule.card}>
            <div className={CardModule.card__wrapper}>
                <h3>{item.title}</h3>
                <span>{item.text}</span>
            </div>
        </div>
    )
}
export default Card