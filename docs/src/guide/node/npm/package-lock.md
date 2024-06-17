# package-lock.json

`package-lock.json` 文件是由 npm 自动生成的一个文件，它在安装包的过程中被创建。这个文件的主要目的是锁定安装时的包的版本，以确保在不同的环境中能够安装相同版本的依赖，从而使项目更加稳定和一致。



`package-lock.json` 与 npm 的缓存机制是有关联的。当 `package-lock.json` 文件存在时，npm安装依赖的过程会更快，部分原因在于 npm 可以利用本地缓存。npm会将下载的包存储在本地的缓存中，当再次安装相同版本的包时，npm可以直接从缓存中获取，而不是重新从远程仓库下载，因此加快了安装速度。



package-lock.json文件的作用：

1. 确保团队成员和部署环境中的依赖项版本一致
2. 提供一个完整的依赖树信息，包括每个包的精确版本和来源
3. 间接地加快了依赖安装的速度，因为 npm 可以利用该文件中的信息来使用本地缓存中的包，避免不必要的网络请求。





- version：安装的依赖包的具体版本号
- resolved：一个完整的URL，指定了当前包的下载地址
- integrity：一个字符串，通常是一个 `SHA-512` 校验和，用于验证包的完整性。当从缓存中获取包时，npm会使用这个校验和来确保包的数据没有被篡改。
- dev：指定了当前包是否为开发依赖包
- bin：指定了当前包中可执行文件的路径和名称
- engines：指定了当前包所依赖的Node.js版本范围

> package-lock.json 的缓存
>
> 通过 `name + version + integrity` 信息生成一个唯一的key，这个key能找到对应的 index-v5 下的缓存记录，这个目录记录了 content-v2的索引的一个位置，如果能对上就去 `content-v2` 中找到缓存的文件，找到则放到node_modules下
>
> ```sh
> # 执行 npm config list -l 命令查看npm cache的目录地址
> npm config list -l
> ```
>
> ![image-20240610182800987](/Users/dongxu/Library/Application Support/typora-user-images/image-20240610182800987.png)
>
> 

```json
{
  "name": "xiaosu",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "node_modules/@babel/parser": {
      "version": "7.24.7",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.24.7.tgz",
      "integrity": "sha512-9uUYRm6OqQrCqQdG1iCBwBPZgN8ciDBro2nIOFaiRz1/BCxaI7CNvQbDHvsArAC7Tw9Hda/B3U+6ui9u4HWXPw==",
      "dev": true,
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.4.15",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.4.15.tgz",
      "integrity": "sha512-eF2rxCRulEKXHTRiDrDy6erMYWqNw4LPdQ8UQA4huuxaQsVeRPFl2oM8oDGxMFhJUWZf9McpLtJasDDZb/Bpeg==",
      "dev": true
    },
    "node_modules/@vue/compiler-core": {
      "version": "3.4.27",
      "resolved": "https://registry.npmjs.org/@vue/compiler-core/-/compiler-core-3.4.27.tgz",
      "integrity": "sha512-E+RyqY24KnyDXsCuQrI+mlcdW3ALND6U7Gqa/+bVwbcpcR3BRRIckFoz7Qyd4TTlnugtwuI7YgjbvsLmxb+yvg==",
      "dev": true,
      "dependencies": {
        "@babel/parser": "^7.24.4",
        "@vue/shared": "3.4.27",
        "entities": "^4.5.0",
        "estree-walker": "^2.0.2",
        "source-map-js": "^1.2.0"
      }
    },
    "node_modules/@vue/compiler-dom": {
      "version": "3.4.27",
      "resolved": "https://registry.npmjs.org/@vue/compiler-dom/-/compiler-dom-3.4.27.tgz",
      "integrity": "sha512-kUTvochG/oVgE1w5ViSr3KUBh9X7CWirebA3bezTbB5ZKBQZwR2Mwj9uoSKRMFcz4gSMzzLXBPD6KpCLb9nvWw==",
      "dev": true,
      "dependencies": {
        "@vue/compiler-core": "3.4.27",
        "@vue/shared": "3.4.27"
      }
    },
    "node_modules/@vue/compiler-sfc": {
      "version": "3.4.27",
      "resolved": "https://registry.npmjs.org/@vue/compiler-sfc/-/compiler-sfc-3.4.27.tgz",
      "integrity": "sha512-nDwntUEADssW8e0rrmE0+OrONwmRlegDA1pD6QhVeXxjIytV03yDqTey9SBDiALsvAd5U4ZrEKbMyVXhX6mCGA==",
      "dev": true,
      "dependencies": {
        "@babel/parser": "^7.24.4",
        "@vue/compiler-core": "3.4.27",
        "@vue/compiler-dom": "3.4.27",
        "@vue/compiler-ssr": "3.4.27",
        "@vue/shared": "3.4.27",
        "estree-walker": "^2.0.2",
        "magic-string": "^0.30.10",
        "postcss": "^8.4.38",
        "source-map-js": "^1.2.0"
      }
    },
    "node_modules/@vue/compiler-ssr": {
      "version": "3.4.27",
      "resolved": "https://registry.npmjs.org/@vue/compiler-ssr/-/compiler-ssr-3.4.27.tgz",
      "integrity": "sha512-CVRzSJIltzMG5FcidsW0jKNQnNRYC8bT21VegyMMtHmhW3UOI7knmUehzswXLrExDLE6lQCZdrhD4ogI7c+vuw==",
      "dev": true,
      "dependencies": {
        "@vue/compiler-dom": "3.4.27",
        "@vue/shared": "3.4.27"
      }
    },
    "node_modules/@vue/reactivity": {
      "version": "3.4.27",
      "resolved": "https://registry.npmjs.org/@vue/reactivity/-/reactivity-3.4.27.tgz",
      "integrity": "sha512-kK0g4NknW6JX2yySLpsm2jlunZJl2/RJGZ0H9ddHdfBVHcNzxmQ0sS0b09ipmBoQpY8JM2KmUw+a6sO8Zo+zIA==",
      "dev": true,
      "dependencies": {
        "@vue/shared": "3.4.27"
      }
    },
    "node_modules/@vue/runtime-core": {
      "version": "3.4.27",
      "resolved": "https://registry.npmjs.org/@vue/runtime-core/-/runtime-core-3.4.27.tgz",
      "integrity": "sha512-7aYA9GEbOOdviqVvcuweTLe5Za4qBZkUY7SvET6vE8kyypxVgaT1ixHLg4urtOlrApdgcdgHoTZCUuTGap/5WA==",
      "dev": true,
      "dependencies": {
        "@vue/reactivity": "3.4.27",
        "@vue/shared": "3.4.27"
      }
    },
    "node_modules/@vue/runtime-dom": {
      "version": "3.4.27",
      "resolved": "https://registry.npmjs.org/@vue/runtime-dom/-/runtime-dom-3.4.27.tgz",
      "integrity": "sha512-ScOmP70/3NPM+TW9hvVAz6VWWtZJqkbdf7w6ySsws+EsqtHvkhxaWLecrTorFxsawelM5Ys9FnDEMt6BPBDS0Q==",
      "dev": true,
      "dependencies": {
        "@vue/runtime-core": "3.4.27",
        "@vue/shared": "3.4.27",
        "csstype": "^3.1.3"
      }
    },
    "node_modules/@vue/server-renderer": {
      "version": "3.4.27",
      "resolved": "https://registry.npmjs.org/@vue/server-renderer/-/server-renderer-3.4.27.tgz",
      "integrity": "sha512-dlAMEuvmeA3rJsOMJ2J1kXU7o7pOxgsNHVr9K8hB3ImIkSuBrIdy0vF66h8gf8Tuinf1TK3mPAz2+2sqyf3KzA==",
      "dev": true,
      "dependencies": {
        "@vue/compiler-ssr": "3.4.27",
        "@vue/shared": "3.4.27"
      },
      "peerDependencies": {
        "vue": "3.4.27"
      }
    },
    "node_modules/@vue/shared": {
      "version": "3.4.27",
      "resolved": "https://registry.npmjs.org/@vue/shared/-/shared-3.4.27.tgz",
      "integrity": "sha512-DL3NmY2OFlqmYYrzp39yi3LDkKxa5vZVwxWdQ3rG0ekuWscHraeIbnI8t+aZK7qhYqEqWKTUdijadunb9pnrgA==",
      "dev": true
    },
    "node_modules/csstype": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.1.3.tgz",
      "integrity": "sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==",
      "dev": true
    },
    "node_modules/entities": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/entities/-/entities-4.5.0.tgz",
      "integrity": "sha512-V0hjH4dGPh9Ao5p0MoRY6BVqtwCjhz6vI5LT8AJ55H+4g9/4vbHx1I54fS0XuclLhDHArPQCiMjDxjaL8fPxhw==",
      "dev": true,
      "engines": {
        "node": ">=0.12"
      },
      "funding": {
        "url": "https://github.com/fb55/entities?sponsor=1"
      }
    },
    "node_modules/estree-walker": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-2.0.2.tgz",
      "integrity": "sha512-Rfkk/Mp/DL7JVje3u18FxFujQlTNR2q6QfMSMB7AvCBx91NGj/ba3kCfza0f6dVDbw7YlRf/nDrn7pQrCCyQ/w==",
      "dev": true
    },
    "node_modules/magic-string": {
      "version": "0.30.10",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.10.tgz",
      "integrity": "sha512-iIRwTIf0QKV3UAnYK4PU8uiEc4SRh5jX0mwpIwETPpHdhVM4f53RSwS/vXvN1JhGX+Cs7B8qIq3d6AH49O5fAQ==",
      "dev": true,
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.4.15"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.7",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.7.tgz",
      "integrity": "sha512-eSRppjcPIatRIMC1U6UngP8XFcz8MQWGQdt1MTBQ7NaAmvXDfvNxbvWV3x2y6CdEUciCSsDHDQZbhYaB8QEo2g==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/picocolors": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.0.1.tgz",
      "integrity": "sha512-anP1Z8qwhkbmu7MFP5iTt+wQKXgwzf7zTyGlcdzabySa9vd0Xt392U0rVmz9poOaBj0uHJKyyo9/upk0HrEQew==",
      "dev": true
    },
    "node_modules/postcss": {
      "version": "8.4.38",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.38.tgz",
      "integrity": "sha512-Wglpdk03BSfXkHoQa3b/oulrotAkwrlLDRSOb9D0bN86FdRyE9lppSp33aHNPgBa0JKCoB+drFLZkQoRRYae5A==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "nanoid": "^3.3.7",
        "picocolors": "^1.0.0",
        "source-map-js": "^1.2.0"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.0.tgz",
      "integrity": "sha512-itJW8lvSA0TXEphiRoawsCksnlf8SyvmFzIhltqAHluXd88pkCd+cXJVHTDwdCr0IzwptSm035IHQktUu1QUMg==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/vue": {
      "version": "3.4.27",
      "resolved": "https://registry.npmjs.org/vue/-/vue-3.4.27.tgz",
      "integrity": "sha512-8s/56uK6r01r1icG/aEOHqyMVxd1bkYcSe9j8HcKtr/xTOFWvnzIVTehNW+5Yt89f+DLBe4A569pnZLS5HzAMA==",
      "dev": true,
      "dependencies": {
        "@vue/compiler-dom": "3.4.27",
        "@vue/compiler-sfc": "3.4.27",
        "@vue/runtime-dom": "3.4.27",
        "@vue/server-renderer": "3.4.27",
        "@vue/shared": "3.4.27"
      },
      "peerDependencies": {
        "typescript": "*"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    }
  }
}
```

