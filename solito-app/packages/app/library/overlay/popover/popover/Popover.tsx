import * as React from "react";
import {Popover as PopoverBase} from "@gluestack-ui/themed";
import PopoverType from "app/library/overlay/popover/popover/PopoverType";

export default function Popover(props: PopoverType) {

    return (<PopoverBase {...props}>{props.children}</PopoverBase>);
}