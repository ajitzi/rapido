import * as React from "react";
import {Heading} from "@gluestack-ui/themed";


type H1Type = React.ComponentProps<typeof Heading> & {
    size?: 'lg' | 'md' | 'sm';
};
export default H1Type;