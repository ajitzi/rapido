import * as React from "react";
import {BadgeText as UIBadgeText} from "@gluestack-ui/themed";


type BadgeTextProps = {
}

export default function Badge({children, ...props}: React.ComponentProps<typeof UIBadgeText> & BadgeTextProps) {

    return (
        <UIBadgeText {...props}>
            { children }
        </UIBadgeText>
    )
}