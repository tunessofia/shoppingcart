"use strict"

export function debounce (fn, timer) {
    let timeout;

        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(context);
        }, timer);
    
}
