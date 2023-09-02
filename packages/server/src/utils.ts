export enum Status {
    ERROR = "error",
    SUCCESS = "success",
}

export enum ErrorCode {
  BAD_INPUT = "BAD_INPUT",
  AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR",
}

export interface SuccessResponse<T> {
  status: Status.SUCCESS;
  data: T;
  metadata?: any;
}

export interface ErrorResponse {
  status: Status.ERROR;
  error: {
    code: ErrorCode;
    message: string;
    details: any;
  };
  data: any;
}

export function createErrorResponse(code: ErrorCode, message: string, details: any, data: any): ErrorResponse {
  return {
    status: Status.ERROR,
    error: {
      code,
      message,
      details
    },
    data,
  };
}

export function createSuccessResponse<T>(data: T, metadata?: any): SuccessResponse<T> {
  const response: SuccessResponse<T> = {
    status: Status.SUCCESS,
    data,
  };
  if (metadata) {
    response.metadata = metadata;
  }
  return response;
}
