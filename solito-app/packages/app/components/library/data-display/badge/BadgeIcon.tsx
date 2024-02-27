import * as React from "react";
import {BadgeIcon as UIBadgeIcon} from "@gluestack-ui/themed";


type BadgeIconProps = {
}

export default function Badge({...props}: React.ComponentProps<typeof UIBadgeIcon> & BadgeIconProps) {

    return (
       <UIBadgeIcon {...props}/>
    )
}