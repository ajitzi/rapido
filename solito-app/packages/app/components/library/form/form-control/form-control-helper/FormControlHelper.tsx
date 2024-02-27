import * as React from "react";
import {FormControlHelper as UIFormControlHelper} from "@gluestack-ui/themed";


type FormControlHelperProps = {
}

export default function FormControlHelper({children, ...props}: React.ComponentProps<typeof UIFormControlHelper> & FormControlHelperProps) {

    return (
        <UIFormControlHelper {...props}>
            {children}
        </UIFormControlHelper>
    )
}