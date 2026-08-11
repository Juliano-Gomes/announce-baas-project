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