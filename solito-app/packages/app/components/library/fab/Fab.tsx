import * as React from "react";
import {Fab as UIFab} from "@gluestack-ui/themed";

export default function Fab({children, ...props}: React.ComponentProps<typeof UIFab>) {

    return (
        <UIFab {...props}>
            {children}
        </UIFab>
    )
}