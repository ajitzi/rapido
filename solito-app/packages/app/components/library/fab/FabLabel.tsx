import * as React from "react";
import {FabLabel as UIFabLabel} from "@gluestack-ui/themed";

export default function FabLabel({children, ...props}: React.ComponentProps<typeof UIFabLabel>) {

    return (
        <UIFabLabel {...props}>
            {children}
        </UIFabLabel>
    )
}