import BannerModule from './Banner.module.css'
import BotHub from './botHub/BotHub'
import TitleBlock from './titleBlock/TitleBlock'
const Banner = () => {
    return (
        <section className={BannerModule.banner}>
            <div className={BannerModule.banner__wrapper}>
                <TitleBlock />
                <BotHub />
            </div>
        </section>
    )
}
export default Banner