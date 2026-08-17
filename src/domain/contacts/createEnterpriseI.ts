export interface EnterpriseI{
    create:(props:{
        enterpriseName:string,
        enterpriseEmail:string,
        enterpriseNif:string
    })=>Promise<{message:string}>,

    validate:(props:{enterpriseEmail:string,validation_code:string})=>Promise<{message:string}>,
    
    subscription:(props:{
        enterpriseId:string,
        enterpriseEmail:string
    })=>Promise<{message:string}>
}