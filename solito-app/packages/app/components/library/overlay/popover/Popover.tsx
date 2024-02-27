import * as React from "react";
import {Popover as UIPopover} from "@gluestack-ui/themed";

export default function Popover({children, ...props}: React.ComponentProps<typeof UIPopover>) {

    return (
        <UIPopover {...props}>
            {children}
        </UIPopover>
    )
}