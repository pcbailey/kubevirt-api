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
 * VirtualMachineInstancePhaseTransitionTimestamp gives a timestamp in relation to when a phase is set on a vmi
 * @export
 * @interface V1VirtualMachineInstancePhaseTransitionTimestamp
 */
export interface V1VirtualMachineInstancePhaseTransitionTimestamp {
  /**
   * Phase is the status of the VirtualMachineInstance in kubernetes world. It is not the VirtualMachineInstance status, but partially correlates to it.
   * @type {string}
   * @memberof V1VirtualMachineInstancePhaseTransitionTimestamp
   */
  phase?: string;
  /**
   * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
   * @type {string}
   * @memberof V1VirtualMachineInstancePhaseTransitionTimestamp
   */
  phaseTransitionTimestamp?: string;
}

export function V1VirtualMachineInstancePhaseTransitionTimestampFromJSON(
  json: any,
): V1VirtualMachineInstancePhaseTransitionTimestamp {
  return V1VirtualMachineInstancePhaseTransitionTimestampFromJSONTyped(json, false);
}

export function V1VirtualMachineInstancePhaseTransitionTimestampFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1VirtualMachineInstancePhaseTransitionTimestamp {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    phase: !exists(json, 'phase') ? undefined : json['phase'],
    phaseTransitionTimestamp: !exists(json, 'phaseTransitionTimestamp')
      ? undefined
      : phaseTransitionTimestamp,
  };
}

export function V1VirtualMachineInstancePhaseTransitionTimestampToJSON(
  value?: V1VirtualMachineInstancePhaseTransitionTimestamp | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    phase: value.phase,
    phaseTransitionTimestamp:
      value.phaseTransitionTimestamp === undefined ? undefined : value.phaseTransitionTimestamp,
  };
}
