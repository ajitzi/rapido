import * as React from "react";
import {AlertDialog as AlertDialogBase} from "@gluestack-ui/themed";
import AlertDialogType from "./AlertDialogType";

export default function AlertDialog(props: AlertDialogType) {

    return (<AlertDialogBase {...props}>{props.children}</AlertDialogBase>);
}