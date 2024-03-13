import * as React from "react";
import {Heading} from "@gluestack-ui/themed";
import H3Type from "./H3Type";

export default function H3(props: H3Type) {

    return (<Heading {...props} size="xl">{props.children}</Heading>);
}