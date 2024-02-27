import * as React from "react";
import {Radio as UIRadio} from "@gluestack-ui/themed";


type RadioProps = {
}

export default function Radio({children, ...props}: React.ComponentProps<typeof UIRadio> & RadioProps) {

    return (
        <UIRadio {...props}>
            {children}
        </UIRadio>
    )
}