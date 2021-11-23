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

import { V1DeveloperConfiguration } from './V1DeveloperConfiguration';
import { V1MediatedDevicesConfiguration } from './V1MediatedDevicesConfiguration';
import { V1MigrationConfiguration } from './V1MigrationConfiguration';
import { V1NetworkConfiguration } from './V1NetworkConfiguration';
import { V1PermittedHostDevices } from './V1PermittedHostDevices';
import { V1ReloadableComponentConfiguration } from './V1ReloadableComponentConfiguration';
import { V1SMBiosConfiguration } from './V1SMBiosConfiguration';
import { HttpFile } from '../http/http';

/**
* KubeVirtConfiguration holds all kubevirt configurations
*/
export class V1KubeVirtConfiguration {
    'apiConfiguration'?: V1ReloadableComponentConfiguration;
    'controllerConfiguration'?: V1ReloadableComponentConfiguration;
    'cpuModel'?: string;
    /**
    * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.  The serialization format is:  <quantity>        ::= <signedNumber><suffix>   (Note that <suffix> may be empty, from the \"\" case in <decimalSI>.) <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= \"+\" | \"-\" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI>       ::= m | \"\" | k | M | G | T | P | E   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= \"e\" <signedNumber> | \"E\" <signedNumber>  No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.  When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.  Before serializing, Quantity will be put in \"canonical form\". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:   a. No precision is lost   b. No fractional digits will be emitted   c. The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative.  Examples:   1.5 will be serialized as \"1500m\"   1.5Gi will be serialized as \"1536Mi\"  Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.  Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)  This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
    */
    'cpuRequest'?: string;
    'defaultRuntimeClass'?: string;
    'developerConfiguration'?: V1DeveloperConfiguration;
    'emulatedMachines'?: Array<string>;
    'handlerConfiguration'?: V1ReloadableComponentConfiguration;
    'imagePullPolicy'?: string;
    'machineType'?: string;
    'mediatedDevicesConfiguration'?: V1MediatedDevicesConfiguration;
    'memBalloonStatsPeriod'?: number;
    'migrations'?: V1MigrationConfiguration;
    'minCPUModel'?: string;
    'network'?: V1NetworkConfiguration;
    'obsoleteCPUModels'?: { [key: string]: boolean; };
    'ovmfPath'?: string;
    'permittedHostDevices'?: V1PermittedHostDevices;
    'selinuxLauncherType'?: string;
    'smbios'?: V1SMBiosConfiguration;
    /**
    * deprecated
    */
    'supportedGuestAgentVersions'?: Array<string>;
    'virtualMachineInstancesPerNode'?: number;
    'webhookConfiguration'?: V1ReloadableComponentConfiguration;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiConfiguration",
            "baseName": "apiConfiguration",
            "type": "V1ReloadableComponentConfiguration",
            "format": ""
        },
        {
            "name": "controllerConfiguration",
            "baseName": "controllerConfiguration",
            "type": "V1ReloadableComponentConfiguration",
            "format": ""
        },
        {
            "name": "cpuModel",
            "baseName": "cpuModel",
            "type": "string",
            "format": ""
        },
        {
            "name": "cpuRequest",
            "baseName": "cpuRequest",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultRuntimeClass",
            "baseName": "defaultRuntimeClass",
            "type": "string",
            "format": ""
        },
        {
            "name": "developerConfiguration",
            "baseName": "developerConfiguration",
            "type": "V1DeveloperConfiguration",
            "format": ""
        },
        {
            "name": "emulatedMachines",
            "baseName": "emulatedMachines",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "handlerConfiguration",
            "baseName": "handlerConfiguration",
            "type": "V1ReloadableComponentConfiguration",
            "format": ""
        },
        {
            "name": "imagePullPolicy",
            "baseName": "imagePullPolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "machineType",
            "baseName": "machineType",
            "type": "string",
            "format": ""
        },
        {
            "name": "mediatedDevicesConfiguration",
            "baseName": "mediatedDevicesConfiguration",
            "type": "V1MediatedDevicesConfiguration",
            "format": ""
        },
        {
            "name": "memBalloonStatsPeriod",
            "baseName": "memBalloonStatsPeriod",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "migrations",
            "baseName": "migrations",
            "type": "V1MigrationConfiguration",
            "format": ""
        },
        {
            "name": "minCPUModel",
            "baseName": "minCPUModel",
            "type": "string",
            "format": ""
        },
        {
            "name": "network",
            "baseName": "network",
            "type": "V1NetworkConfiguration",
            "format": ""
        },
        {
            "name": "obsoleteCPUModels",
            "baseName": "obsoleteCPUModels",
            "type": "{ [key: string]: boolean; }",
            "format": ""
        },
        {
            "name": "ovmfPath",
            "baseName": "ovmfPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "permittedHostDevices",
            "baseName": "permittedHostDevices",
            "type": "V1PermittedHostDevices",
            "format": ""
        },
        {
            "name": "selinuxLauncherType",
            "baseName": "selinuxLauncherType",
            "type": "string",
            "format": ""
        },
        {
            "name": "smbios",
            "baseName": "smbios",
            "type": "V1SMBiosConfiguration",
            "format": ""
        },
        {
            "name": "supportedGuestAgentVersions",
            "baseName": "supportedGuestAgentVersions",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "virtualMachineInstancesPerNode",
            "baseName": "virtualMachineInstancesPerNode",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "webhookConfiguration",
            "baseName": "webhookConfiguration",
            "type": "V1ReloadableComponentConfiguration",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1KubeVirtConfiguration.attributeTypeMap;
    }

    public constructor() {
    }
}

