import { HttpRequestError as HttpRequestErrorType } from "../types";
export class HttpRequestError implements HttpRequestErrorType {
  code: number;
  message: string;

  constructor(code: number, message: string) {
    this.code = code;
    this.message = message;
  }
}
