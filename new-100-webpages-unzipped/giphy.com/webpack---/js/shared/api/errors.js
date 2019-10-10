export class ResponseError extends Error {
    constructor(response, details) {
        super(response.statusText)
        this.name = 'ResponseError'
        this.response = response
        this.details = details
    }
}