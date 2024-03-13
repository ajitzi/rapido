import * as React from "react";
import {RadioIcon as UIRadioIcon} from "@gluestack-ui/themed";


type RadioIconProps = {
}

export default function RadioIcon(props: React.ComponentProps<typeof UIRadioIcon> & RadioIconProps) {

    return (
        <UIRadioIcon {...props} />
    )
}