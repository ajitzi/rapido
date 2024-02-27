import * as React from "react";
import {AlertText as UIAlertText} from "@gluestack-ui/themed";


type AlertTextProps = {
}

export default function AlertText({children, ...props}: React.ComponentProps<typeof UIAlertText> & AlertTextProps) {

    return (
        <UIAlertText {...props}>{children}</UIAlertText>
    )
}