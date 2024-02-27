import * as React from "react";
import {ModalContent as UIModalContent} from "@gluestack-ui/themed";

export default function ModalContent({children, ...props}: React.ComponentProps<typeof UIModalContent>) {

    return (
        <UIModalContent {...props}>
            {children}
        </UIModalContent>
    )
}