import * as React from "react";
import {AlertDialogBody as UIAlertDialogBody} from "@gluestack-ui/themed";

export default function AlertDialogBody({children, ...props}: React.ComponentProps<typeof UIAlertDialogBody>) {

    return (
        <UIAlertDialogBody {...props}>
            {children}
        </UIAlertDialogBody>
    )
}