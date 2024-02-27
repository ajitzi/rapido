import * as React from "react";
import {ButtonText as UIButtonText} from "@gluestack-ui/themed";


type ButtonTextProps = {
}

export default function ButtonText({children, ...props}: React.ComponentProps<typeof UIButtonText> & ButtonTextProps) {

    return (
        <UIButtonText {...props}>
            {children}
        </UIButtonText>
    )
}