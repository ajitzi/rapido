import * as React from "react";
import {Heading} from "@gluestack-ui/themed";

type H5Props = {
    content: string;
    props?: React.ComponentProps<typeof Heading>;
};

export default function H5({children, ...props}: React.ComponentProps<typeof Heading>) {

    return (
        <Heading {...props} size="md">
            {children}
        </Heading>
    )
}