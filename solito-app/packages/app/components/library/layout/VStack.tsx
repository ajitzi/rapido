import * as React from "react";
import {VStack as UIVStack} from "@gluestack-ui/themed";

export default function VStack({children, ...props}: React.ComponentProps<typeof UIVStack>) {

    return (
        <UIVStack {...props}>
            {children}
        </UIVStack>
    )
}