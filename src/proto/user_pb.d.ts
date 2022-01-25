// package: com.sungan.userGrpc
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class UserInfoRequest extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): UserInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UserInfoRequest): UserInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserInfoRequest;
    static deserializeBinaryFromReader(message: UserInfoRequest, reader: jspb.BinaryReader): UserInfoRequest;
}

export namespace UserInfoRequest {
    export type AsObject = {
        userid: number,
    }
}

export class UserInfoResponse extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): UserInfoResponse;
    getUsername(): string;
    setUsername(value: string): UserInfoResponse;
    getProfileimageurl(): string;
    setProfileimageurl(value: string): UserInfoResponse;
    getEmail(): string;
    setEmail(value: string): UserInfoResponse;
    getAvatar(): string;
    setAvatar(value: string): UserInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UserInfoResponse): UserInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserInfoResponse;
    static deserializeBinaryFromReader(message: UserInfoResponse, reader: jspb.BinaryReader): UserInfoResponse;
}

export namespace UserInfoResponse {
    export type AsObject = {
        userid: number,
        username: string,
        profileimageurl: string,
        email: string,
        avatar: string,
    }
}
