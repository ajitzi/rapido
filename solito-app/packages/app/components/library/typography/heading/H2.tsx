import * as React from "react";
import {Heading} from "@gluestack-ui/themed";

export default function H2({children, ...props}: React.ComponentProps<typeof Heading>) {

    return (
        <Heading {...props} size="2xl">
            {children}
        </Heading>
    )
}