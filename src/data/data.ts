export interface iProdutos {
    id: string,
    name:string,
    description: string,
    promo:boolean
}
export const produtos:iProdutos[] = [
    {
        id:"1",
        name:"TV",
        description:"TV legal",
        promo:true
    },
      {
        id:"2",
        name:"TV",
        description:"TV legal",
        promo:false
    },
      {
        id:"3",
        name:"TV",
        description:"TV legal",
        promo:true
    },
      {
        id:"4",
        name:"TV",
        description:"TV legal",
        promo:false
    }
]