import * as React from "react";
import {PopoverFooter as UIPopoverFooter} from "@gluestack-ui/themed";
import PopoverFooterType from "./PopoverFooterType";

export default function PopoverFooter(props: PopoverFooterType) {

    return (<UIPopoverFooter {...props}>{props.children}</UIPopoverFooter>);
}