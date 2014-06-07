// This JavaScript file is automatically generated by js-tool.
// Do NOT read it! Do NOT edit it! Edit the source code instead.


// Clock 0.0.2 (alpha) 2008-02-04
// ------------------------------------------
// Copyright (c) 2008 Ilya Dogolazky
// Released under the GPL license, see http://www.gnu.org/copyleft/gpl.html for details
// ------------------------------------------
// ==UserScript==
// @name           Clock
// @namespace      http://www.math.uni-bonn.de/people/ilyad/gm/clock
// @description    A simple digital clock in a draggable widget remembering its position. Click it to display seconds.
// @include        *
// ==/UserScript==

// File Draggable.js
// File Debug.js
// File Utils.js
// use Debug: already included

// removes one (if any) trailing "\n" from the string
// Schould it remove cntrl-M??
Utils.chomp = function (str)
{
  if(str.length>0 && str.charAt(str.length-1)=="\n")
    return str.substr(0,str.length-1) ;
  else
    return str ;
}

Utils.get_url = function(url, cb, cb2)
{
  var obj = {} ;
  obj.method = "GET" ;
  obj.url = url ;
  obj.onload = function(xhr) { cb(xhr.responseText); } ;
  if(cb2)
    obj.onerror = function(xhr) { cb2(xhr.responseText); } ;
  GM_xmlhttpRequest(obj);
}

Utils.uniqueAttribute = function(script_name)
{
  return script_name.replace(/[^a-zA-Z]/g, "-").toLowerCase() ;
}

Utils.getValue = function(option, list)
{
  var v = GM_getValue(option) ;
  for each(var x in list)
    if(x==v)
      return v ;
  Debug.warn("Utils.getValue('", option, "'):\n Invalid value '", v,"' reset to default value '", list[0], "'") ;
  v = list[0] ;
  GM_setValue(option, v) ;
  return v ;
}

Utils.nextValue = function(value, list)
{
  for(var i=0; i<list.length; ++i)
    if(value==list[i])
      return list[i+1] ;
  return null ;
}

Utils.arguments_to_array = function(a, skip)
{
  skip = skip || 0 ;
  for(var i=skip, res=[]; i<a.length; ++i)
    res.push(a[i]) ;
  return res ;
}

Utils.print_0 =  function(str, prec)
{
  var res = "" ;
  for(var i=0; i<prec-str.length; ++i)
    res += "0" ;
  return res + str ;
}

Utils.idiv = function(a, b) // a and b are non-negative integers
{
  var mod = a % b ;
  return { mod: mod, idiv: (a-mod)/b } ;
}


function Utils()
{
}

// vim:tw=0:smartindent

// End of file Utils.js

Debug.level = function(l) // 0:nothing, 1:alerts only; 2:errors+alerts 3: alerts, errors and warnings 4:all messages
{
  Debug.current_level = l ;
}

Debug.gm = function(level, cl, msg)
{
  if(cl>level)
  {
    var message = Utils.arguments_to_array(msg).join("") ;

    // GM_log(message, 3-level) ;
    // oops! GM_log accepts only one parameter!
    // http://wiki.greasespot.net/index.php?title=GM_log&diff=1764&oldid=1762 :-(
    
    if(level==3) GM_log(message) ;
    else if(level==2) GM_log("WARNING: "+message) ;
    else if(level==1) GM_log("ERROR!\n"+message) ;
    else if(level==0)
    {
      var answer = window.confirm(message+"\n\n---------------\n\n"+"Click 'ok' to continue, 'cancel' to abort script") ;
      if(!answer)
        throw new Error("Aborted: "+message) ;
    }
    else
      window.alert("Debug.gm(): Invalid debugging level ("+level+") Message:\n"+message) ;
  }
}

Debug.level(4) ;

Debug.log = function() { Debug.gm(3, Debug.current_level, arguments) ; }
Debug.warn = function() { Debug.gm(2, Debug.current_level, arguments) ; }
Debug.error = function() { Debug.gm(1, Debug.current_level, arguments) ; }
Debug.alert  = function() { Debug.gm(0, Debug.current_level, arguments) ; }


Debug.prototype.log = function() { this.log_member(3, arguments) ; }
Debug.prototype.warn = function() { this.log_member(2, arguments) ; }
Debug.prototype.error = function() { this.log_member(1, arguments) ; }
Debug.prototype.alert  = function() { this.log_member(0, arguments) ; }

Debug.prototype.log_member = function(level, msg)
{
  Debug.gm(level, this.enabled(), msg) ;
}

Debug.prototype.enabled = function()
{
  if(this.absolute)
    return this.current_level ;
  else
    return Math.min(this.current_level, Debug.current_level) ;
}

function Debug(level)
{
  this.absolute = (level<0) ;
  if(this.absolute)
    level = -level ;
  this.current_level = level ;
}

Debug.throw = function()
{
  var msg = Utils.arguments_to_array(arguments).join("") ;
  Debug.alert("Exception thrown:\n", msg) ;
  throw new Error(msg) ;
}

// vim:tw=0:smartindent

// End of file Debug.js
// File Dom.js
// given two elements 'a' and 'b'; and a common major 'top'
// (it means a<=top and b<=top)
// find minimal common major (supremum):
// sup = min{x|a<=x, b<=x}
function sup(a,b,top)
{
  var pa=path_to_ancestor(a,top), pb=path_to_ancestor(b,top) ;
  var last_eq ;
  while(pa.length>0 && pb.length>0 && pa[0]==pb[0])
  {
    last_eq = pa[0] ;
    pa.shift() ;
    pb.shift() ;
  }
  return last_eq ;
}

function path_to_ancestor(a, top)
{
  var res = [] ;
  while(a!=top)
  {
    res.unshift(a) ;
    a = a.parentNode ;
  }
  res.unshift(top) ;
  return res ;
}

function is_descendant(that, node)
{
  for(var x=that; x; x=x.parentNode)
    if(x==node)
      return true ;
  return false ;
}

Dom.nbsp_html = function(count)
{
  if(count==null)
    count = 1 ;
  html = "" ;
  for(var i=0; i<count; ++i)
    html += "&nbsp;" ;
  return html ;
}

Dom.nbsp_node = function(count)
{
  var span = document.createElement("span") ;
  span.innerHTML = Dom.nbsp_html(count) ;
  return span ;
}

Dom.nodeInfo = function(e)
{
  if(e.nodeType==e.ELEMENT_NODE)
  {
    var name = e.nodeName ;
    if(e.attributes)
    {
      var attr = [] ;
      for(var i=0; i<e.attributes.length; ++i)
      {
        var node = e.attributes.item(i) ;
        attr.push(node.nodeName + "='" + node.nodeValue+"'") ;
      }
      attr = attr.join() ;
    }
    return "<" + name + " " + (attr || "") + ">" ;
  }
  else
    return "SOME NODE OF TYPE " + e.nodeType ;
}

function Dom()
{
}

// End of file Dom.js
// use Utils: already included
// File Hash.js
// use Debug: already included

function Hash(array)
{
  var len ;
  if(array.length==null || isNaN(len=parseInt(array.length)))
    Debug.throw("The argument of Hash() must be an array") ;
  if(len%2 != 0)
    Debug.throw("Odd length of array in Hash()") ;
  for(var i=0; i<len; i+=2)
    this[array[i]] = array[i+1] ;
}

// vim:tw=0:smartindent

// End of file Hash.js
// File Xpath.js
Xpath.list = function(xpath, root, order)
{
  if(!root)
    root = window.document ;
  var result = [] ;
  var snapshot = document.evaluate(xpath, root, null, (order ? XPathResult.ORDERED_NODE_SNAPSHOT_TYPE : XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE), null) ;
  for(var i=0; i<snapshot.snapshotLength; ++i)
    result.push(snapshot.snapshotItem(i)) ;
  return result ;
}

Xpath.node = function(xpath, root)
{
  return Xpath.list(xpath, root, false)[0] ;
}

Xpath.aNode = function (hash, root)
{
  var list = Xpath.aList(hash, root) ;
  if(list.length==0)
    return null ;
  if(list.length>1)
    GM_log("Multiply nodes found in Xpath.aNode("+hash+")") ;
  return list[0] ;
}

Xpath.aList = function(list, root, order)
{
  var xpath = Xpath.aXpath(list) ;
  return Xpath.list(xpath, root, order) ;
}

Xpath.aXpath = function (list)
{
  var s = [] ;
  while(list.length>0)
  {
    var key = list.shift() ;
    var value = list.shift() ;
    var at = "@" + key ;
    s.push((value==null || value=="*") ? at : at+"='" + value + "'") ;
  }
  return "descendant::*["+s.join(" and ")+"]" ;
}

function Xpath()
{}

// End of file Xpath.js


const NAMESPACE_DRAGGABLE = 'http://www.math.uni-bonn.de/people/ilyad/gm/draggable.js' ;
const A_MAIN = Utils.uniqueAttribute(NAMESPACE_DRAGGABLE+"-main-div") ;
const A_GMID = Utils.uniqueAttribute(NAMESPACE_DRAGGABLE+"-draggable-element-") ;


Draggable.init = function()
{
  var nodelist = Xpath.aList([A_MAIN, "yes"]) ;
  if(!nodelist.length) // XXX Okey, there is a race condition here, and I don't know how to fix it :-(
  {
    var value = 0 ;
    for each(var e in Xpath.list(".//*", document.body))
    {
      var x = window.getComputedStyle(e,"").zIndex ;
      if(x && x!="auto")
        value = Math.max(value, x) ;
    }
    value ++ ;
    Draggable.main = document.createElement("div") ;
    document.body.appendChild(Draggable.main) ;
    Debug.log(Dom.nodeInfo(document.body)) ;
    Draggable.main.setAttribute(A_MAIN, "yes") ;
    var s = Draggable.main.style ;
    s.zIndex = value ;
  }
  else
    Draggable.main = nodelist[0] ;
}

Draggable.against = { left:"right", right:"left", top:"bottom", bottom:"top"} ;

Draggable.prototype.jumpBack = function()
{
  for each(var side in Draggable.against)
    this.adjustSide(side) ;
}

Draggable.prototype.adjustSide = function(side)
{
  var s = window.getComputedStyle(this.element, '')[side] ;
  var x = s.match(/^(-?[\d.]+)px$/) ;
  if(x && parseInt(x[1]) < this.snap)
  {
    this.element.style[Draggable.against[side]] = "" ;
    this.element.style[side] = "0px" ;
  }
  // Debug.log("Adjust ", side, " from ", s, " to ",  this.element.style[side]) ;
}

Draggable.prototype.snapThreshold = function(newValue)
{
  if(newValue==null)
    return this.snap ;
  else
    this.snap = newValue ;
}

Draggable.prototype.restorePosition = function()
{
  var opt = this.gm_id && GM_getValue(this.gm_id) ;
  if(opt)
  {
    var o = new Hash(opt.split(/,/)) ;
    for(var i in o)
    {
      this.element.style[Draggable.against[i]] = "" ;
      this.element.style[i] = o[i] + "px" ;
    }
  }
  this.jumpBack() ;
}
Draggable.prototype.savePosition = function()
{
  if(!this.gm_id)
    return ;
  var x = Draggable.findAttr(this.element.style, "left", "right") ;
  var y = Draggable.findAttr(this.element.style, "top", "bottom") ;
  GM_setValue(this.gm_id, [x.name, x.value, y.name, y.value].join(",")) ;
}

Draggable.register = function(element, capture, gm_id)
{
  if(!Draggable.main)
    Draggable.init() ;
  element.draggable = new Draggable(element, capture, gm_id) ;
  element.style.zIndex = Draggable.main.style.zIndex ;
  Draggable.main.appendChild(element) ;
}

function Draggable(element, capture, gm_id)
{
  this.element = element ;
  this.capture = capture || false ;
  this.moving = false ;
  this.gm_id = gm_id ? A_GMID + gm_id : null ;
  this.restorePosition() ;
  this.snapThreshold(10) ;
  if(!this.element.style.position.match(/^(fixed|absolute)$/))
    Debug.throw("Invalid style.position of draggable element: ", Dom.nodeInfo(this.element)) ;
  this.element.addEventListener('mousedown', this, this.capture) ;
  window.addEventListener('resize', this, false) ;
  Draggable.main.addEventListener("click", this, true) ;
}

Draggable.findAttr = function(style, first, second)
{
  var m = (style[first] + "_" + style[second]).match(/^(|_)(-?\d+)px(_|)$/) ;
  if(m)
    return {name: (m[1]?second:first), value: parseInt(m[2]), sign:(m[1]?-1:+1)} ;
  return null ;
}

Draggable.prototype.mousedownHandler = function(event)
{
  if(event.shiftKey || event.button!=0)
    return ;
  if(this.capture)
  {
    event.preventDefault() ;
    event.stopPropagation() ;
  }
  if(this.moving) // oops! second "mouse down" Probably lost focus. Kill this event!
  {
    event.stopPropagation() ;
    event.preventDefault() ;
    return ;
  }
  this.moving = true ;
  this.x = Draggable.findAttr(this.element.style, "left", "right") ;
  this.y = Draggable.findAttr(this.element.style, "top", "bottom") ;
  if(!this.x || !this.y || !this.element.style.position.match(/^(fixed|absolute)$/))
    Debug.throw("Element can't be dragged: ", Dom.nodeInfo(this.element)) ;
  this.x.value_init = this.x.value ;
  this.y.value_init = this.y.value ;
  this.saved_cursor = this.element.style.cursor ;
  document.addEventListener("mousemove", this, true) ;
  document.addEventListener("mouseover", this, true) ; // Just to prevent propagation
  document.addEventListener("mouseup", this, this.capture) ;
  document.addEventListener("DOMFocusOut", this, false) ;
  this.x.mouse_init = event.clientX ;
  this.y.mouse_init = event.clientY ;
  this.start_time = Date.now() ;
  this.moved = false ;
  this.popup() ;
}
Draggable.prototype.clickHandler = function(event)
{
  if(!is_descendant(event.target, this.element))
    return ;
  if(this.moved)
  {
    event.stopPropagation() ;
    event.preventDefault() ;
  }
}

Draggable.prototype.mouseoverHandler = function(event)
{
  event.stopPropagation() ;
}

Draggable.prototype.resizeHandler = function(event)
{
  if(!this.moving)
    this.jumpBack() ;
}

Draggable.prototype.mousemoveHandler = function(event)
{
  this.moveTo(event.clientX, event.clientY) ;
  event.stopPropagation() ;
  if(this.x.mouse_init!=event.clientX || this.y.mouse_init!=event.clientY)
  {
    this.moved = true ;
    this.element.style.cursor = "move" ;
  }
}

Draggable.prototype.moveTo = function(clientX, clientY)
{
  this.element.style[this.x.name] = this.x.value_init + this.x.sign*(clientX-this.x.mouse_init) + "px" ;
  this.element.style[this.y.name] = this.y.value_init + this.y.sign*(clientY-this.y.mouse_init) + "px" ;
}

Draggable.SLOW_CLICK = 200 ;
Draggable.SMALL_MOVE = 10 ;

Draggable.prototype.mouseupHandler = function(event)
{
  this.duration = Date.now() - this.start_time ;
  // Debug.alert(this.duration);
  this.moving = false ;
  document.removeEventListener("mousemove", this, true) ;
  document.removeEventListener("mouseover", this, true) ;
  document.removeEventListener("mouseup", this, this.capture) ;
  this.element.style.cursor = this.saved_cursor ;
  this.moveTo(event.clientX, event.clientY) ;
  var dist = Math.abs(event.clientX-this.x.mouse_init)+Math.abs(event.clientY-this.y.mouse_init) ;
  var small_move =  dist < Draggable.SMALL_MOVE ;
  var slow_click = this.duration > Draggable.SLOW_CLICK ;
  Debug.log("duration=",this.duration, " slow_click=",slow_click, " dist=", dist, " small_move=",small_move) ;
  // small move is not a move: it's a click
  if(small_move && !slow_click)
  {
    this.moved = false ;
    this.moveTo(this.x.mouse_init, this.y.mouse_init) ;
  }
  // slow click is not a click: it's a small move
  if(slow_click)
  {
    this.moved = true ;
  }
  if(this.capture || this.moved)
  {
    event.stopPropagation() ;
  }
  event.preventDefault() ;
  if(this.element.style.position=="fixed")
  {
    if(this.moved)
    {
      this.jumpBack() ;
      this.savePosition() ;
    }
  }
}

Draggable.prototype.handleEvent= function(event)
{
  var method = this[event.type+"Handler"] ;
  if(method)
    method.call(this, event) ;
  else if(event.type=="DOMFocusOut")
  {
    Debug.log("DOMFocusOut") ;
    this.mouseupHandler(event) ;
  }
  else
    Debug.throw("No handler for event '", event.type, "' defined") ;
}

Draggable.prototype.popup = function()
{
  this.element.parentNode.appendChild(this.element) ;
}

Draggable.main = null ;

function eventphase(event)
{
  switch(event.eventPhase)
  {
    case event.CAPTURING_PHASE: return "CAPTURING_PHASE" ;
    case event.AT_TARGET:       return "AT_TARGET" ;
    case event.BUBBLING_PHASE:  return "BUBBLING_PHASE" ;
    default: return "UNKNOWN ("+event.eventPhase+")";
  }
}

// vim:tw=0:smartindent

// End of file Draggable.js
// use Xpath: already included
// File Image.js
// File Vector.js
function Vector(object, first, second)
{
  if(object instanceof Array)
  {
    this.values = [object[0], object[1]] ;
    this.names = [first || "_x", second || "_y"] ;
  }
  else
  {
    this.names = [first, second] ;
    this.values = [] ;
    for(var i=0; i<2; ++i)
    {
      var x = this.names[i];
      if(object[x]!=null)
        var re = object[x].match("(?:^| )(-?\\d+)(?:px)?(?: |$)") ;
      else
        var re = object.toString().match("(?:^| )"+x+": (-?\\d+)px;(?: |$)") ;
      if(!re)
        return null ;
      var v = parseInt(re[1]) ;
      if(isNaN(v))
        return null ;
      this.values.push(v) ;
    }
  }
  // Debug.log("Vector constructed from object ", object, "\n", this.names.toString(), "\n", this.values.toString())
  // Debug.log("Vector constructed from object ", object, "\n", this.toString())
}

Vector.prototype.x = function()
{
  return this.values[0] ;
}
Vector.prototype.y = function()
{
  return this.values[1] ;
}

Vector.prototype.plus = function(w)
{
  return new Vector([this.x()+w.x(), this.y()+w.y()]) ;
}

Vector.prototype.minus = function(w)
{
  return new Vector([this.x()-w.x(), this.y()-w.y()]) ;
}

Vector.prototype.toString = function()
{
  return "(" + this.names[0] + ": " + this.values[0] + ", " +
               this.names[1] + ": " + this.values[1] +
         ")" ;
}
Vector.prototype.moveto = function(element)
{
  element.style.left = this.x() + "px" ;
  element.style.top = this.y() + "px" ;
}

// vim:tw=0:smartindent

// End of file Vector.js
// use Debug: already included

function Image(data, hotspot)
{
  this.data = data ;
  this.hotspotVector = hotspot ;
  if(data.substr(0,12)=="%89%50%4e%47")
    this.type = "png" ;
  else
  {
    Debug.error("Unknown image type (only png images supported)") ;
    return null ;
  }
}

Image.prototype.hotspot = function()
{
  return this.hotspotVector ;
}

Image.prototype.src = function()
{
  return "data:image/"+this.type+"," + this.data ;
}

// End of file Image.js
// use Utils: already included

const dot_png ="%89%50%4e%47%0d%0a%1a%0a%00%00%00%0d%49%48%44%52%00%00%00%01%00%00%00%01%08%03%00%00%00%28%cb%34%bb%00%00%03%00%50%4c%54%45%ff%84%00%ff%8c%08%ff%8c%10%ff%94%18%ff%9c%21%ff%9c%29%ff%a5%31%ff%ad%42%ff%ad%4a%ff%b5%52%ff%b5%5a%ff%bd%63%ff%c6%6b%ff%c6%7b%ff%ce%84%ff%d6%8c%ff%d6%94%ff%de%9c%ff%e7%a5%ff%e7%ad%ff%ef%bd%ff%f7%c6%ff%f7%ce%ff%ff%de%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%cd%ec%9b%a4%00%00%00%18%74%52%4e%53%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%ff%00%cd%13%2e%ea%00%00%00%01%62%4b%47%44%ff%a5%07%f2%c5%00%00%00%09%70%48%59%73%00%00%00%48%00%00%00%48%00%46%c9%6b%3e%00%00%00%0a%49%44%41%54%08%d7%63%10%07%00%00%19%00%18%67%54%b8%f1%00%00%00%00%49%45%4e%44%ae%42%60%82";
const transparent = new Image(dot_png) ;

Debug.level(0) ;

const O_SEC = 'show-seconds' ;
const V_SEC_YES = 'yes' ;
const V_SEC_NO = 'no' ;
const V_SEC_COLON = 'colon' ;

function Main()
{
  Main.clock = new Clock() ;
}

function Clock()
{
  this.widget = document.createElement('div') ;
  this.widget.style.background = 'black' ;
  this.widget.style.border = 'solid 2px #CCC' ;
  this.widget.style.paddingLeft = '0.3em'
  this.widget.style.paddingRight = '0.3em'
  this.widget.style.color = 'white' ;
  this.widget.style.position= 'fixed' ;
  this.widget.style.left = '0px' ;
  this.widget.style.bottom = '0px' ;
  this.widget.style.width = 'auto' ;
  this.widget.style.height = 'auto' ;
  this.widget.innerHTML = '<tt><b></b></tt>'
  this.text_node = Xpath.node("./tt/b", this.widget) ;
  this.widget.firstChild.style.margin='0px 0px' ; // userscripts.org :-)
  Draggable.register(this.widget, true, 'default') ;
  var that = this ;
  this.sec = Utils.getValue(O_SEC, [V_SEC_NO, V_SEC_YES, V_SEC_COLON]) ;
  this.glass = document.createElement("img") ;
  this.glass.style.position = "absolute" ;
  this.glass.style.left = this.glass.style.right = this.glass.style.top = this.glass.style.bottom = "0px" ;
  this.glass.src = transparent.src() ;
  this.widget.appendChild(this.glass) ;
  // this.glass.addEventListener("click", function(event){event.preventDefault();}, false) ;
  this.widget.addEventListener("click", this, false) ;
  this.setInterval() ;
  this.update() ;
  var s = window.getComputedStyle(this.widget, '') ;
  Debug.log(s) ;
  for(var i in s)
    Debug.log(i, ' ', s[i]) ;
}

Clock.prototype.handleEvent = function(event)
{
  if(event.type=='click')
  {
    this.sec = Utils.nextValue(this.sec,[V_SEC_NO, V_SEC_YES, V_SEC_COLON, V_SEC_NO]) ;
    GM_setValue(O_SEC, this.sec) ;
    this.setInterval() ;
    this.update() ;
  }
}

Clock.prototype.update = function()
{
  var d = new Date() ;
  var h = d.getHours()%12 ;
  if(h==0)
    h=12 ;
  var txt = h + '' ;
  var colon = this.sec!=V_SEC_COLON || d.getMilliseconds()<500 ;
  txt += (colon ? ":" : " " ) ;
  txt += Utils.print_0(d.getMinutes().toString(), 2) ;
  if(this.sec==V_SEC_YES)
    txt += ":" + Utils.print_0(d.getSeconds().toString(), 2) ;
  if(txt != this.text)
    this.text_node.innerHTML = this.text = txt ;
}

Clock.prototype.setInterval = function()
{
  var value = (this.sec==V_SEC_NO) ? 1000 : 100 ;
  if(this.int_id)
    window.clearInterval(int_id) ;
  var that = this ;
  int_id = window.setInterval(function(){that.update();}, value) ;
}

if(window.parent==self)
  Main() ;

// vim:tw=0:smartindent