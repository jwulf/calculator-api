/**
 *  @apiDefine SuccessExample
 *  @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "currentTotal": 56,
 *       "links": [
 *           {
 *               "rel": "add",
 *               "href": "/add/56",
 *               "type": "GET"
 *           },
 *           {
 *               "rel": "divide",
 *               "href": "/divide/56",
 *               "type": "GET"
 *           },
 *           {
 *               "rel": "multiply",
 *               "href": "/multiply/56",
 *               "type": "GET"
 *           },
 *           {
 *               "rel": "subtract",
 *               "href": "/subtract/56",
 *               "type": "GET"
 *           }
 *       ]
 *     }
 */

/**
 * @apiDefine ErrorExample
 * @apiError Invalid Input One or more of the parameters was not a number.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Invalid Input
 *     {
 *       "error": "Invalid Input"
 *
 */

/**
* @api {get} /add/:x/:y Add Two Numbers
* @apiName Add
* @apiGroup Calculate
*
* @apiParam {Number} x The first addend.
* @apiParam {Number} y The second addend.
*
* @apiSuccess {Number} currentTotal The sum of x and y.
* @apiSuccess {Array} links  An array of hyperlinks for further operations.
*
* @apiUse SuccessExample
*
* @apiUse ErrorExample
*/

/**
* @api {get} /divide/:x/:y Divide one number by another
* @apiName Divide
* @apiGroup Calculate
*
* @apiParam {Number} x The dividend.
* @apiParam {Number} y The divisor.
*
* @apiSuccess {Number} currentTotal The result of x divided by y.
* @apiSuccess {Array} links  An array of hyperlinks for further operations.
*
* @apiUse SuccessExample
*
* @apiUse ErrorExample
*/

/**
* @api {get} /multiply/:x/:y Multiply one number by another
* @apiName Multiply
* @apiGroup Calculate
*
* @apiParam {Number} x The first factor.
* @apiParam {Number} y The second factor.
*
* @apiSuccess {Number} currentTotal The product of x multiplied by y.
* @apiSuccess {Array} links  An array of hyperlinks for further operations.
*
* @apiUse SuccessExample
*
* @apiUse ErrorExample
*/

/**
* @api {get} /subtract/:x/:y Subtract one number from another.
* @apiName Subtract
* @apiGroup Calculate
*
* @apiParam {Number} x The number to subtract from.
* @apiParam {Number} y The number to subtract.
*
* @apiSuccess {Number} currentTotal The result of x minus y.
* @apiSuccess {Array} links  An array of hyperlinks for further operations.
*
* @apiUse SuccessExample
*
* @apiUse ErrorExample
*/