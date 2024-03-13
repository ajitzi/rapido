import * as React from "react";
import {AvatarFallbackText as AvatarFallbackTextBase} from "@gluestack-ui/themed";
import AvatarFallbackTextType from "app/library/media/avatar/avatar-fallback-text/AvatarFallbackTextType";


export default function AvatarFallbackText(props: AvatarFallbackTextType) {

    return (<AvatarFallbackTextBase {...props}>{props.children}</AvatarFallbackTextBase>);
}