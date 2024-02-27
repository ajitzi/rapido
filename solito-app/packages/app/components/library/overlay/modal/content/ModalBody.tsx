import * as React from "react";
import {ModalBody as UIModalBody} from "@gluestack-ui/themed";

export default function ModalBody({children, ...props}: React.ComponentProps<typeof UIModalBody>) {

    return (
        <UIModalBody {...props}>
            {children}
        </UIModalBody>
    )
}