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
import {
    K8sIoApimachineryPkgApisMetaV1ObjectMeta,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON,
    V1alpha1VirtualMachineFlavorProfile,
    V1alpha1VirtualMachineFlavorProfileFromJSON,
    V1alpha1VirtualMachineFlavorProfileFromJSONTyped,
    V1alpha1VirtualMachineFlavorProfileToJSON,
} from './';

/**
 * VirtualMachineClusterFlavor is a cluster scoped version of VirtualMachineFlavor resource.
 * @export
 * @interface V1alpha1VirtualMachineClusterFlavor
 */
export interface V1alpha1VirtualMachineClusterFlavor {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1VirtualMachineClusterFlavor
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1VirtualMachineClusterFlavor
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof V1alpha1VirtualMachineClusterFlavor
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {Array<V1alpha1VirtualMachineFlavorProfile>}
     * @memberof V1alpha1VirtualMachineClusterFlavor
     */
    profiles: Array<V1alpha1VirtualMachineFlavorProfile>;
}

export function V1alpha1VirtualMachineClusterFlavorFromJSON(json: any): V1alpha1VirtualMachineClusterFlavor {
    return V1alpha1VirtualMachineClusterFlavorFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachineClusterFlavorFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1VirtualMachineClusterFlavor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'profiles': ((json['profiles'] as Array<any>).map(V1alpha1VirtualMachineFlavorProfileFromJSON)),
    };
}

export function V1alpha1VirtualMachineClusterFlavorToJSON(value?: V1alpha1VirtualMachineClusterFlavor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'profiles': ((value.profiles as Array<any>).map(V1alpha1VirtualMachineFlavorProfileToJSON)),
    };
}

