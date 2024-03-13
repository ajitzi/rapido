import * as React from "react";
import {CheckboxLabel as UICheckboxLabel} from "@gluestack-ui/themed";


type CheckboxLabelProps = {
}

export default function CheckboxLabel({children, ...props}: React.ComponentProps<typeof UICheckboxLabel> & CheckboxLabelProps) {

    return (
        <UICheckboxLabel {...props}>
            {children}
        </UICheckboxLabel>
    )
}