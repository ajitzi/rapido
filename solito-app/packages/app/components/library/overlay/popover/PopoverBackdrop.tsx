import * as React from "react";
import {PopoverBackdrop as UIPopoverBackdrop} from "@gluestack-ui/themed";

export default function PopoverBackdrop({children, ...props}: React.ComponentProps<typeof UIPopoverBackdrop>) {

    return (
        <UIPopoverBackdrop {...props}>
            {children}
        </UIPopoverBackdrop>
    )
}