import { EnterpriseI } from "../../domain/contacts/createEnterpriseI";

export class enterprise_use_case implements EnterpriseI{
    async create (props: { enterpriseName: string; enterpriseEmail: string; enterpriseNif: string; }) : Promise<{ message: string; }>{
        return{message:""}
    };

    async validate (props: { enterpriseEmail: string; validation_code: string; }) : Promise<{ message: string; }>{
        return{
            message:""
        }
    };

    async subscription (props: { enterpriseId: string; enterpriseEmail: string; }) : Promise<{ message: string; }>{
        return{
            message:""
        }
    };
}
//sandra azevedo abrantes