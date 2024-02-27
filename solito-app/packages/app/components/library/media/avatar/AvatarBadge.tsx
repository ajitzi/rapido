import * as React from "react";
import {AvatarBadge as UIAvatarBadge} from "@gluestack-ui/themed";

export default function AvatarBadge({children, ...props}: React.ComponentProps<typeof UIAvatarBadge>) {

    return (
        <UIAvatarBadge {...props}>
            {children}
        </UIAvatarBadge>
    )
}