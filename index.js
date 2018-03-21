"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_draft_wysiwyg_1 = require("react-draft-wysiwyg");
require("react-draft-wysiwyg/dist/react-draft-wysiwyg.css");
require("./index.css");
var draftjs_to_html_1 = require("draftjs-to-html");
var html_to_draftjs_1 = require("html-to-draftjs");
var draft_js_export_html_1 = require("draft-js-export-html");
var react_html_parser_1 = require("react-html-parser");
var draft_js_1 = require("draft-js");
/**
 * convert an editor state to html
 * @param input any
 * @param options DraftToHtml options
 */
exports.draftToHtml = function (input) {
    var options = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        options[_i - 1] = arguments[_i];
    }
    if (typeof input === 'string') {
        return input;
    }
    return draftjs_to_html_1.default.apply(void 0, [input].concat(options));
};
/**
 * convert html to Draft State
 * @param content your contents
 * @return {EditorState}
 */
exports.htmlToDraft = function (content) {
    var blocksFromHTML;
    /**
     * catch other editor's content.
     */
    try {
        blocksFromHTML = html_to_draftjs_1.default(content);
    }
    catch (error) {
        blocksFromHTML = draft_js_1.convertFromHTML(content);
    }
    var contentBlocks = blocksFromHTML.contentBlocks;
    var contentState = draft_js_1.ContentState.createFromBlockArray(contentBlocks);
    return draft_js_1.EditorState.createWithContent(contentState);
};
/**
 * convert raw content to Draft State
 * @param content your contents
 * @return {EditorState}
 */
exports.rawToDraft = function (content) {
    if (content == "")
        return;
    var contentState = draft_js_1.convertFromRaw(JSON.parse(content));
    return draft_js_1.EditorState.createWithContent(contentState);
};
/**
 * convert draft state to raw
 * @param content of draft state
 * @return  Object{entryMap: Object, blocks:Array()}
 */
exports.draftToRaw = function (content) {
    var contentState = content.getCurrentContent();
    return JSON.stringify(draft_js_1.convertToRaw(contentState));
};
/**
 * convert draft state to html
 * @param content of draft state
 * @return  html
 */
exports.draftStateToHTML = function (content) {
    if (content == "")
        return;
    var getEditorContent = draft_js_1.EditorState.createWithContent(draft_js_1.convertFromRaw(JSON.parse(content)));
    var html = draft_js_export_html_1.stateToHTML(getEditorContent.getCurrentContent());
    return react_html_parser_1.default(html);
};
/**
 * an empty state
 */
exports.EmptyState = draft_js_1.EditorState.createEmpty();
exports.A = function (arr) {
    return arr.map(function (a) { a; });
};
/**
 * Draft
 *
 * @class Draft
 * @extends {React.Component<DraftProps, DraftState>}
 */
var Draft = /** @class */ (function (_super) {
    __extends(Draft, _super);
    function Draft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Draft.prototype.render = function () {
        return React.createElement(react_draft_wysiwyg_1.Editor, __assign({ wrapperClassName: "react-wysiwyg-typescript-wrapper", editorClassName: "react-wysiwyg-typescript-editor", toolbarClassName: "react-wysiwyg-typescript-toolbar", placeholder: "", toolbar: this.props.toolbar, locale: this.props.locale }, this.props));
    };
    Draft.defaultProps = {
        toolbar: {
            options: ['inline', 'colorPicker', 'blockType', 'fontSize', 'link', 'list', 'textAlign', 'remove', 'history'],
            inline: {
                options: ['bold', 'italic', 'underline', 'strikethrough']
            },
            fontSize: {
                options: [10, 12, 14, 18, 24, 30, 36, 48]
            },
            list: {
                options: ['unordered', 'ordered']
            }
        },
        locale: 'en'
    };
    return Draft;
}(React.Component));
exports.default = Draft;
//# sourceMappingURL=index.js.map