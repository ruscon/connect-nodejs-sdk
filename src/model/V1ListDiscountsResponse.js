/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var V1Discount = require('./V1Discount');




/**
 * The V1ListDiscountsResponse model module.
 * @module model/V1ListDiscountsResponse
 */

/**
 * Constructs a new <code>V1ListDiscountsResponse</code>.
 * 
 * @alias module:model/V1ListDiscountsResponse
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>V1ListDiscountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1ListDiscountsResponse} obj Optional instance to populate.
 * @return {module:model/V1ListDiscountsResponse} The populated <code>V1ListDiscountsResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
      obj['items'] = ApiClient.convertToType(data['items'], [V1Discount]);
    }
    }
  return obj;
}

/**
 * 
 * @member {Array.<module:model/V1Discount>} items
 */
exports.prototype['items'] = undefined;



module.exports = exports;



