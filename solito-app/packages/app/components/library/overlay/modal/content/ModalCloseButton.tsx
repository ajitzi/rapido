import * as React from "react";
import {ModalCloseButton as UIModalCloseButton} from "@gluestack-ui/themed";

export default function ModalCloseButton({children, ...props}: React.ComponentProps<typeof UIModalCloseButton>) {

    return (
        <UIModalCloseButton {...props}>
            {children}
        </UIModalCloseButton>
    )
}