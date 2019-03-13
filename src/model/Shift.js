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
var ModelBreak = require('./ModelBreak');
var ShiftWage = require('./ShiftWage');




/**
 * The Shift model module.
 * @module model/Shift
 */

/**
 * Constructs a new <code>Shift</code>.
 * A record of the hourly rate, start, and end times for a single work shift  for an employee. May include a record of the start and end times for breaks  taken during the shift.
 * @alias module:model/Shift
 * @class
 * @param employeeId {String} The ID of the employee this shift belongs to.
 * @param startAt {String} RFC 3339; shifted to location timezone + offset. Precision up to the minute is respected; seconds are truncated.
 */
var exports = function(employeeId, startAt) {
  var _this = this;


  _this['employee_id'] = employeeId;


  _this['start_at'] = startAt;







};

/**
 * Constructs a <code>Shift</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Shift} obj Optional instance to populate.
 * @return {module:model/Shift} The populated <code>Shift</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('employee_id')) {
      obj['employee_id'] = ApiClient.convertToType(data['employee_id'], 'String');
    }
      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
      if (data.hasOwnProperty('timezone')) {
      obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
    }
      if (data.hasOwnProperty('start_at')) {
      obj['start_at'] = ApiClient.convertToType(data['start_at'], 'String');
    }
      if (data.hasOwnProperty('end_at')) {
      obj['end_at'] = ApiClient.convertToType(data['end_at'], 'String');
    }
      if (data.hasOwnProperty('wage')) {
      obj['wage'] = ShiftWage.constructFromObject(data['wage']);
    }
      if (data.hasOwnProperty('breaks')) {
      obj['breaks'] = ApiClient.convertToType(data['breaks'], [ModelBreak]);
    }
      if (data.hasOwnProperty('status')) {
      obj['status'] = ApiClient.convertToType(data['status'], 'String');
    }
      if (data.hasOwnProperty('version')) {
      obj['version'] = ApiClient.convertToType(data['version'], 'Number');
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('updated_at')) {
      obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
    }
    }
  return obj;
}

/**
 * UUID for this object
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The ID of the employee this shift belongs to.
 * @member {String} employee_id
 */
exports.prototype['employee_id'] = undefined;
/**
 * The ID of the location this shift occurred at. Should be based on where the employee clocked in.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;
/**
 * Read-only convenience value that is calculated from the location based on `location_id`. Format: the IANA Timezone Database identifier for the location timezone.
 * @member {String} timezone
 */
exports.prototype['timezone'] = undefined;
/**
 * RFC 3339; shifted to location timezone + offset. Precision up to the minute is respected; seconds are truncated.
 * @member {String} start_at
 */
exports.prototype['start_at'] = undefined;
/**
 * RFC 3339; shifted to timezone + offset. Precision up to the minute is respected; seconds are truncated. The `end_at` minute is not counted when the shift length is calculated. For example, a shift from `00:00` to `08:01` is considered an 8 hour shift (midnight to 8am).
 * @member {String} end_at
 */
exports.prototype['end_at'] = undefined;
/**
 * Job and pay related information.
 * @member {module:model/ShiftWage} wage
 */
exports.prototype['wage'] = undefined;
/**
 * A list of any paid or unpaid breaks that were taken during this shift.
 * @member {Array.<module:model/ModelBreak>} breaks
 */
exports.prototype['breaks'] = undefined;
/**
 * Describes working state of the current `Shift`.
 * @member {module:model/Shift.StatusEnum} status
 */
exports.prototype['status'] = undefined;
/**
 * Used for resolving concurrency issues; request will fail if version provided does not match server version at time of request. If not provided, Square executes a blind write; potentially overwriting data from another write.
 * @member {Number} version
 */
exports.prototype['version'] = undefined;
/**
 * A read-only timestamp in RFC 3339 format; presented in UTC.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * A read-only timestamp in RFC 3339 format; presented in UTC.
 * @member {String} updated_at
 */
exports.prototype['updated_at'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "OPEN"
     * @const
     */
    "OPEN": "OPEN",
    /**
     * value: "CLOSED"
     * @const
     */
    "CLOSED": "CLOSED"  };


module.exports = exports;



