import * as React from "react";
import {Button as UIButton} from "@gluestack-ui/themed";


type ButtonProps = {
}

export default function Button({children, ...props}: React.ComponentProps<typeof UIButton> & ButtonProps) {

    return (
        <UIButton {...props}>
            {children}
        </UIButton>
    )
}