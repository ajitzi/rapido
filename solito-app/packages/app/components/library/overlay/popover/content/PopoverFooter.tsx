import * as React from "react";
import {PopoverFooter as UIPopoverFooter} from "@gluestack-ui/themed";

export default function PopoverFooter({children, ...props}: React.ComponentProps<typeof UIPopoverFooter>) {

    return (
        <UIPopoverFooter {...props}>
            {children}
        </UIPopoverFooter>
    )
}