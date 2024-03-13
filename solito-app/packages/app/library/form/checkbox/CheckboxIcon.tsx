import * as React from "react";
import {CheckboxIcon as UICheckboxIcon} from "@gluestack-ui/themed";


type CheckboxIconProps = {
}

export default function CheckboxIcon(props: React.ComponentProps<typeof UICheckboxIcon> & CheckboxIconProps) {

    return (
        <UICheckboxIcon {...props} />
    )
}