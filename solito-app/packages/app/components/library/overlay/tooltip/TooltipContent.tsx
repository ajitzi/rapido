import * as React from "react";
import {TooltipContent as UITooltipContent} from "@gluestack-ui/themed";

export default function TooltipContent({children, ...props}: React.ComponentProps<typeof UITooltipContent>) {

    return (
        <UITooltipContent {...props}>
            {children}
        </UITooltipContent>
    )
}