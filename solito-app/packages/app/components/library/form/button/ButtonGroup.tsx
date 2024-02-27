import * as React from "react";
import {ButtonGroup as UIButtonGroup} from "@gluestack-ui/themed";


type ButtonGroupProps = {
}

export default function ButtonGroup({children, ...props}: React.ComponentProps<typeof UIButtonGroup> & ButtonGroupProps) {

    return (
        <UIButtonGroup {...props}>
            {children}
        </UIButtonGroup>
    )
}