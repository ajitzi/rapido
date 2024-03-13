import * as React from "react";
import {ModalBody as ModalBodyBase} from "@gluestack-ui/themed";
import ModalBodyType from "./ModalBodyType";

export default function ModalBody(props: ModalBodyType) {

    return (<ModalBodyBase {...props}>{props.children}</ModalBodyBase>);
}