import { SubscriberI } from "../../utils/subscriver"
import { validateEmail } from "../../utils/validate.email"
import { AnnounceAppErrorEntity } from "../errors/application.error"

class SubscriberEntity{
    private SubscriberInformation!:SubscriberI & {id:string}

    constructor(props:SubscriberI){
        // verifying if email is valid
        if(validateEmail(props.email)){
            throw new AnnounceAppErrorEntity({name:"Invalid subscriber data",description:"the data provided is not valid , please provide the correct ones",page:"subscriberEntity"})
        }
        const id = crypto.randomUUID().toString()
        this.SubscriberInformation = {...props,id}
    }

    get subscriberData(){
        return{
            ...this.SubscriberInformation
        }
    }
}