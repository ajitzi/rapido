import * as React from "react";
import {Heading} from "@gluestack-ui/themed";

export default function H4({children, ...props}: React.ComponentProps<typeof Heading>) {

    return (
        <Heading {...props} size="lg">
            {children}
        </Heading>
    )
}