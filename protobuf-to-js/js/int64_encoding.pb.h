// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: int64_encoding.proto

#ifndef PROTOBUF_int64_5fencoding_2eproto__INCLUDED
#define PROTOBUF_int64_5fencoding_2eproto__INCLUDED

#include <string>

#include <google/protobuf/stubs/common.h>

#if GOOGLE_PROTOBUF_VERSION < 2006000
#error This file was generated by a newer version of protoc which is
#error incompatible with your Protocol Buffer headers.  Please update
#error your headers.
#endif
#if 2006000 < GOOGLE_PROTOBUF_MIN_PROTOC_VERSION
#error This file was generated by an older version of protoc which is
#error incompatible with your Protocol Buffer headers.  Please
#error regenerate this file with a newer version of protoc.
#endif

#include <google/protobuf/generated_message_util.h>
#include <google/protobuf/repeated_field.h>
#include <google/protobuf/extension_set.h>
#include <google/protobuf/generated_enum_reflection.h>
#include "google/protobuf/descriptor.pb.h"
// @@protoc_insertion_point(includes)

// Internal implementation detail -- do not call these.
void  protobuf_AddDesc_int64_5fencoding_2eproto();
void protobuf_AssignDesc_int64_5fencoding_2eproto();
void protobuf_ShutdownFile_int64_5fencoding_2eproto();


enum Int64Encoding {
  JS_DEFAULT = 0,
  JS_NUMBER = 1
};
bool Int64Encoding_IsValid(int value);
const Int64Encoding Int64Encoding_MIN = JS_DEFAULT;
const Int64Encoding Int64Encoding_MAX = JS_NUMBER;
const int Int64Encoding_ARRAYSIZE = Int64Encoding_MAX + 1;

const ::google::protobuf::EnumDescriptor* Int64Encoding_descriptor();
inline const ::std::string& Int64Encoding_Name(Int64Encoding value) {
  return ::google::protobuf::internal::NameOfEnum(
    Int64Encoding_descriptor(), value);
}
inline bool Int64Encoding_Parse(
    const ::std::string& name, Int64Encoding* value) {
  return ::google::protobuf::internal::ParseNamedEnum<Int64Encoding>(
    Int64Encoding_descriptor(), name, value);
}
// ===================================================================


// ===================================================================

static const int kJstypeFieldNumber = 50001;
extern ::google::protobuf::internal::ExtensionIdentifier< ::google::protobuf::FieldOptions,
    ::google::protobuf::internal::EnumTypeTraits< ::Int64Encoding, ::Int64Encoding_IsValid>, 14, false >
  jstype;

// ===================================================================


// @@protoc_insertion_point(namespace_scope)

#ifndef SWIG
namespace google {
namespace protobuf {

template <> struct is_proto_enum< ::Int64Encoding> : ::google::protobuf::internal::true_type {};
template <>
inline const EnumDescriptor* GetEnumDescriptor< ::Int64Encoding>() {
  return ::Int64Encoding_descriptor();
}

}  // namespace google
}  // namespace protobuf
#endif  // SWIG

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_int64_5fencoding_2eproto__INCLUDED
