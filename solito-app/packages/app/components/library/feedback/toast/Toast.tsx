import * as React from "react";
import {Toast as UIToast} from "@gluestack-ui/themed";


type ToastProps = {
}

export default function Toast({children, ...props}: React.ComponentProps<typeof UIToast> & ToastProps) {

    return (
        <UIToast {...props}>
            {children}
        </UIToast>
    )
}