import * as React from "react";
import {ModalHeader as UIModalHeader} from "@gluestack-ui/themed";

export default function ModalHeader({children, ...props}: React.ComponentProps<typeof UIModalHeader>) {

    return (
        <UIModalHeader {...props}>
            {children}
        </UIModalHeader>
    )
}