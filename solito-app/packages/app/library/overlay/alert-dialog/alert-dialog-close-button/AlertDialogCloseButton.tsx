import * as React from "react";
import {AlertDialogCloseButton as AlertDialogCloseButtonBase} from "@gluestack-ui/themed";
import AlertDialogCloseButtonType from "./AlertDialogCloseButtonType";

export default function AlertDialogCloseButton(props: AlertDialogCloseButtonType) {

    return (<AlertDialogCloseButtonBase {...props}>{props.children}</AlertDialogCloseButtonBase>);
}