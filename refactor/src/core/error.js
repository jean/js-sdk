// Error-handling.
// ---------------

// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Error

/**
 * The Kinvey Error class. Thrown whenever the library encounters an error.
 *
 * @memberof! <global>
 * @class Kinvey.Error
 * @extends {Error}
 * @param {string} msg Error message.
 */
Kinvey.Error = function(msg) {
  // Add stack for debugging purposes.
  this.name    = 'Kinvey.Error';
  this.message = msg;
  this.stack   = (new Error()).stack;

  // Debug.
  if(KINVEY_DEBUG) {
    log('A Kinvey.Error was thrown.', this.message, this.stack);
  }
};
Kinvey.Error.prototype = new Error();
Kinvey.Error.prototype.constructor = Kinvey.Error;

// ### Error definitions.

// #### Server.
/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.ENTITY_NOT_FOUND = 'EntityNotFound';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.COLLECTION_NOT_FOUND = 'CollectionNotFound';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.APP_NOT_FOUND = 'AppNotFound';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.USER_NOT_FOUND = 'UserNotFound';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.BLOB_NOT_FOUND = 'BlobNotFound';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.INVALID_CREDENTIALS = 'InvalidCredentials';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.KINVEY_INTERNAL_ERROR_RETRY = 'KinveyInternalErrorRetry';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.KINVEY_INTERNAL_ERROR_STOP = 'KinveyInternalErrorStop';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.USER_ALREADY_EXISTS = 'UserAlreadyExists';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.USER_UNAVAILABLE = 'UserUnavailable';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.DUPLICATE_END_USERS = 'DuplicateEndUsers';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.INSUFFICIENT_CREDENTIALS = 'InsufficientCredentials';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.WRITES_TO_COLLECTION_DISALLOWED = 'WritesToCollectionDisallowed';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.INDIRECT_COLLECTION_ACCESS_DISALLOWED = 'IndirectCollectionAccessDisallowed';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.APP_PROBLEM = 'AppProblem';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.PARAMETER_VALUE_OUT_OF_RANGE = 'ParameterValueOutOfRange';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.CORS_DISABLED = 'CORSDisabled';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.INVALID_QUERY_SYNTAX = 'InvalidQuerySyntax';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.MISSING_QUERY = 'MissingQuery';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.JSON_PARSE_ERROR = 'JSONParseError';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.MISSING_REQUEST_HEADER = 'MissingRequestHeader';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.INCOMPLETE_REQUEST_BODY = 'IncompleteRequestBody';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.MISSING_REQUEST_PARAMETER = 'MissingRequestParameter';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.INVALID_IDENTIFIER = 'InvalidIdentifier';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.BAD_REQUEST = 'BadRequest';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.FEATURE_UNAVAILABLE = 'FeatureUnavailable';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.API_VERSION_NOT_IMPLEMENTED = 'APIVersionNotImplemented';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.API_VERSION_NOT_AVAILABLE = 'APIVersionNotAvailable';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.INPUT_VALIDATION_FAILED = 'InputValidationFailed';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.BL_RUNTIME_ERROR = 'BLRuntimeError';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.BL_SYNTAX_ERROR = 'BLSyntaxError';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.BL_TIMEOUT_ERROR = 'BLTimeoutError';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.OAUTH_TOKEN_REFRESH_ERROR = 'OAuthTokenRefreshError';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.BL_VIOLATION_ERROR = 'BLViolationError';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.BL_INTERNAL_ERROR = 'BLInternalError';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.THIRD_PARTY_TOS_UNACKED = 'ThirdPartyTOSUnacked';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.STALE_REQUEST = 'StaleRequest';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.DATA_LINK_PARSE_ERROR = 'DataLinkParseError';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.NOT_IMPLEMENTED_ERROR = 'NotImplementedError';

// #### Client.
/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.DATABASE_ERROR = 'DatabaseError';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.MISSING_APP_CREDENTIALS = 'MissingAppCredentials';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.MISSING_MASTER_CREDENTIALS = 'MissingMasterCredentials';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.NO_ACTIVE_USER = 'NoActiveUser';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.REQUEST_ABORT_ERROR = 'RequestAbortError';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.REQUEST_ERROR = 'RequestError';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.REQUEST_TIMEOUT_ERROR = 'RequestTimeoutError';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.SOCIAL_ERROR = 'SocialError';

/**
 * @memberof Kinvey.Error
 * @constant
 * @default
 */
Kinvey.Error.SYNC_ERROR = 'SyncError';

// All client-side errors are fully declared below.
var ClientError = {};

/**
 * Database error.
 *
 * @constant
 * @type {Object}
 * @default
 */
ClientError[Kinvey.Error.DATABASE_ERROR] = {
  name        : Kinvey.Error.DATABASE_ERROR,
  description : 'The database used for local persistence encountered an error.',
  debug       : ''
};

/**
 * Missing app credentials.
 *
 * @constant
 * @type {Object}
 * @default
 */
ClientError[Kinvey.Error.MISSING_APP_CREDENTIALS] = {
  name        : Kinvey.Error.MISSING_APP_CREDENTIALS,
  description : 'Missing credentials: `Kinvey.appKey` and/or `Kinvey.appSecret`.',
  debug       : 'Did you forget to call `Kinvey.init`?'
};

/**
 * Missing master credentials.
 *
 * @constant
 * @type {Object}
 * @default
 */
ClientError[Kinvey.Error.MISSING_MASTER_CREDENTIALS] = {
  name        : Kinvey.Error.MISSING_MASTER_CREDENTIALS,
  description : 'Missing credentials: `Kinvey.appKey` and/or `Kinvey.masterSecret`.',
  debug       : 'Did you forget to call `Kinvey.init` with your Master Secret?'
};

/**
 * No active user.
 *
 * @constant
 * @type {Object}
 * @default
 */
ClientError[Kinvey.Error.NO_ACTIVE_USER] = {
  name        : Kinvey.Error.NO_ACTIVE_USER,
  description : 'No active user.',
  debug       : 'Try creating a user or logging in first.'
};

/**
 * Request abort error.
 *
 * @constant
 * @type {Object}
 * @default
 */
ClientError[Kinvey.Error.REQUEST_ABORT_ERROR] = {
  name        : Kinvey.Error.REQUEST_TIMEOUT_ERROR,
  description : 'The request was aborted.',
  debug       : ''
};

/**
 * Request error.
 *
 * @constant
 * @type {Object}
 * @default
 */
ClientError[Kinvey.Error.REQUEST_ERROR] = {
  name        : Kinvey.Error.REQUEST_ERROR,
  description : 'The request failed.',
  debug       : ''
};

/**
 * Request timeout error.
 *
 * @constant
 * @type {Object}
 * @default
 */
ClientError[Kinvey.Error.REQUEST_TIMEOUT_ERROR] = {
  name        : Kinvey.Error.REQUEST_TIMEOUT_ERROR,
  description : 'The request timed out.',
  debug       : ''
};

/**
 * Social error.
 *
 * @constant
 * @type {Object}
 * @default
 */
ClientError[Kinvey.Error.SOCIAL_ERROR] = {
  name        : Kinvey.Error.SOCIAL_ERROR,
  description : 'The social identity cannot be obtained.',
  debug       : ''
};

/**
 * Sync error.
 *
 * @constant
 * @type {Object}
 * @default
 */
ClientError[Kinvey.Error.SYNC_ERROR] = {
  name        : Kinvey.Error.SYNC_ERROR,
  description : 'The synchronization operation cannot be completed.',
  debug       : ''
};

// The `description` and `debug` properties can be overridden if desired. The
// function below makes it easy to customize client errors.

/**
 * Creates a new client-side error object.
 *
 * @param {string} name Error name (one of `Kinvey.Error.*` constants).
 * @param {Object} [dict] Dictionary.
 * @param {string} [dict.description] Error description.
 * @param {*} [dict.debug] Error debugging information.
 * @returns {Object} Client-side error object.
 */
var clientError = function(name, dict) {
  // Cast arguments.
  var error = ClientError[name] || { name: name };

  // Return the error structure.
  dict = dict || {};
  return {
    name        : error.name,
    description : dict.description || error.description || '',
    debug       : dict.debug       || error.debug       || ''
  };
};