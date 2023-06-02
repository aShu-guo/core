// 标记DOM的整体形状
export const enum ShapeFlags {
  // 元素节点
  ELEMENT = 1,
  // 函数式组件
  FUNCTIONAL_COMPONENT = 1 << 1,
  // 状态组件，即普通组件
  STATEFUL_COMPONENT = 1 << 2,
  // 当前VNode包含文本类型的子节点
  TEXT_CHILDREN = 1 << 3,
  // 当前VNode包含数组类型的子节点
  ARRAY_CHILDREN = 1 << 4,
  SLOTS_CHILDREN = 1 << 5,
  // 被<teleport>包裹的组件
  TELEPORT = 1 << 6,
  SUSPENSE = 1 << 7,
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,
  COMPONENT_KEPT_ALIVE = 1 << 9,
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT
}
