import { StyledHeader, StyledTitle } from "./style"


interface HeaderProps {
    name: string,
    children:React.ReactNode
}

export function Header({name,children}:HeaderProps){
    return <StyledHeader>

        <StyledTitle>{name}</StyledTitle>
        {children}
    
    </StyledHeader>
    
}