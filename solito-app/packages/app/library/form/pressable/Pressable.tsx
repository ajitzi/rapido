import * as React from "react";
import {Pressable as UIPressable} from "@gluestack-ui/themed";


type PressableProps = {
}

export default function Pressable({children, ...props}: React.ComponentProps<typeof UIPressable> & PressableProps) {

    return (
        <UIPressable {...props}>
            {children}
        </UIPressable>
    )
}