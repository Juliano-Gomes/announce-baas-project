import { validateEmail } from "../../utils/validate.email"
import { AnnounceAppErrorEntity } from "../errors/application.error"

export class EnterpriseEntity{
    private company!:enterprise & {enterpriseId:string,subscriptionType:string,enterpriseOperationState:"active"|"inactive",RequestPerMonth:number}

    constructor(props:enterprise){

        if(!validateEmail(props.companyEmail) || !props.companyNif){
            throw new AnnounceAppErrorEntity({name:"Invalid Enterprise data",description:"unable to register the enterprise, invalid data",page:"company Entity"})
        }

        const enterpriseId = crypto.randomUUID().toString()
        this.company={...props,enterpriseId,subscriptionType:"free",enterpriseOperationState:"inactive",RequestPerMonth:45}
    }

    get companyData(){
        return{
            ...this.company
        }
    }
}


export class EnterpriseSubscriptionExpiration{
    private enterprise_subscription!:enterprise_subscription_type
    constructor(props:enterprise_subscription_type){
        if(props.subscriptionExpirationDate.getMonth() >= new Date().getMonth() && props.subscriptionExpirationDate.getDate() > new Date().getDate()){
            this.enterprise_subscription = props
        }

        this.enterprise_subscription={
            enterpriseId:props.enterpriseId,
            enterpriseEmail:props.enterpriseEmail,
            subscriptionExpirationDate:new Date(),
            subscriptionType:"free"
        }
    }

    get subscription(){
        return this.enterprise_subscription
    }
}

type enterprise_subscription_type={
    enterpriseId:string,
    enterpriseEmail:string,
    subscriptionExpirationDate:Date,
    subscriptionType:"free" | "premium" | "medium"
}

type enterprise={
    companyName:string,
    companyEmail:string,
    companyNif:number,
}