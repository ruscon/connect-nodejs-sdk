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




/**
 * The Device model module.
 * @module model/Device
 */

/**
 * Constructs a new <code>Device</code>.
 * 
 * @alias module:model/Device
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>Device</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Device} obj Optional instance to populate.
 * @return {module:model/Device} The populated <code>Device</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
    }
  return obj;
}

/**
 * The device's Square-issued ID.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The device's merchant-specified name.
 * @member {String} name
 */
exports.prototype['name'] = undefined;



module.exports = exports;



