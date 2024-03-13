import * as React from "react";
import {AlertDialogHeader as AlertDialogHeaderBase} from "@gluestack-ui/themed";
import AlertDialogHeaderType from "./AlertDialogHeaderType";

export default function AlertDialogHeader(props: AlertDialogHeaderType) {

    return (<AlertDialogHeaderBase {...props}>{props.children}</AlertDialogHeaderBase>);
}