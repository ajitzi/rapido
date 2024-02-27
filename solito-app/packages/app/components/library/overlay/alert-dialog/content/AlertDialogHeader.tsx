import * as React from "react";
import {AlertDialogHeader as UIAlertDialogHeader} from "@gluestack-ui/themed";

export default function AlertDialogHeader({children, ...props}: React.ComponentProps<typeof UIAlertDialogHeader>) {

    return (
        <UIAlertDialogHeader {...props}>
            {children}
        </UIAlertDialogHeader>
    )
}