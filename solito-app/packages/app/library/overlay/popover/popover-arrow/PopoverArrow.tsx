import * as React from "react";
import {PopoverArrow as PopoverArrowBase} from "@gluestack-ui/themed";
import PopoverArrowType from "app/library/overlay/popover/popover-arrow/PopoverArrowType";

export default function PopoverArrow(props: PopoverArrowType) {

    return (<PopoverArrowBase {...props} />);
}