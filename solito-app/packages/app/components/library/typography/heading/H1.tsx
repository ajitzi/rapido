import * as React from "react";
import {Heading} from "@gluestack-ui/themed";

type H1Props = {
    size?: 'lg' | 'md' | 'sm';
};

export default function H1({size, children, ...props}: React.ComponentProps<typeof Heading> & H1Props) {

    let headingSize;
    switch (size) {
        case 'lg':headingSize = '5xl'; break;
        case 'md':headingSize = '4xl'; break;
        case 'sm':headingSize = '3xl'; break;
        default: headingSize = '4xl'
    }

    return (
        <Heading {...props} size={headingSize}>
            {children}
        </Heading>
    )
}