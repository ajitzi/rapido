import * as React from "react";
import {AvatarGroup as UIAvatarGroup} from "@gluestack-ui/themed";

export default function AvatarGroup({children, ...props}: React.ComponentProps<typeof UIAvatarGroup>) {

    return (
        <UIAvatarGroup {...props}>
            {children}
        </UIAvatarGroup>
    )
}