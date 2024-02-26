import * as React from "react";
import {Badge as UIBadge, BadgeIcon, BadgeText} from "@gluestack-ui/themed";
import {LucideIcon} from "lucide-react-native";


type BadgeProps = {
    text: string,
    icon?: LucideIcon,
    textProps?: React.ComponentProps<typeof BadgeText>
    iconProps?: React.ComponentProps<typeof BadgeIcon>
}

export default function Badge({text, icon, textProps, iconProps, ...props}: React.ComponentProps<typeof UIBadge> & BadgeProps) {

    return (
        <UIBadge {...props}>
            <BadgeText {...textProps}>{ text }</BadgeText>
            <BadgeIcon {...iconProps} as={icon}/>
        </UIBadge>
    )
}