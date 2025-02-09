export class Response {
    constructor() {
        this.data = {
            statusCode: 0,
            statusText: ''
        }
    }
}

export class Status {
    getStatusText(statusCode) {
        switch (statusCode) {
            // 1xx Informational
            case 100:
                return 'Continue';
            case 101:
                return 'Switching Protocols';
            case 102:
                return 'Processing';
            case 103:
                return 'Early Hints';

            // 2xx Success
            case 200:
                return 'OK';
            case 201:
                return 'Created';
            case 202:
                return 'Accepted';
            case 203:
                return 'Non-Authoritative Information';
            case 204:
                return 'No Content';
            case 205:
                return 'Reset Content';
            case 206:
                return 'Partial Content';
            case 207:
                return 'Multi-Status';
            case 208:
                return 'Already Reported';
            case 226:
                return 'IM Used';

            // 3xx Redirection
            case 300:
                return 'Multiple Choices';
            case 301:
                return 'Moved Permanently';
            case 302:
                return 'Found';
            case 303:
                return 'See Other';
            case 304:
                return 'Not Modified';
            case 305:
                return 'Use Proxy';
            case 306:
                return 'Switch Proxy';
            case 307:
                return 'Temporary Redirect';
            case 308:
                return 'Permanent Redirect';

            // 4xx Client Error
            case 400:
                return 'Bad Request';
            case 401:
                return 'Unauthorized';
            case 402:
                return 'Payment Required';
            case 403:
                return 'Forbidden';
            case 404:
                return 'Not Found';
            case 405:
                return 'Method Not Allowed';
            case 406:
                return 'Not Acceptable';
            case 407:
                return 'Proxy Authentication Required';
            case 408:
                return 'Request Timeout';
            case 409:
                return 'Conflict';
            case 410:
                return 'Gone';
            case 411:
                return 'Length Required';
            case 412:
                return 'Precondition Failed';
            case 413:
                return 'Payload Too Large';
            case 414:
                return 'URI Too Long';
            case 415:
                return 'Unsupported Media Type';
            case 416:
                return 'Range Not Satisfiable';
            case 417:
                return 'Expectation Failed';
            case 418:
                return 'I\'m a teapot'; // Joke status code from RFC 2324
            case 421:
                return 'Misdirected Request';
            case 422:
                return 'Unprocessable Entity';
            case 423:
                return 'Locked';
            case 424:
                return 'Failed Dependency';
            case 425:
                return 'Too Early';
            case 426:
                return 'Upgrade Required';
            case 427:
                return 'Precondition Required';
            case 428:
                return 'Too Many Requests';
            case 429:
                return 'Request Header Fields Too Large';
            case 431:
                return 'Unavailable For Legal Reasons';
            case 451:
                return 'Unavailable For Legal Reasons';

            // 5xx Server Error
            case 500:
                return 'Internal Server Error';
            case 501:
                return 'Not Implemented';
            case 502:
                return 'Bad Gateway';
            case 503:
                return 'Service Unavailable';
            case 504:
                return 'Gateway Timeout';
            case 505:
                return 'HTTP Version Not Supported';
            case 506:
                return 'Variant Also Negotiates';
            case 507:
                return 'Insufficient Storage';
            case 508:
                return 'Loop Detected';
            case 510:
                return 'Not Extended';
            case 511:
                return 'Network Authentication Required';

            default:
                return 'Unknown Status';
        }
    }
}

export class Requests {
    constructor() {
        this.options = {
            hostname: 'google.com',
            port: 443,
            path: '/',
            method: 'GET'
        };
    }

    // Properly defining the get method
    get(proto, url, path = "/", callback) {
        this.options.hostname = url;
        this.options.path = path;
        this.options.method = 'GET';
        
        let response = new Response();
        let statusText = new Status();
        // Use the appropriate protocol (https or http)
        const request = proto.request(this.options, (res) => {
            //console.log(`statusCode: ${res.statusCode}`);

            res.on('data', (d) => {
                // process.stdout.write(d);
                // response.data.body = d;
            });

            res.on('end', (e) => {

            });

            response.data.statusCode = res.statusCode;
            response.data.statusText = statusText.getStatusText(res.statusCode);
            callback = response;
        });

        request.on('error', (error) => {
            console.error(error);
        });

        request.end();
    }

    post(proto, url, path = "/", data, callback) {
        this.options.hostname = url;
        this.options.path = path;
        this.options.method = 'GET';

        let response = new Response();
        let statusText = new Status();
        
        data = JSON.stringify(data);

        this.options = {
            hostname: url,
            port: 443,
            path: path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        }
        const req = proto.request(this.options, (res) => {
            //console.log(`statusCode: ${res.statusCode}`);

            res.on('data', (d) => {
                // process.stdout.write(d)
            });

            res.on('end', () => {
                response.data.statusCode = res.statusCode;
                response.data.statusText = statusText.getStatusText(res.statusCode);
            });
        })

        req.on('error', (error) => {
            console.error(error)
        })

        req.write(data)
        req.end()

        callback = response;
    }
    
    delete(proto, url, path = "/", data, callback) {
        this.options.hostname = url;
        this.options.path = path;
        this.options.method = 'DELETE';

        let response = new Response();
        let statusText = new Status();
        
        data = JSON.stringify(data);

        this.options = {
            hostname: url,
            port: 443,
            path: path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        }
        const req = proto.request(this.options, (res) => {
            //console.log(`statusCode: ${res.statusCode}`);

            res.on('data', (d) => {
                // process.stdout.write(d)
            });

            res.on('end', () => {
                response.data.statusCode = res.statusCode;
                response.data.statusText = statusText.getStatusText(res.statusCode);
            });
        })

        req.on('error', (error) => {
            console.error(error)
        })

        req.write(data)
        req.end()

        callback = response;
    }

    put(proto, url, path = "/", data, callback) {
        this.options.hostname = url;
        this.options.path = path;
        this.options.method = 'PUT';

        let response = new Response();
        let statusText = new Status();
        
        data = JSON.stringify(data);

        this.options = {
            hostname: url,
            port: 443,
            path: path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        }
        const req = proto.request(this.options, (res) => {
            //console.log(`statusCode: ${res.statusCode}`);

            res.on('data', (d) => {
                // process.stdout.write(d)
            });

            res.on('end', () => {
                response.data.statusCode = res.statusCode;
                response.data.statusText = statusText.getStatusText(res.statusCode);
            });
        })

        req.on('error', (error) => {
            console.error(error)
        })

        req.write(data)
        req.end()

        callback = response;
    }

    patch(proto, url, path = "/", data, callback) {
        this.options.hostname = url;
        this.options.path = path;
        this.options.method = 'GET';

        let response = new Response();
        let statusText = new Status();
        
        data = JSON.stringify(data);

        this.options = {
            hostname: url,
            port: 443,
            path: path,
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        }
        const req = proto.request(this.options, (res) => {
            //console.log(`statusCode: ${res.statusCode}`);

            res.on('data', (d) => {
                // process.stdout.write(d)
            });

            res.on('end', () => {
                response.data.statusCode = res.statusCode;
                response.data.statusText = statusText.getStatusText(res.statusCode);
            });
        })

        req.on('error', (error) => {
            console.error(error)
        })

        req.write(data)
        req.end()

        callback = response;
    }
}