import Button from '../../button/Button'
import TitleBlockModule from './TitleBlock.module.css'
import { titleBlock } from '../../../state/titleBlockState'
interface TitleBlockProp{
    item: titleBlock
}

const TitleBlock: React.FC<TitleBlockProp> = ({item}) => {
    return(
        <div className={TitleBlockModule.titleBlock__wrapper}>
            <h1>{item.title}</h1>
            <span>{item.text}</span>
            <Button text={'Начать работу'} width={'172px'}/>
        </div>
    )
}

export default TitleBlock