import * as React from "react";
import {AlertDialogContent as UIAlertDialogContent} from "@gluestack-ui/themed";

export default function AlertDialogContent({children, ...props}: React.ComponentProps<typeof UIAlertDialogContent>) {

    return (
        <UIAlertDialogContent {...props}>
            {children}
        </UIAlertDialogContent>
    )
}