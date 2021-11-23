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
* DataVolumeSourceS3 provides the parameters to create a Data Volume from an S3 source
*/
export class V1beta1DataVolumeSourceS3 {
    /**
    * CertConfigMap is a configmap reference, containing a Certificate Authority(CA) public key, and a base64 encoded pem certificate
    */
    'certConfigMap'?: string;
    /**
    * SecretRef provides the secret reference needed to access the S3 source
    */
    'secretRef'?: string;
    /**
    * URL is the url of the S3 source
    */
    'url': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "certConfigMap",
            "baseName": "certConfigMap",
            "type": "string",
            "format": ""
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta1DataVolumeSourceS3.attributeTypeMap;
    }

    public constructor() {
    }
}

