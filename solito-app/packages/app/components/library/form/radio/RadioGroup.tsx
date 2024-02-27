import * as React from "react";
import {RadioGroup as UIRadioGroup} from "@gluestack-ui/themed";


type RadioGroupProps = {
}

export default function RadioGroup({children, ...props}: React.ComponentProps<typeof UIRadioGroup> & RadioGroupProps) {

    return (
        <UIRadioGroup {...props}>
            {children}
        </UIRadioGroup>
    )
}