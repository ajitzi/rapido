import * as React from "react";
import {AlertDialogFooter as UIAlertDialogFooter} from "@gluestack-ui/themed";

export default function AlertDialogFooter({children, ...props}: React.ComponentProps<typeof UIAlertDialogFooter>) {

    return (
        <UIAlertDialogFooter {...props}>
            {children}
        </UIAlertDialogFooter>
    )
}