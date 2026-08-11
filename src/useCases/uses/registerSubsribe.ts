import { subscriberCreationI } from "../../domain/contacts/createSubscriberI";
import { SubscriberI } from "../../utils/subscriver";

class RegisterSubscribe implements subscriberCreationI{
    async subscribe(props: SubscriberI) : Promise<{ message: string; }>{
        return {
            message:""
        }
    }
    async unsubscribe(props: { subscriberId: string; }) : Promise<{ message: string; }>{
        return{
            message:""
        }
    }
    
}