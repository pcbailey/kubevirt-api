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

import { HttpFile } from '../http/http';

/**
* APIResource specifies the name of a resource and whether it is namespaced.
*/
export class V1APIResource {
    /**
    * categories is a list of the grouped resources this resource belongs to (e.g. 'all')
    */
    'categories'?: Array<string>;
    /**
    * group is the preferred group of the resource.  Empty implies the group of the containing resource list. For subresources, this may have a different value, for example: Scale\".
    */
    'group'?: string;
    /**
    * kind is the kind for the resource (e.g. 'Foo' is the kind for a resource 'foo')
    */
    'kind': string;
    /**
    * name is the plural name of the resource.
    */
    'name': string;
    /**
    * namespaced indicates if a resource is namespaced or not.
    */
    'namespaced': boolean;
    /**
    * shortNames is a list of suggested short names of the resource.
    */
    'shortNames'?: Array<string>;
    /**
    * singularName is the singular name of the resource.  This allows clients to handle plural and singular opaquely. The singularName is more correct for reporting status on a single item and both singular and plural are allowed from the kubectl CLI interface.
    */
    'singularName': string;
    /**
    * The hash value of the storage version, the version this resource is converted to when written to the data store. Value must be treated as opaque by clients. Only equality comparison on the value is valid. This is an alpha feature and may change or be removed in the future. The field is populated by the apiserver only if the StorageVersionHash feature gate is enabled. This field will remain optional even if it graduates.
    */
    'storageVersionHash'?: string;
    /**
    * verbs is a list of supported kube verbs (this includes get, list, watch, create, update, patch, delete, deletecollection, and proxy)
    */
    'verbs': Array<string>;
    /**
    * version is the preferred version of the resource.  Empty implies the version of the containing resource list For subresources, this may have a different value, for example: v1 (while inside a v1beta1 version of the core resource's group)\".
    */
    'version'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "namespaced",
            "baseName": "namespaced",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "shortNames",
            "baseName": "shortNames",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "singularName",
            "baseName": "singularName",
            "type": "string",
            "format": ""
        },
        {
            "name": "storageVersionHash",
            "baseName": "storageVersionHash",
            "type": "string",
            "format": ""
        },
        {
            "name": "verbs",
            "baseName": "verbs",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1APIResource.attributeTypeMap;
    }

    public constructor() {
    }
}

