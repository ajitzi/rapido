import * as React from "react";
import {FormControlLabel as UIFormControlLabel} from "@gluestack-ui/themed";


type FormControlLabelProps = {
}

export default function FormControlLabel({children, ...props}: React.ComponentProps<typeof UIFormControlLabel> & FormControlLabelProps) {

    return (
        <UIFormControlLabel {...props}>
            {children}
        </UIFormControlLabel>
    )
}