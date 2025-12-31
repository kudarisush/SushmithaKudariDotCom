// This adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toBeInTheDocument();
import '@testing-library/jest-dom'

import {configure as configureDom} from "@testing-library/dom";
import {configure as configureReact} from "@testing-library/react";

jest.setTimeout(60000);
configureReact({asyncUtilTimeout: 5000});
configureDom({asyncUtilTimeout: 5000});

// 1. A more robust polyfill for structuredClone
if (!global.structuredClone) {
    global.structuredClone = (val) => {
        const str = JSON.stringify(val);

        // If stringify returns undefined (e.g., for undefined or a function),
        // return undefined. Don't try to parse.
        if (str === undefined) {
            return undefined;
        }

        return JSON.parse(str);
    };
}

window.ResizeObserver = global.ResizeObserver;

window.matchMedia =
    window.matchMedia ||
    function (query) {
        return {
            matches: false,
            media: query,
            addListener: function () {
            },
            removeListener: function () {
            },
            onchange: null,
            addEventListener: function () {
            },
            removeEventListener: function () {
            },
            dispatchEvent: function () {
                return false;
            },
        };
    };
