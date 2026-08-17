export interface AnnouncementI{
    create:(props:announce)=>Promise<{message:string}>,
}

type announce={
    announce:{
        title:string,
        body:string,
        imageUrl?:string
    },
    company:{
        companyId:string,
        companyEmail:string,
        companySubscription:"free"|"medium"|"premium",
        invitationLink:string
    }
}