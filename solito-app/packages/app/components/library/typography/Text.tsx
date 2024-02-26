import * as React from "react";
import {Text as UIText} from "@gluestack-ui/themed";

export default function Text({children, ...props}: React.ComponentProps<typeof UIText>) {

    return (
        <UIText {...props}>
            {children}
        </UIText>
    )
}