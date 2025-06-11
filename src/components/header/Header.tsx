import "./style.css"

interface HeaderProps {
    name: string,
    children:React.ReactNode
}

export function Header({name,children}:HeaderProps){
    return <header>

        <p>{name}</p>
        {children}
    
    </header>
    
}