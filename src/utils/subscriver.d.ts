export type SubscriberI={
    name : string,
    email: string,
    Company:CompanyInvitation
}

type CompanyInvitation = {
    companyName:string,
    companyInvitationCode:string,
    CompanyId:string
}

export type announce={
    enterprise:{
        enterpriseId:string,
        enterpriseEmail:string,
        RequestPerMonth:number,
    },
    announceTitle:string,
    announce_has_images:boolean,
    announce_body:string
}

export type announce_verifier={
    enterprise:{
        enterpriseId:string,
        enterpriseEmail:string,
        RequestPerMonth:number,
        subscriptionType:string,
        enterpriseOperationState:"active"|"inactive"
    },
    announceTitle:string,
    announce_has_images:boolean,
    announce_body:string
}