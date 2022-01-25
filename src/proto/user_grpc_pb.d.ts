// package: com.sungan.userGrpc
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_pb from "./user_pb";

interface IUserService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUserInfo: IUserService_IGetUserInfo;
}

interface IUserService_IGetUserInfo extends grpc.MethodDefinition<user_pb.UserInfoRequest, user_pb.UserInfoResponse> {
    path: "/com.sungan.userGrpc.User/GetUserInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UserInfoRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UserInfoRequest>;
    responseSerialize: grpc.serialize<user_pb.UserInfoResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UserInfoResponse>;
}

export const UserService: IUserService;

export interface IUserServer {
    getUserInfo: grpc.handleUnaryCall<user_pb.UserInfoRequest, user_pb.UserInfoResponse>;
}

export interface IUserClient {
    getUserInfo(request: user_pb.UserInfoRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserInfoResponse) => void): grpc.ClientUnaryCall;
    getUserInfo(request: user_pb.UserInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserInfoResponse) => void): grpc.ClientUnaryCall;
    getUserInfo(request: user_pb.UserInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserInfoResponse) => void): grpc.ClientUnaryCall;
}

export class UserClient extends grpc.Client implements IUserClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUserInfo(request: user_pb.UserInfoRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserInfoResponse) => void): grpc.ClientUnaryCall;
    public getUserInfo(request: user_pb.UserInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserInfoResponse) => void): grpc.ClientUnaryCall;
    public getUserInfo(request: user_pb.UserInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserInfoResponse) => void): grpc.ClientUnaryCall;
}
