import { ComponentPropsWithRef, ComponentPropsWithoutRef, ReactNode } from "react";

interface ICheckboxAndRadioItem extends ComponentPropsWithoutRef<"input"> {
    label: string
}

const CheckboxAndRadioItem = ({ id, label, ...props }: ICheckboxAndRadioItem) => {
    return (
        <>
            <input id={id} className="w-4 h-4 shrink-0" {...props} />
            <label htmlFor={id} className="text-sm">
                {label}
            </label>
        </>
    )
}

export default CheckboxAndRadioItem
