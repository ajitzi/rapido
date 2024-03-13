import * as React from "react";
import {AlertDialogContent as AlertDialogContentBase} from "@gluestack-ui/themed";
import AlertDialogContentType from "./AlertDialogContentType";

export default function AlertDialogContent(props: AlertDialogContentType) {

    return (<AlertDialogContentBase {...props}>{props.children}</AlertDialogContentBase>);
}