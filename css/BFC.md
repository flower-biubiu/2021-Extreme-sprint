# 谈谈对BFC的理解
BFC:block formatting context

独立渲染区域，内外元素不会互相影响。

# BFC如何触发
1、float 不为none；
2、overflow 不为visible
3、position 不为static relative
4、display: table-cell table-caption inline-block

