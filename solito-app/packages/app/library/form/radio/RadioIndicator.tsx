import * as React from "react";
import {RadioIndicator as UIRadioIndicator} from "@gluestack-ui/themed";


type RadioIndicatorProps = {
}

export default function RadioIndicator({children, ...props}: React.ComponentProps<typeof UIRadioIndicator> & RadioIndicatorProps) {

    return (
        <UIRadioIndicator {...props}>
            {children}
        </UIRadioIndicator>
    )
}