import * as React from "react";
import {FormControlErrorText as UIFormControlErrorText} from "@gluestack-ui/themed";


type FormControlErrorTextProps = {
}

export default function FormControlErrorText({children, ...props}: React.ComponentProps<typeof UIFormControlErrorText> & FormControlErrorTextProps) {

    return (
        <UIFormControlErrorText {...props}>
            {children}
        </UIFormControlErrorText>
    )
}