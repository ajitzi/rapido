import * as React from "react";
import {Tooltip as UITooltip} from "@gluestack-ui/themed";

export default function Tooltip({children, ...props}: React.ComponentProps<typeof UITooltip>) {

    return (
        <UITooltip {...props}>
            {children}
        </UITooltip>
    )
}