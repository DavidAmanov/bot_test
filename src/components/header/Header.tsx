import HeaderModule from './Header.module.css'
import logo from "../../img/logo.svg"
import divider from "../../img/divider.svg"
import arrow from '../../img/Vector 1.svg'
import world from '../../img/world.svg'
import telegram from '../../img/tg-colored.svg'
import agregator from '../../img/bothub-agg.svg'
import bussines from '../../img/business-colored.svg'
import menu from '../../img/menu.svg'
import x from '../../img/Vector.svg'
import { useState } from 'react'
import Button from '../button/Button'
import useWindowWidth from '../../hooks/checkWidth'

const Header = () =>{
    const [showProductMenu, setShowProductMenu] = useState<boolean>(false)
    const [showMenuSection, setShowMenuSection] = useState<boolean>(false)
    const width = useWindowWidth();


    const showMenu = () =>{
        setShowProductMenu(!showProductMenu)
    }
    const showMenuSec = () =>{
        setShowMenuSection(!showMenuSection)
    }
    
    return(
        <header className={HeaderModule.header}>
            <div className={HeaderModule.content__wrapper}>
                <div className={width > 1100 ? HeaderModule.content__right : ''}>
                    <div className={HeaderModule.logo__section}>
                        <img src={logo} alt="logo" />
                        <img src={divider} alt="divider" />
                    </div>
                    {(showMenuSection || width > 1100) && (
                    <div className={HeaderModule.menu__section} onMouseLeave={showMenuSec}>
                        <div className={HeaderModule.menu__item} onClick={showMenu}>
                            <div className={HeaderModule.menu__item__product}>
                                <span>Продукты</span>
                                <img src={arrow} alt="arrow" className={showProductMenu ? HeaderModule.rotateArrow : ''}/>
                            </div>
                            {showProductMenu && (
                            <div className={HeaderModule.menu__shortcard} onMouseLeave={showMenu}>
                                <div className={HeaderModule.shortcard__item}>
                                    <img src={agregator} alt="aggreagator" />
                                    <div className={HeaderModule.shortcard__item__text}>
                                        <h3>Агрегатор нейросетей BotHub</h3>
                                        <span>ChatGPT на базе 3.5 и 4.0 версии OpenAI</span>
                                    </div>
                                </div>
                                <div className={HeaderModule.shortcard__item}>
                                    <img src={telegram} alt="telegram" />
                                    <div className={HeaderModule.shortcard__item__text}>
                                        <h3>Telegram бот</h3>
                                        <span>Удобный бот в Telegram который всегда под рукой</span>
                                    </div>
                                </div>
                                <div className={HeaderModule.shortcard__item}>
                                    <img src={bussines} alt="bussinesBot" />
                                    <div className={HeaderModule.shortcard__item__text}>
                                        <h3>Бизнес бот</h3>
                                        <span>ChatGPT для эффективного решения бизнес задач</span>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                        <div className={HeaderModule.menu__item}>Пакеты</div>
                        <div className={HeaderModule.menu__item}>API</div>
                        <div className={HeaderModule.menu__item}>Блог</div>
                        {width < 500 && (
                            <div style={{paddingLeft:"5%"}}>
                                <Button text='Авторизация' width='95%'/>
                            </div>)}
                    </div>)}
                </div>
                <div className={HeaderModule.authorization__section}>
                    <div className={HeaderModule.authorization__language}>
                        <img src={world} alt="world" />
                        <span>RU</span>
                        <img src={arrow} alt="arrow" />
                    </div>
                    {width > 500 && (<Button text='Авторизация' width='131px' />)}
                    {width < 1100 && (
                        <Button img={showMenuSection ? x : menu} onClick1={showMenuSec} width='38px'/>
                    )}
                </div>
            </div>
        </header>
    )
}
export default Header