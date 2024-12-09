# 颁发token

`jsonwebtoken`（通常缩写为 `jwt`）是一个用于在网络应用环境间安全传输信息的 JSON 基于的开放标准（RFC 7519）。该令牌由三部分组成：头部（Header）、载荷（Payload）和签名（Signature）。JWT 可以被验证和信任，因为它们是经过数字签名的。在 Node.js 中，我们可以使用 `jsonwebtoken` 库来创建和验证 JWT。

-----

**步骤 1：安装 jsonwebtoken**

首先，你需要安装 `jsonwebtoken`：

```bash
pnpm add jsonwebtoken
```

------

**步骤 2：创建 JWT**

在用户登录成功后，使用 `jsonwebtoken` 创建一个 JWT：

```js
const jwt = require('jsonwebtoken');

const secretKey = 'your-secret-key'; // 应该是一个只有服务器知道的字符串

function generateToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' }); // 设置过期时间
}
```

------

**步骤 3：验证 JWT**

在需要验证用户身份的路由或中间件中，使用 `jsonwebtoken` 验证 JWT：

```js
const jwt = require('jsonwebtoken');

const secretKey = 'your-secret-key';

function verifyToken(token) {
  return jwt.verify(token, secretKey);
}
```

-----

**步骤 4：使用 JWT 进行身份验证**

将创建和验证 JWT 的函数集成到用户登录和需要保护的路由中：

```js
const express = require('express');
const app = express();

app.post('/login', (req, res) => {
  // 假设我们验证了用户的用户名和密码
  const user = { id: 1, username: 'example' };
  const token = generateToken(user);
  res.send({ token });
});

app.get('/protected', (req, res) => {
  const token = req.headers['authorization'];

  try {
    const decoded = verifyToken(token);
    res.send(`Hello, ${decoded.username}`);
  } catch (error) {
    res.status(401).send('Unauthorized');
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

-----

**步骤 5：错误处理**

在使用 `jsonwebtoken` 时，确保妥善处理任何可能发生的错误，例如在验证过程中：

```js
function verifyToken(token) {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    console.error('Error verifying token:', error);
    throw error;
  }
}
```

通过这些步骤，你可以在你的 Node.js 应用中安全地创建和验证 JWT，从而实现用户身份验证和授权。`jsonwebtoken` 提供了一个简单而有效的方式来处理 Web 应用中的安全通信问题。
