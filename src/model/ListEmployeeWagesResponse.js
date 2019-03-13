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
var EmployeeWage = require('./EmployeeWage');
var Error = require('./Error');




/**
 * The ListEmployeeWagesResponse model module.
 * @module model/ListEmployeeWagesResponse
 */

/**
 * Constructs a new <code>ListEmployeeWagesResponse</code>.
 * The response to a request for a set of &#x60;EmployeeWage&#x60; objects. Contains  a set of &#x60;EmployeeWage&#x60;.
 * @alias module:model/ListEmployeeWagesResponse
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>ListEmployeeWagesResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ListEmployeeWagesResponse} obj Optional instance to populate.
 * @return {module:model/ListEmployeeWagesResponse} The populated <code>ListEmployeeWagesResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('employee_wages')) {
      obj['employee_wages'] = ApiClient.convertToType(data['employee_wages'], [EmployeeWage]);
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
    }
  return obj;
}

/**
 * A page of Employee Wage results.
 * @member {Array.<module:model/EmployeeWage>} employee_wages
 */
exports.prototype['employee_wages'] = undefined;
/**
 * Value supplied in the subsequent request to fetch the next next page of Employee Wage results.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;
/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;



module.exports = exports;



