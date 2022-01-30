/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * ObjectFieldSelector selects an APIVersioned field of an object.
 * @export
 * @interface K8sIoApiCoreV1ObjectFieldSelector
 */
export interface K8sIoApiCoreV1ObjectFieldSelector {
    /**
     * Version of the schema the FieldPath is written in terms of, defaults to "v1".
     * @type {string}
     * @memberof K8sIoApiCoreV1ObjectFieldSelector
     */
    apiVersion?: string;
    /**
     * Path of the field to select in the specified API version.
     * @type {string}
     * @memberof K8sIoApiCoreV1ObjectFieldSelector
     */
    fieldPath: string;
}

export function K8sIoApiCoreV1ObjectFieldSelectorFromJSON(json: any): K8sIoApiCoreV1ObjectFieldSelector {
    return K8sIoApiCoreV1ObjectFieldSelectorFromJSONTyped(json, false);
}

export function K8sIoApiCoreV1ObjectFieldSelectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sIoApiCoreV1ObjectFieldSelector {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'fieldPath': json['fieldPath'],
    };
}

export function K8sIoApiCoreV1ObjectFieldSelectorToJSON(value?: K8sIoApiCoreV1ObjectFieldSelector | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'fieldPath': value.fieldPath,
    };
}

