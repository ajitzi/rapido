import * as React from "react";
import {HStack as UIHStack} from "@gluestack-ui/themed";

export default function HStack({children, ...props}: React.ComponentProps<typeof UIHStack>) {

    return (
        <UIHStack {...props}>
            {children}
        </UIHStack>
    )
}