import * as React from "react";
import {Modal as UIModal} from "@gluestack-ui/themed";

export default function Modal({children, ...props}: React.ComponentProps<typeof UIModal>) {

    return (
        <UIModal {...props}>
            {children}
        </UIModal>
    )
}