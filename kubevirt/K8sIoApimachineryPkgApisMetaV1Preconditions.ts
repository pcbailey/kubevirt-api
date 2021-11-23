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

import { HttpFile } from '../http/http';

/**
* Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
*/
export class K8sIoApimachineryPkgApisMetaV1Preconditions {
    /**
    * Specifies the target ResourceVersion
    */
    'resourceVersion'?: string;
    /**
    * Specifies the target UID.
    */
    'uid'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "resourceVersion",
            "baseName": "resourceVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return K8sIoApimachineryPkgApisMetaV1Preconditions.attributeTypeMap;
    }

    public constructor() {
    }
}

