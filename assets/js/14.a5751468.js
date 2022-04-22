(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{413:function(t,a,e){"use strict";e.r(a);var s=e(56),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"tcp报文中时间戳的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp报文中时间戳的作用"}},[t._v("#")]),t._v(" TCP报文中时间戳的作用")]),t._v(" "),e("p",[t._v("timestamp 是 TCP 报文首部的一个可选项，一共占 10 个字节。")]),t._v(" "),e("p",[t._v("kind(1 个字节) + length(1 个字节) + info(8 个字节)")]),t._v(" "),e("p",[t._v("info 有两部分组成： timestamp 和 timestamp echo, 各占 4 个字节。")]),t._v(" "),e("p",[t._v("TCP 的时间戳主要解决的问题：")]),t._v(" "),e("ol",[e("li",[t._v("计算往返时延 RTT")]),t._v(" "),e("li",[t._v("防止序列号的回绕问题")])]),t._v(" "),e("h2",{attrs:{id:"计算往返时延-rtt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#计算往返时延-rtt"}},[t._v("#")]),t._v(" 计算往返时延 RTT")]),t._v(" "),e("p",[t._v("如果以第一次发包为开始计算，可能出现 RTT 偏大的问题。如果第一次发送的并没有理会，接着重新发送，到返回的这段时间，是会计算到第一次发送不成功的加起来。")]),t._v(" "),e("p",[t._v("如果以第二次发包为开始计算，可能出现 RTT 偏小问题。如果采用TCP快速打开，那么第二次响应的可能会和回复的要快。可能出现 RTT 偏小问题。")]),t._v(" "),e("p",[t._v("如果采用时间戳。\na 向 b 发送的时候， timestamp 中存放就是 a 主机发送时的时刻 ta1.\nb 向 a 回复的时候，timestamp 存放的就是 tb，timestamp echo 字段存放的就是 ta1.\na 收到 b 的时候，此时 a 主机的时刻 ta2，可以在 timestamp echo 选项中得到 ta1，也就是 s2 最初的发送时刻，然后采用 ta2 - ta1 就得到 RTT 的值。")]),t._v(" "),e("h2",{attrs:{id:"防止序列号的回绕问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#防止序列号的回绕问题"}},[t._v("#")]),t._v(" 防止序列号的回绕问题")]),t._v(" "),e("p",[t._v("序列号的范围在 0 ~ 2^32 -1, 当到达 2^32 - 1的时候，就会重新回到 0 。如果之前停滞在网络中的包回来了，那么可能出现区分不了谁是谁的情况，就会产生序列包回绕的问题。")]),t._v(" "),e("p",[t._v("采用 timestamp 就可以很好的解决这个问题，每次发包的时候都将发包当时的时刻记录时刻，那么即使序列号相同，但是时间戳也是不同的，就能够区分两个数据包了。")])])}),[],!1,null,null,null);a.default=v.exports}}]);