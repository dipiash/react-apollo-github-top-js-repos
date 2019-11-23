import React from 'react';
import cn from 'classnames';

import cm from "./ListLine.module.css";

export const ListLine = React.memo(({name, stars, license, isBold}) => (
    <div className={cm.colWrapper}>
        <div className={cn(cm.col3, {[cm.headerItem]: isBold})}>
            {name}
        </div>
        <div className={cn(cm.col1, {[cm.headerItem]: isBold})}>
            {stars}
        </div>
        <div className={cn(cm.col2, {[cm.headerItem]: isBold})}>
            {license}
        </div>
    </div>
));
