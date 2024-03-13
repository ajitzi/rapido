import * as React from "react";
import {ButtonIcon as UIButtonIcon} from "@gluestack-ui/themed";


type ButtonIconProps = {
}

export default function ButtonIcon(props: React.ComponentProps<typeof UIButtonIcon> & ButtonIconProps) {

    return (
        <UIButtonIcon {...props} />
    )
}