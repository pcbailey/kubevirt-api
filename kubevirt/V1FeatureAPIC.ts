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

export class V1FeatureAPIC {
    /**
    * Enabled determines if the feature should be enabled or disabled on the guest. Defaults to true.
    */
    'enabled'?: boolean;
    /**
    * EndOfInterrupt enables the end of interrupt notification in the guest. Defaults to false.
    */
    'endOfInterrupt'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "endOfInterrupt",
            "baseName": "endOfInterrupt",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1FeatureAPIC.attributeTypeMap;
    }

    public constructor() {
    }
}

