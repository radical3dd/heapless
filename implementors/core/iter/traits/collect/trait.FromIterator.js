(function() {var implementors = {};
implementors["heapless"] = [{"text":"impl&lt;K, V, S, const N:&nbsp;usize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;(K, V)&gt; for <a class=\"struct\" href=\"heapless/struct.IndexMap.html\" title=\"struct heapless::IndexMap\">IndexMap</a>&lt;K, V, S, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"hash32/trait.Hash.html\" title=\"trait hash32::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"hash32/trait.BuildHasher.html\" title=\"trait hash32::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["heapless::indexmap::IndexMap"]},{"text":"impl&lt;T, S, const N:&nbsp;usize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;T&gt; for <a class=\"struct\" href=\"heapless/struct.IndexSet.html\" title=\"struct heapless::IndexSet\">IndexSet</a>&lt;T, S, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"hash32/trait.Hash.html\" title=\"trait hash32::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"hash32/trait.BuildHasher.html\" title=\"trait hash32::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["heapless::indexset::IndexSet"]},{"text":"impl&lt;K, V, const N:&nbsp;usize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;(K, V)&gt; for <a class=\"struct\" href=\"heapless/struct.LinearMap.html\" title=\"struct heapless::LinearMap\">LinearMap</a>&lt;K, V, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,&nbsp;</span>","synthetic":false,"types":["heapless::linear_map::LinearMap"]},{"text":"impl&lt;T, const N:&nbsp;usize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;T&gt; for <a class=\"struct\" href=\"heapless/struct.Vec.html\" title=\"struct heapless::Vec\">Vec</a>&lt;T, N&gt;","synthetic":false,"types":["heapless::vec::Vec"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()