import * as React from 'react';
import {
    enableRipple
} from '@syncfusion/ej2-base';
enableRipple(true);

export class SampleBase extends React.PureComponent {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    rendereComplete() {
        /**custom render complete function */
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    componentDidMount() {
        setTimeout(() => {
            this.rendereComplete();
        });
    }
}