import Card from "./card/Card"
import CapabilityModule from './Capability.module.css'
import { cardsArray } from "../../state/capabilityState"

const Capability = () => {

    return(
        <div className={CapabilityModule.capability}>
            <h2>Возможности ChatGPT</h2>
            <div className={CapabilityModule.capability__wrapper}>
                {cardsArray.map((item, index)=>(
                    <div key={index}>
                        <Card item={item}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Capability