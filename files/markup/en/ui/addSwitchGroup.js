// ------------- HEADER SECTION ------------- 


/** # addSwitchGroup #
 * @abbrev swg
 * @brief addSwitchGroup
 * 
 * $$ swg = ui.addSwitchGroup(parent, list, options, width, height) $$ 
 * @param {obj} parent The parent layout where to add the SwitchGroup Component.
 * @param {obj} list The list items array whose elements can be `String` if items is text only, or `Array` of the form `[ "icon", "label" ]` if items is icon and text.
 * @param {str} options A comma separated options for the SwitchGroup. Options can be \n Icon: `Icon` \n `Color: `Primary` or `Secondary` \n `Container: `Elevated` or `Outlined` \n `Corner: `Square` \n`Divider`
 * @param {num} width Fraction of the screen width. [0-1]
 * @param {num} height Fraction of the screen height. [0-1]
 * @returns obj-SwitchGroup Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a SwitchGroup Component into your layout. A switchgroup is a list whose items can be toggled between <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">on</span> and <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">off</span>.

<style>.samp { margin-top: 2px; } </style><h3>Properties</h3>These are the setter and getter properties for the addSwitchGroup Component.
<div class="samp"><a href="#absheight-0" data-transition="pop" data-rel="popup" class="ui-link">absHeight </a></div><div class="samp"><a href="#absleft-5" data-transition="pop" data-rel="popup" class="ui-link">absLeft </a></div><div class="samp"><a href="#abstop-10" data-transition="pop" data-rel="popup" class="ui-link">absTop </a></div><div class="samp"><a href="#abswidth-15" data-transition="pop" data-rel="popup" class="ui-link">absWidth </a></div><div class="samp"><a href="#backcolor-20" data-transition="pop" data-rel="popup" class="ui-link">backColor </a></div><div class="samp"><a href="#backimage-25" data-transition="pop" data-rel="popup" class="ui-link">backImage </a></div><div class="samp"><a href="#border-30" data-transition="pop" data-rel="popup" class="ui-link">border </a></div><div class="samp"><a href="#bordercolor-35" data-transition="pop" data-rel="popup" class="ui-link">borderColor </a></div><div class="samp"><a href="#borderstyle-40" data-transition="pop" data-rel="popup" class="ui-link">borderStyle </a></div><div class="samp"><a href="#color-45" data-transition="pop" data-rel="popup" class="ui-link">color </a></div><div class="samp"><a href="#cornerradius-50" data-transition="pop" data-rel="popup" class="ui-link">cornerRadius </a></div><div class="samp"><a href="#disabled-55" data-transition="pop" data-rel="popup" class="ui-link">disabled </a></div><div class="samp"><a href="#edge-60" data-transition="pop" data-rel="popup" class="ui-link">edge </a></div><div class="samp"><a href="#elevation-65" data-transition="pop" data-rel="popup" class="ui-link">elevation </a></div><div class="samp"><a href="#fontfile-70" data-transition="pop" data-rel="popup" class="ui-link">fontFile </a></div><div class="samp"><a href="#height-75" data-transition="pop" data-rel="popup" class="ui-link">height </a></div><div class="samp"><a href="#iconcolor-80" data-transition="pop" data-rel="popup" class="ui-link">iconColor </a></div><div class="samp"><a href="#iconsize-85" data-transition="pop" data-rel="popup" class="ui-link">iconSize </a></div><div class="samp"><a href="#isvisible-90" data-transition="pop" data-rel="popup" class="ui-link">isVisible </a></div><div class="samp"><a href="#itempadding-95" data-transition="pop" data-rel="popup" class="ui-link">itemPadding </a></div><div class="samp"><a href="#label-100" data-transition="pop" data-rel="popup" class="ui-link">label </a></div><div class="samp"><a href="#labelcolor-105" data-transition="pop" data-rel="popup" class="ui-link">labelColor </a></div><div class="samp"><a href="#labelsize-110" data-transition="pop" data-rel="popup" class="ui-link">labelSize </a></div><div class="samp"><a href="#left-115" data-transition="pop" data-rel="popup" class="ui-link">left </a></div><div class="samp"><a href="#list-120" data-transition="pop" data-rel="popup" class="ui-link">list </a></div><div class="samp"><a href="#margins-125" data-transition="pop" data-rel="popup" class="ui-link">margins </a></div><div class="samp"><a href="#opacity-130" data-transition="pop" data-rel="popup" class="ui-link">opacity </a></div><div class="samp"><a href="#options-135" data-transition="pop" data-rel="popup" class="ui-link">options </a></div><div class="samp"><a href="#outlined-140" data-transition="pop" data-rel="popup" class="ui-link">outlined </a></div><div class="samp"><a href="#padding-145" data-transition="pop" data-rel="popup" class="ui-link">padding </a></div><div class="samp"><a href="#parent-150" data-transition="pop" data-rel="popup" class="ui-link">parent </a></div><div class="samp"><a href="#position-155" data-transition="pop" data-rel="popup" class="ui-link">position </a></div><div class="samp"><a href="#rotation-160" data-transition="pop" data-rel="popup" class="ui-link">rotation </a></div><div class="samp"><a href="#textcolor-165" data-transition="pop" data-rel="popup" class="ui-link">textColor </a></div><div class="samp"><a href="#textsize-170" data-transition="pop" data-rel="popup" class="ui-link">textSize </a></div><div class="samp"><a href="#top-175" data-transition="pop" data-rel="popup" class="ui-link">top </a></div><div class="samp"><a href="#type-180" data-transition="pop" data-rel="popup" class="ui-link">type </a></div><div class="samp"><a href="#visibility-185" data-transition="pop" data-rel="popup" class="ui-link">visibility </a></div><div class="samp"><a href="#width-190" data-transition="pop" data-rel="popup" class="ui-link">width </a></div>
<div data-role="popup" id="absheight-0" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute height of the control in pixels.</p></div><div data-role="popup" id="absleft-5" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the left in pixels.</p></div><div data-role="popup" id="abstop-10" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the top in pixels.</p></div><div data-role="popup" id="abswidth-15" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute width of the control in pixels.</p></div><div data-role="popup" id="backcolor-20" class="ui-content"><p><span style="color:#4c4;">String</span><br>A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="backimage-25" class="ui-content"><p><span style="color:#4c4;">String</span><br>The path to your image file.</p></div><div data-role="popup" id="border-30" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the border thickness in pixels.</p></div><div data-role="popup" id="bordercolor-35" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="borderstyle-40" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border style. Values can be <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">dotted</span>, <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">dashed</span>, <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">solid</span>, <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">double</span>, <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">groove</span>, <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">ridge</span>, <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">inset</span> and <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">outset</span>. Default is <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">solid</span>.</p></div><div data-role="popup" id="color-45" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the theme color. Values can be <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Default</span> <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Secondary</span></p></div><div data-role="popup" id="cornerradius-50" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the corner radius in pixels.</p></div><div data-role="popup" id="disabled-55" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.</p></div><div data-role="popup" id="edge-60" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the edge position of the toggle. Values can be <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Start</span> <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">End</span> or <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">False</span></p></div><div data-role="popup" id="elevation-65" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the depth of the control container. Value ranges from 0 to 24.</p></div><div data-role="popup" id="fontfile-70" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.</p></div><div data-role="popup" id="height-75" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the height of the control as a fraction of the parent control.</p></div><div data-role="popup" id="iconcolor-80" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the theme color <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Primary</span> <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Secondary</span> or <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Default</span>. You can also pass a hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="iconsize-85" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the icon.</p></div><div data-role="popup" id="isvisible-90" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Returns whether the control is visible or not.</p></div><div data-role="popup" id="itempadding-95" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of each switch item. See also <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">setItemPadding</span> method.</p></div><div data-role="popup" id="label-100" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the label text.</p></div><div data-role="popup" id="labelcolor-105" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the color of the label text in hexadecimal format.</p></div><div data-role="popup" id="labelsize-110" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the label text.</p></div><div data-role="popup" id="left-115" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the left.</p></div><div data-role="popup" id="list-120" class="ui-content"><p><span style="color:#4c4;">array</span><br>Sets or returns the list items. You can also pass a comma separated string of items.</p></div><div data-role="popup" id="margins-125" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.</p></div><div data-role="popup" id="opacity-130" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the opacity of the control.</p></div><div data-role="popup" id="options-135" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">options</span> of the control.</p></div><div data-role="popup" id="outlined-140" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns whether the container is outlined or elevated.</p></div><div data-role="popup" id="padding-145" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.</p></div><div data-role="popup" id="parent-150" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the parent layout control.</p></div><div data-role="popup" id="position-155" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">bottom</span> props.</p></div><div data-role="popup" id="rotation-160" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the angle of rotation in degrees.</p></div><div data-role="popup" id="textcolor-165" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the theme color <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">primary</span> or <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">secondary</span>. You can also pass a hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="textsize-170" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the text within the control.</p></div><div data-role="popup" id="top-175" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the top.</p></div><div data-role="popup" id="type-180" class="ui-content"><p><span style="color:#4c4;">String</span><br>Returns the type of the control.</p></div><div data-role="popup" id="visibility-185" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the visibility of the control.</p></div><div data-role="popup" id="width-190" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the width of the control as a fraction of the parent control.</p></div>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnTouch ###
 * @brief setOnTouch
 * Sets a callback function when the switch item is touch
 * $$ swg.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["value ","text ","index ","event "],"pTypes":["bin-The checked state of the switch item.","str-The switch item label text.","num-The index of the corresponding switch item.","obj-The click event."]}
 */


/** ### setOnChange ###
 * @brief setOnChange
 * Adds a callback function to be called whent there is a change of value
 * $$ swg.setOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["values "],"pTypes":["lst-An array of indexes corresponding to the checked switch items."]}
 */


/** ### setValueByIndex ###
 * @brief setValueByIndex
 * Sets the value of the corresponding item in the list
 * $$ swg.setValueByIndex(index, val) $$
 * @param {num} index The index of the corresponding item.
 * @param {bin} val A Values can be `true` or `false`
 */


/** ### getValueByIndex ###
 * @brief getValueByIndex
 * Returns whether an item is check or unchecked
 * $$ swg.getValueByIndex(index) $$
 * @param {num} index The index of the corresponding item.
 * @returns bin
 */


/** ### setList ###
 * @brief setList
 * Updates the list on the switchgroup component
 * $$ swg.setList(lst) $$
 * @param {obj} lst The list array or a comma separated list.
 */


/** ### addItem ###
 * @brief addItem
 * Adds or insert an item in the SwitchGroup list
 * $$ swg.addItem(title, icon, value, index) $$
 * @param {str} title The title text.
 * @param {str} icon Material icon font.
 * @param {bin} value The value of the item.
 * @param {num} index The index in which to insert the item. Default is at the bottom of the list.
 */


/** ### removeItemByIndex ###
 * @brief removeItemByIndex
 * Removes an item in the SwitchGroup by its index
 * $$ swg.removeItemByIndex(index) $$
 * @param {num} index The index of the corresponding item to remove.
 */


/** ### removeItemByName ###
 * @brief removeItemByName
 * Removes an item in the SwitchGroup component by its title name
 * $$ swg.removeItemByName(title) $$
 * @param {str} title The title text of the SwitchGroup item.
 */


/** ### popItem ###
 * @brief popItem
 * Removes the last item in the SwitchGroup list
 * $$ swg.popItem() $$
 */


/** ### shiftItem ###
 * @brief shiftItem
 * Removes the first item in SwitchGroup list
 * $$ swg.shiftItem() $$
 */


/** ### setEnabled ###
 * @brief setEnabled
 * Enable or disable an item in the switchgroup component
 * $$ swg.setEnabled(index, value) $$
 * @param {num} index The index of the corresponding item in the list. You can also pass `Boolean` to enable or disable the switchgroup component.
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabled ###
 * @brief getEnabled
 * Get the enabled state of an item in the switch group
 * $$ swg.getEnabled(index) $$
 * @param {num} index The index of the corresponding item in the switch group.
 * @returns bin
 */


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ swg.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["text ","index ","event "],"pTypes":["str-The label text of the switchgroup item.","num-The index of the corresponding switchgroup item.","obj-The pointer event object."]}
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the switchgroup container
 * $$ swg.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-left corner radius.
 * @param {num} tr Top-right corner radius.
 * @param {num} bl Bottom-left corner radius.
 * @param {num} br Bottom-right corner radius.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### animate ###
 * @brief animate
 * Animate the component
 * $$ swg.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * @brief setSize
 * Sets the size of the component
 * $$ swg.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### show ###
 * @brief show
 * Show the component
 * $$ swg.show() $$
 */


/** ### hide ###
 * @brief hide
 * Hide the component
 * $$ swg.hide() $$
 */


/** ### gone ###
 * @brief gone
 * Destroy the component
 * $$ swg.gone() $$
 */


/** ### destroy ###
 * @brief destroy
 * Destroy the component
 * $$ swg.destroy() $$
 */


/** ### setScale ###
 * @brief setScale
 * Sets the x and y scaling of the component
 * $$ swg.setScale(x, y) $$
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition ###
 * @brief getPosition
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom
 * $$ swg.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * @brief setMargins
 * Sets the margin of the component
 * $$ swg.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * @brief setPadding
 * Sets the padding component container
 * $$ swg.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0-1]
 * @param {num} right Fraction of the component width. [0-1]
 * @param {num} bottom Fraction of the component height. [0-1]
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * @brief setPosition
 * Sets the position of the component relative to its parent dimensions
 * $$ swg.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0-1]
 * @param {num} top Fraction of the screen height. [0-1]
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * @brief setBorder
 * Sets the border line for the component container
 * $$ swg.setBorder(width, clr, style) $$
 * @param {num} width Border-left thickness in pixels.
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### bringForward ###
 * @brief bringForward
 * Bring this component forward by a given z-index
 * $$ swg.bringForward(zIndex) $$
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward ###
 * @brief sendBackward
 * Bring this component backward by a given z-index
 * $$ swg.sendBackward(zIndex) $$
 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        var items = ["This is item 1", "This is item 2", "This is item 3"]

        // Add a switchgroup control to the main layout.
        this.swg = ui.addSwitchGroup(this.main, items, "Secondary", 0.9)

        // Add a callback handler when the switchgroup item is touch
        this.swg.setOnTouch( this.onTouch )
    }

    onTouch(item, value)
    {
        ui.showPopup(item + " : "  + value)
    }
}
 */
    
            
    
/**
@sample SwitchGroup with leading icons
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize switchgroup items with leading icon
        var items = [ 
            ["music_note", "Enable Sound"],
            ["bluetooth", "Enable Bluetooth"],
            ["wifi", "Enable Wifi"]
        ]

        // Add a switchgroup control to the main layout.
        this.swg = ui.addSwitchGroup(this.main, items, "Secondary,Icon", 0.9)

        // Set the label text of the switchgroup control
        this.swg.label = "Settings"

        // Add a callback handler when the switchgroup item is touch
        this.swg.setOnTouch( this.onTouch )
    }

    onTouch(item, value)
    {
        ui.showPopup(item + " : "  + value)
    }
}
 */
    
            
    
/**
@sample With custom styles
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize switchgroup items with leading icon
        var items = [ 
            ["music_note", "Enable Sound"],
            ["bluetooth", "Enable Bluetooth"],
            ["wifi", "Enable Wifi"]
        ]

        // Adds a switchgroup control to the main layout
        this.swg = ui.addSwitchGroup(this.main, items, "Secondary,Icon", 0.9)
        this.swg.setOnTouch( this.onTouch )

        // Set the text color to deep-purple
        this.swg.textColor = "#673ab7"

        // Set the icon color to teal
        this.swg.iconColor = "#009688"

        // Set the corner radius
        this.swg.cornerRadius = 4

        // Set the background color using rgba
        this.swg.backColor = "rgba(255, 255, 100, 255)"
    }

    onTouch( item, value )
    {
        ui.showPopup( item + " : "  + value )
    }
}
 */
    
            
    
/**
@sample Elevated switchgroup with onChange callback
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize switchgroup items to be displayed
        var items = ["This is item 1", "This is item 2", "This is item 3"]

        // Adds a switchgroup control to the main layout
        this.swg = ui.addSwitchGroup( this.main, items, "Secondary,Elevated", 0.9 )
        this.swg.label = "My label"
        this.swg.elevation = 4

        // Add a callback handler when the value of switchgroup changes
        this.swg.setOnChange( this.onChange )
    }

    onChange(items, indexes)
    {
        ui.showPopup( items.join(", ") )
    }
}
 */
    
            
    
/**
@sample Outlined switchgroup
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize switchgroup items to be displayed
        var items = ["This is item 1", "This is item 2", "This is item 3"]

        // Adds a switchgroup control to the main layout
        this.swg = ui.addSwitchGroup( this.main, items, "Primary,Outlined", 0.9)
        this.swg.label = "My label"
        this.swg.cornerRadius = 8

        // Add a callback handler when the value of switchgroup changes
        this.swg.setOnChange( this.onChange )
    }

    onChange(items, indexes)
    {
        ui.showPopup( items.join(", ") )
    }
}
 */
    
            