#include <node.h>
#include <v8.h>
#include <sys/ioctl.h>

using namespace std;
using namespace v8;

Handle<Value> ThrowTypeError(const char * msg) {
    return ThrowException(Exception::TypeError(String::New(msg)));
}

Handle<Value> ioctlSync(const Arguments& args) {
    HandleScope scope;
    if(!args[0]->IsInt32()) {
	return scope.Close(ThrowTypeError("First argument must be a integer"));
    }
    int fd = args[0]->ToInt32()->Int32Value();
    if(!args[1]->IsInt32()) {
	return scope.Close(ThrowTypeError("Second argument must be a integer"));
    }
    int cmd = args[1]->ToInt32()->Int32Value();
    if(!args[2]->IsInt32()) {
	return scope.Close(ThrowTypeError("Third argument must be a integer"));
    }
    int arg = args[2]->ToInt32()->Int32Value();
    int result = ioctl(fd, cmd, arg);
    return scope.Close(Integer::New(result));
}

void init(Handle<Object> exports) {
    NODE_SET_METHOD(exports, "ioctlSync", ioctlSync);
}

NODE_MODULE(ioctl, init)
