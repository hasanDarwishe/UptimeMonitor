// ----- API types: -----

// The error object that the ApiResponse will send if the error is true:
export type ErrorObject = {
  status: number;
  code:   string; // This will be just normal codes, like UNAUTHORIZED, or ACCESS_DENIED,in order to fit well with the i18n
}

// The Response that the client will get from the server via the API:
export type ApiResponse<T> = ({
  error: false;
  data?: T;
} | {
  error: true;
  info: ErrorObject
}) & {
  timestamp: string;
}