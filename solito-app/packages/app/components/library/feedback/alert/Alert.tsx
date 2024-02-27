import * as React from "react";
import {Alert as UIAlert} from "@gluestack-ui/themed";


type AlertProps = {
}

export default function Alert({children, ...props}: React.ComponentProps<typeof UIAlert> & AlertProps) {

    return (
        <UIAlert {...props}>
            {children}
        </UIAlert>
    )
}