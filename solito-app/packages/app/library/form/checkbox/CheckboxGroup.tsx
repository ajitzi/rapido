import * as React from "react";
import {CheckboxGroup as UICheckboxGroup} from "@gluestack-ui/themed";


type CheckboxGroupProps = {
}

export default function CheckboxGroup({children, ...props}: React.ComponentProps<typeof UICheckboxGroup> & CheckboxGroupProps) {

    return (
        <UICheckboxGroup {...props}>
            {children}
        </UICheckboxGroup>
    )
}