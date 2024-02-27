import * as React from "react";
import {LinkText as UILinkText} from "@gluestack-ui/themed";


type LinkTextProps = {
}

export default function LinkText({children, ...props}: React.ComponentProps<typeof UILinkText> & LinkTextProps) {

    return (
        <UILinkText {...props}>
            {children}
        </UILinkText>
    )
}