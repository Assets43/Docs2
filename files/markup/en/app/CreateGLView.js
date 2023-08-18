
/** # CreateGLView #
 * @abbrev glv
 * @brief Returns a GLView object
 * 
 * $$ glv = app.CreateGLView(width, height, options) $$ 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str} options fast2d
 * @returns dso-GLView
*/


// CreateGLView.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
GLView is a fast 2D canvas suitable for drawing and moving graphics around on the screen quickly, ideal for games. The options parameter should be always set to “Fast2d”.
%c

Use the **CreateImage** method of the GLView object to create an image that can be used with the GLView.
You can specity a **callback** function too which will be called once the image is ready to use.

To draw the sprite on the canvas use the **DrawImage** method.
<red>Note: don't forget to specify all parameters, including angle. Otherwise the image will not be drawn.</red>
You can leave either width or height -1 to scale the other parameter according to the sprite aspect ratio.

Once all drawing has been done, the **Render** method must be called to render all the GLView graphics to the screen.
<sample DrawImage>

### Render Loop
To create a rendering loop for a game, use the setInterval JavaScript function to call your drawing function at regular intervals.
The example below draws a continuously rotating image by calling the DrawFrame function 30 times each second, updating the angle each time:
<sample Render Loop>

### Sprite Touch Detection
If you need to want to simulate OnTouch for a GLView Image, you will need to keep track of the position, width and height that it has been drawn with. Then use the GLView OnTouch event to determine if the touch coordinates are within the GLView Image yourself. To prevent touch detect on all sprites on the touch position define a drawing order according to a list.
<sample Sprite Touch>

### Sprite Animations
GLView supports the use of Sprite Sheets. The DrawSprite method can be used to draw part of an image to the GLView.
The following example uses a sprite sheet containing 8 stages of a character running. The DrawSprite method is used to draw each of the 8 sections in turn to give the effect of the character continuously running:
<sample Sprite Sheet Animation>

 */



// -------- VISIBLE METHODS & PROPERTIES --------- 


/** ### aspect
 * @prop
 * width/height relation
 * @returns num_flt
 */

                    
/**
 * @extern Batch
 */

/** ### canvas
 * @prop
 * [HTMLDivElement]
 * @returns obj
 */

                    
/**
 * @extern ClearFocus
 */

/** ### CreateImage ###
 * Create a sprite object which can be drawn on the GLView
 * $$ glv.CreateImage(file, callback) $$
 * @param {str_ptf} file 
 * @param {fnc_json} callback {}
 * @returns dso_glv
 */


/** ### DrawImage ###
 * Draws an image to the canvas
 * $$ glv.DrawImage(image, x, y, w, h, angle) $$
 * @param {obj} image glv Image
 * @param {num_frc} x 
 * @param {num_frc} y 
 * @param {num_frc} w 
 * @param {num_frc} h 
 * @param {num_deg} angle 
 */


/** ### DrawSprite ###
 * Draws a part of an image to the canvas.
 * $$ glv.DrawSprite(sheet, sx, sy, sw, sh, dx, dy, dw, dh, angle) $$
 * @param {obj} sheet GLV Image
 * @param {num_pxl} sx 
 * @param {num_pxl} sy 
 * @param {num_pxl} sw 
 * @param {num_pxl} sh 
 * @param {num_frc} dx 
 * @param {num_frc} dy 
 * @param {num_frc} dw 
 * @param {num_frc} dh 
 * @param {num_deg} angle 
 */


/** ### _Exec ###
 * calls _gfx.Exec()
 * $$ glv._Exec(p1, p2, p3, p4) $$
 * @param {?} p1 
 * @param {?} p2 
 * @param {?} p3 
 * @param {?} p4 
 */


/** ### _Execute ###
 * 
 * $$ glv._Execute(p1, p2, p3, p4) $$
 * @param {?} p1 
 * @param {?} p2 
 * @param {?} p3 
 * @param {?} p4 
 */


/**
 * @extern Explode
 */

/**
 * @extern Focus
 */

/**
 * @extern GetAbsHeight
 */

/**
 * @extern GetAbsWidth
 */

/** ### GetContext ###
 * Returns the current FastCanvas context
 * $$ glv.GetContext() $$
 * @returns obj-ctx
 */


/** ### GetContext.ctx.capture ###
 * Captures the current cached context to a png image. * The path is relative to /sdcard but requires a leading '/', ie “/Pictures/mycapture.png”
 * $$ glv.GetContext.ctx.capture(x, y, w, h, fileName, successCallback, errorCallback) $$
 * @param {num_pxl} x 
 * @param {num_pxl} y 
 * @param {num_pxl} w 
 * @param {num_pxl} h 
 * @param {str:path relative to “/sdcard”} fileName 
 * @param {fnc} successCallback 
 * @param {fnc} errorCallback 
 */


/** ### GetContext.ctx.clearRect ###
 * <deprecated does nothing. ctx is automatically cleared after render()>
 * $$ glv.GetContext.ctx.clearRect(x, y, width, height) $$
 * @param {num_pxl} x 
 * @param {num_pxl} y 
 * @param {num_pxl} width 
 * @param {num_pxl} height 
 */


/** ### GetContext.ctx._drawCommands
 * @prop
 * 
 * @returns str
 */

                    
/** ### GetContext.ctx.drawImage ###
 * Draws a part of a glv image to the glv context, where s are source coordinates and d destination coordinates.
 * $$ glv.GetContext.ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh) $$
 * @param {obj} image glv Image
 * @param {num_pxl} sx 
 * @param {num_pxl} sy 
 * @param {num_pxl} sw 
 * @param {num_pxl} sh 
 * @param {num_pxl} dx 
 * @param {num_pxl} dy 
 * @param {num_pxl} dw 
 * @param {num_pxl} dh 
 */


/** ### GetContext.ctx._globalAlpha
 * @prop
 * 
 * @returns num_frc
 */

                    
/** ### GetContext.ctx.loadTexture ###
 * 
 * $$ glv.GetContext.ctx.loadTexture(image, successCallback, errorCallback) $$
 * @param {str_ptf} image 
 * @param {fnc_json} successCallback {"pNames":["metrics"],"pTypes":["lst-[ width:num_pxl, height:num_pxl ]"]}
 * @param {fnc_json} errorCallback {"pNames":["msg"],"pTypes":["str"]}
 */


/** ### GetContext.ctx.render ###
 * render the draw commands to the context
 * $$ glv.GetContext.ctx.render() $$
 */


/** ### GetContext.ctx.resetTransform ###
 * Reset all transformations to default
 * $$ glv.GetContext.ctx.resetTransform() $$
 */


/** ### GetContext.ctx.restore ###
 * Restore a previously saved context state
 * $$ glv.GetContext.ctx.restore() $$
 */


/** ### GetContext.ctx.rotate ###
 * Rotates the current applied transformation
 * $$ glv.GetContext.ctx.rotate(angle) $$
 * @param {num_rad} angle 
 */


/** ### GetContext.ctx.save ###
 * Saves the current context state
 * $$ glv.GetContext.ctx.save() $$
 */


/** ### GetContext.ctx.scale ###
 * Scales the current applied transformation matrix
 * $$ glv.GetContext.ctx.scale(a, d) $$
 * @param {num_frc} a 
 * @param {num_frc} d 
 */


/** ### GetContext.ctx.setTransform ###
 * Set the current transformation matrix
 * $$ glv.GetContext.ctx.setTransform(a, b, c, d, tx, ty) $$
 * @param {num} a 
 * @param {num} b 
 * @param {num} c 
 * @param {num} d 
 * @param {num} tx 
 * @param {num} ty 
 */


/** ### GetContext.ctx.transform ###
 * Apply an other transformation matrix to the current one
 * $$ glv.GetContext.ctx.transform(a, b, c, d, tx, ty) $$
 * @param {num} a 
 * @param {num} b 
 * @param {num} c 
 * @param {num} d 
 * @param {num} tx 
 * @param {num} ty 
 */


/** ### GetContext.ctx.translate ###
 * 'Moves' the current applied transformation matrix
 * $$ glv.GetContext.ctx.translate(tx, ty) $$
 * @param {num_pxl} tx 
 * @param {num_pxl} ty 
 */


/** ### GetContext.ctx.unloadTexture ###
 * 
 * $$ glv.GetContext.ctx.unloadTexture(image) $$
 * @param {str_ptf} image 
 */


/**
 * @extern GetHeight
 */

/**
 * @extern GetLeft
 */

/**
 * @extern GetParent
 */

/**
 * @extern GetPosition
 */

/**
 * @extern GetTop
 */

/** ### GetType ###
 * Returns the control class name.
 * $$ glv.GetType() $$
 * @returns str-GLView
 */


/**
 * @extern GetVisibility
 */

/**
 * @extern GetWidth
 */

/**
 * @extern Gone
 */

/** ### height
 * @prop
 * 
 * @returns num_int
 */

                    
/**
 * @extern Hide
 */

/**
 * @extern IsEnabled
 */

/**
 * @extern IsOverlap
 */

/**
 * @extern IsVisible
 */

/**
 * @extern Method
 */

/** ### Render ###
 * Render all draw commands to the canvas
 * $$ glv.Render() $$
 */


/**
 * @extern SetBackColor
 */

/**
 * @extern SetBackGradient
 */

/**
 * @extern SetBackGradientRadial
 */

/**
 * @extern SetBackground
 */

/**
 * @extern SetDescription
 */

/**
 * @extern SetEnabled
 */

/**
 * @extern SetMargins
 */

/**
 * @extern SetOnTouch
 */

/**
 * @extern SetOnTouchDown
 */

/**
 * @extern SetOnTouchMove
 */

/**
 * @extern SetOnTouchUp
 */

/**
 * @extern SetPadding
 */

/**
 * @extern SetPosition
 */

/**
 * @extern SetScale
 */

/**
 * @extern SetSize
 */

/**
 * @extern SetTouchable
 */

/**
 * @extern SetVisibility
 */

/**
 * @extern Show
 */

/**
 * @extern Tween
 */

/** ### width
 * @prop
 * 
 * @returns num_int
 */

                    // CreateGLView.txt --> All the sample codes

/** @Sample
<sample DrawImage>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "FillXY" );

	<b>glview = app.CreateGLView( 1, 1, "Fast2d" );
	lay.AddChild( glview );

	img = glview.CreateImage( "/Sys/Img/Hello.png", DrawFrame );</b>

	app.AddLayout( lay );
}

function DrawFrame()
{
	glview.DrawImage( img, 0.25, 0.3, 0.5, -1, 45 );
	glview.Render();
}
</sample>

<sample Render Loop>
var angle = 0;

function OnStart()
{
	lay = app.CreateLayout( "Linear", "FillXY" );

	<b>glview = app.CreateGLView( 1, 1, "Fast2d" );
	lay.AddChild( glview );

	img = glview.CreateImage( "/Sys/Img/Hello.png", StartRendering );</b>

	app.AddLayout( lay );
}

function StartRendering()
{
	setInterval( DrawFrame, 1000/30 );
}

function DrawFrame()
{
	glview.DrawImage( img, 0.25, 0.3, 0.5, -1, angle );

	angle = angle + 10;
	if( angle == 360 ) angle = 0;

	glview.Render();
}
</sample>

<sample Sprite Sheet Animation>
var spriteCount = 8;
var srcWidth = 50;
var srcHeight = 60;
var frameCount = 0;

function OnStart()
{
	lay = app.CreateLayout( "Linear", "FillXY" );

	<b>glview = app.CreateGLView( 1, 1, "Fast2d" );
	lay.AddChild( glview );

	img = glview.CreateImage( "/Sys/Img/Sprint.png", StartRendering );</b>

	app.AddLayout( lay );
}

function StartRendering()
{
	setInterval(DrawFrame, 1000/30);
}

function DrawFrame()
{
	var spriteIndex = Math.floor(frameCount / 2) % spriteCount;

	var sx = spriteIndex * srcWidth;
	var sy = 0;

	glview.DrawSprite( img, sx, sy, srcWidth, srcHeight,
				0.3, 0.4, 0.3, -1 );

	glview.Render();
	frameCount++;
}</sample>

<sample Sprite Touch>
objects = [];

//Called when application is started.
function OnStart() {
	//Create layout
	lay = app.CreateLayout( "linear" );

	//Create GLView
	glv = app.CreateGLView( 1, 1, "Fast2d" );
	glv.SetOnTouchUp( touch );

	//set first image
	img1 = glv.CreateImage( "/Sys/Img/Hello.png" );
	img1.name = "img1";
	img1.X = 0.1; img1.Y = 0.3;
	img1.W = 0.7; img1.H = 0.4;
	objects.push(img1);

	//set second image
	img2 = glv.CreateImage( "/Sys/Img/Droid1.png", startRender );
	img2.name = "img2";
	img2.X = 0.5; img2.Y = 0.5;
	img2.W = 0.5; img2.H = 0.3;
	objects.push(img2);

	lay.AddChild( glv );

	//Add layout to app.
	app.AddLayout( lay );
}

// Draw images
function startRender() {
	for(var i in objects) draw(objects[i]);
	glv.Render();
}

// Check which image was touched
function touch(ev) {
	for(var i = objects.length; i-- > 0; ) {
		if( touched( objects[i], ev ) ) {
			app.ShowPopup( "touched " + objects[i].name );
			break;
		}
	}
}

function draw(img, ev) {
	glv.DrawImage( img, img.X, img.Y, img.W, img.H, 0);
}

function touched(img, ev) {
	return img.X < ev.X && img.X + img.W > ev.X
		&& img.Y < ev.Y && img.Y + img.H > ev.Y;
}
</sample>

 */

