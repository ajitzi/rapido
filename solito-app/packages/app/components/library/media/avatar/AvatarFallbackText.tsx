import * as React from "react";
import {AvatarFallbackText as UIAvatarFallbackText} from "@gluestack-ui/themed";

export default function AvatarFallbackText({children, ...props}: React.ComponentProps<typeof UIAvatarFallbackText>) {

    return (
        <UIAvatarFallbackText {...props}>
            {children}
        </UIAvatarFallbackText>
    )
}