import * as React from "react";
import {Box as UIBox} from "@gluestack-ui/themed";

export default function Box({children, ...props}: React.ComponentProps<typeof UIBox>) {

    return (
        <UIBox {...props}>
            {children}
        </UIBox>
    )
}