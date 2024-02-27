import * as React from "react";
import {TextareaInput as UITextareaInput} from "@gluestack-ui/themed";


type TextareaInputProps = {
}

export default function TextareaInput({children, ...props}: React.ComponentProps<typeof UITextareaInput> & TextareaInputProps) {

    return (
        <UITextareaInput {...props}>
            {children}
        </UITextareaInput>
    )
}