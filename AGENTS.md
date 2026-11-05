# miu-design Agents

Monorepo：`packages/`（shared / vue / nest）产出库代码，`docs/`（VitePress 站）是它们的对外使用文档。

## 修改 packages 必须同步 docs（强制）

改完 `packages/**` 后，按下表更新 `docs/packages/` 对应页面，**不得让文档落后于源码导出**：

| 源码变更                                          | 文档动作                                                       |
| ------------------------------------------------- | -------------------------------------------------------------- |
| 新增 / 删除 / 重命名导出（类型、函数、常量）      | 更新对应页面的说明与导出列表                                   |
| 公共 API 签名或行为变化（参数、默认值、返回结构） | 更新示例代码，示例必须可直接复制运行                           |
| 新增包或新模块目录                                | 在 `docs/.vitepress/sidebar/index.ts`、`nav/index.ts` 挂载入口 |

包与文档目录对照：

- `packages/shared/src` → `docs/packages/shared/`（index / base / response）
- `packages/vue/src` → `docs/packages/vue/`（index / themes / locales / http）
- `packages/nest/src` → `docs/packages/nest/`

## 文档写作约束

- 跨包链接用绝对路由 `/packages/...`；包首页链接带尾斜杠（如 `/packages/shared/`），否则构建期死链检查失败
- 示例中的字段名、导出名与源码逐字一致，以 tsc 结果为准，不凭记忆

## 验证

```powershell
pnpm -r --filter "./packages/*" exec tsc --noEmit   # 三包类型检查
pnpm -F @miu-design/docs build                      # 文档构建，含死链检查（链接错 = 构建失败）
```
