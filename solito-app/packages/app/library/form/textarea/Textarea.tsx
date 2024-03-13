import * as React from "react";
import {Textarea as UITextarea} from "@gluestack-ui/themed";


type TextareaProps = {
}

export default function Textarea({children, ...props}: React.ComponentProps<typeof UITextarea> & TextareaProps) {

    return (
        <UITextarea {...props}>
            {children}
        </UITextarea>
    )
}