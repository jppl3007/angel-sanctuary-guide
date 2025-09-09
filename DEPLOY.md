# Deploy no EasyPanel com Nixpacks

## Configuração Necessária no EasyPanel

### 1. Configurações do Serviço
- **Builder**: Selecione **Nixpacks**
- **Proxy Port**: **8080** (ou a porta que você definir)
- **Repository**: Conecte seu repositório Git

### 2. Variáveis de Ambiente (opcional)
Se necessário, adicione no EasyPanel:
```
NODE_ENV=production
```

### 3. Domínio
- Adicione seu domínio personalizado
- O EasyPanel configurará HTTPS automaticamente com Let's Encrypt

## Arquivos de Configuração

### nixpacks.toml
O projeto já possui a configuração otimizada:
- Node.js 18
- Instalação de devDependencies (necessário para o Vite)
- Build automático
- Servidor estático com fallback SPA

### package.json
Scripts configurados:
- `build`: Gera os arquivos estáticos
- `start`: Serve a aplicação na porta dinâmica do EasyPanel

## Processo de Deploy

1. **Push para o repositório**
2. **No EasyPanel**: Clique em "Deploy"
3. **Aguarde o build** (Nixpacks instalará dependências e fará o build)
4. **Acesse sua aplicação** no domínio configurado

## Troubleshooting

### Erro "vite: not found"
✅ **Resolvido**: `NPM_CONFIG_PRODUCTION=false` garante instalação de devDependencies

### Página branca
✅ **Resolvido**: `serve -s` fornece fallback SPA para React Router

### App não abre no domínio
- Verifique se o **Proxy Port** está configurado como **8080**
- Confirme que o domínio está apontando corretamente

## Estrutura Final
```
├── nixpacks.toml     # Configuração do Nixpacks
├── package.json      # Scripts de build e start
├── .env.example      # Template de variáveis
└── dist/             # Arquivos gerados pelo build
```

🚀 **Projeto pronto para deploy no EasyPanel!**