import * as React from "react";
import {Center as UICenter} from "@gluestack-ui/themed";

export default function Center({children, ...props}: React.ComponentProps<typeof UICenter>) {

    return (
        <UICenter {...props}>
            {children}
        </UICenter>
    )
}