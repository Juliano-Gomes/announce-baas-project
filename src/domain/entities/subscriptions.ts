export class subscriptions{
    private Subscription! : PurchasedSubscriptionI
    private subscriptionsTypesPrice = new Map([
        ["1",{name:"medium",monthly_amount:9,currency:"eur"}],
        ["2",{name:"premium",monthly_amount:12,currency:"eur"}]
    ])

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
    SubscriptName:string,
    amount:number,
    Currency:string,
    PaymentId:string,
    description:string
}