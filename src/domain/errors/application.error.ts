export class AnnounceAppErrorEntity extends Error{
    constructor(props:ErrorProps){
        super()
        this.name= props.name
        this.message = `message : ${props.description} \n page : ${props.page}`
    }
}

type ErrorProps={
    name:string,
    description:string,
    page:string
}