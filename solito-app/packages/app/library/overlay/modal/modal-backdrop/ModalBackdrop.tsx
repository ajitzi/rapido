import * as React from "react";
import {ModalBackdrop as ModalBackdropBase} from "@gluestack-ui/themed";
import ModalBackdropType from "./ModalBackdropType";

export default function ModalBackdrop(props: ModalBackdropType) {

    return (<ModalBackdropBase {...props}>{props.children}</ModalBackdropBase>);
}