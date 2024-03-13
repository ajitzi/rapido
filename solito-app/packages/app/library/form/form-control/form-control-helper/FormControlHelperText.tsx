import * as React from "react";
import {FormControlHelperText as UIFormControlHelperText} from "@gluestack-ui/themed";


type FormControlHelperTextProps = {
}

export default function FormControlHelperText({children, ...props}: React.ComponentProps<typeof UIFormControlHelperText> & FormControlHelperTextProps) {

    return (
        <UIFormControlHelperText {...props}>
            {children}
        </UIFormControlHelperText>
    )
}