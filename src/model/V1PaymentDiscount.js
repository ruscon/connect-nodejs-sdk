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
var V1Money = require('./V1Money');




/**
 * The V1PaymentDiscount model module.
 * @module model/V1PaymentDiscount
 */

/**
 * Constructs a new <code>V1PaymentDiscount</code>.
 * V1PaymentDiscount
 * @alias module:model/V1PaymentDiscount
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>V1PaymentDiscount</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1PaymentDiscount} obj Optional instance to populate.
 * @return {module:model/V1PaymentDiscount} The populated <code>V1PaymentDiscount</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('applied_money')) {
      obj['applied_money'] = V1Money.constructFromObject(data['applied_money']);
    }
      if (data.hasOwnProperty('discount_id')) {
      obj['discount_id'] = ApiClient.convertToType(data['discount_id'], 'String');
    }
    }
  return obj;
}

/**
 * The discount's name.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The amount of money that this discount adds to the payment (note that this value is always negative or zero).
 * @member {module:model/V1Money} applied_money
 */
exports.prototype['applied_money'] = undefined;
/**
 * The ID of the applied discount, if available. Discounts applied in older versions of Square Register might not have an ID.
 * @member {String} discount_id
 */
exports.prototype['discount_id'] = undefined;



module.exports = exports;



