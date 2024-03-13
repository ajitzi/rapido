import * as React from "react";
import {RadioLabel as UIRadioLabel} from "@gluestack-ui/themed";


type RadioLabelProps = {
}

export default function RadioLabel({children, ...props}: React.ComponentProps<typeof UIRadioLabel> & RadioLabelProps) {

    return (
        <UIRadioLabel {...props}>
            {children}
        </UIRadioLabel>
    )
}