import type { iProdutos } from "../../data/data"
import "./style.css"
interface CardProps {
    produto:iProdutos
    callback:(prod:iProdutos)=>void
}
export const Card = ({produto,callback}:CardProps) => {
    const add=(prod:iProdutos)=>{
        callback(prod)
    }
    return <li>
        <p className="font-bold text-amber-700 underline shadow">{produto.name}</p>
        <p className="teste">{produto.description}</p>
        <button onClick={()=>add(produto)}>Adicionar</button>
    </li>
}