import type { iProdutos } from "../../data/data"

interface CardProps {
    produto:iProdutos
    callback:(prod:iProdutos)=>void
}
export const Card = ({produto,callback}:CardProps) => {
    const add=(prod:iProdutos)=>{
        callback(prod)
    }
    return <li>
        <p>{produto.name}</p>
        <p>{produto.description}</p>
        <button onClick={()=>add(produto)}>Adicionar</button>
    </li>
}