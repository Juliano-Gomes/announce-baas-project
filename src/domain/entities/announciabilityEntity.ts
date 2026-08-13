import { announce, announce_verifier } from "../../utils/subscriver";
import { AnnounceAppErrorEntity } from "../errors/application.error";

export class AnnounciabilityEntity{
    private announce!:announce

    constructor(props:announce_verifier){
        if(props.enterprise.subscriptionType.toLowerCase() === "free" && props.enterprise.RequestPerMonth <= 0){
            throw new AnnounceAppErrorEntity({name:"Reached the limit ",description:"Reached the free tear request limit",page:"announciabilityEntity"})
        }
        if(props.enterprise.subscriptionType.toLowerCase() === "free" && props.announce_has_images){
            throw new AnnounceAppErrorEntity({name:"Free tear can't send images",description:"In free tear images are not allowed",page:"announciabilityEntity"})
        }

        this.announce = {
            announce_body:props.announce_body,
            announce_has_images:props.announce_has_images,
            announceTitle:props.announceTitle,
            enterprise:{
                enterpriseEmail:props.enterprise.enterpriseEmail,
                enterpriseId:props.enterprise.enterpriseId,
                RequestPerMonth:(props.enterprise.subscriptionType.toLowerCase() === "free" ? props.enterprise.RequestPerMonth - 1 : props.enterprise.RequestPerMonth)
            }
        }
    }

    get announcement(){
        return this.announce
    }
}