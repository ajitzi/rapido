import * as React from "react";
import {Input as UIInput} from "@gluestack-ui/themed";


type InputProps = {
}

export default function Input({children, ...props}: React.ComponentProps<typeof UIInput> & InputProps) {

    return (
        <UIInput {...props}>
            {children}
        </UIInput>
    )
}