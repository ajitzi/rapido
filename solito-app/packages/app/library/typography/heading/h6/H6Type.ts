import * as React from "react";
import {Heading} from "@gluestack-ui/themed";


type H6Type = React.ComponentProps<typeof Heading> & {
    size?: 'md' | 'sm';
};
export default H6Type;