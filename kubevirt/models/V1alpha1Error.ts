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

import { exists } from '../runtime';
/**
 * Error is the last error encountered during the snapshot/restore
 * @export
 * @interface V1alpha1Error
 */
export interface V1alpha1Error {
  /**
   *
   * @type {string}
   * @memberof V1alpha1Error
   */
  message?: string;
  /**
   * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
   * @type {string}
   * @memberof V1alpha1Error
   */
  time?: string;
}

export function V1alpha1ErrorFromJSON(json: any): V1alpha1Error {
  return V1alpha1ErrorFromJSONTyped(json, false);
}

export function V1alpha1ErrorFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1alpha1Error {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    message: !exists(json, 'message') ? undefined : json['message'],
    time: !exists(json, 'time') ? undefined : time,
  };
}

export function V1alpha1ErrorToJSON(value?: V1alpha1Error | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    message: value.message,
    time: value.time === undefined ? undefined : value.time,
  };
}
