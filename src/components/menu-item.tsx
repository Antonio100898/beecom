import { ReactNode } from "react"

type Props = {
    children: ReactNode
    onClick: () => void
}

export default function MenuItem({children, onClick}: Props) {
    return (
        <div className="menu-item" onClick={onClick}>{children}</div>
    )
}