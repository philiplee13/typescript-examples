interface ResponseInterface {
    message: string;
    responseCode: number;
    data?: any[];
};

export class CustomResponse implements ResponseInterface {
    public message: string;
    public responseCode: number;
    public data?: any[];

    constructor(options: ResponseInterface) {
        if (typeof options.data !== "undefined" && options.data.length !== 0) {
            this.data = options.data;
        }
        this.message = options.message;
        this.responseCode = options.responseCode;
    };
};