import * as React from "react";
import {AlertDialogBackdrop as AlertDialogBackdropBase} from "@gluestack-ui/themed";
import AlertDialogBackdropType from "./AlertDialogBackdropType";

export default function AlertDialogBackdrop(props: AlertDialogBackdropType) {

    return (<AlertDialogBackdropBase {...props}>{props.children}</AlertDialogBackdropBase>);
}