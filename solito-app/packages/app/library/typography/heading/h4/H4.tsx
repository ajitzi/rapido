import * as React from "react";
import {Heading} from "@gluestack-ui/themed";
import H4Type from "./H4Type";

export default function H4(props: H4Type) {

    return (<Heading {...props} size="lg">{props.children}</Heading>);
}