import * as React from "react";
import {Checkbox as UICheckbox} from "@gluestack-ui/themed";


type CheckboxProps = {
}

export default function Checkbox({children, ...props}: React.ComponentProps<typeof UICheckbox> & CheckboxProps) {

    return (
        <UICheckbox {...props}>
            {children}
        </UICheckbox>
    )
}