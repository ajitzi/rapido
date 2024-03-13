import * as React from "react";
import {ButtonSpinner as UIButtonSpinner} from "@gluestack-ui/themed";


type ButtonSpinnerProps = {
}

export default function ButtonSpinner({children, ...props}: React.ComponentProps<typeof UIButtonSpinner> & ButtonSpinnerProps) {

    return (
        <UIButtonSpinner {...props}>
            {children}
        </UIButtonSpinner>
    )
}