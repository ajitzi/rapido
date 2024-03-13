import * as React from "react";
import {Text as BaseText} from "@gluestack-ui/themed";
import TextType from "./TextType";

export default function Text(props: TextType) {

    return (<BaseText {...props}>{props.children}</BaseText>);
}