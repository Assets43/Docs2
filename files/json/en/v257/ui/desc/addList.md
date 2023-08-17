Lists are continuous, vertical indexes of text or images
They are used to group together related pieces of data or informations to highlight association with each other and easy to read
They are frequently used for navigation as well as displaying general content


Add a list to your app by calling the `addList` method of the `ui` object
If `Icon` option is passed, the list must be of the form `[icon, title, body, secondary]`. To display an image avatar, passed and additional `Avatar` option and the list must be of the form `[image, title, body, secondary
If no `Icon` option is passed, the list is treated as `[title, body, secondary]` by default
The secondary action is an icon button by default, to display as a text passed `secondarytext` option


<h3>Properties</h3>These are the setter and getter properties for the addList Component.<div class="samp" style="margin-top:2px;"><a href="#absheight-0" data-transition="pop" data-rel="popup" class="ui-link">absHeight </a></div><div class="samp" style="margin-top:2px;"><a href="#absleft-5" data-transition="pop" data-rel="popup" class="ui-link">absLeft </a></div><div class="samp" style="margin-top:2px;"><a href="#abstop-10" data-transition="pop" data-rel="popup" class="ui-link">absTop </a></div><div class="samp" style="margin-top:2px;"><a href="#abswidth-15" data-transition="pop" data-rel="popup" class="ui-link">absWidth </a></div><div class="samp" style="margin-top:2px;"><a href="#avatarsize-20" data-transition="pop" data-rel="popup" class="ui-link">avatarSize </a></div><div class="samp" style="margin-top:2px;"><a href="#avatarvariant-25" data-transition="pop" data-rel="popup" class="ui-link">avatarVariant </a></div><div class="samp" style="margin-top:2px;"><a href="#backcolor-30" data-transition="pop" data-rel="popup" class="ui-link">backColor </a></div><div class="samp" style="margin-top:2px;"><a href="#backimage-35" data-transition="pop" data-rel="popup" class="ui-link">backImage </a></div><div class="samp" style="margin-top:2px;"><a href="#border-40" data-transition="pop" data-rel="popup" class="ui-link">border </a></div><div class="samp" style="margin-top:2px;"><a href="#bordercolor-45" data-transition="pop" data-rel="popup" class="ui-link">borderColor </a></div><div class="samp" style="margin-top:2px;"><a href="#checkboxcolor-50" data-transition="pop" data-rel="popup" class="ui-link">checkboxColor </a></div><div class="samp" style="margin-top:2px;"><a href="#cornerradius-55" data-transition="pop" data-rel="popup" class="ui-link">cornerRadius </a></div><div class="samp" style="margin-top:2px;"><a href="#disabled-60" data-transition="pop" data-rel="popup" class="ui-link">disabled </a></div><div class="samp" style="margin-top:2px;"><a href="#elevation-65" data-transition="pop" data-rel="popup" class="ui-link">elevation </a></div><div class="samp" style="margin-top:2px;"><a href="#fontfile-70" data-transition="pop" data-rel="popup" class="ui-link">fontFile </a></div><div class="samp" style="margin-top:2px;"><a href="#fontfile-75" data-transition="pop" data-rel="popup" class="ui-link">fontFile </a></div><div class="samp" style="margin-top:2px;"><a href="#height-80" data-transition="pop" data-rel="popup" class="ui-link">height </a></div><div class="samp" style="margin-top:2px;"><a href="#iconcolor-85" data-transition="pop" data-rel="popup" class="ui-link">iconColor </a></div><div class="samp" style="margin-top:2px;"><a href="#iconsize-90" data-transition="pop" data-rel="popup" class="ui-link">iconSize </a></div><div class="samp" style="margin-top:2px;"><a href="#isvisible-95" data-transition="pop" data-rel="popup" class="ui-link">isVisible </a></div><div class="samp" style="margin-top:2px;"><a href="#label-100" data-transition="pop" data-rel="popup" class="ui-link">label </a></div><div class="samp" style="margin-top:2px;"><a href="#left-105" data-transition="pop" data-rel="popup" class="ui-link">left </a></div><div class="samp" style="margin-top:2px;"><a href="#margins-110" data-transition="pop" data-rel="popup" class="ui-link">margins </a></div><div class="samp" style="margin-top:2px;"><a href="#opacity-115" data-transition="pop" data-rel="popup" class="ui-link">opacity </a></div><div class="samp" style="margin-top:2px;"><a href="#options-120" data-transition="pop" data-rel="popup" class="ui-link">options </a></div><div class="samp" style="margin-top:2px;"><a href="#outlined-125" data-transition="pop" data-rel="popup" class="ui-link">outlined </a></div><div class="samp" style="margin-top:2px;"><a href="#padding-130" data-transition="pop" data-rel="popup" class="ui-link">padding </a></div><div class="samp" style="margin-top:2px;"><a href="#parent-135" data-transition="pop" data-rel="popup" class="ui-link">parent </a></div><div class="samp" style="margin-top:2px;"><a href="#position-140" data-transition="pop" data-rel="popup" class="ui-link">position </a></div><div class="samp" style="margin-top:2px;"><a href="#rotation-145" data-transition="pop" data-rel="popup" class="ui-link">rotation </a></div><div class="samp" style="margin-top:2px;"><a href="#selectable-150" data-transition="pop" data-rel="popup" class="ui-link">selectable </a></div><div class="samp" style="margin-top:2px;"><a href="#textcolor-155" data-transition="pop" data-rel="popup" class="ui-link">textColor </a></div><div class="samp" style="margin-top:2px;"><a href="#textcolor1-160" data-transition="pop" data-rel="popup" class="ui-link">textColor1 </a></div><div class="samp" style="margin-top:2px;"><a href="#textcolor2-165" data-transition="pop" data-rel="popup" class="ui-link">textColor2 </a></div><div class="samp" style="margin-top:2px;"><a href="#textsize-170" data-transition="pop" data-rel="popup" class="ui-link">textSize </a></div><div class="samp" style="margin-top:2px;"><a href="#textsize1-175" data-transition="pop" data-rel="popup" class="ui-link">textSize1 </a></div><div class="samp" style="margin-top:2px;"><a href="#textsize2-180" data-transition="pop" data-rel="popup" class="ui-link">textSize2 </a></div><div class="samp" style="margin-top:2px;"><a href="#top-185" data-transition="pop" data-rel="popup" class="ui-link">top </a></div><div class="samp" style="margin-top:2px;"><a href="#type-190" data-transition="pop" data-rel="popup" class="ui-link">type </a></div><div class="samp" style="margin-top:2px;"><a href="#visibility-195" data-transition="pop" data-rel="popup" class="ui-link">visibility </a></div><div class="samp" style="margin-top:2px;"><a href="#width-200" data-transition="pop" data-rel="popup" class="ui-link">width </a></div>
<div data-role="popup" id="absheight-0" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute height of the control in pixels.</p></div><div data-role="popup" id="absleft-5" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the left in pixels.</p></div><div data-role="popup" id="abstop-10" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the top in pixels.</p></div><div data-role="popup" id="abswidth-15" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute width of the control in pixels.</p></div><div data-role="popup" id="avatarsize-20" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the size of the avatar. Values can be `Small` `Medium` `Large`</p></div><div data-role="popup" id="avatarvariant-25" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the variant of the avatar. Values can be `Square` `Round` or `Circle`</p></div><div data-role="popup" id="backcolor-30" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the background color in a hexadecimal format.</p></div><div data-role="popup" id="backimage-35" class="ui-content"><p><span style="color:#4c4;">String</span><br>The path to your image file.</p></div><div data-role="popup" id="border-40" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the border thickness in pixels.</p></div><div data-role="popup" id="bordercolor-45" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the border color. Color is in hexadecimal form `#rrggbb`</p></div><div data-role="popup" id="checkboxcolor-50" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the theme color of the checkbox when `Selectable` option is enabled. Vaues can be `Default` `Primary` or `Secondary`</p></div><div data-role="popup" id="cornerradius-55" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the corner radius in pixels.</p></div><div data-role="popup" id="disabled-60" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns the `disbaled` state of the control.</p></div><div data-role="popup" id="elevation-65" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the depth of the list container. Values range from 0 to 24.</p></div><div data-role="popup" id="fontfile-70" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the font file use.</p></div><div data-role="popup" id="fontfile-75" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the path to the font-family use.</p></div><div data-role="popup" id="height-80" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the height of the control.</p></div><div data-role="popup" id="iconcolor-85" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the icon color in a hexadecimal format.</p></div><div data-role="popup" id="iconsize-90" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the icon text.</p></div><div data-role="popup" id="isvisible-95" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Returns whether the control is visible or not.</p></div><div data-role="popup" id="label-100" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the label text.</p></div><div data-role="popup" id="left-105" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the left.</p></div><div data-role="popup" id="margins-110" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the margin of the control. Works on controls with `Linear` parent only. You can also pass a number to set equal margins for all sides.</p></div><div data-role="popup" id="opacity-115" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the opacity of the control.</p></div><div data-role="popup" id="options-120" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the `options` of the control.</p></div><div data-role="popup" id="outlined-125" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns whether the container is outlined or elevated.</p></div><div data-role="popup" id="padding-130" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.</p></div><div data-role="popup" id="parent-135" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the parent layout control.</p></div><div data-role="popup" id="position-140" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the position of the control. The returned object has `left` `top` `right` and `bottom` props.</p></div><div data-role="popup" id="rotation-145" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the angle of rotation in degrees.</p></div><div data-role="popup" id="selectable-150" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns a boolean whether the list is selectable or not.</p></div><div data-role="popup" id="textcolor-155" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the color of the text.</p></div><div data-role="popup" id="textcolor1-160" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the color of the title text in hexadecimal format.</p></div><div data-role="popup" id="textcolor2-165" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the color of the body text in hexadecimal format.</p></div><div data-role="popup" id="textsize-170" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the text within the control.</p></div><div data-role="popup" id="textsize1-175" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the title text.</p></div><div data-role="popup" id="textsize2-180" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the body text.</p></div><div data-role="popup" id="top-185" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the top.</p></div><div data-role="popup" id="type-190" class="ui-content"><p><span style="color:#4c4;">String</span><br>Returns the type of the control.</p></div><div data-role="popup" id="visibility-195" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the visibility of the control.</p></div><div data-role="popup" id="width-200" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the width of the control.</p></div>