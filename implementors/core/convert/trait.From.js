(function() {var implementors = {};
implementors["heapless"] = [{"text":"impl&lt;'a, const N:&nbsp;usize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a str&gt; for <a class=\"struct\" href=\"heapless/struct.String.html\" title=\"struct heapless::String\">String</a>&lt;N&gt;","synthetic":false,"types":["heapless::string::String"]},{"text":"impl&lt;const N:&nbsp;usize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;i8&gt; for <a class=\"struct\" href=\"heapless/struct.String.html\" title=\"struct heapless::String\">String</a>&lt;N&gt;","synthetic":false,"types":["heapless::string::String"]},{"text":"impl&lt;const N:&nbsp;usize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;i16&gt; for <a class=\"struct\" href=\"heapless/struct.String.html\" title=\"struct heapless::String\">String</a>&lt;N&gt;","synthetic":false,"types":["heapless::string::String"]},{"text":"impl&lt;const N:&nbsp;usize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;i32&gt; for <a class=\"struct\" href=\"heapless/struct.String.html\" title=\"struct heapless::String\">String</a>&lt;N&gt;","synthetic":false,"types":["heapless::string::String"]},{"text":"impl&lt;const N:&nbsp;usize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;i64&gt; for <a class=\"struct\" href=\"heapless/struct.String.html\" title=\"struct heapless::String\">String</a>&lt;N&gt;","synthetic":false,"types":["heapless::string::String"]},{"text":"impl&lt;const N:&nbsp;usize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;u8&gt; for <a class=\"struct\" href=\"heapless/struct.String.html\" title=\"struct heapless::String\">String</a>&lt;N&gt;","synthetic":false,"types":["heapless::string::String"]},{"text":"impl&lt;const N:&nbsp;usize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;u16&gt; for <a class=\"struct\" href=\"heapless/struct.String.html\" title=\"struct heapless::String\">String</a>&lt;N&gt;","synthetic":false,"types":["heapless::string::String"]},{"text":"impl&lt;const N:&nbsp;usize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;u32&gt; for <a class=\"struct\" href=\"heapless/struct.String.html\" title=\"struct heapless::String\">String</a>&lt;N&gt;","synthetic":false,"types":["heapless::string::String"]},{"text":"impl&lt;const N:&nbsp;usize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;u64&gt; for <a class=\"struct\" href=\"heapless/struct.String.html\" title=\"struct heapless::String\">String</a>&lt;N&gt;","synthetic":false,"types":["heapless::string::String"]}];
implementors["lock_api"] = [{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a>, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"lock_api/struct.Mutex.html\" title=\"struct lock_api::Mutex\">Mutex</a>&lt;R, T&gt;","synthetic":false,"types":["lock_api::mutex::Mutex"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a>, G:&nbsp;<a class=\"trait\" href=\"lock_api/trait.GetThreadId.html\" title=\"trait lock_api::GetThreadId\">GetThreadId</a>, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"lock_api/struct.ReentrantMutex.html\" title=\"struct lock_api::ReentrantMutex\">ReentrantMutex</a>&lt;R, G, T&gt;","synthetic":false,"types":["lock_api::remutex::ReentrantMutex"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawRwLock.html\" title=\"trait lock_api::RawRwLock\">RawRwLock</a>, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"lock_api/struct.RwLock.html\" title=\"struct lock_api::RwLock\">RwLock</a>&lt;R, T&gt;","synthetic":false,"types":["lock_api::rwlock::RwLock"]}];
implementors["spin"] = [{"text":"impl&lt;T, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"spin/mutex/spin/struct.SpinMutex.html\" title=\"struct spin::mutex::spin::SpinMutex\">SpinMutex</a>&lt;T, R&gt;","synthetic":false,"types":["spin::mutex::spin::SpinMutex"]},{"text":"impl&lt;T, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"spin/mutex/struct.Mutex.html\" title=\"struct spin::mutex::Mutex\">Mutex</a>&lt;T, R&gt;","synthetic":false,"types":["spin::mutex::Mutex"]},{"text":"impl&lt;T, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\">Once</a>&lt;T, R&gt;","synthetic":false,"types":["spin::once::Once"]},{"text":"impl&lt;T, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"spin/rwlock/struct.RwLock.html\" title=\"struct spin::rwlock::RwLock\">RwLock</a>&lt;T, R&gt;","synthetic":false,"types":["spin::rwlock::RwLock"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()