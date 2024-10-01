import { ReactNode } from "react";

interface ICheckboxAndRadioGroup {
    children: ReactNode
}

const CheckboxAndRadioGroup = ({ children }: ICheckboxAndRadioGroup) => {
    return (
        <div className="flex items-center gap-4">
            {children}
        </div>
    )
}

export default CheckboxAndRadioGroup
