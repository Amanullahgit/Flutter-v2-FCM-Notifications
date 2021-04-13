/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { google } from '../protos/http';
import { RequestType } from './apitypes';
export interface TranscodedRequest {
    httpMethod: string;
    url: string;
    queryString: string;
    data: string | {};
}
declare const httpOptionName = "(google.api.http)";
declare type allowedOptions = '(google.api.method_signature)';
export declare type ParsedOptionsType = Array<{
    [httpOptionName]?: google.api.IHttpRule;
} & {
    [option in allowedOptions]?: {} | string | number;
}>;
export declare function getField(request: RequestType, field: string): string | number | Array<string | number> | undefined;
export declare function deepCopy(request: RequestType): RequestType;
export declare function deleteField(request: RequestType, field: string): void;
export declare function buildQueryStringComponents(request: RequestType, prefix?: string): string[];
export declare function encodeWithSlashes(str: string): string;
export declare function encodeWithoutSlashes(str: string): string;
export declare function applyPattern(pattern: string, fieldValue: string): string | undefined;
interface MatchResult {
    matchedFields: string[];
    url: string;
}
export declare function match(request: RequestType, pattern: string): MatchResult | undefined;
export declare function flattenObject(request: RequestType): RequestType;
export declare function requestChangeCase(request: RequestType, caseChangeFunc: (key: string) => string): RequestType;
export declare function transcode(request: RequestType, parsedOptions: ParsedOptionsType): TranscodedRequest | undefined;
export {};
