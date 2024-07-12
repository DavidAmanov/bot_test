import TitleBlock from '../banner/titleBlock/TitleBlock'
import MidjourneyModule from './Midjourney.module.css'
import { titleBlockMidjourney } from '../../state/titleBlockState'
import imgBlock from '../../img/img-block.svg'

const Midjourney = () => {
    return(
        <div className={MidjourneyModule.midjourney}>
            <div className={MidjourneyModule.midjourney__wrapper}>
                <div className={MidjourneyModule.img__wrapper}>
                    <img src={imgBlock} alt="imgblock" />
                </div>
                <TitleBlock  item={titleBlockMidjourney}/>
            </div>
        </div>
    )
}
export default Midjourney