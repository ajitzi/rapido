import * as React from "react";
import {TooltipText as UITooltipText} from "@gluestack-ui/themed";

export default function TooltipText({children, ...props}: React.ComponentProps<typeof UITooltipText>) {

    return (
        <UITooltipText {...props}>
            {children}
        </UITooltipText>
    )
}