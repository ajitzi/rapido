import * as React from "react";
import {ModalHeader as ModalHeaderBase} from "@gluestack-ui/themed";
import ModalHeaderType from "./ModalHeaderType";

export default function ModalHeader(props: ModalHeaderType) {

    return (<ModalHeaderBase {...props}>{props.children}</ModalHeaderBase>);
}