import * as React from "react";
import {PopoverCloseButton as UIPopoverCloseButton} from "@gluestack-ui/themed";

export default function PopoverCloseButton({children, ...props}: React.ComponentProps<typeof UIPopoverCloseButton>) {

    return (
        <UIPopoverCloseButton {...props}>
            {children}
        </UIPopoverCloseButton>
    )
}