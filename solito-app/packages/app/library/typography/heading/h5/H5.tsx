import * as React from "react";
import {Heading} from "@gluestack-ui/themed";
import H5Type from "./H5Type";


export default function H5(props: H5Type) {

    return (<Heading {...props} size="md">{props.children}</Heading>);
}