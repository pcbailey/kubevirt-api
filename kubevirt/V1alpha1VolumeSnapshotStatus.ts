/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1alpha1Error } from './V1alpha1Error';
import { HttpFile } from '../http/http';

/**
* VolumeSnapshotStatus is the status of a VolumeSnapshot
*/
export class V1alpha1VolumeSnapshotStatus {
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'creationTime'?: Date;
    'error'?: V1alpha1Error;
    'readyToUse'?: boolean;
    'volumeSnapshotName': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "creationTime",
            "baseName": "creationTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "V1alpha1Error",
            "format": ""
        },
        {
            "name": "readyToUse",
            "baseName": "readyToUse",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "volumeSnapshotName",
            "baseName": "volumeSnapshotName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1VolumeSnapshotStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

