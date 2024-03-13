import * as React from "react";
import {Switch as UISwitch} from "@gluestack-ui/themed";


type SwitchProps = {
}

export default function Switch({children, ...props}: React.ComponentProps<typeof UISwitch> & SwitchProps) {

    return (
        <UISwitch {...props}>
            {children}
        </UISwitch>
    )
}