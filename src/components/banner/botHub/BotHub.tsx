import BotHubModule from './BotHub.module.css'
import avatar from '../../../img/avatar.svg'
import gemini from '../../../img/gemini.svg'
import user from '../../../img/default-avatar.svg'
import Button from '../../button/Button'
import send from '../../../img/send.svg'
const BotHub = () => {
    return(
        <div className={BotHubModule.content__wrapper}>
            <div className={BotHubModule.chat__name}>
                <div className={BotHubModule.chat__name__avatar}>
                    <img src={avatar} alt="avatar" />
                    <div className={BotHubModule.chat__name__avatar__text}>
                        <h4>BotHub: ChatGPT & Midjourney</h4>
                        <span>bot</span>
                    </div>
                </div>
                <div className={BotHubModule.chat__name__checkbox}>
                    <span>Сохранить контекст</span>
                    <input type="checkbox" name="" id="" />
                </div>
            </div>
            <div className={BotHubModule.chat__field}>
                <div className={BotHubModule.gemini__message}>
                    <span>Gemini</span>
                    <div className={BotHubModule.gemini__message__text}>
                        <img src={gemini} alt="gemini" />
                        <span>Привет! Чем я могу помочь?</span>
                    </div>
                </div>
                <div className={BotHubModule.user__message}>
                    <span>Привет бот</span>
                    <img src={user} alt="user" />
                </div>
            </div>
            <div className={BotHubModule.input__field}>
                <div className={BotHubModule.input__wrapper}>
                    <input type="text" placeholder='Спроси о чем-нибудь...'/>
                    <Button width={"40px"} img={send}/>
                </div>
            </div>
        </div>
    )
}
export default BotHub