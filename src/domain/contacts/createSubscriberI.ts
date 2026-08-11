import { SubscriberI } from "../../utils/subscriver"

export interface subscriberCreationI{
    subscribe:(props:SubscriberI)=>Promise<{message:string}>,
    unsubscribe:(props:{subscriberId:string})=>Promise<{message:string}>
}