import * as React from "react";
import {ToastDescription as UIToastDescription} from "@gluestack-ui/themed";


type ToastDescriptionProps = {
}

export default function ToastDescription({children, ...props}: React.ComponentProps<typeof UIToastDescription> & ToastDescriptionProps) {

    return (
        <UIToastDescription {...props}>{children}</UIToastDescription>
    )
}