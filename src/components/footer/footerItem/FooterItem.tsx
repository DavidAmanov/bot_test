import ItemModule from './Item.module.css'
interface items{
    icon?: string
    name: string
}

interface ItemProp{
    title: string
    arrayItems: items[]
}
const FooterItem: React.FC<ItemProp> = ({title, arrayItems}) => {
    return(
        <div className={ItemModule.item__content}>
            <h3>{title}</h3>
            {arrayItems.map((item, index) =>(
                <div key={index} className={ItemModule.link}>
                    {item.icon && (<img src={item.icon} alt={item.icon}/>)}
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    )
}
export default FooterItem