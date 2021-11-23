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

import { V1CPUFeature } from './V1CPUFeature';
import { V1NUMA } from './V1NUMA';
import { V1Realtime } from './V1Realtime';
import { HttpFile } from '../http/http';

/**
* CPU allows specifying the CPU topology.
*/
export class V1CPU {
    /**
    * Cores specifies the number of cores inside the vmi. Must be a value greater or equal 1.
    */
    'cores'?: number;
    /**
    * DedicatedCPUPlacement requests the scheduler to place the VirtualMachineInstance on a node with enough dedicated pCPUs and pin the vCPUs to it.
    */
    'dedicatedCpuPlacement'?: boolean;
    /**
    * Features specifies the CPU features list inside the VMI.
    */
    'features'?: Array<V1CPUFeature>;
    /**
    * IsolateEmulatorThread requests one more dedicated pCPU to be allocated for the VMI to place the emulator thread on it.
    */
    'isolateEmulatorThread'?: boolean;
    /**
    * Model specifies the CPU model inside the VMI. List of available models https://github.com/libvirt/libvirt/tree/master/src/cpu_map. It is possible to specify special cases like \"host-passthrough\" to get the same CPU as the node and \"host-model\" to get CPU closest to the node one. Defaults to host-model.
    */
    'model'?: string;
    'numa'?: V1NUMA;
    'realtime'?: V1Realtime;
    /**
    * Sockets specifies the number of sockets inside the vmi. Must be a value greater or equal 1.
    */
    'sockets'?: number;
    /**
    * Threads specifies the number of threads inside the vmi. Must be a value greater or equal 1.
    */
    'threads'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cores",
            "baseName": "cores",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "dedicatedCpuPlacement",
            "baseName": "dedicatedCpuPlacement",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "Array<V1CPUFeature>",
            "format": ""
        },
        {
            "name": "isolateEmulatorThread",
            "baseName": "isolateEmulatorThread",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "string",
            "format": ""
        },
        {
            "name": "numa",
            "baseName": "numa",
            "type": "V1NUMA",
            "format": ""
        },
        {
            "name": "realtime",
            "baseName": "realtime",
            "type": "V1Realtime",
            "format": ""
        },
        {
            "name": "sockets",
            "baseName": "sockets",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "threads",
            "baseName": "threads",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return V1CPU.attributeTypeMap;
    }

    public constructor() {
    }
}

