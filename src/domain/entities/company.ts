import { validateEmail } from "../../utils/validate.email"
import { AnnounceAppErrorEntity } from "../errors/application.error"

export class EnterpriseEntity{
    private company!:enterprise & {id:string,subscriptionType:string}

    constructor(props:enterprise){

        if(!validateEmail(props.companyEmail)){
            throw new AnnounceAppErrorEntity({name:"Invalid Enterprise data",description:"unable to register the enterprise, invalid data",page:"company Entity"})
        }

        const id = ""
        this.company={...props,id,subscriptionType:"free"}
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