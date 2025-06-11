import type { iProdutos } from "../../data/data"

interface CardProps {
    produto:iProdutos
}
export const Card = ({produto}:CardProps) => {
    return <li>
        <p>{produto.name}</p>
        <p>{produto.description}</p>
    </li>
}