import * as React from "react";
import {Avatar as UIAvatar} from "@gluestack-ui/themed";

export default function Avatar({children, ...props}: React.ComponentProps<typeof UIAvatar>) {

    return (
        <UIAvatar {...props}>
            {children}
        </UIAvatar>
    )
}