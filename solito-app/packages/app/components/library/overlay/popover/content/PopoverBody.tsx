import * as React from "react";
import {PopoverBody as UIPopoverBody} from "@gluestack-ui/themed";

export default function PopoverBody({children, ...props}: React.ComponentProps<typeof UIPopoverBody>) {

    return (
        <UIPopoverBody {...props}>
            {children}
        </UIPopoverBody>
    )
}