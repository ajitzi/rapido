import * as React from "react";
import {AlertDialogCloseButton as UIAlertDialogCloseButton} from "@gluestack-ui/themed";

export default function AlertDialogCloseButton({children, ...props}: React.ComponentProps<typeof UIAlertDialogCloseButton>) {

    return (
        <UIAlertDialogCloseButton {...props}>
            {children}
        </UIAlertDialogCloseButton>
    )
}