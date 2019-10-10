//@flow
import ServiceResult from '../../common/base-service-result';
import KalturaMetadata from './kaltura-metadata';

export default class KalturaMetadataListResponse extends ServiceResult {
    totalCount: number;
    metas: Array < KalturaMetadata > ;

    /**
     * @constructor
     * @param {Object} responseObj The response
     */
    constructor(responseObj: Object) {
        super(responseObj);
        if (!this.hasError) {
            this.totalCount = responseObj.totalCount;
            if (this.totalCount > 0) {
                this.metas = [];
                responseObj.objects.map(meta => this.metas.push(new KalturaMetadata(meta)));
            }
        }
    }
}



// WEBPACK FOOTER //
// ./k-provider/ovp/response-types/kaltura-metadata-list-response.js


// WEBPACK FOOTER //
// providers/k-provider/ovp/response-types/kaltura-metadata-list-response.js