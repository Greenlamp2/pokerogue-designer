/// <reference types="vite/client" />
declare type integer = number;
declare type PhaserTextStyle = {
    /**
     * The font the Text object will render with. This is a Canvas style font string.
     */
    fontFamily?: string;
    /**
     * The font size, as a CSS size string.
     */
    fontSize?: number | string;
    /**
     * Any addition font styles, such as 'strong'.
     */
    fontStyle?: string;
    /**
     * The font family or font settings to set. Overrides the other font settings.
     */
    font?: string;
    /**
     * A solid fill color that is rendered behind the Text object. Given as a CSS string color such as `#ff0`.
     */
    backgroundColor?: string;
    /**
     * The color the Text is drawn in. Given as a CSS string color such as `#fff` or `rgb()`.
     */
    color?: string | CanvasGradient | CanvasPattern;
    /**
     * The color used to stroke the Text if the `strokeThickness` property is greater than zero.
     */
    stroke?: string | CanvasGradient | CanvasPattern;
    /**
     * The thickness of the stroke around the Text. Set to zero for no stroke.
     */
    strokeThickness?: number;
    /**
     * A Text Padding object.
     */
    padding?: PhaserTextPadding;
    /**
     * The alignment of the Text. This only impacts multi-line text. Either `left`, `right`, `center` or `justify`.
     */
    align?: string;
    /**
     * The maximum number of lines to display within the Text object.
     */
    maxLines?: number;
    /**
     * Force the Text object to have the exact width specified in this property. Leave as zero for it to change accordingly to content.
     */
    fixedWidth?: number;
    /**
     * Force the Text object to have the exact height specified in this property. Leave as zero for it to change accordingly to content.
     */
    fixedHeight?: number;
    /**
     * Sets the resolution (DPI setting) of the Text object. Leave at zero for it to use the game resolution.
     */
    resolution?: number;
    /**
     * Set to `true` if this Text object should render from right-to-left.
     */
    rtl?: boolean;
    /**
     * This is the string used to aid Canvas in calculating the height of the font.
     */
    testString?: string;
    /**
     * The amount of horizontal padding added to the width of the text when calculating the font metrics.
     */
    baselineX?: number;
    /**
     * The amount of vertical padding added to the height of the text when calculating the font metrics.
     */
    baselineY?: number;
    /**
     * The amount to add to the font height to achieve the overall line height.
     */
    lineSpacing?: number;
    /**
     * The Text Word wrap configuration object.
     */
    wordWrap?: PhaserTextWordWrap;
};

declare type PhaserTextPadding = {
    /**
     * If set this value is used for both the left and right padding.
     */
    x?: number;
    /**
     * If set this value is used for both the top and bottom padding.
     */
    y?: number;
    /**
     * The amount of padding added to the left of the Text object.
     */
    left?: number;
    /**
     * The amount of padding added to the right of the Text object.
     */
    right?: number;
    /**
     * The amount of padding added to the top of the Text object.
     */
    top?: number;
    /**
     * The amount of padding added to the bottom of the Text object.
     */
    bottom?: number;
};

declare type PhaserTextWordWrap = {
    /**
     * The width at which text should be considered for word-wrapping.
     */
    width?: number;
    /**
     * Provide a custom callback when word wrapping is enabled.
     */
    callback?: TextStyleWordWrapCallback;
    /**
     * The context in which the word wrap callback is invoked.
     */
    callbackScope?: any;
    /**
     * Use basic or advanced word wrapping?
     */
    useAdvancedWrap?: boolean;
};
