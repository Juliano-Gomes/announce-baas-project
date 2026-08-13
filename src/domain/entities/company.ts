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

type enterprise={
    companyName:string,
    companyEmail:string,
    companyNif:number,
}