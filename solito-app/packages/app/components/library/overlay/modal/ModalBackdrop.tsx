import * as React from "react";
import {ModalBackdrop as UIModalBackdrop} from "@gluestack-ui/themed";

export default function ModalBackdrop({children, ...props}: React.ComponentProps<typeof UIModalBackdrop>) {

    return (
        <UIModalBackdrop {...props}>
            {children}
        </UIModalBackdrop>
    )
}