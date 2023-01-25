interface resp {
  data: any;
  message?: string;
  success?: boolean;
  statusCode?: number;
}

export class Resp<T> {
  private constructor(
    public readonly data: readonly T[],
    public readonly message: string = "",
    public readonly success: boolean = true,
    public readonly statusCode: number = 200
  ) {
    if (Array.isArray(data) && !data.length) {
      this.success = false;
    }
  }

  static create(resp: resp) {
    const { data, message, success, statusCode } = resp;
    return new Resp(data, message, success, statusCode);
  }
  static data(data: any) {
    return new Resp(data);
  }
  static message(message: string) {
    return new Resp([], message);
  }
  static success(success: boolean) {
    return new Resp([], "", success);
  }
}
