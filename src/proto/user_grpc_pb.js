// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');

function serialize_com_sungan_userGrpc_UserInfoRequest(arg) {
  if (!(arg instanceof user_pb.UserInfoRequest)) {
    throw new Error('Expected argument of type com.sungan.userGrpc.UserInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_sungan_userGrpc_UserInfoRequest(buffer_arg) {
  return user_pb.UserInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_sungan_userGrpc_UserInfoResponse(arg) {
  if (!(arg instanceof user_pb.UserInfoResponse)) {
    throw new Error('Expected argument of type com.sungan.userGrpc.UserInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_sungan_userGrpc_UserInfoResponse(buffer_arg) {
  return user_pb.UserInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserService = exports.UserService = {
  getUserInfo: {
    path: '/com.sungan.userGrpc.User/GetUserInfo',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserInfoRequest,
    responseType: user_pb.UserInfoResponse,
    requestSerialize: serialize_com_sungan_userGrpc_UserInfoRequest,
    requestDeserialize: deserialize_com_sungan_userGrpc_UserInfoRequest,
    responseSerialize: serialize_com_sungan_userGrpc_UserInfoResponse,
    responseDeserialize: deserialize_com_sungan_userGrpc_UserInfoResponse,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
