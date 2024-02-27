import * as React from "react";
import {Badge as UIBadge} from "@gluestack-ui/themed";


type BadgeProps = {
}

export default function Badge({children, ...props}: React.ComponentProps<typeof UIBadge> & BadgeProps) {

    return (
        <UIBadge {...props}>
            {children}
        </UIBadge>
    )
}