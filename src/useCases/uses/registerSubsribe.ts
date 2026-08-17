import { subscriberI } from "../../domain/contacts/createSubscriberI";
import { SubscriberI } from "../../utils/subscriver";

class RegisterSubscribe implements subscriberI{
    async subscribe (props: SubscriberI) : Promise<{ message: string; }>{
        return{message:""}
    }
    async unsubscribe (props: { subscriberId: string; }) : Promise<{ message: string; }>{
        return{message:""}
    }
    async validateAccountSubscribe (props: { subscriberEmail: string; verificationCode: string; }) : Promise<{ message: string; }>{
        return{message:""}

    }

    async generateAnotherCodeVerification(props: { subscriberEmail: string; }) : Promise<{ message: string; }>{
        return{message:""}

    }
    
}