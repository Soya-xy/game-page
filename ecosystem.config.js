module.exports = {
  apps: [
    {
      name: 'afun', // 应用程序名称
      port: '80', // 监听端口
      args: '', // 传递给脚本的参数
      instances: 'max', // 应用实例数
      autorestart: true, // 自动重启
      watch: false, // 监控文件变动
      exec_mode: 'cluster',
      cwd: './server', // 指定运行环境目录
      script: 'index.mjs', // 主脚本
    },
  ],
}
