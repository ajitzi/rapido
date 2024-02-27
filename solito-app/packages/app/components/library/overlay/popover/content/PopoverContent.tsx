import * as React from "react";
import {PopoverContent as UIPopoverContent} from "@gluestack-ui/themed";

export default function PopoverContent({children, ...props}: React.ComponentProps<typeof UIPopoverContent>) {

    return (
        <UIPopoverContent {...props}>
            {children}
        </UIPopoverContent>
    )
}