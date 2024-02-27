import * as React from "react";
import {ModalFooter as UIModalFooter} from "@gluestack-ui/themed";

export default function ModalFooter({children, ...props}: React.ComponentProps<typeof UIModalFooter>) {

    return (
        <UIModalFooter {...props}>
            {children}
        </UIModalFooter>
    )
}