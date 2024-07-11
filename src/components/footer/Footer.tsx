import FooterModule from './Footer.module.css'
import FooterItem from './footerItem/FooterItem'
import Eagle from '../../img/Mask group.svg'
import logo from '../../img/logo.svg'
import {
    informationArray, 
    ourProductArray, 
    linksArray, 
    blogArray} 
from '../../state/footerState'

const Footer = () => {
    return(
        <footer className={FooterModule.footer}>
            <div className={FooterModule.footer__wrapper}> 
                <div className={FooterModule.company__section}>
                    <img src={logo} alt="logo" />
                    <div className={FooterModule.text__information}>
                        <span>ООО «Ботхаб» ОГРН 1236300016259</span>
                        <span>@BotHub 2023</span>
                        <span>Пользовательское соглашение</span>
                    </div>
                    <img src={Eagle} alt="eagle"/>
                </div>
                    <FooterItem title='Информация' arrayItems={informationArray}/>
                    <FooterItem title='Наши продукты' arrayItems={ourProductArray}/>
                    <FooterItem title='Ссылки' arrayItems={linksArray}/>
                    <FooterItem title='Блог'arrayItems={blogArray}/>
            </div>
        </footer>
    )
}
export default Footer