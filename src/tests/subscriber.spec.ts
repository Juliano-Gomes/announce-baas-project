import {describe,test,expect} from 'vitest'
import { SubscriberEntity } from '../domain/entities/subscriber'

//Responsible to test the subscribe logic

describe("testing the subscriber logic",()=>{
    // wrong insertions
    test("Inserting users with invalid data",()=>{
        expect(()=>new SubscriberEntity({name:"gomes dev",email:"gomes.dev.gmail.com",Company:{companyName:"dev engine",CompanyId:"bkverbve-ververw-v",companyInvitationCode:"evbvbebve-efvwvb-vwev"}})).toThrow()
    })

    // valid data , validating the output types
    test("validating the subscription output",()=>{
        const sub = new SubscriberEntity({name:"gomes dev",email:"gomes.dev@gmail.com",Company:{companyName:"dev engine",CompanyId:"bkverbve-ververw-v",companyInvitationCode:"evbvbebve-efvwvb-vwev"}})

        expect(sub.subscriberData).toMatchObject({})
    })
})