import * as React from "react";
import {Card as CardBase} from "@gluestack-ui/themed";
import CardType from "./CardType";

export default function Card(props: CardType) {

    return (<CardBase {...props}>{props.children}</CardBase>);
}