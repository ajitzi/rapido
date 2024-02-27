import * as React from "react";
import {AlertDialogBackdrop as UIAlertDialogBackdrop} from "@gluestack-ui/themed";

export default function AlertDialogBackdrop({children, ...props}: React.ComponentProps<typeof UIAlertDialogBackdrop>) {

    return (
        <UIAlertDialogBackdrop {...props}>
            {children}
        </UIAlertDialogBackdrop>
    )
}