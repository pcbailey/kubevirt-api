/**
 * KubeVirt Containerized Data Importer API
 * Containerized Data Importer for KubeVirt.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1NodeSelectorRequirement } from './V1NodeSelectorRequirement';
import { HttpFile } from '../http/http';

/**
* A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
*/
export class V1NodeSelectorTerm {
    /**
    * A list of node selector requirements by node's labels.
    */
    'matchExpressions'?: Array<V1NodeSelectorRequirement>;
    /**
    * A list of node selector requirements by node's fields.
    */
    'matchFields'?: Array<V1NodeSelectorRequirement>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "matchExpressions",
            "baseName": "matchExpressions",
            "type": "Array<V1NodeSelectorRequirement>",
            "format": ""
        },
        {
            "name": "matchFields",
            "baseName": "matchFields",
            "type": "Array<V1NodeSelectorRequirement>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1NodeSelectorTerm.attributeTypeMap;
    }

    public constructor() {
    }
}

