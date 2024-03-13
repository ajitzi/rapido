import * as React from "react";
import {FormControlLabelText as UIFormControlLabelText} from "@gluestack-ui/themed";


type FormControlLabelTextProps = {
}

export default function FormControlLabelText({children, ...props}: React.ComponentProps<typeof UIFormControlLabelText> & FormControlLabelTextProps) {

    return (
        <UIFormControlLabelText {...props}>
            {children}
        </UIFormControlLabelText>
    )
}