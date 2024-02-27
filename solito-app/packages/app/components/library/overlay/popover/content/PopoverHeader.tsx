import * as React from "react";
import {PopoverHeader as UIPopoverHeader} from "@gluestack-ui/themed";

export default function PopoverHeader({children, ...props}: React.ComponentProps<typeof UIPopoverHeader>) {

    return (
        <UIPopoverHeader {...props}>
            {children}
        </UIPopoverHeader>
    )
}