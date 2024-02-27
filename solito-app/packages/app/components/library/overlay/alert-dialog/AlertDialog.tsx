import * as React from "react";
import {AlertDialog as UIAlertDialog} from "@gluestack-ui/themed";

export default function AlertDialog({children, ...props}: React.ComponentProps<typeof UIAlertDialog>) {

    return (
        <UIAlertDialog {...props}>
            {children}
        </UIAlertDialog>
    )
}