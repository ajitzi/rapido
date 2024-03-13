import * as React from "react";
import {InputField as UIInputField} from "@gluestack-ui/themed";


type InputFieldProps = {
}

export default function InputField({children, ...props}: React.ComponentProps<typeof UIInputField> & InputFieldProps) {

    return (
        <UIInputField {...props}>
            {children}
        </UIInputField>
    )
}