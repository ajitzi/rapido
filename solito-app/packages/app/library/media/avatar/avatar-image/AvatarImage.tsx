import * as React from "react";
import {AvatarImage as AvatarImageBase} from "@gluestack-ui/themed";
import AvatarImageType from "./AvatarImageType";


export default function AvatarImage(props: AvatarImageType) {

    return (<AvatarImageBase {...props} />);
}