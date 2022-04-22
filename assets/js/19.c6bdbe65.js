(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{414:function(T,v,_){"use strict";_.r(v);var R=_(56),t=Object(R.a)({},(function(){var T=this,v=T.$createElement,_=T._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":T.$parent.slotKey}},[_("h1",{attrs:{id:"tcp的超时重传时间"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp的超时重传时间"}},[T._v("#")]),T._v(" TCP的超时重传时间")]),T._v(" "),_("p",[T._v("TCP 具有超时重传机制，隔了一段时间没有收到数据包的回复，重传这个数据包。")]),T._v(" "),_("p",[T._v("超时重传时间 RTO 在很大程度上影响 TCP 的传输效率。")]),T._v(" "),_("p",[T._v("A 发送数据报文段到 B。B确认报文段，这段时间称为往返时间 RTT。选择超时重传时间 RTO 应该略大于往返时间 RTT。")]),T._v(" "),_("p",[T._v("但是网络是复杂的，它的往返时间很可能因为网络波动，导致往返时间大于超时重传时间。")]),T._v(" "),_("p",[T._v("计算 RTO，有两种方法，一种是经典方法，一个是标准方法。")]),T._v(" "),_("h2",{attrs:{id:"经典方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#经典方法"}},[T._v("#")]),T._v(" 经典方法")]),T._v(" "),_("p",[T._v("经典方法引入一个新的概念---SRTT（平滑往返时间），每产生一次新的 RTT，就根据一定的算法对 SRTT 进行更新。 (SRTT 初始值为 0)。")]),T._v(" "),_("p",[T._v("SRTT = (a * SRTT) + ((1 - a) * RTT)")]),T._v(" "),_("p",[T._v("a 是平滑因子，建议值是 0.8， 范围是 0.8～0.9")]),T._v(" "),_("p",[T._v("拿到 SRTT，然后计算 RTO 值。")]),T._v(" "),_("p",[T._v("RTO = min(ubound, max(lbound, b * SRTT))")]),T._v(" "),_("p",[T._v("b 是加权因子，一般为 1.3～2.0， lbound 是下届，ubound 是上界。")]),T._v(" "),_("p",[T._v("这个算法在 RTT 稳定的地方表示还可以，但是在 RTT 变化较大的地方就不行了，因为平滑因子的范围是 0.8~0.9, RTT 对于 RTO 的影响太小。")]),T._v(" "),_("h2",{attrs:{id:"标准方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#标准方法"}},[T._v("#")]),T._v(" 标准方法")]),T._v(" "),_("p",[T._v("为了解决经典方法对于 RTT 变化不敏感的问题，引出了标准的方法，也叫 Jacobson / Karels 算法。")]),T._v(" "),_("p",[T._v("第一步：计算 SRTT。")]),T._v(" "),_("p",[T._v("SRTT = (1 - a) * SRTT + a * RTT")]),T._v(" "),_("p",[T._v("这儿的 a 取值为 1/8, 也就是 0.125")]),T._v(" "),_("p",[T._v("第二步：计算 RTTVAR 这个中间变量")]),T._v(" "),_("p",[T._v("RTTVAR = (1 - b) * RTTVAR + b * (|RTT - SRTT|)")]),T._v(" "),_("p",[T._v("b 的建议值为 0.25. 它记录了最新的 RTT 与 当时 SRTT 之间的差值，给后续感知到 RTT 的变化提供了抓手。")]),T._v(" "),_("p",[T._v("第三部：计算 RTO:")]),T._v(" "),_("p",[T._v("RTO = u * SRTT + q * RTTVAR")]),T._v(" "),_("p",[T._v("u的建议值取 1, q 的建议值取 4.")]),T._v(" "),_("p",[T._v("在 SRTT 的基础上加上了最新 RTT 与他的偏移，从而很好的感知 RTT 的变化。 RTO 与 RTT 变化的差值关系更加密切。")])])}),[],!1,null,null,null);v.default=t.exports}}]);