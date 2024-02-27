import * as React from "react";
import {Icon as UIIcon} from "@gluestack-ui/themed";

export default function Icon({children, ...props}: React.ComponentProps<typeof UIIcon>) {

    return (
        <UIIcon {...props}>
            {children}
        </UIIcon>
    )
}