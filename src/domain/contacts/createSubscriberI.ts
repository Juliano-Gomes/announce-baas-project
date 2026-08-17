import { SubscriberI } from "../../utils/subscriver"

export interface subscriberI{
    subscribe:(props:SubscriberI)=>Promise<{message:string}>,
    unsubscribe:(props:{subscriberId:string})=>Promise<{message:string}>,
    validateAccountSubscribe:(props:{subscriberEmail:string,verificationCode:string})=>Promise<{message:string}>,
    generateAnotherCodeVerification:(props:{subscriberEmail:string})=>Promise<{message:string}>
}