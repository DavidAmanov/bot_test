import Button from '../../button/Button'
import TitleBlockModule from './TitleBlock.module.css'
const TitleBlock = () => {
    return(
        <div className={TitleBlockModule.titleBlock__wrapper}>
            <h1>ChatGPT: ваш умный помощник</h1>
            <span>
                Экспериментируйте с ChatGPT-4, Midjourney и Claude в одном месте. 
                Без VPN и абонентской платы. Создавайте контент, обрабатывайте данные 
                и получайте ответы на вопросы через удобный интерфейс!
            </span>
            <Button text={'Начать работу'} width={'172px'}/>
        </div>
    )
}

export default TitleBlock