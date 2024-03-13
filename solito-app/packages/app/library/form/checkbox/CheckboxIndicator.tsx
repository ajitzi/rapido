import * as React from "react";
import {CheckboxIndicator as UICheckboxIndicator} from "@gluestack-ui/themed";


type CheckboxIndicatorProps = {
}

export default function CheckboxIndicator({children, ...props}: React.ComponentProps<typeof UICheckboxIndicator> & CheckboxIndicatorProps) {

    return (
        <UICheckboxIndicator {...props}>
            {children}
        </UICheckboxIndicator>
    )
}