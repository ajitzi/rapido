import * as React from "react";
import {InputSlot as InputSlotBase} from "@gluestack-ui/themed";
import InputSlotType from "./InputSlotType";


export default function InputSlot(props: InputSlotType) {

    return <InputSlotBase {...props}>{props.children}</InputSlotBase>
}