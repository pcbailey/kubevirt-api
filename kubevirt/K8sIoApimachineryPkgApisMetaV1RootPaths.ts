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
* RootPaths lists the paths available at root. For example: \"/healthz\", \"/apis\".
*/
export class K8sIoApimachineryPkgApisMetaV1RootPaths {
    /**
    * paths are the paths available at root.
    */
    'paths': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "paths",
            "baseName": "paths",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return K8sIoApimachineryPkgApisMetaV1RootPaths.attributeTypeMap;
    }

    public constructor() {
    }
}

