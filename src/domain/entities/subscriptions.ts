export class subscriptions{
    private Subscription! : PurchasedSubscriptionI

    constructor(props:SubscriptionOption){

    }
    get purchasedSubscription(){
        return{
            ...this.Subscription
        }
    }
}

type SubscriptionOption={
    companyId:string,
    companyEmail:string,
    subscriptionType: "medium" | "premium",
}

type PurchasedSubscriptionI={
    CompanyEmail:string,
    CompanyId:string,
    amount:number,
    Currency:string,
    PaymentId:string,
    description:string
}