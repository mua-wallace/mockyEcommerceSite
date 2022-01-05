<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

 /**
 * @OA\Info(
 *      version="1.0.0",
 *      title="Mocky-ecommerce site",
 *      description="This is the mocky-ecommerce websitethat deals with two main products electronics and home accessories",
 *      @OA\Contact(
 *          email="muawallizewi@gmail.com"
 *      ),
 * )
 */

/**
 *  @OA\Server(
 *      url=L5_SWAGGER_CONST_HOST,
 *      description="Mocky-ecommerce OpenApi dynamic host server"
 *  )
 */

/**
 * @OA\SecurityScheme(
 *     type="oauth2",
 *     description="Use a global client_id / client_secret and your username / password combo to obtain a token",
 *     name="Password Based",
 *     in="header",
 *     scheme="https",
 *     securityScheme="Password Based",
 *     @OA\Flow(
 *         flow="password",
 *         authorizationUrl="/oauth/authorize",
 *         tokenUrl="/oauth/token",
 *         refreshUrl="/oauth/token/refresh",
 *         scopes={}
 *     )
 * )
 */

/**
 * @OA\OpenApi(
 *   security={
 *     {
 *       "oauth2": {"read:oauth2"},
 *     }
 *   }
 * )
 */

/**
 * @OA\Tag(
 *     name="Products",
 *     description="Everything about your Products",
 * )
 *
 * @OA\Tag(
 *     name="User",
 *     description="Operations about user",
 * )
 * @OA\ExternalDocumentation(
 *     description="Find out more about Swagger",
 *     url="http://swagger.io"
 * )
 */

/**
 * @OA\Get(
 *      path="/list",
 *      tags={"Products"},
 *      summary="Get list of products",
 *      description="Returns list of products",
 *      @OA\Response(
 *          response=200,
 *          description="successful operation"
 *       ),
 *       @OA\Response(response=400, description="Bad request"),
 *     )
 *
 * Returns list of products
 */

/**
 * @OA\Get(
 *      path="/product/{id}",
 *      tags={"Products"},
 *      summary="Get product information",
 *      description="Returns product data",
 *      @OA\Parameter(
 *          name="id",
 *          description="Product id",
 *          required=true,
 *          example="14",
 *          in="path",
 *          @OA\Schema(
 *              type="integer"
 *          )
 *      ),
 *      @OA\Response(
 *          response=200,
 *          description="successful operation"
 *       ),
 *      @OA\Response(response=400, description="Bad request"),
 *      @OA\Response(response=404, description="Resource Not Found"),
 * )
 */
/**
 * @OA\Delete(
 *      path="/delete/{id}",
 *      tags={"Products"},
 *      summary="Delete product",
 *      description="Delete product",
 *      @OA\Parameter(
 *          name="id",
 *          description="Uniquue product id",
 *          required=true,
 *          example="17",
 *          in="path",
 *          @OA\Schema(
 *              type="integer"
 *          )
 *      ),
 *      @OA\Response(
 *          response=200,
 *          description="successful operation"
 *       ),
 *      @OA\Response(response=400, description="Bad request"),
 *      @OA\Response(response=404, description="Resource Not Found"),
 * )
 */
/**
 * @OA\Get(
 *      path="/search/{key}",
 *      tags={"Products"},
 *      summary="Search a particular product",
 *      description="Search Product",
 *      @OA\Parameter(
 *          name="key",
 *          description="Search product using Key",
 *          required=true,
 *          example="Television",
 *          in="path",
 *          @OA\Schema(
 *              type="string"
 *          )
 *      ),
 *      @OA\Response(
 *          response=200,
 *          description="successful operation"
 *       ),
 *      @OA\Response(response=400, description="Bad request"),
 *      @OA\Response(response=404, description="Resource Not Found"),
 * )
 */
/**
     * @OA\Post(
     * path="/register",
     *   tags={"User"},
     *   summary="Register",
     *   operationId="register",
     *
     *  @OA\Parameter(
     *      name="name",
     *      in="query",
     *      required=true,
     *      example="Wallice",
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *  @OA\Parameter(
     *      name="email",
     *      in="query",
     *      required=true,
     *      example="wallice@gmail.com",
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *   @OA\Parameter(
     *       name="location",
     *      in="query",
     *      required=true,
     *      example="Douala",
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="password",
     *      in="query",
     *      required=true,
     *      example="abc123@60",
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *   @OA\Response(
     *      response=201,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *       description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
/**
     * @OA\Post(
     * path="/login",
     *   tags={"User"},
     *   summary="Login",
     *
     *  @OA\Parameter(
     *      name="email",
     *      in="query",
     *      required=true,
     *      example="wallice@gmail.com",
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="password",
     *      in="query",
     *      required=true,
     *      example="abc123@60",
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *   @OA\Response(
     *      response=201,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *       description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
/**
     * @OA\Post(
     * path="/addproduct",
     *   tags={"Products"},
     *   summary="Add product",
     *
     *  @OA\Parameter(
     *      name="name",
     *      in="query",
     *      required=true,
     *      example="Woofer Speaker",
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="category",
     *      in="query",
     *      required=true,
     *      example="Electronics",
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="description",
     *      in="query",
     *      required=true,
     *      example="This is a high bass woofer speaker",
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="quantity",
     *      in="query",
     *      required=true,
     *      example="12",
     *      @OA\Schema(
     *           type="integer"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="price",
     *      in="query",
     *      required=true,
     *      example="50000",
     *      @OA\Schema(
     *           type="number"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="delivery_date",
     *      in="query",
     *      required=true,
     *      example="2nd January 2022",
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     * @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="multipart/form-data",
     *             @OA\Schema(
     *                 @OA\Property(
     *                     description="file to upload",
     *                     property="image",
     *                     type="file",
     *                ),
     *                 required={"image"}
     *             )
     *         )
     *  ),
     *   @OA\Response(
     *      response=201,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *       description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
