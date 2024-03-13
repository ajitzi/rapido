import * as React from "react";
import {FormControlError as UIFormControlError} from "@gluestack-ui/themed";


type FormControlErrorProps = {
}

export default function FormControlError({children, ...props}: React.ComponentProps<typeof UIFormControlError> & FormControlErrorProps) {

    return (
        <UIFormControlError {...props}>
            {children}
        </UIFormControlError>
    )
}