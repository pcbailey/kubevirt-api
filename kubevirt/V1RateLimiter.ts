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

import { V1TokenBucketRateLimiter } from './V1TokenBucketRateLimiter';
import { HttpFile } from '../http/http';

export class V1RateLimiter {
    'tokenBucketRateLimiter'?: V1TokenBucketRateLimiter;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tokenBucketRateLimiter",
            "baseName": "tokenBucketRateLimiter",
            "type": "V1TokenBucketRateLimiter",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1RateLimiter.attributeTypeMap;
    }

    public constructor() {
    }
}

